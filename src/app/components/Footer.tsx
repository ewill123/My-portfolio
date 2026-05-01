"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Award,
  Globe,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const SOCIAL = [
  { icon: Github,   href: "https://github.com/ewill123",                   label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuelcheeseman", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/EmmanuelCh39270",                label: "Twitter"  },
];

const TRUST_BADGES = [
  { icon: Award,  label: "CCNA Certified",   color: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20" },
  { icon: Award,  label: "UNDP Trained",     color: "text-blue-400 bg-blue-400/10 border-blue-500/20"         },
  { icon: Globe,  label: "Liberia-Focused",  color: "text-amber-400 bg-amber-400/10 border-amber-500/20"      },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/[0.06] pt-16 pb-8 px-4 md:px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-amber-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <button
              type="button"
              onClick={scrollTop}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                <span className="text-gray-900 font-bold text-sm">EC</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Emmanuel Cheeseman</div>
                <div className="text-slate-600 text-xs">Technology Entrepreneur</div>
              </div>
            </button>

            <p className="text-slate-500 text-sm leading-relaxed">
              Building software that empowers Liberian businesses and
              communities — one product at a time.
            </p>

            <div className="flex items-center gap-1.5 text-slate-600 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Monrovia, Liberia</span>
              <span className="ml-2 text-slate-700">GMT+0</span>
            </div>

            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-400/8 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-500 hover:text-amber-400 text-sm transition-colors group"
                  >
                    <span className="w-1 h-1 bg-slate-700 group-hover:bg-amber-400 rounded-full transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-amber-400 text-sm transition-colors group"
                >
                  <span className="w-1 h-1 bg-slate-700 group-hover:bg-amber-400 rounded-full transition-colors" />
                  Resume / CV
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:designlabliberia@gmail.com"
                className="flex items-center gap-3 text-slate-500 hover:text-amber-400 text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-amber-400/10 transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">designlabliberia@gmail.com</span>
              </a>
              <a
                href="tel:+231880223275"
                className="flex items-center gap-3 text-slate-500 hover:text-amber-400 text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-amber-400/10 transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+231 880 223 275</span>
              </a>
              <a
                href={`https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and I'd like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-[#25D366] text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors flex-shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: +231 880 575 207</span>
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] mt-2"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-slate-600 text-xs text-center md:text-left">
            &copy; {year} Emmanuel Cheeseman · Technology to Empower Liberia
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${color}`}
              >
                <Icon className="w-3 h-3" />
                {label}
              </span>
            ))}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollTop}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-400/8 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
