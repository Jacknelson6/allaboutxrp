#!/usr/bin/env node
// Import data into Supabase
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required to import data.'
  );
}

async function post(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${table}: ${res.status} ${err}`);
  }
  console.log(`✅ ${table}: ${Array.isArray(data) ? data.length : 1} rows`);
}

async function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');

  // Timeline events
  const timeline = JSON.parse(fs.readFileSync(path.join(dataDir, 'timeline.json'), 'utf8'));
  await post('timeline_events', timeline);

  // XRP accounts + categories
  const accountsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'xrp-accounts.json'), 'utf8'));
  
  // Categories
  const categories = Object.entries(accountsData.categories).map(([id, cat]) => ({
    id, label: cat.label, description: cat.description, icon: cat.icon, color: cat.color
  }));
  await post('account_categories', categories);

  // Accounts
  const accounts = accountsData.accounts.map(a => ({
    handle: a.handle,
    display_name: a.displayName,
    platform: a.platform || 'twitter',
    url: a.url,
    avatar_url: a.avatarUrl,
    category: a.category,
    tags: a.tags || [],
    why_follow: a.whyFollow,
    verified: a.verified || false,
    priority: a.priority || 2
  }));
  await post('xrp_accounts', accounts);

  // FAQ
  const faq = JSON.parse(fs.readFileSync(path.join(dataDir, 'faq.json'), 'utf8'));
  const faqRows = faq.map((f, i) => ({
    question: f.question, answer: f.answer, page: f.page || 'home', sort_order: i
  }));
  await post('faq_entries', faqRows);

  // Content pages
  const contentDir = path.join(dataDir, 'content');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const pages = files.map(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const slug = file.replace('.md', '');
    
    // Extract title and description from frontmatter or first heading
    let title = slug;
    let metaDesc = null;
    let body = content;
    
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (fmMatch) {
      const fm = fmMatch[1];
      body = fmMatch[2].trim();
      const titleMatch = fm.match(/title:\s*(.+)/);
      const descMatch = fm.match(/description:\s*(.+)/);
      if (titleMatch) title = titleMatch[1].trim();
      if (descMatch) metaDesc = descMatch[1].trim();
    } else {
      const headingMatch = content.match(/^#\s+(.+)/m);
      if (headingMatch) title = headingMatch[1].trim();
    }
    
    return { slug, title, content: body || content, meta_description: metaDesc };
  });
  await post('content_pages', pages);

  console.log('\n🎉 All data imported!');
}

main().catch(e => { console.error(e); process.exit(1); });
