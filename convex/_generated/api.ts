/**
 * STUB FILE — overwritten by `npx convex dev`.
 *
 * Once `npx convex dev` runs, this file is regenerated with typed
 * references to every query/mutation/action you define in `convex/`.
 */

import { anyApi } from "convex/server";
import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  articles: typeof import("../articles.js");
  content: typeof import("../content.js");
  images: typeof import("../images.js");
}>;

export type FullApi = typeof fullApi;
export type FullApiPublic = FilterApi<FullApi, FunctionReference<any, "public">>;
export type FullApiInternal = FilterApi<
  FullApi,
  FunctionReference<any, "internal">
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const api: FullApiPublic = anyApi as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const internal: FullApiInternal = anyApi as any;
