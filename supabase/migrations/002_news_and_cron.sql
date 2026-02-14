-- ============================================================
-- RUN THIS IN SUPABASE SQL EDITOR
-- https://tiqxqtjroakkvddgyvmy.supabase.co > SQL Editor > New Query
-- ============================================================

-- 1. Create news table
CREATE TABLE IF NOT EXISTS public.news (
  id text PRIMARY KEY,
  title text NOT NULL,
  url text NOT NULL,
  source text,
  published_at timestamptz,
  domain text,
  votes jsonb DEFAULT '{}'::jsonb,
  fetched_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_news_published_at ON public.news (published_at DESC);

ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

CREATE POLICY news_read_all ON public.news FOR SELECT USING (true);
CREATE POLICY news_service_write ON public.news FOR ALL USING (true) WITH CHECK (true);

-- 2. Add media_url column to tweets if missing (it was added after initial migration)
ALTER TABLE public.tweets ADD COLUMN IF NOT EXISTS media_url text;

-- 3. Enable extensions for scheduling
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
-- pg_cron is enabled via Supabase Dashboard > Database > Extensions > pg_cron (toggle ON)
-- If pg_cron is already enabled, the following will work:

-- 4. Schedule fetch-tweets every 4 hours
SELECT cron.schedule(
  'fetch-tweets',
  '0 */4 * * *',
  $$
  SELECT net.http_post(
    url := 'https://tiqxqtjroakkvddgyvmy.supabase.co/functions/v1/fetch-tweets',
    headers := '{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcXhxdGpyb2Fra3ZkZGd5dm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3Njc4MzgsImV4cCI6MjA4NTM0MzgzOH0.xz-x7B-pqCnSXyE1djSwNScwHTyjwaCgJ-V-3vYc1Qg"}'::jsonb
  );
  $$
);

-- 5. Schedule fetch-news every 2 hours
SELECT cron.schedule(
  'fetch-news',
  '0 */2 * * *',
  $$
  SELECT net.http_post(
    url := 'https://tiqxqtjroakkvddgyvmy.supabase.co/functions/v1/fetch-news',
    headers := '{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcXhxdGpyb2Fra3ZkZGd5dm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3Njc4MzgsImV4cCI6MjA4NTM0MzgzOH0.xz-x7B-pqCnSXyE1djSwNScwHTyjwaCgJ-V-3vYc1Qg"}'::jsonb
  );
  $$
);
