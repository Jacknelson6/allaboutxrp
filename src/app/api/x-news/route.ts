import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120",
};

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createServiceClient();
    const { data: news, error } = await supabase
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(30);

    if (error) {
      console.error("Supabase news query error:", error);
      return NextResponse.json(
        { news: [], error: error.message },
        { status: 200, headers: CACHE_HEADERS }
      );
    }

    return NextResponse.json(
      { news: news || [], lastUpdated: new Date().toISOString() },
      { status: 200, headers: CACHE_HEADERS }
    );
  } catch (err) {
    console.error("News feed error:", err);
    return NextResponse.json(
      { news: [], error: "Internal error" },
      { status: 200, headers: CACHE_HEADERS }
    );
  }
}
