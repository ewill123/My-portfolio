"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await emailjs.send(
        "service_eaufszn",
        "template_xq65jvj",
        { ...form, time: new Date().toLocaleString() },
        "eXeSZDtXChLe9ZJrZ"
      );

      if (res.status === 200) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else setError("Failed to send message. Please try again.");
    } catch (err: any) {
      setError(err?.text || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 md:px-16 py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col gap-6 w-full max-w-lg"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          I’m open to projects, collaborations, and freelance opportunities.
          Reach out via form or contact info below.
        </p>

        <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-500" />
            <span>designlabliberia@gmail.com</span>
          </div>
          {["+231880223272", "+231880575207", "+231777567849"].map((num) => (
            <div key={num} className="flex items-center gap-3">
              <Phone className="text-yellow-500" />
              <span>{num}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/ewill123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-500 transition transform hover:scale-125" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-500 transition transform hover:scale-125" />
          </a>
          <a
            href="https://x.com/EmmanuelCh39270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-500 transition transform hover:scale-125" />
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className="flex-1 w-full max-w-md bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-sm sm:text-base"
        />
        {error && (
          <div className="text-red-400 text-sm sm:text-base font-medium">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 bg-yellow-500 text-black font-semibold rounded-lg px-4 py-3 hover:scale-105 transition shadow-lg ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading
            ? "Sending..."
            : submitted
            ? "Message Sent!"
            : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}
