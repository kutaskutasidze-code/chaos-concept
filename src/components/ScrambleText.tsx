"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  triggerOnView?: boolean;
}

export function ScrambleText({
  text,
  className,
  delay = 0,
  speed = 30,
  triggerOnView = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(!triggerOnView);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, delay]);

  useEffect(() => {
    if (!started) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
