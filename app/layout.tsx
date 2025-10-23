import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { I18nProvider } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n-server";
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
  title: "Play Nerdle Game Online - Solve Mathematical Puzzles",
  description: "Play Nerdle, a math-based puzzle game that challenges your numerical logic. Solve puzzles, improve your skills, and enjoy hours of fun!",
  metadataBase: new URL('https://thenerdlegame.com'),
  alternates: {
    canonical: 'https://thenerdlegame.com',
  },
  openGraph: {
    title: "Play Nerdle Game Online - Solve Mathematical Puzzles",
    description: "Play Nerdle, a math-based puzzle game that challenges your numerical logic. Solve puzzles, improve your skills, and enjoy hours of fun!",
    url: 'https://thenerdlegame.com',
    siteName: 'Nerdle Game',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Play Nerdle Game Online - Solve Mathematical Puzzles",
    description: "Play Nerdle, a math-based puzzle game that challenges your numerical logic. Solve puzzles, improve your skills, and enjoy hours of fun!",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 服务器端加载英文翻译
  const translations = await getTranslations('en');
  
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
        <I18nProvider initialLanguage="en" initialTranslations={translations}>
          {children}
        </I18nProvider>
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-10HRFHRBVD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-10HRFHRBVD');
        `}
      </Script>
    </html>
  );
}
