import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NewsRecap {
  date: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  slug: string;
}

const NEWS_DIR = path.join(process.cwd(), "src/data/news");

export function getAllRecaps(): NewsRecap[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));
  const recaps = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const date = file.replace(".md", "");
      return {
        date,
        title: (data.title as string) || `XRP Daily Recap — ${date}`,
        description: (data.description as string) || "",
        excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*\n]/g, " ").trim(),
        content,
        slug: date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
  return recaps;
}

export function getRecapByDate(date: string): NewsRecap | null {
  const filePath = path.join(NEWS_DIR, `${date}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    date,
    title: (data.title as string) || `XRP Daily Recap — ${date}`,
    description: (data.description as string) || "",
    excerpt: (data.excerpt as string) || content.slice(0, 200).replace(/[#*\n]/g, " ").trim(),
    content,
    slug: date,
  };
}

export function getAdjacentRecaps(date: string): { prev: string | null; next: string | null } {
  const all = getAllRecaps();
  const idx = all.findIndex((r) => r.date === date);
  return {
    prev: idx < all.length - 1 ? all[idx + 1].date : null,
    next: idx > 0 ? all[idx - 1].date : null,
  };
}
