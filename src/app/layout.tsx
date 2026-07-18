import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Nav } from "@/components/Nav";
import { PortfolioFooter } from "@/components/PortfolioFooter";

// Vercel's official geist package — same release Claude Design ships,
// avoids the Google Fonts mirror lag. Bound to --font-geist-sans /
// --font-geist-mono, aliased to --font-sans / --font-mono in globals.css.
const geist = GeistSans;
const geistMono = GeistMono;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
      className={`${geist.variable} ${geistMono.variable} h-full`}
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
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
      <body className="ds-canvas min-h-full flex flex-col">
        <BackgroundCanvas />
        <Nav />
        <main className="flex-1 relative z-[1]">{children}</main>
        <PortfolioFooter />
      </body>
    </html>
  );
}
