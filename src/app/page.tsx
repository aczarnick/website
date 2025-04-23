import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Hi, I&apos;m Alex Czarnick 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineer and Architect
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I design and build web applications and APIs that are fast, reliable, and user-friendly.
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-current px-6 py-2 rounded-lg hover:opacity-70 transition-opacity"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Add your profile image here */}
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse">
              {/* Placeholder for profile image */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will be added here */}
          Coming Soon...
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog post cards will be added here */}
          Coming Soon...
        </div>
      </section>
    </div>
  );
}
