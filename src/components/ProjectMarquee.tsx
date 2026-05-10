import Image from "next/image";
import { site } from "@/lib/content";

export function ProjectMarquee() {
  const slides = [...site.marquee, ...site.marquee];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-[450px] h-[300px] flex-shrink-0 rounded-3xl overflow-hidden"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="450px"
              className="object-cover opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
