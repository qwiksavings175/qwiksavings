import { NextResponse } from "next/server";

import { uploadToS3 } from "@/lib/utilities/AwsConfig";
import db from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MAX_FEATURED_STORE_LIMITS } from "@/lib/Constants";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";

// API handler to create store
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
  const logo = (formData.get("logo") as File) ?? null;
  const request = (await formData.get("data")) as string;
  const body = await JSON.parse(request);
  // extracting required properties
  const {
    name,
    slug,
    title,
    ref_link,
    isFeatured,
    description,
    moreAbout,
    best_offer,
    average_discount,
    hint,
    hintHeading,
    faq,
    addToPopularStores,
    similarStores,
  } = body;

  try {
    let logoUrl;

    // check max isFeatured limit is reached or not
    if (isFeatured === "yes") {
      const featuredStores = await db.store.findMany({
        where: {
          isFeatured: true,
        },
      });

      if (featuredStores.length >= MAX_FEATURED_STORE_LIMITS) {
        return NextResponse.json(
          {
            success: false,
            error: "Maximum limit of Featured stores reached",
          },
          { status: 400 },
        );
      }
    }

    // if there is a logo in the form data
    if (logo) {
      // converting the image to a buffer
      const buffer = await logo.arrayBuffer();
      // converting buffer to bytes string for uploading to s3
      const bytes = Buffer.from(buffer);
      // passing buffer to s3 to get image-url for storing in database
      logoUrl = (await uploadToS3(bytes, "store_images")) as unknown as string;
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

    // creating a new store
    const store = await db.store.create({
      data: {
        name: name.trim().replace(/\s+/g, " "),
        slug: slug.trim(),
        title,
        logo_url: logoUrl,
        ref_link,
        isFeatured: isFeatured === "yes" ? true : false,
        addToPopularStores: addToPopularStores === "yes" ? true : false,
        description: description ? description : null,
        moreAbout: moreAbout ? moreAbout : null,
        hint: hint ? hint : null,
        hintHeading: hintHeading ? hintHeading : null,
        faq: JSON.stringify(faq),
        best_offer: best_offer,
        average_discount: average_discount,
        similarStores: {
          connect: similarStores.map((store: string) => ({
            storeId: Number(store),
          })),
        },
      },
    });

    // returning response on success
    return NextResponse.json(
      { success: true, message: "Store Created successfully" },
      { status: 201 },
    );
  } catch (error) {
    // unique constraint failed
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: `Store with the name ${name} already exists`,
        },
        { status: 400 },
      );
    }

    // general error response
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
