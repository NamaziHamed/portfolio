import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing/sections/Header";
import Footer from "@/components/landing/sections/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamed Namazi - Software & Systems Engineer",
  description:
    "Portfolio of Hamed Namazi, a software and systems engineer building web applications with Next.js and TypeScript, desktop tools with Tauri, and privacy-preserving systems in Rust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${roboto.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
