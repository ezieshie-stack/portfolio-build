import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Ezieshi — Operations & Business Systems Analyst",
  description:
    "Operations & Business Systems Analyst specializing in process design, workflow optimization, and data-informed decision making.",
  keywords: ["Operations Analyst", "Business Systems", "Workflow Design", "Process Improvement"],
  authors: [{ name: "David Ezieshi" }],
  openGraph: {
    title: "David Ezieshi — Operations & Business Systems Analyst",
    description:
      "Operations & Business Systems Analyst specializing in process design, workflow optimization, and data-informed decision making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Floating orb */}
        <div className="orb" />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
