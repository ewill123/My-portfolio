// src/app/components/Experience.tsx - UPDATED WITH CORRECT IMPORTS
"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Shield,
  Users,
  Globe,
  Code,
  Smartphone,
  Video,
  Award,
  Database,
  Lock,
  TrendingUp,
  Cloud,
  Server,
  MessageSquare,
  FileText,
  CheckCircle,
  Zap,
  MapPin,
  BookOpen,
  Satellite,
} from "lucide-react";

const experiences = [
  {
    title: "Election Technology Specialist & Live Broadcast Engineer",
    company: "National Election Commission (NEC) - Republic of Liberia",
    location: "Monrovia, Liberia",
    period: "2023 — Present",
    current: true,
    icon: Shield,
    highlights: [
      "Lead engineer for live-streaming Liberia's 2023 General Elections nationwide",
      "Developing NEC Companion - election app for citizen engagement & voter education",
      "Created payslip generation software for election staff payroll automation",
      "Built mobile money disbursement system for election worker payments",
      "Manage real-time broadcast of all NEC events and electoral processes",
      "Trained with EU Election Project on electoral transparency technologies",
    ],
    technologies: [
      "React",
      "Node.js",
      "RTMP Streaming",
      "AWS",
      "Mobile APIs",
      "Security Protocols",
    ],
  },
  {
    title: "Software Developer - Election Systems",
    company: "UNDP / European Union Election Project",
    location: "Monrovia, Liberia",
    period: "2023 — 2024",
    current: false,
    icon: Globe,
    highlights: [
      "UNDP-trained in digital communications & civic engagement technologies",
      "Developed secure digital forms for election monitoring and reporting",
      "Implemented citizen feedback systems for electoral transparency",
      "Created voter education platforms reaching 2M+ Liberians",
      "Collaborated with international election observation missions",
    ],
    technologies: [
      "React Native",
      "Python",
      "PostgreSQL",
      "Digital Security",
      "APIs",
    ],
  },
  {
    title: "Media Director & Live Production Lead",
    company: "Word of Life Outreach Ministries International",
    location: "Monrovia, Liberia",
    period: "2017 — Present",
    current: true,
    icon: Radio,
    highlights: [
      "Lead production for Africa's largest single church auditorium (10,000+ capacity)",
      "Manage team of 20+ media professionals across broadcast, streaming, and AV",
      "Produced 500+ live streams with 99.9% uptime reliability",
      "Implemented multi-camera broadcast systems for international viewership",
      "Created digital content strategy reaching 50,000+ weekly online viewers",
      "Trained church volunteers in media production and live streaming",
    ],
    technologies: [
      "OBS Studio",
      "vMix",
      "Blackmagic",
      "Sony",
      "Social Media API",
      "CDN",
    ],
  },
  {
    title: "Full-Stack Developer & Project Lead",
    company: "Freelance & Contract Projects",
    location: "Remote & Monrovia",
    period: "2024 — Present",
    current: true,
    icon: Code,
    highlights: [
      "Building AutoVerse Bible App - AI-powered scripture projection platform",
      "Created civic engagement platforms for youth voter registration",
      "Built church management systems with live streaming integration",
      "Consult on digital transformation for Liberian institutions",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "AI/ML",
      "Docker",
    ],
  },
];

const certifications = [
  {
    name: "UNDP Social Media Management & Digital Communications",
    issuer: "United Nations Development Programme",
    year: "2024",
    icon: Award,
  },
  {
    name: "EU Election Project - Electoral Technology Training",
    issuer: "European Union Election Observation Mission",
    year: "2025",
    icon: Shield,
  },
  {
    name: "Cisco CCNA - Network Engineering (In Progress)",
    issuer: "Cisco Networking Academy",
    year: "2025",
    icon: Server,
  },
  {
    name: "Certified Biometric Voter Registration Technician",
    issuer: "National Election Commission",
    year: "2024",
    icon: CheckCircle,
  },
  {
    name: "Live Streaming & Broadcast Engineering",
    issuer: "Professional Media Certification",
    year: "2017",
    icon: Satellite,
  },
];

const currentProjects = [
  {
    name: "NEC Companion",
    description:
      "Citizen election app for voting location, candidate info, real-time updates, and issue reporting",
    status: "Active Development",
    icon: Smartphone,
  },
  {
    name: "AutoVerse Bible App",
    description:
      "AutoVerse is the world’s first intelligent Bible projection & livestream software that listens to sermons in real-time and automatically displays the exact scripture the preacher references — in under 2 seconds.",
    status: "Active Development",
    icon: BookOpen,
  },
  {
    name: "Church Media Management Platform",
    description:
      "Integrated system for live streaming, member management, and digital giving",
    status: "Planning Phase",
    icon: Users,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Liberia&apos;s Digital Infrastructure
            </span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From national elections to nationwide broadcasts - engineering
            systems that impact millions
          </p>
        </motion.div>

        {/* Main Experience Timeline */}
        <div className="space-y-16 relative">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline Date */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 bg-yellow-600 dark:bg-yellow-400 rounded-full"></div>
                        <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-bold bg-yellow-600 dark:bg-yellow-400 text-white dark:text-gray-900 rounded-full">
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-10 hover:border-yellow-500/50 dark:hover:border-yellow-400/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 dark:from-yellow-400/10 dark:to-purple-400/10 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                            <Icon className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h3>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-lg mb-4">
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {exp.company}
                            </span>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                          Key Achievements & Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                                <div className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full"></div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {highlight}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Current Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              Certifications & Training
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-2xl transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              Active Projects
            </h3>
            <div className="space-y-6">
              {currentProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                          {project.name}
                        </h4>
                        <span className="inline-block px-3 py-1 mt-2 text-xs font-bold bg-yellow-600/20 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300 rounded-full">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-purple-500/10 dark:from-yellow-400/10 dark:to-purple-400/10 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Engineering Systems for National Impact
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              From securing democratic processes with NEC to connecting
              thousands through live broadcasts, I build technology that serves
              communities and strengthens institutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                  2M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Citizens Reached
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Live Productions
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                  10K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Weekly Audience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                  5
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  National Systems
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
