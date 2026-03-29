"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

interface AutoSliderProps {
  slides: Slide[];
  imgWidth?: number;
  imgHeight?: number;
  interval?: number;
  className?: string;
}

export default function AutoSlider({
  slides,
  imgWidth = 260,
  imgHeight = 180,
  interval = 3500,
  className = "",
}: AutoSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      if (paused.current || !el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const slideEl = el.firstElementChild as HTMLElement | null;
        const step = slideEl ? slideEl.offsetWidth + 20 : 280;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div
      ref={ref}
      className={`auto-slider ${className}`}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onTouchStart={() => { paused.current = true; }}
      onTouchEnd={() => { setTimeout(() => { paused.current = false; }, 2500); }}
    >
      {slides.map((s, i) => (
        <div key={i} className="auto-slide">
          <Image
            src={s.src}
            alt={s.alt}
            width={imgWidth}
            height={imgHeight}
            className="auto-slide-img"
          />
        </div>
      ))}
    </div>
  );
}
