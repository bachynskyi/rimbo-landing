import { HeroClient } from "@/components/hero-client";
import type { Dictionary } from "@/lib/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative pt-36 pb-20 px-6 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <HeroClient dict={dict}>
          <div className="mt-14 mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
            <picture>
              <source
                type="image/webp"
                srcSet="/hero-glass-640.webp 640w, /hero-glass-1024.webp 1024w, /hero-glass-1440.webp 1440w"
                sizes="(max-width: 768px) calc(100vw - 3rem), 768px"
              />
              <img
                src="/hero-glass-1024.webp"
                alt="Rimbo loyalty experience — customers scanning QR codes in a cafe"
                width={1200}
                height={675}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto"
              />
            </picture>
          </div>
        </HeroClient>
      </div>
    </section>
  );
}
