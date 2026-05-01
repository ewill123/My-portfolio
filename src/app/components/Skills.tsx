"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiAmazon,
  SiGit,
  SiOpenai,
  SiRedis,
  SiFigma,
  SiAdobeaftereffects,
  SiBlender,
} from "react-icons/si";
import {
  Shield,
  Radio,
  Database,
  Users,
  Globe,
  Zap,
  Smartphone,
  Video,
  BarChart,
  Server,
  MessageSquare,
  Award,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "broadcast",
    title: "Live Broadcasting & Events",
    subtitle: "Large-scale event production & streaming",
    accent: "red",
    skills: [
      { name: "Live Event Broadcasting",    icon: Radio,      level: 100 },
      { name: "Multi-camera Production",    icon: Video,      level: 96  },
      { name: "Large Venue AV Systems",     icon: Users,      level: 92  },
      { name: "Staff & Payroll Automation", icon: Database,   level: 88  },
      { name: "Digital Communications",     icon: Globe,      level: 84  },
      { name: "Mobile Money Integration",   icon: Smartphone, level: 72  },
    ],
  },
  {
    id: "dev",
    title: "Full-Stack Development",
    subtitle: "Modern web & mobile applications",
    accent: "blue",
    skills: [
      { name: "Next.js / React",         icon: SiNextdotjs, level: 96 },
      { name: "TypeScript",              icon: SiTypescript, level: 94 },
      { name: "React Native",            icon: SiReact,      level: 92 },
      { name: "Node.js",                 icon: SiNodedotjs,  level: 90 },
      { name: "Firebase",                icon: SiFirebase,   level: 88 },
      { name: "REST & GraphQL APIs",     icon: Zap,          level: 90 },
      { name: "Python",                  icon: SiPython,     level: 80 },
      { name: "PostgreSQL",              icon: SiPostgresql, level: 78 },
    ],
  },
  {
    id: "media",
    title: "Live Media & Production",
    subtitle: "Large-scale broadcast & multimedia",
    accent: "purple",
    skills: [
      { name: "vMix & OBS Live Streaming", icon: Radio,              level: 100 },
      { name: "Multi-camera Production",   icon: Video,              level: 96  },
      { name: "Large Venue AV Systems",    icon: Users,              level: 94  },
      { name: "Social Media Broadcasting", icon: MessageSquare,      level: 90  },
      { name: "DaVinci Resolve",           icon: Video,              level: 82  },
      { name: "After Effects",             icon: SiAdobeaftereffects,level: 80  },
      { name: "Blender 3D",                icon: SiBlender,          level: 76  },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & AI",
    subtitle: "Cloud platforms and intelligent systems",
    accent: "emerald",
    skills: [
      { name: "Git & CI/CD",             icon: SiGit,    level: 92 },
      { name: "AWS Cloud Services",      icon: SiAmazon, level: 80 },
      { name: "Docker & Deployment",     icon: SiDocker, level: 78 },
      { name: "OpenAI API Integration",  icon: SiOpenai, level: 80 },
      { name: "System Architecture",     icon: BarChart, level: 84 },
      { name: "Redis Caching",           icon: SiRedis,  level: 68 },
    ],
  },
];

const TOOLS = [
  { Icon: SiNextdotjs,       name: "Next.js",      color: "text-white" },
  { Icon: SiTypescript,      name: "TypeScript",   color: "text-blue-400" },
  { Icon: SiReact,           name: "React",        color: "text-cyan-400" },
  { Icon: SiPython,          name: "Python",       color: "text-yellow-400" },
  { Icon: SiFirebase,        name: "Firebase",     color: "text-orange-400" },
  { Icon: SiPostgresql,      name: "PostgreSQL",   color: "text-sky-400" },
  { Icon: SiAmazon,          name: "AWS",          color: "text-orange-300" },
  { Icon: SiOpenai,          name: "OpenAI",       color: "text-emerald-400" },
  { Icon: SiGit,             name: "Git",          color: "text-orange-500" },
  { Icon: SiDocker,          name: "Docker",       color: "text-blue-500" },
  { Icon: Radio,             name: "vMix",         color: "text-purple-400" },
  { Icon: SiBlender,         name: "Blender",      color: "text-orange-400" },
  { Icon: SiAdobeaftereffects, name: "After Effects", color: "text-purple-500" },
  { Icon: SiFigma,           name: "Figma",        color: "text-pink-400" },
  { Icon: Shield,            name: "NEC Systems",  color: "text-red-400" },
  { Icon: Server,            name: "Node.js",      color: "text-green-400" },
];

const ACCENT_COLORS: Record<string, { bar: string; bg: string; text: string }> = {
  red:     { bar: "bg-red-500",     bg: "bg-red-500/10",     text: "text-red-400" },
  blue:    { bar: "bg-blue-500",    bg: "bg-blue-500/10",    text: "text-blue-400" },
  purple:  { bar: "bg-purple-500",  bg: "bg-purple-500/10",  text: "text-purple-400" },
  emerald: { bar: "bg-emerald-500", bg: "bg-emerald-500/10", text: "text-emerald-400" },
};

const CERTS = [
  {
    title: "UNDP Digital Communications",
    org: "United Nations Development Programme",
    year: "2023",
    icon: Globe,
    desc: "Social media management & civic engagement strategy",
  },
  {
    title: "EU Election Technology",
    org: "European Union Election Project",
    year: "2023",
    icon: Shield,
    desc: "Electoral transparency & monitoring systems",
  },
  {
    title: "Cisco CCNA",
    org: "Cisco Networking Academy",
    year: "2025",
    icon: Server,
    desc: "Network engineering, routing & security protocols",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0f] py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="section-divider mb-0" />

      <div className="absolute bottom-40 left-0 w-[500px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Technical{" "}
            <span className="text-gradient-amber">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From national election infrastructure to global media platforms —
            the full stack for mission-critical work.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-6 mb-16">
          {CATEGORIES.map((cat, ci) => {
            const colors = ACCENT_COLORS[cat.accent];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.07 }}
                className="card card-hover p-6 md:p-8"
              >
                {/* Category header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className={`text-xl font-bold text-white mb-0.5`}>
                      {cat.title}
                    </h3>
                    <p className="text-slate-500 text-sm">{cat.subtitle}</p>
                  </div>
                  <div className={`text-xs font-bold px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} self-start sm:self-auto`}>
                    {cat.skills.length} skills
                  </div>
                </div>

                {/* Skill bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.skills.map((skill, si) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.05 + si * 0.04 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${colors.bg} ${colors.text} flex-shrink-0`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-xs font-bold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: ci * 0.05 + si * 0.04, ease: "easeOut" }}
                            className={`h-full ${colors.bar} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="card card-hover p-3 flex flex-col items-center gap-2 cursor-default"
              >
                <tool.Icon className={`w-6 h-6 ${tool.color}`} />
                <span className="text-slate-500 text-[10px] font-medium text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border border-amber-500/[0.12] p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Certifications & Training</h3>
              <p className="text-slate-500 text-sm">Formal credentials from international organizations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 hover:border-amber-500/20 transition-all"
                >
                  <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">
                    {cert.title}
                  </h4>
                  <p className="text-amber-400/70 text-xs mb-2">
                    {cert.org} · {cert.year}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {cert.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
