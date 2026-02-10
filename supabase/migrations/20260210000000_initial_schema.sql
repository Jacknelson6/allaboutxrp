-- AllAboutXRP Initial Schema
-- Created: 2026-02-10

-- Timeline Events
CREATE TABLE timeline_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date text NOT NULL,
  year integer NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('company','technology','regulation','partnership','market')),
  significance text NOT NULL CHECK (significance IN ('high','medium','low')),
  created_at timestamptz DEFAULT now()
);

-- XRP Accounts
CREATE TABLE xrp_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  handle text NOT NULL UNIQUE,
  display_name text NOT NULL,
  platform text DEFAULT 'twitter',
  url text NOT NULL,
  avatar_url text,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  why_follow text,
  verified boolean DEFAULT false,
  priority integer DEFAULT 2,
  created_at timestamptz DEFAULT now()
);

-- Account Categories
CREATE TABLE account_categories (
  id text PRIMARY KEY,
  label text NOT NULL,
  description text,
  icon text,
  color text
);

-- FAQ Entries
CREATE TABLE faq_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  page text DEFAULT 'home',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Content Pages
CREATE TABLE content_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  content text NOT NULL,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Price Cache
CREATE TABLE price_cache (
  id text PRIMARY KEY DEFAULT 'current',
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Richlist Cache
CREATE TABLE richlist_cache (
  id text PRIMARY KEY DEFAULT 'latest',
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE xrp_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE richlist_cache ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read" ON timeline_events FOR SELECT USING (true);
CREATE POLICY "Public read" ON xrp_accounts FOR SELECT USING (true);
CREATE POLICY "Public read" ON account_categories FOR SELECT USING (true);
CREATE POLICY "Public read" ON faq_entries FOR SELECT USING (true);
CREATE POLICY "Public read" ON content_pages FOR SELECT USING (true);
CREATE POLICY "Public read" ON price_cache FOR SELECT USING (true);
CREATE POLICY "Public read" ON richlist_cache FOR SELECT USING (true);

-- Service role write for cache tables
CREATE POLICY "Service write" ON price_cache FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service write" ON richlist_cache FOR ALL USING (true) WITH CHECK (true);
