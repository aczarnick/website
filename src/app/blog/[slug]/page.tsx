import { getPostBySlug, getAllPosts } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/BlogPostClient';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    }
  });

  return <BlogPostClient post={post} mdxSource={mdxSource} />;
}