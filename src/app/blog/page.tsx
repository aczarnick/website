import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-gray-600 dark:hover:text-gray-300">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
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
                    className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}