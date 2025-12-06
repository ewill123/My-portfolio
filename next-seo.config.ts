// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

const seoConfig: NextSeoProps = {
  titleTemplate: "%s | Emmanuel Cheeseman",
  defaultTitle: "Emmanuel Cheeseman - Systems Architect & National Developer",
  description:
    "Building Liberia's digital infrastructure through election technology, national systems, and impact-driven software solutions. Expert in NEC systems, live broadcasting, and investment-ready projects.",
  canonical: "https://yourdomain.com",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Emmanuel Cheeseman",
    title: "Emmanuel Cheeseman - Systems Architect & National Developer",
    description:
      "Building Liberia's digital infrastructure through election technology, national systems, and impact-driven software solutions.",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Cheeseman - Systems Architect",
      },
    ],
  },

  twitter: {
    handle: "@EmmanuelCh39270",
    site: "@EmmanuelCh39270",
    cardType: "summary_large_image",
  },

  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Liberia, Election Technology, NEC, Software Developer, Systems Architect, Media Production, Investment, AutoVerse, National Developer, UNDP, European Union",
    },
    {
      name: "author",
      content: "Emmanuel Cheeseman",
    },
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

export default seoConfig;
