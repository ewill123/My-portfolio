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
  title: "Emmanuel Cheeseman — Technology Entrepreneur & Full-Stack Developer",
  description:
    "Technology entrepreneur based in Monrovia, Liberia. Building custom business systems, mobile apps, and digital platforms that help Liberian businesses grow — from payroll automation to school management and delivery apps.",
  keywords:
    "Emmanuel Cheeseman, Full-Stack Developer, Liberia, Technology Entrepreneur, Mobile App Development, Business Systems, School Management, Payroll System, Monrovia, CCNA, UNDP",
  authors: [{ name: "Emmanuel Cheeseman" }],
  creator: "Emmanuel Cheeseman",
  openGraph: {
    title: "Emmanuel Cheeseman — Technology Entrepreneur & Full-Stack Developer",
    description:
      "Building software that empowers Liberian businesses and communities — custom apps, payroll systems, delivery platforms, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Emmanuel Cheeseman",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@EmmanuelCh39270",
    title: "Emmanuel Cheeseman — Technology Entrepreneur",
    description:
      "Full-stack developer building software that empowers Liberian businesses and communities.",
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
