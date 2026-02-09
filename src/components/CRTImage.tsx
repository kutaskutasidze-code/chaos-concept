"use client";

import { useState } from "react";

interface CRTImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function CRTImage({ src, alt, className, aspectRatio = "3/4" }: CRTImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`crt-image ${className || ""} ${hovered ? "is-active" : ""}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} className="crt-image__base" draggable={false} />
      <img src={src} alt="" className="crt-image__r" aria-hidden="true" draggable={false} />
      <img src={src} alt="" className="crt-image__g" aria-hidden="true" draggable={false} />
      <img src={src} alt="" className="crt-image__b" aria-hidden="true" draggable={false} />
    </div>
  );
}
