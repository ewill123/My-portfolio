// src/app/components/Footer.tsx - UPGRADED VERSION
"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Shield,
  Globe,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-16 md:py-20 px-4 md:px-8 lg:px-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-gray-900 font-black text-xl">EC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Emmanuel Cheeseman
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Systems Architect & National Developer
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Building Liberia&apos;s digital infrastructure through election
              technology, national systems, and impact-driven software
              solutions.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  Monrovia, Liberia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-400">GMT +0</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              National Projects
            </h4>
            <ul className="space-y-4">
              {[
                { name: "NEC Companion", href: "#projects" },
                { name: "AutoVerse Bible System", href: "#projects" },
                { name: "Election Technology", href: "#skills" },
                { name: "Live Media Production", href: "#experience" },
                { name: "Investment Opportunities", href: "#contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 dark:bg-yellow-400/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:bomiqueenliberia@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                  >
                    bomiqueenliberia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 dark:bg-yellow-400/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:+231880223272"
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                  >
                    +231 880 223 272
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                Connect
              </h5>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/ewill123",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/emmanuelcheeseman",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/EmmanuelCh39270",
                    label: "Twitter",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-yellow-500 hover:text-gray-900 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Emmanuel Cheeseman. Building Liberia&apos;s
              digital future.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              All projects are developed with integrity and national impact in
              mind.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 dark:bg-green-400/10 rounded-full">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300">
                UNDP Trained
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 dark:bg-blue-400/10 rounded-full">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                NEC Certified
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 dark:bg-yellow-400/10 rounded-full">
              <Heart className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300">
                Liberia Focused
              </span>
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold rounded-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <span className="text-sm">Back to Top</span>
            <span className="text-lg">↑</span>
          </motion.button>
        </div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            <strong>Note:</strong> All election technology discussions are
            confidential and protected. NEC-related projects follow strict
            security protocols. Inquiries from verified government and
            international organizations receive priority response.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
