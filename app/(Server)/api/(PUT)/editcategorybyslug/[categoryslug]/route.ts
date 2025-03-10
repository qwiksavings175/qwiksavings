import { authOptions } from "@/lib/AuthOptions";
import db from "@/lib/prisma";
import { deleteFromS3, uploadToS3 } from "@/lib/utilities/AwsConfig";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  context: { params: { categoryslug: string } },
) {
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
  const { categoryslug } = context.params;
  const formData = await req.formData();
  const logo = (formData.get("logo") as File) ?? null;
  const request = (await formData.get("data")) as string;
  const body = await JSON.parse(request);

  const { name, slug, description, addToTodaysTopCategories, keyToDelete } =
    body;

  let { logo_url } = body;

  try {
    // Delete existing image from S3 if keyToDelete is provided and no new logo
    if (!(logo && logo_url) && keyToDelete) {
      await deleteFromS3(keyToDelete);
      logo_url = null;
    }

    let logoUrl;
    if (logo) {
      const buffer = await logo.arrayBuffer();
      const bytes = Buffer.from(buffer);

      const uploadOperations = [
        uploadToS3(bytes, "category_images"),
        ...(keyToDelete ? [deleteFromS3(keyToDelete)] : []),
      ];

      // Perform upload and optional delete operations
      [logoUrl] = await Promise.all(uploadOperations);

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

    const updatedCategory = await db.category.update({
      where: {
        slug: categoryslug,
      },
      data: {
        name: name.trim(),
        slug: slug.trim(),
        description: description ? description : null,
        logo_url: logoUrl || logo_url,
        addToTodaysTopCategories:
          addToTodaysTopCategories === "yes" ? true : false,
      },
    });

    return NextResponse.json(
      { success: true, updatedCategory },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: `Category with the name ${name} already exists`,
        },
        { status: 400 },
      );
    }

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
