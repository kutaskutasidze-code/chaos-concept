import type { Metadata } from "next";
import { Cormorant, Space_Grotesk, Archivo_Black, Oswald } from "next/font/google";
import "./globals.css";

const display = Cormorant({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const logo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["400"],
  display: "swap",
});

const typewriter = Oswald({
  subsets: ["latin"],
  variable: "--font-typewriter",
  weight: ["700"],
  display: "swap",
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
        className={`${display.variable} ${body.variable} ${logo.variable} ${typewriter.variable}`}
      >
        {children}
        <div className="film-grain-css" />
        <div className="scanlines" />
      </body>
    </html>
  );
}
