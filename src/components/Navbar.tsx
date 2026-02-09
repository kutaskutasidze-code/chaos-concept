"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-12px)",
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <>
      {/* Init curtain */}
      <div
        className="fixed inset-0 z-[60] bg-c-fg pointer-events-none"
        style={{
          transformOrigin: "top",
          transform: visible ? "scaleY(0)" : "scaleY(1)",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Left nav items — each one independent */}
      <a
        href="#brands"
        onClick={(e) => handleClick(e, "#brands")}
        className="fixed top-8 left-8 md:left-12 z-50 font-[family-name:var(--font-space-grotesk)] text-[14px] md:text-[16px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
        style={linkStyle(0.7)}
      >
        Brands
        <span className="font-[family-name:var(--font-dm-mono)] text-[10px] text-c-fg-ghost ml-1.5">
          30+
        </span>
      </a>

      <a
        href="#gallery"
        onClick={(e) => handleClick(e, "#gallery")}
        className="fixed top-8 left-[120px] md:left-[160px] z-50 font-[family-name:var(--font-space-grotesk)] text-[14px] md:text-[16px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
        style={linkStyle(0.8)}
      >
        Gallery
      </a>

      {/* Center logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed top-7 left-1/2 -translate-x-1/2 z-50 group"
        style={linkStyle(0.6)}
      >
        <span className="font-[family-name:var(--font-syne)] text-[18px] md:text-[20px] font-800 tracking-[0.08em] text-c-fg uppercase transition-all duration-500 group-hover:tracking-[0.16em]">
          CHAOS
        </span>
      </a>

      {/* Right nav items — each one independent */}
      <a
        href="#manifesto"
        onClick={(e) => handleClick(e, "#manifesto")}
        className="fixed top-8 right-[140px] md:right-[180px] z-50 font-[family-name:var(--font-space-grotesk)] text-[14px] md:text-[16px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
        style={linkStyle(0.8)}
      >
        About
      </a>

      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className="fixed top-8 right-[76px] md:right-[100px] z-50 font-[family-name:var(--font-space-grotesk)] text-[14px] md:text-[16px] font-500 tracking-[-0.02em] text-c-fg-secondary hover:text-c-fg transition-colors duration-300"
        style={linkStyle(0.9)}
      >
        Contact
      </a>

      {/* Instagram — standalone */}
      <a
        href="https://www.instagram.com/chaosconcept/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-8 right-8 md:right-12 z-50 text-c-fg-ghost hover:text-c-fg transition-colors duration-300"
        style={linkStyle(1.0)}
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

      {/* Floating "scroll down" at bottom center */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 overflow-hidden pointer-events-none"
        style={{
          width: "140px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 1.2s",
        }}
      >
        <div className="flex whitespace-nowrap animate-[marquee_4s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-dm-mono)] text-[9px] tracking-[0.3em] uppercase text-c-fg-ghost px-4"
            >
              scroll down
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
