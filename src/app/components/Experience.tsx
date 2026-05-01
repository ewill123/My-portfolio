"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Radio,
  Code,
  MapPin,
  Award,
  TrendingUp,
  Server,
  CheckCircle,
  FileText,
  Users,
  Truck,
  ShoppingCart,
} from "lucide-react";

const EXPERIENCES = [
  {
    title: "Web Developer & Technical Presenter",
    company: "National Election Commission (NEC)",
    sub: "Republic of Liberia",
    location: "Monrovia, Liberia",
    period: "2023",
    current: false,
    Icon: Globe,
    accentColor: "text-red-400",
    accentBg: "bg-red-400/10",
    accentBorder: "border-red-500/20",
    highlights: [
      "Contributed to the development of the National Election Commission's official website as part of the core team",
      "Personally presented the completed website to NEC's Board of Commissioners — representing the technical team",
      "Managed live streaming and broadcast for NEC press conferences and public electoral events",
      "Trained by UNDP and the EU Election Observation Mission on digital communications and electoral technology",
    ],
    tech: ["Web Development", "Live Streaming", "Digital Communications", "CMS"],
  },
  {
    title: "Media Director & Live Production Lead",
    company: "Word of Life Outreach Ministries International",
    sub: "",
    location: "Monrovia, Liberia",
    period: "2017 — Present",
    current: true,
    Icon: Radio,
    accentColor: "text-purple-400",
    accentBg: "bg-purple-400/10",
    accentBorder: "border-purple-500/20",
    highlights: [
      "Lead all live media production for Word of Life — one of Liberia's largest church audiences",
      "Manage a team of media professionals across live streaming, broadcast, and AV operations",
      "Produce weekly live streams reaching 50,000+ viewers across YouTube, Facebook, and custom platforms",
      "Built a digital content strategy that turned a local church into a global online audience",
      "Oversee multi-camera production for major events, conferences, and special programs",
    ],
    tech: ["OBS Studio", "vMix", "Blackmagic Design", "Sony Cameras", "Social Media API", "CDN"],
  },
  {
    title: "Full-Stack Developer & Technology Entrepreneur",
    company: "Independent / Contract Work",
    sub: "",
    location: "Monrovia & Remote",
    period: "2022 — Present",
    current: true,
    Icon: Code,
    accentColor: "text-amber-400",
    accentBg: "bg-amber-400/10",
    accentBorder: "border-amber-500/20",
    highlights: [
      "Building a Payslip Generation System that auto-generates PDF payslips and emails them to every staff member monthly — zero manual work",
      "Developing a School Management System with role-based access — Admins, Teachers, Students, and Parents each get a purpose-built dashboard",
      "Building a Delivery Application connecting stores, riders, and customers in one automated platform — from order to doorstep",
      "Developing an Agricultural Marketplace App in Flutter — a community where Liberian farmers buy, sell, and support each other",
      "Consulting on digital transformation for businesses and organizations across Liberia",
    ],
    tech: ["Next.js", "TypeScript", "Flutter", "React Native", "Firebase", "Node.js", "PostgreSQL"],
  },
];

const CERTS = [
  {
    name: "UNDP Social Media Management & Digital Communications",
    issuer: "United Nations Development Programme",
    year: "2023",
    Icon: Award,
  },
  {
    name: "EU Election Project — Electoral Technology Training",
    issuer: "European Union Election Observation Mission",
    year: "2023",
    Icon: CheckCircle,
  },
  {
    name: "Cisco CCNA — Network Engineering & Security",
    issuer: "Cisco Networking Academy",
    year: "2025",
    Icon: Server,
  },
];

const ACTIVE_PRODUCTS = [
  {
    name: "Payslip Generation System",
    desc: "Auto-generates and emails monthly payslips to staff — fully automated.",
    Icon: FileText,
    status: "In Production",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "School Management System",
    desc: "Role-based platform for Admin, Teacher, Student, and Parent — each with a unique UI.",
    Icon: Users,
    status: "In Development",
    statusColor: "text-amber-400 bg-amber-400/10",
  },
  {
    name: "Delivery Application",
    desc: "Stores + riders + customers in one automated delivery platform.",
    Icon: Truck,
    status: "In Development",
    statusColor: "text-amber-400 bg-amber-400/10",
  },
  {
    name: "Agricultural Marketplace (Flutter)",
    desc: "Farmers marketplace and community app — buy, sell, and help each other.",
    Icon: ShoppingCart,
    status: "In Development",
    statusColor: "text-amber-400 bg-amber-400/10",
  },
];

const IMPACT = [
  { value: "4+",   label: "Products Built"       },
  { value: "8+",   label: "Years in Tech"         },
  { value: "50K+", label: "Weekly Viewers"        },
  { value: "3",    label: "Certifications Earned" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#0a0a0f] py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="section-divider mb-0" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-amber-500/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Work Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            A Track Record of{" "}
            <span className="text-gradient-amber">Real Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From live broadcasts and government websites to automated business
            systems — built with intention, delivered with precision.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => {
              const Icon = exp.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-0 md:pl-16"
                >
                  <div className={`hidden md:flex absolute left-3 top-8 w-5 h-5 rounded-full ${exp.accentBg} border ${exp.accentBorder} items-center justify-center -translate-x-1/2`}>
                    <div className={`w-2 h-2 rounded-full ${exp.accentBg.replace("/10", "")}`} />
                  </div>

                  <div className={`card card-hover border ${exp.accentBorder} p-6 md:p-8`}>
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${exp.accentBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${exp.accentColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white leading-snug">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/25">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                          <span className="text-slate-300 font-medium">
                            {exp.company}
                            {exp.sub && (
                              <span className="text-slate-500 font-normal"> — {exp.sub}</span>
                            )}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                          <span className={`font-semibold ${exp.accentColor}`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-white/[0.04] border border-white/[0.07] text-slate-400 text-xs font-medium rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${exp.accentColor.replace("text-", "bg-")}`} />
                          <span className="text-slate-400 text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications + Active Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Certs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTS.map((cert, i) => {
                const Icon = cert.Icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-9 h-9 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium leading-snug">
                        {cert.name}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {cert.issuer} · {cert.year}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Active Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-400/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Active Products</h3>
            </div>
            <div className="space-y-4">
              {ACTIVE_PRODUCTS.map((prod, i) => {
                const Icon = prod.Icon;
                return (
                  <div
                    key={i}
                    className="card p-4 hover:border-amber-500/[0.2] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{prod.name}</div>
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full mt-0.5 ${prod.statusColor}`}>
                          {prod.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{prod.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border border-amber-500/[0.1] p-8 md:p-10"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
