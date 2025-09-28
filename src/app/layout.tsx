import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Import client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Cheeseman Portfolio",
  description: "Modern, responsive personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        id="top"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="relative w-full max-w-full">{children}</main>
      </body>
    </html>
  );
}
