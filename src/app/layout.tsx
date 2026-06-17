import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Nav } from "@/components/Nav";
import { PortfolioFooter } from "@/components/PortfolioFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Phase 0 — Geist + Geist Mono loaded but not yet bound to --font-sans /
// --font-mono. New components opt in via var(--font-geist) / var(--font-geist-mono);
// Phase 1 swaps the bindings site-wide.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "David Ezieshi — Business Analyst",
  description:
    "Business Analyst in Toronto. I take business problems through the full lifecycle, requirements, process and data design, delivery, and live solution support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} ${geist.variable} ${geistMono.variable} h-full`}
    >
      <head>
        {/* Pre-paint theme init — reads pf-theme from localStorage and
            sets data-theme before first paint to avoid a light/dark flash
            on reload. Inline by design (must run before React hydrates). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pf-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <BackgroundCanvas />
        <div className="orb" aria-hidden />
        <Nav />
        <main className="flex-1">{children}</main>
        <PortfolioFooter />
      </body>
    </html>
  );
}
