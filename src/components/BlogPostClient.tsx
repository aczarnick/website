'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import type { BlogPost } from '@/lib/blog';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Props {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => <p className="my-4" {...props} />,
  code: (props: React.ComponentProps<'code'>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
};

export default function BlogPostClient({ post, mdxSource }: Props) {
  useEffect(() => {
    trackEvent('blog_post_view', {
      title: post.title,
      slug: post.slug,
    });
  }, [post.title, post.slug]);

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded cursor-pointer"
                onClick={() => trackEvent('tag_click', { tag })}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </article>
  );
}