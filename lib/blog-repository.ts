import { readFile } from "node:fs/promises";
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

const MANIFEST_PATH = path.join(
  process.cwd(),
  "data",
  "blog",
  "posts-manifest.json"
);

function contentPathForSlug(slug: string): string {
  return path.join(process.cwd(), "content", "blog", slug, "index.html");
}

async function readManifest(): Promise<BlogManifestEntry[]> {
  const raw = await readFile(MANIFEST_PATH, "utf8");
  const parsed = JSON.parse(raw) as BlogManifestEntry[];
  return parsed.filter((entry) => entry.slug && entry.title && entry.excerpt);
}

async function readHtmlContent(slug: string): Promise<string> {
  const raw = await readFile(contentPathForSlug(slug), "utf8");
  return raw.trim();
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const manifest = await readManifest();
  const published = manifest.filter((entry) => entry.published !== false);
  const posts = await Promise.all(
    published.map(async (entry) => ({
      ...entry,
      content: await readHtmlContent(entry.slug),
    }))
  );
  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => post.slug);
}
