import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "David Ezieshi — Operations & Process Analyst",
  description:
    "Early-career Operations & Process Analyst in Toronto. I diagnose workflow bottlenecks, redesign them, and prototype the internal tools that ship the fix.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
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
