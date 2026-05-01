import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Cheeseman — Systems Architect & National Developer",
  description:
    "Election Technology Specialist at Liberia's National Election Commission. Building national-scale infrastructure — from election systems trusted by 2M+ citizens to live productions watched by 50K+ viewers weekly.",
  keywords:
    "Emmanuel Cheeseman, NEC Liberia, Election Technology, Systems Architect, Full-Stack Developer, Liberia, Live Broadcast, AutoVerse, UNDP",
  authors: [{ name: "Emmanuel Cheeseman" }],
  creator: "Emmanuel Cheeseman",
  openGraph: {
    title: "Emmanuel Cheeseman — Systems Architect & National Developer",
    description:
      "Building Liberia's digital infrastructure through election technology, national systems, and impact-driven software.",
    type: "website",
    locale: "en_US",
    siteName: "Emmanuel Cheeseman",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@EmmanuelCh39270",
    title: "Emmanuel Cheeseman — Systems Architect",
    description:
      "Election Technology Specialist building Liberia's digital infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
