'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';
import { trackEvent } from '@/lib/analytics';

export default function Contact() {
  const [state, handleSubmit] = useForm('your-form-id');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      trackEvent('form_submit', { type: 'contact' });
      setSubmitted(true);
    } catch (error) {
      trackEvent('form_error', { type: 'contact' });
      console.error('Form submission error:', error);
    }
  };

  if (submitted || state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Thank You!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={state.submitting}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={state.submitting}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={state.submitting}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors disabled:opacity-60"
          ></textarea>
        </div>

        {state.errors && (
          <div className="text-red-500 text-sm">
            Please fill out all required fields correctly.
          </div>
        )}

        {/* Honeypot field for spam prevention */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Social Links</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/aczarnick"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('social_click', { platform: 'github' })}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alex-czarnick-17a48612b/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('social_click', { platform: 'linkedin' })}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('social_click', { platform: 'twitter' })}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            Twitter
          </a> */}
        </div>
      </div>
    </div>
  );
}