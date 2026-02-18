ALTER TABLE news ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE news ADD COLUMN IF NOT EXISTS blog_content text;
ALTER TABLE news ADD COLUMN IF NOT EXISTS related_article_id text;
ALTER TABLE news ADD COLUMN IF NOT EXISTS related_article_context text;
CREATE UNIQUE INDEX IF NOT EXISTS news_slug_unique ON news(slug) WHERE slug IS NOT NULL;
