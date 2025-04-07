// app/api/coupon-reaction/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/prisma";

export async function PUT(req: Request) {
  const { couponId, reactionKey, increment, isChangingReaction, oppositeReactionKey } = await req.json();

  if (!couponId || !reactionKey || typeof increment !== "number") {
    return NextResponse.json(
      { success: false, error: "Invalid input" },
      { status: 400 },
    );
  }

  try {
    const updateData: Record<string, any> = {
      [reactionKey]: { increment: increment },
    };

    if (isChangingReaction && oppositeReactionKey) {
      updateData[oppositeReactionKey] = { increment: -1 };
    }

    const updatedCoupon = await db.coupon.update({
      where: { couponId: couponId },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      like_count: updatedCoupon.like_count,
      dislike_count: updatedCoupon.dislike_count,
    });
  } catch (error) {
    console.error("Error handling coupon reaction:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
