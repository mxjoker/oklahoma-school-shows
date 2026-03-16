import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

/* ─── Types ──────────────────────────────────────────────── */
export interface BlogPost {
  slug:         string;
  title:        string;
  description:  string;
  date:         string;
  author:       string;
  category:     string;
  tags:         string[];
  coverEmoji:   string;
  readingTime:  string;
  featured:     boolean;
  content:      string; // raw MDX string
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

/* ─── Config ─────────────────────────────────────────────── */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const CATEGORIES = [
  "All Posts",
  "School Assembly Tips",
  "Magic & Learning",
  "Behind the Scenes",
  "Oklahoma Schools",
] as const;

/* ─── Helpers ────────────────────────────────────────────── */
function parsePost(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title:       data.title       ?? "Untitled",
    description: data.description ?? "",
    date:        data.date        ?? new Date().toISOString().split("T")[0],
    author:      data.author      ?? "Joe Coover",
    category:    data.category    ?? "School Assembly Tips",
    tags:        data.tags        ?? [],
    coverEmoji:  data.coverEmoji  ?? "✨",
    readingTime: stats.text,
    featured:    data.featured    ?? false,
    content,
  };
}

/* ─── Public API ─────────────────────────────────────────── */

/** Get all posts sorted newest first */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw  = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
      const post = parsePost(slug, raw);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _, ...meta } = post;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Get a single post including its raw MDX content */
export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath  = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  return parsePost(slug, raw);
}

/** Get all slugs (for generateStaticParams) */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

/** Get posts filtered by category */
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const all = getAllPosts();
  if (category === "All Posts") return all;
  return all.filter((p) => p.category === category);
}

/** Format a date string for display */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}
