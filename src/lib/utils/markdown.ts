import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface ContentPage {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
}

const contentDir = path.join(process.cwd(), "src/data/content");

export async function getContentBySlug(slug: string): Promise<ContentPage> {
  const filePath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: (data.title as string) || slug,
    description: (data.description as string) || "",
    contentHtml,
  };
}

export async function getAllContent(): Promise<ContentPage[]> {
  const slugs = ["what-is-xrp", "who-created-xrp", "what-is-ripple", "leadership", "vision", "xrp-ledger"];
  const contents = await Promise.all(slugs.map(getContentBySlug));
  return contents;
}
