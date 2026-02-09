"use client";

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
}

export function Marquee({ items, separator = " / ", className }: MarqueeProps) {
  const content = items.join(separator) + separator;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className || ""}`}>
      <div className="marquee-track inline-block">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
