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
  title: "Hamed Namazi - Software Developer & IT Engineer",
  description:
    "Portfolio of Hamed Namazi, a software developer and IT engineer building web apps, desktop tools and cryptographic protocols with TypeScript, Rust and Python.",
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
