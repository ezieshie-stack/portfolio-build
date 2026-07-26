"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

/**
 * PostHog client-side provider. Reads NEXT_PUBLIC_POSTHOG_KEY and
 * NEXT_PUBLIC_POSTHOG_HOST from the environment; if the key isn't set
 * (local dev, preview branches without the env var), skips init and
 * renders children unchanged, so nothing breaks.
 *
 * Config choices:
 *   - capture_pageview: false — we drive pageviews from PostHogPageView
 *     so App-Router client-side route changes are counted correctly
 *   - capture_pageleave: true — needed for time-on-page metrics
 *   - person_profiles: "identified_only" — anonymous visitors don't
 *     get a full profile, which keeps event volume + cookie footprint
 *     down for a portfolio use case
 *   - autocapture: true (default) — captures clicks including outbound
 *     link clicks with $external_click_url tagged on the event
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    if (!key) return;
    if (posthog.__loaded) return;

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "identified_only",
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug(false);
      },
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
