import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export type BlogManifestEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  thumbnail?: string;
  published?: boolean;
  publishedAt?: string;
};

export type BlogPost = BlogManifestEntry & {
  content: string;
};

const ARTICOLI_DIR = path.join(process.cwd(), "content", "articoli");

type MetaJson = {
  title: string;
  excerpt: string;
  date?: string;
  thumbnail?: string;
  published?: boolean;
};

async function getArticleSlugs(): Promise<string[]> {
  const entries = await readdir(ARTICOLI_DIR, { withFileTypes: true });
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      slugs.add(entry.name.replace(/\.html$/, ""));
    }
  }
  return Array.from(slugs);
}

async function readMetaForSlug(slug: string): Promise<MetaJson | null> {
  const metaPath = path.join(ARTICOLI_DIR, `${slug}.meta.json`);
  try {
    const raw = await readFile(metaPath, "utf8");
    return JSON.parse(raw) as MetaJson;
  } catch {
    return null;
  }
}

async function readHtmlForSlug(slug: string): Promise<string> {
  const htmlPath = path.join(ARTICOLI_DIR, `${slug}.html`);
  const raw = await readFile(htmlPath, "utf8");
  return raw.trim();
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getArticleSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    const meta = await readMetaForSlug(slug);
    if (!meta || !meta.title || !meta.excerpt) continue;
    if (meta.published === false) continue;

    const content = await readHtmlForSlug(slug);
    posts.push({
      slug,
      title: meta.title,
      excerpt: meta.excerpt,
      date: meta.date,
      thumbnail: meta.thumbnail,
      published: meta.published ?? true,
      publishedAt: meta.date,
      content,
    });
  }

  // Ordina per data (più recente prima)
  posts.sort((a, b) => {
    const dateA = a.date ?? "";
    const dateB = b.date ?? "";
    return dateB.localeCompare(dateA);
  });

  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const slugs = await getArticleSlugs();
  if (!slugs.includes(slug)) return null;

  const meta = await readMetaForSlug(slug);
  if (!meta || !meta.title || !meta.excerpt) return null;
  if (meta.published === false) return null;

  const content = await readHtmlForSlug(slug);
  return {
    slug,
    title: meta.title,
    excerpt: meta.excerpt,
    date: meta.date,
    thumbnail: meta.thumbnail,
    published: meta.published ?? true,
    publishedAt: meta.date,
    content,
  };
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => post.slug);
}
