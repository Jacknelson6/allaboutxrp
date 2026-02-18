import { NextRequest, NextResponse } from "next/server";
import { generateBlogForArticle } from "@/lib/generate-blog-content";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing article id" }, { status: 400 });

  const result = await generateBlogForArticle(id);

  if (result.success) {
    return NextResponse.json({ success: true, id });
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
