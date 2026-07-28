import { NextResponse } from "next/server";
import { createServiceClient, isSupabaseServiceConfigured } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseServiceConfigured()) {
    return NextResponse.json([]);
  }

  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("digests")
    .select("id, title, slug, week_start, week_end, published_at")
    .not("published_at", "is", null)
    .order("week_end", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
