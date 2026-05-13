import Image from "next/image";
import { fetchImageBySlot } from "@/lib/cms";

/**
 * Renders an image from a Convex `websiteImages` slot, falling back to a
 * static `/public` asset if the slot has no row in Convex.
 *
 * Usage:
 *   <LiveImage
 *     slot="home-portrait"
 *     fallbackSrc="/portrait.png"
 *     alt="David Ezieshi"
 *     width={1040}
 *     height={1300}
 *   />
 *
 * On the server: tries Convex first; if Convex isn't configured or the
 * slot is empty, renders the fallback. Site never breaks.
 */
type Props = {
  slot: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  style?: React.CSSProperties;
};

export async function LiveImage({
  slot,
  fallbackSrc,
  alt,
  width,
  height,
  priority,
  className,
  sizes,
  style,
}: Props) {
  const cms = await fetchImageBySlot(slot);
  const src = cms?.imageUrl ?? fallbackSrc;
  const altText = cms?.altText ?? alt;

  return (
    <Image
      src={src}
      alt={altText}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      style={style}
      // Convex storage URLs are external; allow them via remote pattern in
      // next.config.ts OR mark unoptimized for now to avoid build errors.
      unoptimized={src.startsWith("http")}
    />
  );
}
