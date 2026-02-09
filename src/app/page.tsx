"use client";

import { useEffect, useState } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CRTImage } from "@/components/CRTImage";
import { CinemaReveal } from "@/components/CinemaReveal";
import { ScrambleText } from "@/components/ScrambleText";
import { Marquee } from "@/components/Marquee";
import { HorizontalRule } from "@/components/HorizontalRule";

const BRANDS = [
  "HOUSE OF HOLLAND",
  "SHRIMPS",
  "ANTON BELINSKIY",
  "ALPHA INDUSTRIES",
  "WOOD WOOD",
  "GOLA DAMIAN",
  "GEORGE KEBURIA",
  "NICOLAS GRIGORIAN",
  "LTFR",
  "NIK O NIK",
  "CHAOS",
];

const IMAGES = {
  archive: { src: "/chaos00-.jpg", alt: "Occult art book spread", label: "THE ARCHIVE", ratio: "13/10" },
  editorial: { src: "/chaos01-.jpg", alt: "Editorial fishnet", label: "THE EDITORIAL", ratio: "1/1" },
  curation: { src: "/chaos02-.jpg", alt: "Flat lay curation", label: "THE CURATION", ratio: "4/5" },
  space: { src: "/chaos03-.jpg", alt: "Store interior", label: "THE SPACE", ratio: "1/1" },
  print: { src: "/chaos04-.jpg", alt: "Typography art print", label: "THE PRINT", ratio: "3/4" },
  father: { src: "/chaos05-.jpg", alt: "Father Son bikini", label: "FATHER SON", ratio: "1/1" },
  love: { src: "/chaos06-.jpg", alt: "Goodbye My First Love", label: "FIRST LOVE", ratio: "1/1" },
  spirit: { src: "/chaos07-.jpg", alt: "Holy Spirit bikini", label: "HOLY SPIRIT", ratio: "1/1" },
  vibe: { src: "/chaos08-.jpg", alt: "Store atmosphere", label: "THE VIBE", ratio: "1/1" },
  form: { src: "/chaos09-.jpg", alt: "Back view styling", label: "THE FORM", ratio: "1/1" },
};

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled
          ? "h-14 bg-c-surface backdrop-blur-sm border-b border-c-border"
          : "h-20 bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-[family-name:var(--font-syne)] text-sm font-700 tracking-[0.2em] uppercase text-c-fg"
      >
        CHAOS
      </a>
      <nav className="flex items-center gap-6">
        <a
          href="#manifesto"
          className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.1em] uppercase text-c-fg-tertiary hover:text-c-fg transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#gallery"
          className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.1em] uppercase text-c-fg-tertiary hover:text-c-fg transition-colors duration-300"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.1em] uppercase text-c-fg-tertiary hover:text-c-fg transition-colors duration-300"
        >
          Find Us
        </a>
        <a
          href="https://www.instagram.com/chaosconcept/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-fg-tertiary hover:text-c-fg transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background noise pulse */}
      <div className="absolute inset-0 hero-glow" />

      {/* Loading line */}
      <div
        className="absolute top-0 left-0 h-[1px] bg-c-fg-whisper transition-all duration-[2000ms] ease-out"
        style={{ width: loaded ? "100%" : "0%" }}
      />

      {/* Main title */}
      <div className="relative z-10 text-center px-6">
        <div
          className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-c-fg-faint mb-6 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
          }}
        >
          EST. 2016 — TBILISI, GEORGIA
        </div>

        <h1
          className="glitch-text font-[family-name:var(--font-syne)] text-[clamp(3rem,12vw,10rem)] font-800 leading-[0.85] tracking-[-0.03em] text-c-fg uppercase"
          data-text="CHAOS"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          CHAOS
        </h1>

        <h2
          className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,5vw,4rem)] font-300 tracking-[0.15em] text-c-fg-secondary uppercase mt-2"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          CONCEPT
        </h2>

        <p
          className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.15em] uppercase text-c-fg-ghost mt-10 max-w-md mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          Fashion / Art / Subculture
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span className="font-[family-name:var(--font-dm-mono)] text-[9px] tracking-[0.2em] uppercase text-c-fg-whisper">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-c-border-subtle relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-c-fg-muted"
            style={{
              height: "50%",
              animation: "scrollPulse 2s ease infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}

function BrandMarquee() {
  return (
    <section className="py-8 border-y border-c-border">
      <Marquee
        items={BRANDS}
        separator="  ·  "
        className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.15em] uppercase text-c-fg-ghost"
      />
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <CinemaReveal direction="left">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-c-fg-faint block mb-8">
            [ 001 — MANIFESTO ]
          </span>
        </CinemaReveal>

        <CinemaReveal delay={200}>
          <h3 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,4vw,3.5rem)] font-300 leading-[1.2] text-c-fg-primary max-w-3xl">
            <ScrambleText text="We don't follow trends." delay={400} />
          </h3>
        </CinemaReveal>

        <CinemaReveal delay={400}>
          <h3 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,4vw,3.5rem)] font-300 leading-[1.2] text-c-fg-muted max-w-3xl mt-2">
            We curate chaos.
          </h3>
        </CinemaReveal>

        <HorizontalRule className="my-12 md:my-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <CinemaReveal delay={300} direction="up">
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-[1.8] text-c-fg-tertiary max-w-md">
              Born in 2016 on Tbilisi&apos;s Kostava Street, Chaos Concept Store
              reflects the spirit of the 21st century — where alternative culture,
              new punk, and skater aesthetics converge. A Soviet kiosk serves as
              our cashbox. A skate ramp lines our corridor. A ping pong table
              greets you at the door.
            </p>
          </CinemaReveal>

          <CinemaReveal delay={500} direction="up">
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-[1.8] text-c-fg-tertiary max-w-md">
              We bridge international fashion houses with Georgian designers —
              from House of Holland to George Keburia, from Alpha Industries to
              LTFR. Each piece tells a story. Each visit is an experience.
              Minimalist space. Maximum expression.
            </p>
          </CinemaReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 md:mt-28">
          {[
            { value: "2016", label: "FOUNDED" },
            { value: "30+", label: "BRANDS" },
            { value: "∞", label: "CHAOS" },
          ].map((stat, i) => (
            <CinemaReveal key={stat.label} delay={200 + i * 150} direction="up">
              <div className="text-center">
                <div className="font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,4rem)] font-700 text-c-fg-primary">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-c-fg-ghost mt-2">
                  {stat.label}
                </div>
              </div>
            </CinemaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryLabel({ text }: { text: string }) {
  return (
    <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-c-fg-ghost mt-3 block">
      {text}
    </span>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <CinemaReveal direction="left">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-c-fg-faint block mb-12">
            [ 002 — ATMOSPHERE ]
          </span>
        </CinemaReveal>

        <div className="flex flex-col gap-4">

          {/* ROW 1 — Hero wide: book spread */}
          <CinemaReveal direction="center">
            <CRTImage
              src={IMAGES.archive.src}
              alt={IMAGES.archive.alt}
              aspectRatio="21/9"
            />
            <GalleryLabel text={IMAGES.archive.label} />
          </CinemaReveal>

          {/* ROW 2 — Tall portrait + square (7+5) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7">
              <CinemaReveal delay={100} direction="left">
                <CRTImage
                  src={IMAGES.print.src}
                  alt={IMAGES.print.alt}
                  aspectRatio={IMAGES.print.ratio}
                />
                <GalleryLabel text={IMAGES.print.label} />
              </CinemaReveal>
            </div>
            <div className="md:col-span-5">
              <CinemaReveal delay={250} direction="right">
                <CRTImage
                  src={IMAGES.space.src}
                  alt={IMAGES.space.alt}
                  aspectRatio={IMAGES.print.ratio}
                />
                <GalleryLabel text={IMAGES.space.label} />
              </CinemaReveal>
            </div>
          </div>

          {/* ROW 3 — Three squares */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CinemaReveal delay={100} direction="up">
              <CRTImage
                src={IMAGES.father.src}
                alt={IMAGES.father.alt}
                aspectRatio="1/1"
              />
              <GalleryLabel text={IMAGES.father.label} />
            </CinemaReveal>
            <CinemaReveal delay={200} direction="up">
              <CRTImage
                src={IMAGES.love.src}
                alt={IMAGES.love.alt}
                aspectRatio="1/1"
              />
              <GalleryLabel text={IMAGES.love.label} />
            </CinemaReveal>
            <CinemaReveal delay={300} direction="up" className="col-span-2 md:col-span-1">
              <CRTImage
                src={IMAGES.spirit.src}
                alt={IMAGES.spirit.alt}
                aspectRatio="1/1"
              />
              <GalleryLabel text={IMAGES.spirit.label} />
            </CinemaReveal>
          </div>

          {/* ROW 4 — Portrait + square editorial (5+7) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5">
              <CinemaReveal delay={100} direction="left">
                <CRTImage
                  src={IMAGES.curation.src}
                  alt={IMAGES.curation.alt}
                  aspectRatio={IMAGES.curation.ratio}
                />
                <GalleryLabel text={IMAGES.curation.label} />
              </CinemaReveal>
            </div>
            <div className="md:col-span-7">
              <CinemaReveal delay={250} direction="right">
                <CRTImage
                  src={IMAGES.editorial.src}
                  alt={IMAGES.editorial.alt}
                  aspectRatio={IMAGES.curation.ratio}
                />
                <GalleryLabel text={IMAGES.editorial.label} />
              </CinemaReveal>
            </div>
          </div>

          {/* ROW 5 — Two squares + text block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <CinemaReveal delay={100} direction="up">
                <CRTImage
                  src={IMAGES.vibe.src}
                  alt={IMAGES.vibe.alt}
                  aspectRatio="1/1"
                />
                <GalleryLabel text={IMAGES.vibe.label} />
              </CinemaReveal>
            </div>
            <div className="md:col-span-4">
              <CinemaReveal delay={200} direction="up">
                <CRTImage
                  src={IMAGES.form.src}
                  alt={IMAGES.form.alt}
                  aspectRatio="1/1"
                />
                <GalleryLabel text={IMAGES.form.label} />
              </CinemaReveal>
            </div>
            <div className="md:col-span-4 flex items-end pb-8">
              <CinemaReveal delay={400} direction="right">
                <div>
                  <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-c-fg-whisper block mb-3">
                    10 FRAMES
                  </span>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-[1.8] text-c-fg-faint">
                    A visual diary from the intersection of fashion,
                    art, and subculture. Shot in and around the store.
                  </p>
                </div>
              </CinemaReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10 border-y border-c-border">
      <div className="max-w-5xl mx-auto">
        <CinemaReveal direction="left">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-c-fg-faint block mb-12">
            [ 003 — CURATION ]
          </span>
        </CinemaReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {BRANDS.map((brand, i) => (
            <CinemaReveal key={brand} delay={i * 80} direction="up">
              <div className="group py-4 border-b border-c-border hover:border-c-border-hover transition-colors duration-500 cursor-default">
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-300 text-c-fg-muted group-hover:text-c-fg transition-colors duration-500">
                  {brand}
                </span>
              </div>
            </CinemaReveal>
          ))}
        </div>

        <CinemaReveal delay={600}>
          <p className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-c-fg-whisper mt-12 text-center">
            + Georgian designers + Our own label
          </p>
        </CinemaReveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <CinemaReveal direction="left">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase text-c-fg-faint block mb-12">
            [ 004 — LOCATE ]
          </span>
        </CinemaReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <CinemaReveal delay={200}>
              <h3 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2.5rem)] font-300 text-c-fg-primary leading-[1.2]">
                14 Merab Kostava St.
              </h3>
              <h3 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2.5rem)] font-300 text-c-fg-muted leading-[1.2]">
                Tbilisi, Georgia
              </h3>
            </CinemaReveal>

            <HorizontalRule className="my-8" />

            <CinemaReveal delay={400}>
              <div className="space-y-4">
                <div>
                  <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-c-fg-ghost block mb-1">
                    HOURS
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-c-fg-tertiary">
                    Mon — Sat, 11:00 — 20:00
                  </span>
                </div>

                <div>
                  <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-c-fg-ghost block mb-1">
                    CONNECT
                  </span>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/chaosconcept/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-space-grotesk)] text-sm text-c-fg-tertiary hover:text-c-fg transition-colors duration-300 border-b border-c-border-subtle hover:border-c-border-strong"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://chaosconceptstore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-space-grotesk)] text-sm text-c-fg-tertiary hover:text-c-fg transition-colors duration-300 border-b border-c-border-subtle hover:border-c-border-strong"
                    >
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </CinemaReveal>
          </div>

          {/* Map / atmosphere image */}
          <CinemaReveal delay={300} direction="right">
            <div className="relative">
              <CRTImage
                src="/chaos03-.jpg"
                alt="Chaos Concept Store"
                aspectRatio="1/1"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-c-surface-dim backdrop-blur-sm px-4 py-3 border border-c-border">
                <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-c-fg-muted">
                  42.7128° N, 44.8023° E
                </span>
              </div>
            </div>
          </CinemaReveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const tbilisiTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Tbilisi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(tbilisiTime);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-c-border py-12 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Big brand text */}
        <CinemaReveal direction="center">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(3rem,10vw,8rem)] font-800 leading-[0.85] tracking-[-0.03em] text-c-fg-phantom uppercase select-none">
              CHAOS
            </h2>
          </div>
        </CinemaReveal>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-c-fg-whisper">
            Tbilisi — {time}
          </span>

          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-c-fg-whisper">
            Chaos Concept Store
          </span>

          <span className="font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-c-fg-whisper">
            Since 2016
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Manifesto />
        <Gallery />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
