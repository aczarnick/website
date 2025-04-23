import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import ClientAnalytics from "@/components/ClientAnalytics";
import ThemeWrapper from "@/components/ThemeWrapper";
import "./globals.css";
import { MDXProvider } from '@/components/MDXProvider';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Czarnia - Personal Website",
  description: "Personal website and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeWrapper>
          <MDXProvider>
            <Suspense>
            <ClientAnalytics>
              <Navigation />
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </div>
            </ClientAnalytics>
            </Suspense>
            <Analytics />
          </MDXProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
