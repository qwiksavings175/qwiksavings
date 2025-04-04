import { authOptions } from "@/lib/AuthOptions";
import db from "@/lib/prisma";
import { deleteFromS3, uploadToS3 } from "@/lib/utilities/AwsConfig";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// API handler for creating a blog
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user && session?.user.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while fetching user details.",
      },
      { status: 500 },
    );
  }
  const formData = await req.formData();
  const searchParams = new URL(req.url).searchParams;
  const blogId = searchParams.get("blogId");
  const thumbnail: File | null = (formData.get("thumbnail") as File) ?? null;
  const request = (await formData.get("data")) as string;
  const body = await JSON.parse(request);

  // extracting the fields out of body
  const { title, content, keyToDelete, category_id, metaTitle, metaDescription } = body;
  let { thumbnail_url } = body;
  if (!category_id)
    return NextResponse.json(
      {
        success: false,
        error: "Category Linking is Mandatory",
      },
      { status: 400 },
    );

  try {
    let thumbnailUrl;
    if (!(thumbnail && thumbnail_url) && keyToDelete) {
      await deleteFromS3(keyToDelete);
      thumbnailUrl = null;
    }
    // if there is a thumbnail in the form data
    if (thumbnail) {
      // converting the image to a buffer
      const buffer = await thumbnail.arrayBuffer();
      // converting buffer to bytes string for uploading to s3
      const bytes = Buffer.from(buffer);
      // passing buffer to s3 to get image-url for storing in database
      const uploadOperations = [
        uploadToS3(bytes, "blog_images"),
        ...(keyToDelete ? [deleteFromS3(keyToDelete)] : []),
      ];
      [thumbnailUrl] = await Promise.all(uploadOperations);
      if (!thumbnailUrl) {
        return NextResponse.json(
          {
            success: false,
            error: "Error uploading thumbnail",
          },
          { status: 500 },
        );
      }
    }

    // creating the blog
    const blog = await db.blog.update({
      where: {
        blogId: Number(blogId),
      },
      data: {
        title,
        content,
        thumbnail_url: thumbnailUrl || thumbnail_url,
        metaTitle: metaTitle ? metaTitle : null,
        metaDescription: metaDescription ? metaDescription : null,
        category_id: Number(category_id),
      },
    });

    // returning response on success
    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    // if Unique constraint failed
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            success: false,
            error: `Blog with the title "${title}" already exists`,
          },
          { status: 400 },
        );
      }
    }

    // error response
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
