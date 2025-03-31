import db from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const categoryName = searchParams.get("categoryName");

    // If categoryName is provided, fetch that specific category
    if (categoryName) {
      const decodedCategoryName = decodeURIComponent(categoryName);
      const category = await db.category.findUnique({
        where: { name: decodedCategoryName },
        select: {
          categoryId: true,
          name: true,
          coupons: {
            select: {
              store: {
                select: { slug: true, logo_url: true },
              },
              ref_link: true,
              couponId: true,
              thumbnail_url: true,
              coupon_code: true,
              title: true,
              isVerified: true,
              user_count: true,
              type: true,
            },
            orderBy: { createdAt: "desc" },
            take: 8, // Always return top 8 coupons
          },
        },
      });

      if (!category) {
        return NextResponse.json(
          { success: false, error: "Category not found" },
          { status: 404 },
        );
      }

      return NextResponse.json(
        {
          success: true,
          categoryId: category.categoryId,
          name: category.name,
          coupons: category.coupons,
        },
        { status: 200 },
      );
    }

    // Fetch all categories with their top 8 coupons
    const categories = await db.category.findMany({
      select: {
        categoryId: true,
        name: true,
        coupons: {
          select: {
            store: {
              select: { slug: true, logo_url: true },
            },
            ref_link: true,
            couponId: true,
            thumbnail_url: true,
            coupon_code: true,
            title: true,
            isVerified: true,
            user_count: true,
            type: true,
          },
          orderBy: { createdAt: "desc" },
          take: 8, // Always return top 8 coupons
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(
      { success: true, categories },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
