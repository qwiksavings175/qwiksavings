import { authOptions } from "@/lib/AuthOptions";
import db from "@/lib/prisma";
import { uploadToS3 } from "@/lib/utilities/AwsConfig";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// API handler for creating a category
export async function POST(req: Request) {
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
  const logo: File | null = (formData.get("logo") as File) ?? null;
  const request = (await formData.get("data")) as string;
  const body = await JSON.parse(request);
  // extracting the name out of body
  const { name, slug, description, addToTodaysTopCategories } = body;
  try {
    let logoUrl;

    // if there is a logo in the form data
    if (logo) {
      // converting the image to a buffer
      const buffer = await logo.arrayBuffer();
      // converting buffer to bytes string for uploading to s3
      const bytes = Buffer.from(buffer);
      // passing buffer to s3 to get image-url for storing in database
      logoUrl = await uploadToS3(bytes, "category_images");
      if (!logoUrl) {
        return NextResponse.json(
          {
            success: false,
            error: "Error uploading image",
          },
          { status: 500 },
        );
      }
    }

    // creating the categroy
    const category = await db.category.create({
      data: {
        name: name.trim(),
        slug: slug.trim(),
        description: description ? description : null,
        logo_url: logoUrl,
        addToTodaysTopCategories:
          addToTodaysTopCategories === "yes" ? true : false,
      },
    });

    // returning  response on success
    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully",
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
            error: `Category with the name ${name} already exists`,
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
