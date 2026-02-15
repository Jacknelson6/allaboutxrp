-- Run this in Supabase SQL Editor (https://tiqxqtjroakkvddgyvmy.supabase.co)
-- Dashboard > SQL Editor > New Query > Paste & Run

CREATE TABLE IF NOT EXISTS public.tweets (
  id text PRIMARY KEY,
  author_username text NOT NULL,
  author_name text NOT NULL,
  author_avatar text,
  text text NOT NULL,
  created_at timestamptz NOT NULL,
  likes integer DEFAULT 0,
  retweets integer DEFAULT 0,
  replies integer DEFAULT 0,
  url text,
  fetched_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tweets_created_at ON public.tweets (created_at DESC);

ALTER TABLE public.tweets ENABLE ROW LEVEL SECURITY;

-- Allow public reads (the feed is public)
CREATE POLICY tweets_read_all ON public.tweets FOR SELECT USING (true);

-- Allow service role full access (for the cron upsert)
CREATE POLICY tweets_service_write ON public.tweets FOR ALL USING (true) WITH CHECK (true);
