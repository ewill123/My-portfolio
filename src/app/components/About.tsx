"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Globe,
  Zap,
  Heart,
  TrendingUp,
  Code,
  Radio,
  Award,
  Smartphone,
  Store,
} from "lucide-react";

const STATS = [
  { value: "5+",   label: "Active Projects",  color: "text-amber-400"   },
  { value: "8+",   label: "Years in Tech",     color: "text-blue-400"    },
  { value: "50K+", label: "Weekly Viewers",    color: "text-emerald-400" },
  { value: "CCNA", label: "Cisco Certified",   color: "text-purple-400"  },
];

const ACHIEVEMENTS = [
  "Contributed to building the National Election Commission (NEC) website — personally presented it to the Board of Commissioners",
  "Lead media director at Word of Life Outreach — managing live streaming for one of Liberia's largest church audiences",
  "Built digital content strategy reaching 50K+ weekly online viewers across platforms",
  "UNDP & EU certified in digital communications and electoral technology (2023)",
  "Cisco CCNA certified in network engineering and security protocols",
];

const SKILL_GROUPS = [
  {
    title: "Full-Stack Development",
    icon: Code,
    color: "bg-blue-500/10 text-blue-400",
    border: "border-blue-500/20",
    skills: ["Next.js / React / TypeScript", "Node.js / Python / REST APIs", "Firebase / PostgreSQL / Redis", "CI/CD & Cloud Deployment"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    color: "bg-amber-500/10 text-amber-400",
    border: "border-amber-500/20",
    skills: ["Flutter / Dart (Cross-Platform)", "React Native / Expo", "Firebase Realtime Database", "Push Notifications & Auth"],
  },
  {
    title: "Live Media Production",
    icon: Radio,
    color: "bg-purple-500/10 text-purple-400",
    border: "border-purple-500/20",
    skills: ["vMix & OBS Live Streaming", "Multi-camera Production", "Large Venue AV Systems", "DaVinci Resolve / After Effects"],
  },
  {
    title: "Business System Design",
    icon: Store,
    color: "bg-emerald-500/10 text-emerald-400",
    border: "border-emerald-500/20",
    skills: ["Payroll & Payslip Automation", "School Management Platforms", "Delivery & Logistics Apps", "Marketplace & E-commerce"],
  },
];

const VALUES = [
  {
    title: "Built for Business",
    desc: "Software that generates real revenue and drives efficiency for Liberian businesses.",
    icon: TrendingUp,
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Technical Excellence",
    desc: "Production-grade quality — systems that are reliable, scalable, and secure.",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Human-Centered",
    desc: "Designed for real people — simple enough for everyday users, powerful enough for professionals.",
    icon: Heart,
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    title: "Liberia First",
    desc: "Every product is built with the Liberian market, infrastructure, and user in mind.",
    icon: Globe,
    gradient: "from-emerald-500/20 to-green-500/10",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0f] py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="section-divider mb-0" />
      <div className="absolute top-40 right-0 w-[600px] h-[400px] bg-amber-500/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Technology to{" "}
            <span className="text-gradient-amber">Empower Liberia</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I build software that helps Liberian businesses grow, schools run
            better, and communities thrive — one product at a time.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card card-hover p-6 text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </FadeIn>

        {/* Bio + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          {/* Photo */}
          <FadeIn className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/[0.07] rounded-3xl blur-2xl" />
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/projects/me 3.jpeg"
                  alt="Emmanuel Cheeseman"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0f0f14] border border-white/[0.08] rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl whitespace-nowrap">
                <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">CCNA Certified</div>
                  <div className="text-slate-500 text-xs">Cisco Networking Academy</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.1} className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Building Liberia&apos;s Digital Future
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I&apos;m Emmanuel Cheeseman — a technology entrepreneur and
                full-stack developer based in Monrovia, Liberia. I build
                software that solves real problems for real businesses: from
                automated payslip systems and school management platforms to
                delivery apps and agricultural marketplaces.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My work is driven by one belief:{" "}
                <span className="text-amber-400/90">
                  technology can transform the way Liberia does business.
                </span>{" "}
                Whether it&apos;s helping a school administrator manage
                hundreds of students or connecting farmers to buyers across the
                country, I build tools that create real value.
              </p>
            </div>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                See My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.08] text-white font-semibold text-sm rounded-xl border border-white/[0.1] transition-all"
              >
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Skill groups */}
        <FadeIn className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Domain Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.08 }}
                  className={`card card-hover p-6 border ${group.border}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${group.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-semibold">{group.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="w-1 h-1 bg-slate-600 rounded-full flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* Core values */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            How I Build
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="card card-hover p-6"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* Quote */}
        <FadeIn>
          <div className="relative card border border-amber-500/[0.15] p-8 md:p-10 text-center max-w-3xl mx-auto overflow-hidden">
            <div className="absolute -top-4 -left-4 text-amber-500/10 text-[120px] font-serif leading-none select-none">
              &ldquo;
            </div>
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed relative z-10">
              My goal is simple —{" "}
              <span className="text-gradient-amber">
                build software that makes Liberia&apos;s businesses unstoppable.
              </span>
            </p>
            <p className="text-slate-500 mt-4 text-sm">
              From Monrovia to the world, I&apos;m building the digital tools
              that will power West Africa&apos;s next generation of businesses.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
