'use client';

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="my-4" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
};

export function MDXProvider({ children }: { children: React.ReactNode }) {
  return <BaseMDXProvider components={components}>{children}</BaseMDXProvider>;
}