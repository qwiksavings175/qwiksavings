// Api handler to get categories with details

import db from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page: number = Number(searchParams.get("page")) || 1;
  const likeQuery: string | undefined = searchParams.get("like") ?? undefined;
  const limit = 20;

  try {
    const categories = await db.category.findMany({
      where: {
        name: {
          startsWith: likeQuery ? likeQuery.trim() : "",
          mode: "insensitive",
        },
      },
      select: {
        categoryId: true,
        name: true,
        slug: true,
        logo_url: true,
        coupons: {
          select: {
            type: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
      take: limit,
      skip: (page - 1) * limit,
    });
    const totalCount = await db.category.count();
    return NextResponse.json(
      { success: true, categories, totalCount },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);

    if (err instanceof PrismaClientKnownRequestError) {
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
