export function VideoEmbed({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  // YouTube convenience: pass a youtu.be/<id> or youtube.com/watch?v=<id>
  // and render an iframe instead of an HTML5 <video>.
  const ytMatch = src.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/,
  );

  return (
    <figure className="my-10">
      {ytMatch ? (
        <div
          className="rounded-lg overflow-hidden border border-white/[0.06]"
          style={{ position: "relative", paddingBottom: "56.25%" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${ytMatch[1]}`}
            title={caption ?? "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      ) : (
        <video
          controls
          preload="metadata"
          poster={poster}
          className="w-full rounded-lg border border-white/[0.06] bg-black"
        >
          <source src={src} />
        </video>
      )}
      {caption && (
        <figcaption className="mt-3 text-[13px] text-[color:var(--text-dim)] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
