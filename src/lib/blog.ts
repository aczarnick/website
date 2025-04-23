import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

const postsDirectory = join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null);

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as Omit<BlogPost, 'slug' | 'content'>),
    };
  } catch {
    return null;
  }
}