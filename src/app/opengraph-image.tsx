// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 20,
          }}
        >
          Emmanuel Cheeseman
        </div>
        <div
          style={{
            fontSize: 42,
            color: "#D1D5DB",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Systems Architect • National Election Technology • Liberia&apos;s
          Digital Future
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 28,
            color: "#9CA3AF",
          }}
        >
          Building Liberia&apos;s Digital Infrastructure
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
