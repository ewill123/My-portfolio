"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Users,
  Radio,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Download,
  MessageCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name:     z.string().min(2, "Please enter your name").max(100),
  email:    z.string().email("Invalid email address"),
  company:  z.string().optional(),
  phone:    z.string().optional(),
  category: z.enum(["consulting", "project", "partnership", "media", "other"]),
  service:  z.string().optional(),
  message:  z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

const CATEGORIES = [
  { value: "consulting",  label: "Consulting",       icon: Briefcase,     desc: "Business systems, automation & digital transformation" },
  { value: "project",     label: "Hire Me",          icon: Briefcase,     desc: "Custom web, mobile, or full-stack development" },
  { value: "partnership", label: "Partnership",      icon: Users,         desc: "Government, NGO, or institutional collaboration" },
  { value: "media",       label: "Media Production", icon: Radio,         desc: "Live broadcast, streaming, or church media" },
  { value: "other",       label: "General",          icon: Globe,         desc: "Speaking, questions, or anything else" },
];

const SOCIAL = [
  { icon: Github,   href: "https://github.com/ewill123",                   label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuelcheeseman", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/EmmanuelCh39270",                label: "Twitter"  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { category: "project" },
  });

  const category = watch("category");

  useEffect(() => {
    fetch("/api/csrf")
      .then((r) => r.json())
      .then((d) => setCsrfToken(d.csrfToken))
      .catch(() => {});
  }, []);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, csrfToken }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const d = await res.json();
        setError(d.error || "Failed to send. Please try again.");
      }
    } catch {
      setError("An error occurred. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-slate-600 focus:border-amber-500/50 focus:outline-none focus:bg-white/[0.06] transition-all";

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0f] py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="section-divider mb-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-amber-500/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let&apos;s Build{" "}
            <span className="text-gradient-amber">Something Great</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you need a custom business system, a mobile app, or senior
            tech expertise — I&apos;m ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Info card */}
            <div className="card p-6 border border-amber-500/[0.1] space-y-5">
              <h3 className="text-white font-bold text-lg">Contact Details</h3>

              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "designlabliberia@gmail.com",
                  href: "mailto:designlabliberia@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+231 880 223 275",
                  href: "tel:+231880223275",
                },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+231 880 575 207",
                  href: `https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and I'd like to connect.")}`,
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Monrovia, Liberia",
                  href: null,
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs font-medium mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-300 text-sm hover:text-amber-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick action */}
            <a
              href={`https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and I'd like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 card p-5 hover:border-[#25D366]/30 transition-all group"
            >
              <div className="w-9 h-9 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">Chat on WhatsApp</div>
                <div className="text-slate-500 text-xs">Usually responds within the hour</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Social */}
            <div className="card p-5">
              <h4 className="text-white font-semibold text-sm mb-4">Find Me Online</h4>
              <div className="flex gap-3">
                {SOCIAL.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/[0.04] hover:bg-amber-400/10 border border-white/[0.07] hover:border-amber-500/20 text-slate-400 hover:text-amber-400 rounded-xl text-xs font-medium transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 card p-5 hover:border-amber-500/20 transition-all group"
            >
              <div className="w-9 h-9 bg-blue-400/10 rounded-xl flex items-center justify-center">
                <Download className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">Download Resume</div>
                <div className="text-slate-500 text-xs">PDF · Full CV</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Response expectations */}
            <div className="card p-5 space-y-2.5">
              <h4 className="text-white font-semibold text-sm mb-3">What to Expect</h4>
              {[
                "Response within 24 hours",
                "Detailed proposal in 3–5 days",
                "Project kickoff calls scheduled within 48 hours",
                "Partnership inquiries handled with care",
                "Confidential handling of all inquiries",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-400 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="card border border-white/[0.08] p-6 md:p-8 space-y-6"
          >
            {/* Category */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                What can I help with?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setValue("category", cat.value as FormData["category"])}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        category === cat.value
                          ? "border-amber-500/50 bg-amber-500/8 text-white"
                          : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/[0.15] hover:text-white"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg mb-2 flex items-center justify-center ${
                        category === cat.value ? "bg-amber-400/20" : "bg-white/[0.05]"
                      }`}>
                        <Icon className={`w-4 h-4 ${category === cat.value ? "text-amber-400" : "text-slate-500"}`} />
                      </div>
                      <div className="font-semibold text-xs">{cat.label}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5 leading-tight">{cat.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Consulting: service type selector */}
            {category === "consulting" && (
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                  Type of System / Service
                </label>
                <select {...register("service")} className={inputClass + " [color-scheme:dark]"}>
                  <option value="">Select a service</option>
                  <option value="Payroll / HR System">Payroll / HR System</option>
                  <option value="School Management System">School Management System</option>
                  <option value="Delivery Platform">Delivery Platform</option>
                  <option value="Agricultural / Marketplace App">Agricultural / Marketplace App</option>
                  <option value="Custom Business System">Custom Business System</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">Full Name *</label>
                <input {...register("name")} placeholder="John Smith" className={inputClass} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">Email Address *</label>
                <input {...register("email")} type="email" placeholder="john@example.com" className={inputClass} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">Company / Organization</label>
                <input {...register("company")} placeholder="Optional" className={inputClass} />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">Phone</label>
                <input {...register("phone")} placeholder="+231 77 123 4567" className={inputClass} />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1.5 block">Message *</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Describe your project, requirements, and timeline..."
                className={inputClass + " resize-none"}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Status messages */}
            {error && (
              <div className="p-3.5 bg-red-500/8 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}
            {submitted && (
              <div className="p-3.5 bg-emerald-500/8 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                Message sent! I&apos;ll reply within 24 hours.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-bold text-sm rounded-xl transition-all hover:shadow-[0_0_24px_rgba(245,158,11,0.3)]"
            >
              {loading ? (
                "Sending..."
              ) : submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Sent!
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-slate-600 text-xs">
              Prefer to call?{" "}
              <a href="tel:+231880223275" className="text-amber-400 hover:underline">
                +231 880 223 275
              </a>{" "}
              · All inquiries are confidential.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
