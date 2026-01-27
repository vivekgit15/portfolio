import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vivek | Software Developer",
    template: "%s | Vivek",
  },
  description:
    "Software Developer skilled in Java, Next.js, React, and modern web technologies.",
  keywords: [
    "Vivek",
    "Software Developer",
    "Next.js Portfolio",
    "React Developer",
    "Java Developer",
    "BCA Student",
  ],
  authors: [{ name: "Vivek" }],
  creator: "Vivek",
  metadataBase: new URL("https://your-domain.vercel.app"),
  openGraph: {
    title: "Vivek | Software Developer",
    description:
      "Modern portfolio built with Next.js, Tailwind CSS, shadcn/ui, and TypeScript.",
    url: "https://your-domain.vercel.app",
    siteName: "Vivek Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vivek Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek | Software Developer",
    description:
      "Software developer portfolio built with Next.js and Tailwind.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="relative bg-[#0B0F19] text-white overflow-x-hidden">
  {/* global gradient layer */}
  <div className="pointer-events-none fixed inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[140px]" />
    <div className="absolute top-[30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[140px]" />
    <div className="absolute bottom-[-20%] left-[20%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[160px]" />
  </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
