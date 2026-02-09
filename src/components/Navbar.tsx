"use client";

import { useEffect, useState, useRef } from "react";

const NAV_ITEMS_LEFT = [
  { label: "Brands", href: "#brands", count: "30+" },
  { label: "Gallery", href: "#gallery" },
];

const NAV_ITEMS_RIGHT = [
  { label: "About", href: "#manifesto" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  // Reveal after initial load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Init curtain */}
      <div
        className="fixed inset-0 z-[60] bg-c-fg pointer-events-none transition-transform duration-[1200ms]"
        style={{
          transformOrigin: "top",
          transform: visible ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between"
        style={{
          width: "min(754px, calc(100vw - 48px))",
          height: "48px",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translate(-50%, 0)"
            : "translate(-50%, -20px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 rounded-full bg-c-surface backdrop-blur-xl border border-c-border-subtle" />

        {/* Progress bar at bottom of pill */}
        <div
          className="absolute bottom-0 left-[5%] right-[5%] h-[1px] bg-c-border-subtle rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-c-fg-muted transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Left nav items */}
        <div className="relative z-10 flex items-center gap-1 pl-6">
          {NAV_ITEMS_LEFT.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-300"
            >
              <span
                className="absolute inset-0 rounded-full bg-c-fg-phantom transition-opacity duration-300"
                style={{ opacity: hoveredItem === item.label ? 1 : 0 }}
              />
              <span className="relative font-[family-name:var(--font-space-grotesk)] text-[13px] font-500 tracking-[-0.01em] text-c-fg-secondary group-hover:text-c-fg transition-colors duration-300">
                {item.label}
              </span>
              {item.count && (
                <span className="relative font-[family-name:var(--font-dm-mono)] text-[10px] text-c-fg-ghost group-hover:text-c-fg-muted transition-colors duration-300">
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative z-10 flex items-center justify-center group"
        >
          <span className="font-[family-name:var(--font-syne)] text-[15px] font-800 tracking-[0.08em] text-c-fg uppercase transition-all duration-500 group-hover:tracking-[0.15em]">
            CHAOS
          </span>
        </a>

        {/* Right nav items */}
        <div className="relative z-10 flex items-center gap-1 pr-6">
          {NAV_ITEMS_RIGHT.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative flex items-center px-3 py-2 rounded-full transition-colors duration-300"
            >
              <span
                className="absolute inset-0 rounded-full bg-c-fg-phantom transition-opacity duration-300"
                style={{ opacity: hoveredItem === item.label ? 1 : 0 }}
              />
              <span className="relative font-[family-name:var(--font-space-grotesk)] text-[13px] font-500 tracking-[-0.01em] text-c-fg-secondary group-hover:text-c-fg transition-colors duration-300">
                {item.label}
              </span>
            </a>
          ))}

          {/* Instagram */}
          <a
            href="https://www.instagram.com/chaosconcept/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredItem("ig")}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
            aria-label="Instagram"
          >
            <span
              className="absolute inset-0 rounded-full bg-c-fg-phantom transition-opacity duration-300"
              style={{ opacity: hoveredItem === "ig" ? 1 : 0 }}
            />
            <svg
              className="relative w-[14px] h-[14px] text-c-fg-ghost hover:text-c-fg transition-colors duration-300"
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

      {/* Floating "scroll down" ticker — visible only at top */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 overflow-hidden pointer-events-none"
        style={{
          width: "160px",
          opacity: visible && scrollProgress < 0.05 ? 1 : 0,
          transform: visible && scrollProgress < 0.05
            ? "translate(-50%, 0)"
            : "translate(-50%, 10px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="flex whitespace-nowrap animate-[marquee_4s_linear_infinite]">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.25em] uppercase text-c-fg-ghost px-4">
            scroll down
          </span>
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.25em] uppercase text-c-fg-ghost px-4">
            scroll down
          </span>
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.25em] uppercase text-c-fg-ghost px-4">
            scroll down
          </span>
        </div>
      </div>
    </>
  );
}
