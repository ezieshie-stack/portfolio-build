/**
 * STUB FILE — overwritten by `npx convex dev`.
 *
 * Convex regenerates this file with typed wrappers based on your schema
 * the first time you run `npx convex dev` locally. Until then, this stub
 * keeps TypeScript compiling.
 */

import {
  actionGeneric,
  internalActionGeneric,
  internalMutationGeneric,
  internalQueryGeneric,
  mutationGeneric,
  queryGeneric,
} from "convex/server";
import type {
  ActionBuilder,
  HttpActionBuilder,
  MutationBuilder,
  QueryBuilder,
  GenericActionCtx,
  GenericMutationCtx,
  GenericQueryCtx,
  GenericDataModel,
} from "convex/server";

export const query: QueryBuilder<GenericDataModel, "public"> = queryGeneric;
export const internalQuery: QueryBuilder<GenericDataModel, "internal"> =
  internalQueryGeneric;
export const mutation: MutationBuilder<GenericDataModel, "public"> =
  mutationGeneric;
export const internalMutation: MutationBuilder<GenericDataModel, "internal"> =
  internalMutationGeneric;
export const action: ActionBuilder<GenericDataModel, "public"> = actionGeneric;
export const internalAction: ActionBuilder<GenericDataModel, "internal"> =
  internalActionGeneric;

export type QueryCtx = GenericQueryCtx<GenericDataModel>;
export type MutationCtx = GenericMutationCtx<GenericDataModel>;
export type ActionCtx = GenericActionCtx<GenericDataModel>;
export type HttpAction = HttpActionBuilder;
