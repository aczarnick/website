import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import type { BlogPost } from '@/lib/blog';

const postsDirectory = join(process.cwd(), 'src/content/blog');

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');

  try {
    if (slug) {
      // Get a single post
      const fullPath = join(postsDirectory, `${slug}.mdx`);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return NextResponse.json({
        slug,
        content,
        ...(data as Omit<BlogPost, 'slug' | 'content'>),
      });
    } else {
      // Get all posts
      const fileNames = readdirSync(postsDirectory);
      const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = join(postsDirectory, fileName);
          const fileContents = readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);

          return {
            slug,
            content,
            ...(data as Omit<BlogPost, 'slug' | 'content'>),
          };
        });

      return NextResponse.json(
        allPostsData.sort((a: BlogPost, b: BlogPost) => 
          (a.date < b.date ? 1 : -1)
        )
      );
    }
  } catch {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}