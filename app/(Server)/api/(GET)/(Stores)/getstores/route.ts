import db from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// API handler to get stores
export async function GET() {
  try {
    // fetching all stores
    const stores = await db.store.findMany({
      select: {
        storeId: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    // returning response on success
    return NextResponse.json({ success: true, stores }, { status: 200 });
  } catch (error) {
    // general error response
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
