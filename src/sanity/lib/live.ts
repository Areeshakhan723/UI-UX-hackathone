// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.

import { SanityClient } from "@sanity/client";

// Query function with proper types
export const sanityFetch = async <T>(
  query: string,
  params: Record<string, unknown> = {},
  client: SanityClient
): Promise<T> => {
  return await client.fetch<T>(query, params);
};

// Dummy component to avoid errors if imported
export const SanityLive = () => null;
