// src/app/components/About.tsx - FIXED VERSION
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cpu,
  Globe,
  Shield,
  Radio,
  Database,
  Lock,
  Zap,
  Cloud,
  Smartphone,
  Users,
  Award,
  TrendingUp,
  Server,
  Code,
  Video,
  Palette,
  BarChart,
  Heart,
  Target,
  CheckCircle,
} from "lucide-react";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon: React.ReactNode;
    level: "expert" | "advanced" | "proficient";
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Election Technology",
    skills: [
      {
        name: "Election Systems Architecture",
        icon: <Shield className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Biometric Voter Registration",
        icon: <Lock className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Live Election Broadcast",
        icon: <Radio className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Results Transmission Systems",
        icon: <Database className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Election Staff Management",
        icon: <Users className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Mobile Money Payments",
        icon: <Smartphone className="w-4 h-4" />,
        level: "proficient",
      },
    ],
  },
  {
    category: "Software Development",
    skills: [
      {
        name: "Next.js / React Native",
        icon: <Code className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "TypeScript / Python",
        icon: <Server className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Real-time AI Systems",
        icon: <Cpu className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Firebase / PostgreSQL",
        icon: <Database className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "AWS / Cloud Infrastructure",
        icon: <Cloud className="w-4 h-4" />,
        level: "proficient",
      },
      {
        name: "API Design & Integration",
        icon: <Zap className="w-4 h-4" />,
        level: "expert",
      },
    ],
  },
  {
    category: "Live Media & Production",
    skills: [
      {
        name: "Live Broadcast Engineering",
        icon: <Radio className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Multi-camera Production",
        icon: <Video className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "vMix / OBS Streaming",
        icon: <Globe className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "10,000+ Audience Events",
        icon: <Users className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "Graphic Design & Motion",
        icon: <Palette className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Social Media Broadcasting",
        icon: <TrendingUp className="w-4 h-4" />,
        level: "advanced",
      },
    ],
  },
  {
    category: "National Systems & Impact",
    skills: [
      {
        name: "UNDP Digital Training",
        icon: <Award className="w-4 h-4" />,
        level: "expert",
      },
      {
        name: "EU Election Projects",
        icon: <Globe className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "System Scalability",
        icon: <BarChart className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Security Protocols",
        icon: <Lock className="w-4 h-4" />,
        level: "proficient",
      },
      {
        name: "Team Leadership",
        icon: <Users className="w-4 h-4" />,
        level: "advanced",
      },
      {
        name: "Project Management",
        icon: <Target className="w-4 h-4" />,
        level: "proficient",
      },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Building at the{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Intersection
            </span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Where election technology meets live media, and national systems
            meet human impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile & Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-8 ring-yellow-500/20 shadow-2xl mx-auto">
                <Image
                  src="/ema.jpeg"
                  alt="Emmanuel Cheeseman"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent rings */}
              <div className="absolute -inset-4 rounded-full ring-4 ring-yellow-500/30 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full ring-2 ring-purple-500/20 animate-pulse delay-1000"></div>
            </div>

            {/* Core Philosophy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Mission-Driven Technology
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I don&apos;t just build software — I build{" "}
                <strong className="text-yellow-600 dark:text-yellow-400">
                  systems that serve nations
                </strong>
                . From Liberia&apos;s election infrastructure to global church
                technology, my work focuses on impact at scale.
              </p>

              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Live-streamed 2023 Liberia Elections
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Trained by UNDP & European Union
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Lead media for 10,000+ capacity church
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                    {categoryIndex === 0 ? (
                      <Shield className="w-4 h-4 text-gray-900" />
                    ) : categoryIndex === 1 ? (
                      <Code className="w-4 h-4 text-gray-900" />
                    ) : categoryIndex === 2 ? (
                      <Radio className="w-4 h-4 text-gray-900" />
                    ) : (
                      <Award className="w-4 h-4 text-gray-900" />
                    )}
                  </div>
                  {category.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/30 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition-all cursor-pointer"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          skill.level === "expert"
                            ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                            : skill.level === "advanced"
                            ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                            : "bg-green-500/20 text-green-600 dark:text-green-400"
                        }`}
                      >
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition">
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded-full ${
                              skill.level === "expert"
                                ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                                : skill.level === "advanced"
                                ? "bg-blue-500/20 text-blue-700 dark:text-blue-300"
                                : "bg-green-500/20 text-green-700 dark:text-green-300"
                            }`}
                          >
                            {skill.level.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3].map((level) => (
                            <div
                              key={level}
                              className={`h-1 rounded-full flex-1 ${
                                level <=
                                (skill.level === "expert"
                                  ? 3
                                  : skill.level === "advanced"
                                  ? 2
                                  : 1)
                                  ? skill.level === "expert"
                                    ? "bg-yellow-500"
                                    : skill.level === "advanced"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                                  : "bg-gray-200 dark:bg-gray-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Building With Purpose
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every system I build is guided by these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "National Impact",
                description: "Systems that serve millions, not just thousands",
                icon: <Globe className="w-8 h-8" />,
                color: "from-red-500 to-pink-500",
              },
              {
                title: "Technical Excellence",
                description: "Production-grade systems with 99.9% reliability",
                icon: <Zap className="w-8 h-8" />,
                color: "from-yellow-500 to-amber-500",
              },
              {
                title: "Human-Centered",
                description:
                  "Technology that empowers real people and communities",
                icon: <Heart className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Architected for growth from 100 to 1,000,000 users",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-purple-500/10 dark:from-yellow-400/10 dark:to-purple-400/10 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              &quot;I don&apos;t just write code —{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
                I architect systems that shape nations.
              </span>
              &quot;
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether it&apos;s Liberia&apos;s next election or a global church
              technology platform, I&apos;m building the digital infrastructure
              for West Africa&apos;s future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
