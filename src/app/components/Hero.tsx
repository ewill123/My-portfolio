"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Download,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-16"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-blink-dot" />
              <span className="text-slate-400 text-sm">Open to work & collaboration</span>
              <span className="text-white/20 select-none">·</span>
              <MapPin className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-500 text-sm">Monrovia, Liberia</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.04] tracking-[-0.03em] mb-5"
            >
              Emmanuel
              <br />
              <span className="text-amber-400">Cheeseman</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="h-8 mb-6"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2200,
                  "Software Entrepreneur",
                  2000,
                  "Building Liberia's Digital Future",
                  2800,
                  "Mobile & Web App Developer",
                  2000,
                  "Tech for Business & Impact",
                  2400,
                ]}
                wrapper="p"
                speed={52}
                repeat={Infinity}
                className="text-lg md:text-xl text-slate-400 font-medium"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              Monrovia-based developer and technology entrepreneur building
              software that moves Liberia forward. From{" "}
              <span className="text-amber-400/90">delivery platforms</span> and{" "}
              <span className="text-white/80">school management systems</span> to{" "}
              <span className="text-amber-400/90">agricultural marketplaces</span>{" "}
              — I create solutions that work for real people and real businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={`https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-semibold text-sm rounded-xl border border-[#25D366]/25 hover:border-[#25D366]/50 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] text-white font-semibold text-sm rounded-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-0.5"
            >
              <span className="text-slate-600 text-sm mr-3">Find me on</span>
              {[
                { icon: Github,   href: "https://github.com/ewill123",                    label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuelcheeseman",  label: "LinkedIn" },
                { icon: Twitter,  href: "https://x.com/EmmanuelCh39270",                 label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-slate-600 hover:text-amber-400 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-amber-500/[0.1] rounded-3xl blur-2xl" />

              <div className="relative w-[320px] h-[390px] rounded-3xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/ema.webp"
                  alt="Emmanuel Cheeseman"
                  fill
                  className="object-cover"
                  priority
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge: Projects */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-14 top-10 bg-[#0f0f14] border border-white/[0.08] rounded-2xl p-4 min-w-[130px] shadow-xl"
              >
                <div className="text-2xl font-bold text-amber-400 mb-0.5">5+</div>
                <div className="text-slate-500 text-xs">Active Projects</div>
              </motion.div>

              {/* Floating badge: Experience */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="absolute -left-14 bottom-20 bg-[#0f0f14] border border-white/[0.08] rounded-2xl p-4 min-w-[130px] shadow-xl"
              >
                <div className="text-2xl font-bold text-blue-400 mb-0.5">8+</div>
                <div className="text-slate-500 text-xs">Years in Tech</div>
              </motion.div>

              {/* CCNA badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-5 bg-[#0f0f14] border border-white/[0.08] rounded-full px-5 py-2 flex items-center gap-2 shadow-xl"
              >
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-slate-300 text-sm font-medium">
                  CCNA Certified
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="lg:hidden flex justify-center mt-12"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-amber-500/10 rounded-full blur-xl" />
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/[0.1]">
              <Image
                src="/profile.webp"
                alt="Emmanuel Cheeseman"
                fill
                className="object-cover"
                priority
                sizes="144px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-slate-600 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
