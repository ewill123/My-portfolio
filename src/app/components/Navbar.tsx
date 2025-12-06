// src/app/components/Navbar.tsx - UPGRADED VERSION
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Shield,
  Briefcase,
  Home,
  User,
  Code,
  Award,
  MessageSquare,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme, resolvedTheme } = useTheme();

  const navLinks = [
    {
      name: "Home",
      href: "hero",
      icon: <Home className="w-4 h-4" />,
      description: "Back to top",
    },
    {
      name: "About",
      href: "about",
      icon: <User className="w-4 h-4" />,
      description: "Who I am",
    },
    {
      name: "Experience",
      href: "experience",
      icon: <Award className="w-4 h-4" />,
      description: "National projects",
    },
    {
      name: "Skills",
      href: "skills",
      icon: <Code className="w-4 h-4" />,
      description: "Technical arsenal",
    },
    {
      name: "Projects",
      href: "projects",
      icon: <Briefcase className="w-4 h-4" />,
      description: "National systems",
    },
    {
      name: "Contact",
      href: "contact",
      icon: <MessageSquare className="w-4 h-4" />,
      description: "Let's connect",
    },
  ];

  const investmentLink = {
    name: "Invest",
    href: "projects",
    icon: <DollarSign className="w-4 h-4" />,
    description: "Investment opportunities",
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo with Professional Title */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                scrolled
                  ? "bg-gradient-to-br from-yellow-500 to-amber-500"
                  : "bg-gradient-to-br from-yellow-500 to-amber-500"
              }`}
            >
              <span className="text-gray-900 font-black text-lg">EC</span>
            </div>
            <div className="hidden md:block text-left">
              <div className="font-bold text-gray-900 dark:text-white text-sm">
                Emmanuel Cheeseman
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Systems Architect
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeSection === link.href
                    ? "bg-yellow-500 text-gray-900 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400"
                }`}
              >
                <span className="text-sm">{link.name}</span>
              </button>
            ))}

            {/* Investment CTA */}
            <button
              type="button"
              onClick={() => scrollTo(investmentLink.href)}
              className="ml-2 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all hover:scale-105"
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Invest</span>
            </button>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center gap-3 ml-6 border-l border-gray-300 dark:border-gray-700 pl-6">
              <a
                href="https://github.com/ewill123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-500 hover:text-gray-900 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-chukwu-409a6b295/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/EmmanuelCh39270"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:bomiqueenliberia@gmail.com"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white transition-all"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Hamburger with Investment Badge */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo(investmentLink.href)}
              className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg text-sm"
            >
              Invest
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 sm:w-96 bg-white dark:bg-gray-900 z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                      <span className="text-gray-900 font-black text-lg">
                        EC
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        Emmanuel Cheeseman
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Systems Architect
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-6 space-y-2 overflow-y-auto">
                {[...navLinks, investmentLink].map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      activeSection === link.href
                        ? "bg-yellow-500 text-gray-900 font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } ${
                      link.name === "Invest"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          link.name === "Invest"
                            ? "bg-white/20"
                            : activeSection === link.href
                            ? "bg-gray-900/10"
                            : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        {link.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {link.description}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 ${
                        link.name === "Invest"
                          ? "text-white/70"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Contact Info & Social */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Contact & Social
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/ewill123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emmanuel-chukwu-409a6b295/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="space-y-3">
                  <a
                    href="mailto:bomiqueenliberia@gmail.com"
                    className="block p-3 rounded-lg bg-yellow-500/10 dark:bg-yellow-400/10 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/20 transition-colors text-sm"
                  >
                    ✉️ bomiqueenliberia@gmail.com
                  </a>
                  <a
                    href="tel:+231880223272"
                    className="block p-3 rounded-lg bg-green-500/10 dark:bg-green-400/10 text-green-700 dark:text-green-300 hover:bg-green-500/20 transition-colors text-sm"
                  >
                    📞 +231 880 223 272
                  </a>
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {resolvedTheme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
