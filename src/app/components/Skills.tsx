// src/app/components/Skills.tsx - FIXED VERSION
"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiDocker,
  SiAmazon, // Fixed: Changed from SiAmazonaws to SiAmazon
  SiMapbox,
  SiGit,
  SiOpenai,
  SiRedis,
  SiGooglecloud,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiBlender,
} from "react-icons/si";
import {
  Shield,
  Radio,
  Database,
  Users,
  Globe,
  Lock,
  Cpu,
  Zap,
  Cloud,
  Smartphone,
  Video,
  BarChart,
  Target,
  Award,
  TrendingUp,
  Server,
  MessageSquare,
} from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
    category: "development" | "election" | "media" | "infrastructure";
    level: number; // 1-5
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Election Systems",
    description: "National-scale election technology and infrastructure",
    icon: <Shield className="w-6 h-6" />,
    skills: [
      {
        name: "Live Election Broadcasting",
        icon: <Radio className="w-5 h-5" />,
        category: "election",
        level: 5,
      },
      {
        name: "Biometric Voter Systems",
        icon: <Lock className="w-5 h-5" />,
        category: "election",
        level: 4,
      },
      {
        name: "Results Transmission",
        icon: <Database className="w-5 h-5" />,
        category: "election",
        level: 5,
      },
      {
        name: "Mobile Money Payments",
        icon: <Smartphone className="w-5 h-5" />,
        category: "election",
        level: 4,
      },
      {
        name: "GIS Mapping & Location",
        icon: <Globe className="w-5 h-5" />,
        category: "election",
        level: 4,
      },
      {
        name: "Election Staff Management",
        icon: <Users className="w-5 h-5" />,
        category: "election",
        level: 5,
      },
    ],
  },
  {
    title: "Full-Stack Development",
    description: "Modern web & mobile application development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: "Next.js 14 / React",
        icon: <SiNextdotjs className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
      {
        name: "React Native",
        icon: <SiReact className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
      {
        name: "Python / Django",
        icon: <SiPython className="w-5 h-5" />,
        category: "development",
        level: 4,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-5 h-5" />,
        category: "development",
        level: 4,
      },
      {
        name: "REST & GraphQL APIs",
        icon: <Zap className="w-5 h-5" />,
        category: "development",
        level: 5,
      },
    ],
  },
  {
    title: "Live Media & Production",
    description: "Large-scale broadcast and multimedia production",
    icon: <Video className="w-6 h-6" />,
    skills: [
      {
        name: "vMix & OBS Live Streaming",
        icon: <Radio className="w-5 h-5" />,
        category: "media",
        level: 5,
      },
      {
        name: "Multi-camera Production",
        icon: <Video className="w-5 h-5" />,
        category: "media",
        level: 5,
      },
      {
        name: "DaVinci Resolve",
        icon: <Video className="w-5 h-5" />,
        category: "media",
        level: 4,
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects className="w-5 h-5" />,
        category: "media",
        level: 4,
      },
      {
        name: "Blender 3D",
        icon: <SiBlender className="w-5 h-5" />,
        category: "media",
        level: 4,
      },
      {
        name: "Social Media Broadcasting",
        icon: <MessageSquare className="w-5 h-5" />,
        category: "media",
        level: 5,
      },
      {
        name: "Large Venue AV Systems",
        icon: <Users className="w-5 h-5" />,
        category: "media",
        level: 5,
      },
    ],
  },
  {
    title: "Infrastructure & AI",
    description: "Cloud infrastructure and intelligent systems",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      {
        name: "AWS Cloud Services",
        icon: <SiAmazon className="w-5 h-5" />,
        category: "infrastructure",
        level: 4,
      },
      {
        name: "Docker & Deployment",
        icon: <SiDocker className="w-5 h-5" />,
        category: "infrastructure",
        level: 4,
      },
      {
        name: "Real-time AI Systems",
        icon: <Cpu className="w-5 h-5" />,
        category: "infrastructure",
        level: 4,
      },
      {
        name: "OpenAI API Integration",
        icon: <SiOpenai className="w-5 h-5" />,
        category: "infrastructure",
        level: 4,
      },
      {
        name: "Redis Caching",
        icon: <SiRedis className="w-5 h-5" />,
        category: "infrastructure",
        level: 3,
      },
      {
        name: "System Architecture",
        icon: <BarChart className="w-5 h-5" />,
        category: "infrastructure",
        level: 4,
      },
      {
        name: "Git & CI/CD",
        icon: <SiGit className="w-5 h-5" />,
        category: "infrastructure",
        level: 5,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From national election systems to global church technology — the
            tools and expertise for mission-critical projects
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                    <div className="text-gray-900">{category.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Category Stats */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-yellow-600 dark:text-yellow-400">
                      {category.skills.length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Skills
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-yellow-600 dark:text-yellow-400">
                      {Math.round(
                        (category.skills.reduce(
                          (acc, skill) => acc + skill.level,
                          0
                        ) /
                          category.skills.length) *
                          20
                      )}
                      %
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Mastery
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group p-4 bg-gray-50 dark:bg-gray-800/30 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-amber-50 dark:hover:from-yellow-900/10 dark:hover:to-amber-900/10 border border-gray-200 dark:border-gray-700 rounded-xl transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            skill.category === "election"
                              ? "bg-red-500/20 text-red-600 dark:text-red-400"
                              : skill.category === "development"
                              ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                              : skill.category === "media"
                              ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                              : "bg-green-500/20 text-green-600 dark:text-green-400"
                          }`}
                        >
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition">
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Proficiency</span>
                        <span className="font-bold">{skill.level * 20}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            skill.level === 5
                              ? "w-full bg-gradient-to-r from-green-500 to-emerald-500"
                              : skill.level === 4
                              ? "w-4/5 bg-gradient-to-r from-blue-500 to-cyan-500"
                              : skill.level === 3
                              ? "w-3/5 bg-gradient-to-r from-yellow-500 to-amber-500"
                              : skill.level === 2
                              ? "w-2/5 bg-gradient-to-r from-orange-500 to-red-500"
                              : "w-1/5 bg-gradient-to-r from-gray-400 to-gray-500"
                          }`}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <span
                            key={num}
                            className={
                              num <= skill.level
                                ? "font-bold text-gray-700 dark:text-gray-300"
                                : ""
                            }
                          >
                            {num}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification & Training */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 dark:from-yellow-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-full mb-6">
                <Award className="w-5 h-5" />
                Certified Expertise
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Training & Certifications
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Formal training from international organizations and technical
                certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "UNDP Digital Communications",
                  organization: "United Nations Development Programme",
                  year: "2023",
                  icon: <Globe className="w-6 h-6" />,
                  description: "Social media management & civic engagement",
                },
                {
                  title: "EU Election Technology",
                  organization: "European Union Election Project",
                  year: "2023",
                  icon: <Shield className="w-6 h-6" />,
                  description: "Electoral transparency & monitoring systems",
                },
                {
                  title: "Cisco CCNA (In Progress)",
                  organization: "Cisco Networking Academy",
                  year: "2024",
                  icon: <Server className="w-6 h-6" />,
                  description: "Network engineering & security",
                },
              ].map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-white/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{cert.organization}</span>
                        <span>•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools in Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tools in Action
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
            {[
              {
                Icon: SiNextdotjs,
                name: "Next.js",
                color: "text-black dark:text-white",
              },
              {
                Icon: SiTypescript,
                name: "TypeScript",
                color: "text-blue-600",
              },
              { Icon: SiReact, name: "React Native", color: "text-cyan-500" },
              { Icon: SiPython, name: "Python", color: "text-yellow-500" },
              { Icon: SiFirebase, name: "Firebase", color: "text-orange-500" },
              {
                Icon: SiPostgresql,
                name: "PostgreSQL",
                color: "text-blue-400",
              },
              { Icon: SiAmazon, name: "AWS", color: "text-orange-400" }, // Fixed: Using SiAmazon
              { Icon: SiOpenai, name: "OpenAI", color: "text-green-400" },
              { Icon: SiGit, name: "Git", color: "text-orange-600" },
              { Icon: SiDocker, name: "Docker", color: "text-blue-500" },
              { Icon: Radio, name: "vMix", color: "text-purple-500" },
              { Icon: SiBlender, name: "Blender", color: "text-orange-500" },
              { Icon: Video, name: "DaVinci", color: "text-yellow-600" },
              {
                Icon: SiAdobeaftereffects,
                name: "AE",
                color: "text-purple-600",
              },
              { Icon: SiFigma, name: "Figma", color: "text-purple-500" },
              { Icon: Shield, name: "NEC Systems", color: "text-red-500" },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <tool.Icon className={`w-8 h-8 ${tool.color} mx-auto`} />
                </div>
                <span className="mt-3 block text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
