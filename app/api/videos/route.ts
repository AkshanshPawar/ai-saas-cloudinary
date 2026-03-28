import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(videos);
  } catch {
    return NextResponse.json(
      { error: "Error fetching videos" },
      { status: 500 },
    );
  }
}
