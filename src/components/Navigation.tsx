'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function Navigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    trackEvent('theme_change', { theme: newTheme });
  };

  const handleNavigation = (path: string) => {
    trackEvent('navigation', { path });
  };

  // Prevent theme flash by not rendering the toggle until mounted
  const renderThemeChanger = () => {
    if (!mounted) return (
      <button
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 w-8 h-8"
        aria-label="Loading theme toggle"
      />
    );

    return (
      <button
        onClick={handleThemeChange}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        aria-label="Toggle dark mode"
      >
        {resolvedTheme === 'dark' ? '🌞' : '🌙'}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl" onClick={() => handleNavigation('/')}>
              Alex Czarnick
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link 
                href="/about" 
                className="hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => handleNavigation('/about')}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => handleNavigation('/projects')}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => handleNavigation('/blog')}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </Link>
              {renderThemeChanger()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}