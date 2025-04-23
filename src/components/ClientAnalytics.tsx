'use client';

import { useAnalytics } from '@/hooks/useAnalytics';

export default function ClientAnalytics({ children }: { children: React.ReactNode }) {
  useAnalytics();
  return <>{children}</>;
}