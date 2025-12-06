import { NextResponse } from "next/server";
import { generateCsrfToken, validateCsrfToken } from "@/lib/csrf";

export async function GET() {
  const token = generateCsrfToken();
  const response = NextResponse.json({ csrfToken: token });

  // Set HttpOnly cookie (extra protection)
  response.cookies.set("csrf_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  return response;
}
