/**
 * STUB FILE — overwritten by `npx convex dev`.
 *
 * Once `npx convex dev` runs, this file is regenerated with typed
 * Doc<T> and Id<T> based on your schema's tables.
 */

import type {
  AnyDataModel,
  GenericDataModel,
  GenericId,
} from "convex/server";
import type { GenericId as GenericIdValues } from "convex/values";

export type DataModel = AnyDataModel;
export type Doc<TableName extends string> = Record<string, unknown> & {
  _id: GenericId<TableName>;
  _creationTime: number;
};
export type Id<TableName extends string> = GenericIdValues<TableName>;
export type TableNames = string;

declare const _dataModel: GenericDataModel;
export type ConvexDataModel = typeof _dataModel;
