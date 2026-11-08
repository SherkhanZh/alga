"use client";

import { Icon } from "./Icon";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal card track from the Figma "Card massive" sections:
 * cards overflow to the right under a #f7f7f7 fade, with a 56px green round
 * arrow button. Arrow + fade only show while there is more to scroll.
 */
export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    // Watch the track and every card: scrollWidth changes don't fire on the track alone.
    const ro = new ResizeObserver(update);
    ro.observe(el);
    Array.from(el.children).forEach((c) => ro.observe(c));
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("load", update);
    const t = window.setTimeout(update, 300);
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
      window.removeEventListener("load", update);
      window.clearTimeout(t);
    };
  }, [update]);

  const next = () => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={track}
        role="region"
        aria-label={label}
        className="no-scrollbar -mx-14 flex snap-x snap-mandatory scroll-px-14 gap-6 overflow-x-auto px-14 py-1"
      >
        {children}
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 -right-14 w-[278px] bg-gradient-to-l from-fade to-fade/0 transition-opacity ${
          canNext ? "opacity-100" : "opacity-0"
        }`}
      />
      {canNext && (
        <button
          type="button"
          onClick={next}
          aria-label="Показать ещё"
          className="absolute top-1/2 -right-6 flex size-14 -translate-y-1/2 items-center justify-center rounded-[32px] bg-green-100 p-3 text-white transition-colors hover:bg-green-120"
        >
          <Icon name="arrow-right" />
        </button>
      )}
    </div>
  );
}
