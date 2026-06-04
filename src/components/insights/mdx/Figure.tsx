export function Figure({
  src,
  alt = "",
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] text-[color:var(--text-dim)] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
