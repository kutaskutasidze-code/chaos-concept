"use client";

import { useEffect, useRef, useState } from "react";

type WipeDirection = "up" | "left" | "right" | "center";

interface CinemaRevealProps {
  children: React.ReactNode;
  direction?: WipeDirection;
  delay?: number;
  className?: string;
}

export function CinemaReveal({ children, direction = "up", delay = 0, className }: CinemaRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const clipPaths: Record<WipeDirection, { hidden: string; visible: string }> = {
    up: { hidden: "inset(100% 0 0 0)", visible: "inset(0 0 0 0)" },
    left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0 0 0)" },
    right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0)" },
    center: { hidden: "inset(50% 50% 50% 50%)", visible: "inset(0 0 0 0)" },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: revealed ? clipPaths[direction].visible : clipPaths[direction].hidden,
        transition: `clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
