-- Daily Digests table for automated daily news summaries
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/qnvplzufnybvfdltamcw/sql

CREATE TABLE IF NOT EXISTS daily_digests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL UNIQUE,
  title text NOT NULL,
  summary text NOT NULL,
  xrp_open numeric,
  xrp_close numeric,
  xrp_change_pct numeric,
  article_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE daily_digests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read daily_digests" ON daily_digests
  FOR SELECT USING (true);

-- Service role can insert/update
CREATE POLICY "Service insert daily_digests" ON daily_digests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service update daily_digests" ON daily_digests
  FOR UPDATE USING (true);
