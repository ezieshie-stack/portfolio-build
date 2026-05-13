import { fetchSectionContent } from "@/lib/cms";

/**
 * Reads a single text field from a Convex `siteContent` section override,
 * falling back to a static default if no override exists.
 *
 * Usage:
 *   <LiveText
 *     section="home"
 *     field="titleStart"
 *     fallback="Designing systems for execution."
 *   />
 *
 * Or for nested paths:
 *   <LiveText
 *     section="home"
 *     field="featured.title"
 *     fallback={home.featured.title}
 *   />
 */
type Props = {
  section: string;
  field: string;
  fallback: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

function getNestedValue(obj: unknown, path: string): string | undefined {
  if (!obj || typeof obj !== "object") return undefined;
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

export async function LiveText({
  section,
  field,
  fallback,
  as: Tag = "span",
  className,
}: Props) {
  const data = await fetchSectionContent(section);
  const value = getNestedValue(data, field) ?? fallback;
  return <Tag className={className}>{value}</Tag>;
}
