"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "!@#$%&*=+<>qwertyuiopasdfghjklzxcvbnm";
const BRAND = "CHAOS";
const TAGLINE = "concept store — tbilisi";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const brandRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    scrambleReveal(brandRef.current, BRAND, 0);
    scrambleReveal(taglineRef.current, TAGLINE, 400);

    const hideTimer = setTimeout(() => setHidden(true), 1800);
    const removeTimer = setTimeout(() => setRemoved(true), 2800);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader${hidden ? " is-hidden" : ""}`}>
      <span ref={brandRef} className="preloader__brand">&nbsp;</span>
      <span ref={taglineRef} className="preloader__tagline">&nbsp;</span>
    </div>
  );
}

function scrambleReveal(el: HTMLElement | null, text: string, delay: number) {
  if (!el) return;
  el.textContent = "";

  setTimeout(() => {
    let charIndex = 0;
    const reveal = setInterval(() => {
      if (charIndex >= text.length) {
        clearInterval(reveal);
        el.textContent = text;
        return;
      }

      const revealed = text.slice(0, charIndex);
      const scrambled = text
        .slice(charIndex)
        .split("")
        .map((c) =>
          c === " "
            ? " "
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        )
        .join("");

      el.textContent = revealed + scrambled;
      charIndex++;
    }, 40);
  }, delay);
}
