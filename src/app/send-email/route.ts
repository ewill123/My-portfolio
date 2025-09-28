import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Send email using EmailJS
    const res = await emailjs.send(
      "service_eaufszn", // your service ID
      "template_9fky7ac", // your template ID
      {
        name,
        email,
        message,
        time: new Date().toLocaleString(),
      },
      "eXeSZDtXChLe9ZJrZ" // your public key
    );

    console.log("EmailJS response:", res);

    if (res.status === 200) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: `Status: ${res.status}, Text: ${res.text}` },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error("EmailJS server error:", err);
    return NextResponse.json(
      { success: false, error: err?.text || "Unknown error" },
      { status: 500 }
    );
  }
}
