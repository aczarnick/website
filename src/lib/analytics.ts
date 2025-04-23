import Plausible from 'plausible-tracker';

export const plausible = Plausible({
  domain: 'czarnick.xyz',
  trackLocalhost: false,
});

export function trackPageview() {
  plausible.trackPageview();
}

export function trackEvent(name: string, props?: Record<string, string>) {
  plausible.trackEvent(name, { props });
}