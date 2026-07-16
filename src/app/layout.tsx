import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Nav } from "@/components/Nav";
import { PortfolioFooter } from "@/components/PortfolioFooter";

// Geist + Geist Mono are the ONLY fonts. Bound to --font-geist /
// --font-geist-mono, then aliased site-wide to --font-sans / --font-mono
// in globals.css. Inter / JetBrains were removed — they shipped ~200KB
// of unused font-faces that fought the design contract.
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
      className={`${geist.variable} ${geistMono.variable} h-full`}
      style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}
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
