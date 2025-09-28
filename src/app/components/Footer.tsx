"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 sm:px-10 md:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="bg-yellow-500 text-gray-900 font-bold w-12 h-12 flex items-center justify-center rounded-full text-2xl">
            EC
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
            Emmanuel Cheeseman
          </span>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/ewill123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/EmmanuelCh39270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Twitter size={28} />
          </a>
          <a
            href="mailto:designlabliberia@gmail.com"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-center text-gray-500 text-sm sm:text-base"
      >
        &copy; {new Date().getFullYear()} Emmanuel Cheeseman. All rights
        reserved.
      </motion.div>
    </footer>
  );
}
