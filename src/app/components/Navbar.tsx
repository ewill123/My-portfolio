"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Close mobile menu after click
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="text-2xl sm:text-3xl font-bold text-yellow-600 hover:text-yellow-400 transition"
        >
          EC
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-white hover:text-yellow-600 font-medium transition-colors text-base sm:text-lg"
            >
              {link.name}
            </button>
          ))}

          <div className="flex gap-4 ml-6">
            <a
              href="https://github.com/ewill123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white hover:text-yellow-600 transition" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white hover:text-yellow-600 transition" />
            </a>
            <a
              href="https://x.com/EmmanuelCh39270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-white hover:text-yellow-600 transition" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none z-50 relative"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-3/4 sm:w-2/3 h-full bg-gray-900/95 backdrop-blur-md shadow-lg z-40 flex flex-col p-6 gap-6"
        >
          {links.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-white hover:text-yellow-600 font-medium text-xl text-left transition-colors"
            >
              {link.name}
            </button>
          ))}

          <div className="flex gap-6 mt-auto justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600"
            >
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
