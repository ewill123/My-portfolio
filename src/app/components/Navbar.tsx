"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      id: "about" },
  { label: "Skills",     id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects" },
  { label: "Contact",    id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", ...NAV_LINKS.map((l) => l.id)];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center group-hover:bg-amber-300 transition-colors">
              <span className="text-gray-900 font-bold text-sm tracking-tight">EC</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold text-sm leading-none">Emmanuel Cheeseman</div>
              <div className="text-slate-500 text-xs mt-0.5">Technology Entrepreneur</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.id
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 border-r border-white/[0.08] pr-3 mr-1">
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
                  className="p-2 text-slate-500 hover:text-amber-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Hire Me
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-16 left-4 right-4 z-50 bg-[#0f0f14] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden lg:hidden"
            >
              <div className="p-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === link.id
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="p-4 pt-0 flex flex-col gap-3">
                <div className="h-px bg-white/[0.06]" />
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github,   href: "https://github.com/ewill123",                   label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuelcheeseman", label: "LinkedIn" },
                    { icon: Twitter,  href: "https://x.com/EmmanuelCh39270",                label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-500 hover:text-amber-400 rounded-lg bg-white/4 hover:bg-white/8 transition-all flex-shrink-0"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold text-sm rounded-xl transition-all text-center"
                  >
                    Hire Me
                  </button>
                </div>
                <a
                  href="tel:+231880223275"
                  className="text-center text-sm text-slate-500 hover:text-slate-300 transition-colors py-1"
                >
                  +231 880 223 275
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
