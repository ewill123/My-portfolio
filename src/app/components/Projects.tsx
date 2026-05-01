"use client";

import { useState, type ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  FileText,
  Users,
  Truck,
  ShoppingCart,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  images: string[];
  status: string;
  statusColor: string;
  category: string;
  categoryColor: string;
  Icon: ElementType;
  iconBg: string;
  iconColor: string;
  accentBorder: string;
  tech: string[];
  highlights: string[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "school",
    title: "School Management System",
    subtitle: "Role-Based Access for 4 User Types",
    desc: "A comprehensive platform where each type of user — Admin, Teacher, Student, and Parent — gets their own purpose-built interface with the exact tools they need. One system, four completely different experiences.",
    images: [
      "/projects/school.jpeg",
      "/projects/school 1.jpeg",
      "/projects/school3.jpeg",
      "/projects/school 4.jpeg",
    ],
    status: "In Development",
    statusColor: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
    category: "Education Technology",
    categoryColor: "bg-amber-500/10 text-amber-400",
    Icon: Users,
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-400",
    accentBorder: "border-amber-500/15",
    tech: ["Next.js", "TypeScript", "Firebase", "Role-Based Auth", "Tailwind CSS"],
    highlights: [
      "Separate dashboards for Admin, Teacher, Student, and Parent",
      "Attendance tracking, grade management, and class scheduling",
      "Parent-teacher messaging and student progress reports",
      "School-wide announcements and event management portal",
    ],
    featured: true,
  },
  {
    id: "payslip",
    title: "Payslip Generation System",
    subtitle: "Automated Payroll & Email Delivery",
    desc: "An automated system that generates professional PDF payslips and emails them directly to every staff member each month — completely hands-off. Set it up once, and it runs itself.",
    images: ["/projects/1.png"],
    status: "In Production",
    statusColor: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    category: "Business Automation",
    categoryColor: "bg-blue-500/10 text-blue-400",
    Icon: FileText,
    iconBg: "bg-blue-400/10",
    iconColor: "text-blue-400",
    accentBorder: "border-blue-500/15",
    tech: ["Next.js", "Node.js", "PDF Generation", "Email Automation", "PostgreSQL"],
    highlights: [
      "Auto-generates monthly payslips for all staff",
      "Emails each payslip directly to the employee's inbox",
      "PDF export and full payslip history archiving",
      "Admin dashboard to manage staff and pay periods",
    ],
  },
  {
    id: "delivery",
    title: "Delivery Application",
    subtitle: "Stores · Riders · Customers in One Platform",
    desc: "A full-featured delivery platform that brings stores, delivery riders, and customers together in a single seamless app. From order placement to doorstep delivery — fully automated.",
    images: [
      "/projects/delivery app.jpeg",
      "/projects/delivery app 1.jpeg",
      "/projects/delivery app 2.jpeg",
      "/projects/delivery app3.jpeg",
      "/projects/delivery app5.jpeg",
      "/projects/delivery app6.jpeg",
      "/projects/delivery app7.jpeg",
    ],
    status: "In Development",
    statusColor: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
    category: "On-Demand Delivery",
    categoryColor: "bg-purple-500/10 text-purple-400",
    Icon: Truck,
    iconBg: "bg-purple-400/10",
    iconColor: "text-purple-400",
    accentBorder: "border-purple-500/15",
    tech: ["React Native", "Node.js", "Firebase", "Maps API", "Real-Time Updates"],
    highlights: [
      "Multi-store listings and product catalog management",
      "Automated rider assignment the moment an order is placed",
      "Real-time order tracking for customers",
      "In-app payments and full order history",
    ],
  },
  {
    id: "agri",
    title: "Agricultural Marketplace",
    subtitle: "Built with Flutter · Farmers Community App",
    desc: "A Flutter-powered marketplace and community for Liberian farmers. Buy and sell crops, farm supplies, and equipment — while connecting with a community that helps each other grow.",
    images: ["/projects/farm.jpeg", "/projects/farm1.jpeg"],
    status: "In Development",
    statusColor: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
    category: "AgriTech",
    categoryColor: "bg-emerald-500/10 text-emerald-400",
    Icon: ShoppingCart,
    iconBg: "bg-emerald-400/10",
    iconColor: "text-emerald-400",
    accentBorder: "border-emerald-500/15",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Storage", "Community Features"],
    highlights: [
      "Marketplace for buying and selling farm products",
      "Farmer community forum — share advice, ask for help, connect",
      "Product listings with photos, pricing, and seller profiles",
      "Built in Flutter for a fast cross-platform mobile experience",
    ],
  },
  {
    id: "nec",
    title: "NEC Official Website",
    subtitle: "National Election Commission · Liberia",
    desc: "Contributed to developing the official website for Liberia's National Election Commission. A high-stakes civic project — presented the completed platform directly to NEC's Board of Commissioners.",
    images: ["/projects/5.png"],
    status: "Launched",
    statusColor: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    category: "Government & Civic",
    categoryColor: "bg-red-500/10 text-red-400",
    Icon: Globe,
    iconBg: "bg-red-400/10",
    iconColor: "text-red-400",
    accentBorder: "border-red-500/15",
    tech: ["Web Development", "CMS", "Civic Platform", "Live Streaming Integration"],
    highlights: [
      "Part of the core team that built the NEC website",
      "Personally presented the completed website to NEC's Board of Commissioners",
      "Official electoral information portal for the Republic of Liberia",
      "Integrated live streaming for public NEC press conferences",
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection]   = useState(1);
  const hasMultiple = project.images.length > 1;
  const Icon = project.Icon;

  const go = (newIndex: number) => {
    setDirection(newIndex > currentImg ? 1 : -1);
    setCurrentImg(newIndex);
  };

  const prev = () => go(currentImg === 0 ? project.images.length - 1 : currentImg - 1);
  const next = () => go(currentImg === project.images.length - 1 ? 0 : currentImg + 1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`card card-hover border ${project.accentBorder} overflow-hidden flex flex-col${
        project.featured ? " lg:col-span-2" : ""
      }`}
    >
      {/* ── Slideshow ── */}
      <div
        className={`relative w-full overflow-hidden bg-[#0f0f17] group${
          project.featured ? " h-60 sm:h-80" : " h-48 sm:h-56"
        }`}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentImg}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImg]}
              alt={`${project.title} screenshot ${currentImg + 1}`}
              fill
              className="object-cover object-top"
              sizes={
                project.featured
                  ? "(max-width: 1024px) 100vw, 1200px"
                  : "(max-width: 1024px) 100vw, 560px"
              }
              priority={index === 0 && currentImg === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Status badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${project.statusColor}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              project.status === "Launched" || project.status === "In Production"
                ? "bg-emerald-400"
                : "bg-amber-400 animate-pulse"
            }`} />
            {project.status}
          </span>
        </div>

        {/* Prev / Next arrows — visible on hover */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/55 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/75 active:bg-black/75 transition-all duration-200"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/55 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/75 active:bg-black/75 transition-all duration-200"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === currentImg
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}

        {/* Counter badge */}
        {hasMultiple && (
          <div className="absolute bottom-3 right-3 z-10 text-[10px] text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {currentImg + 1} / {project.images.length}
          </div>
        )}
      </div>

      {/* ── Card content ── */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-3 ${project.categoryColor}`}>
            {project.category}
          </span>
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${project.iconBg}`}>
              <Icon className={`w-5 h-5 ${project.iconColor}`} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
              <p className="text-slate-500 text-sm">{project.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.desc}</p>

        {/* Highlights */}
        <div className="space-y-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-400 text-xs leading-relaxed">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-slate-400 text-xs rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-white/[0.06]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors group"
          >
            Discuss This Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0f] py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="section-divider mb-0" />
      <div className="absolute top-20 left-0 w-[500px] h-[400px] bg-amber-500/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Software I&apos;m{" "}
            <span className="text-gradient-amber">Building</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real products solving real problems — from school management to
            agricultural marketplaces. Built for Liberia, designed for growth.
          </p>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-16"
        >
          {[
            { value: "5",  label: "Projects"       },
            { value: "4",  label: "In Development" },
            { value: "1",  label: "Launched"       },
          ].map((s) => (
            <div key={s.label} className="card p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">{s.value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card border border-amber-500/[0.12] p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need a custom business system, a mobile app, or a
            complete digital platform — let&apos;s talk about what you&apos;re
            building and how I can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold rounded-xl transition-all hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/231880575207?text=${encodeURIComponent("Hello Emmanuel, I visited your portfolio and I'd like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-semibold rounded-xl border border-[#25D366]/25 hover:border-[#25D366]/50 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
