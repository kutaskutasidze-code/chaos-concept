"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (delay: number) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(-12px)",
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <>
      {/* ── Fixed nav bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 md:h-16"
        style={linkStyle(0)}
      >
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group"
          >
            <span className="font-[family-name:var(--font-logo)] text-[16px] md:text-[20px] font-800 tracking-[0.08em] text-c-fg uppercase transition-all duration-500 group-hover:tracking-[0.16em]">
              CHAOS
            </span>
          </a>

          {/* Desktop-only text links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#brands"
              onClick={(e) => handleClick(e, "#brands")}
              className="font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
            >
              Brands
              <span className="font-[family-name:var(--font-typewriter)] text-[10px] text-c-fg-ghost ml-1">
                30+
              </span>
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleClick(e, "#gallery")}
              className="font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
            >
              Gallery
            </a>
          </div>
        </div>

        {/* Right: desktop links + Instagram */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#manifesto"
              onClick={(e) => handleClick(e, "#manifesto")}
              className="font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <a
            href="https://www.instagram.com/chaosconcept/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-c-fg-ghost hover:text-c-fg transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg
              className="w-[16px] h-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Scroll down ticker ── */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 overflow-hidden pointer-events-none hidden md:block"
        style={{
          width: "140px",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}
      >
        <div className="flex whitespace-nowrap animate-[marquee_4s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-typewriter)] text-[9px] tracking-[0.3em] uppercase text-c-fg-ghost px-4"
            >
              scroll down
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
