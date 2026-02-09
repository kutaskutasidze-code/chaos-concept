import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "CHAOS CONCEPT — Tbilisi",
  description:
    "Concept store in the heart of Tbilisi. Curating the intersection of fashion, art, and chaos since 2016.",
  keywords: ["fashion", "concept store", "Tbilisi", "Georgia", "streetwear", "designer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}
      >
        {children}
        <div className="film-grain-css" />
        <div className="scanlines" />
      </body>
    </html>
  );
}
