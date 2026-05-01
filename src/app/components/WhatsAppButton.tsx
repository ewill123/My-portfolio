"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and I'd like to connect.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg transition-all duration-300 hover:gap-2.5 hover:bg-[#20BD5C] hover:px-5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.4)]"
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[110px]">
        WhatsApp Me
      </span>
    </a>
  );
}
