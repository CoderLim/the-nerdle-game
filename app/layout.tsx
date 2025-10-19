import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nerdle - Math Equation Puzzle Game",
  description: "Daily math equation challenge. Guess the correct 8-character equation in 6 tries. Exercise your mathematical thinking!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          defer
          data-domain="thenerdlegame.com"
          src="https://app.pageview.app/js/script.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
