// src/app/components/Projects.tsx - WITH AUTO VERSE DETAILS & INVESTMENT MODAL
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Globe,
  Smartphone,
  Shield,
  Users,
  Radio,
  Award,
  Lock,
  Wrench,
  Target,
  TrendingUp,
  DollarSign,
  Handshake,
  X,
  Mic,
  Projector,
  Cloud,
  Clock,
  BookOpen,
  Zap,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: "development" | "planning" | "proposal";
  category: "election" | "media" | "software" | "civic";
  impact: string;
  investmentNeeded?: boolean;
  investmentAmount?: string;
  timeline?: string;
  marketSize?: string;
  detailedFeatures?: string[];
}

const projects: Project[] = [
  {
    id: "autoverse",
    name: "AutoVerse Bible System",
    description:
      "World's first AI-powered live scripture projection system. Listens to sermons in real-time and automatically displays referenced scriptures in under 2 seconds.",
    tech: [
      "React/Next.js",
      "OpenAI Whisper",
      "Python",
      "WebSockets",
      "Real-time AI",
      "Bible API",
    ],
    status: "development",
    category: "software",
    impact: "Target: 500+ churches in 2 years",
    investmentNeeded: true,
    investmentAmount: "$25,000",
    timeline: "MVP in 4 months",
    marketSize: "Global church market: 3.7M churches",
    detailedFeatures: [
      "Real-time sermon listening with speech-to-text",
      "Projects Bible verses as they're spoken (<2s latency)",
      "Supports 100+ Bible translations",
      "Multi-translation comparison on screen",
      "Smart verse prediction & context understanding",
      "Beautiful customizable projection themes",
      "Works offline with local Bible database",
      "Cloud sync for multi-device teams",
      "Live stream overlay for YouTube/Facebook",
      "Integrated study tools & commentary",
    ],
  },
  {
    id: "nec-companion",
    name: "NEC Companion",
    description:
      "Citizen election mobile app for Liberia's 2029 electoral process. Voting location finder, candidate information, real-time NEC updates, and issue reporting.",
    tech: [
      "React Native",
      "Firebase",
      "Mapbox",
      "Node.js",
      "REST APIs",
      "Push Notifications",
    ],
    status: "development",
    category: "election",
    impact: "Target: 500K+ Liberian voters by 2029",
    investmentNeeded: true,
    investmentAmount: "$15,000",
    timeline: "Launch before 2029 Elections",
    marketSize: "2.5M registered voters in Liberia",
  },
  {
    id: "election-payments",
    name: "Election Staff Payment System",
    description:
      "Secure payroll processing system for election staff. Successfully processed payments during 2023 elections. (Proprietary - details classified)",
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Security Protocols",
      "Mobile Money API",
    ],
    status: "proposal",
    category: "election",
    impact: "Processed payments for 15K+ staff in 2023",
    investmentNeeded: true,
    investmentAmount: "$25,000",
    timeline: "Upgrade for 2029 Elections",
    marketSize: "50K+ election staff every cycle",
  },
  {
    id: "word-of-life-media",
    name: "Word of Life Media Production",
    description:
      "Currently managing live production for Africa's largest single church auditorium (10,000+ capacity). Weekly broadcasts reaching 50K+ online viewers.",
    tech: [
      "vMix",
      "Blackmagic",
      "NDI",
      "Social API",
      "Cloud Storage",
      "Live Encoding",
    ],
    status: "development",
    category: "media",
    impact: "50K+ weekly online viewers",
    investmentNeeded: false,
    timeline: "Current ongoing work",
  },
];

const projectStatus = {
  development: {
    label: "In Development",
    icon: Wrench,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  planning: {
    label: "Planning Phase",
    icon: Target,
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  proposal: {
    label: "Investment Ready",
    icon: TrendingUp,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
};

const projectCategories = {
  election: {
    label: "Election Technology",
    icon: Shield,
    color:
      "bg-gradient-to-br from-red-500/10 to-red-600/5 dark:from-red-900/20 dark:to-red-800/10",
  },
  media: {
    label: "Live Media",
    icon: Radio,
    color:
      "bg-gradient-to-br from-blue-500/10 to-blue-600/5 dark:from-blue-900/20 dark:to-blue-800/10",
  },
  software: {
    label: "Software",
    icon: Smartphone,
    color:
      "bg-gradient-to-br from-green-500/10 to-green-600/5 dark:from-green-900/20 dark:to-green-800/10",
  },
  civic: {
    label: "Civic Tech",
    icon: Users,
    color:
      "bg-gradient-to-br from-purple-500/10 to-purple-600/5 dark:from-purple-900/20 dark:to-purple-800/10",
  },
};

// Investment Modal Component
function InvestmentModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentInterest: project?.investmentAmount || "",
    message: `I'm interested in investing in ${project?.name}. Please send me more details.`,
    projectId: project?.id || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would connect to your email API
    console.log("Investment inquiry submitted:", formData);
    // For now, just show success and close
    alert(
      `Thank you for your interest in ${project?.name}! I'll contact you within 24 hours.`
    );
    onClose();
  };

  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Invest in{" "}
                  <span className="text-yellow-600 dark:text-yellow-400">
                    {project.name}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Let&apos;s discuss partnership opportunities
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="+231 77 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your organization"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Investment Amount You&apos;re Considering
              </label>
              <div className="flex gap-3 flex-wrap">
                {[
                  "$5,000",
                  "$10,000",
                  project.investmentAmount || "$25,000",
                  "$50,000",
                  "Other",
                ].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, investmentInterest: amount })
                    }
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      formData.investmentInterest === amount
                        ? "bg-yellow-500 border-yellow-500 text-gray-900"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-yellow-500"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Message *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Tell me about your investment goals and timeline..."
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                <span className="font-bold">Next Steps:</span> After submission,
                I&apos;ll contact you within 24 hours to schedule a detailed
                discussion about the project, business plan, and investment
                terms.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold rounded-lg transition-all hover:scale-105"
              >
                Submit Investment Inquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInvestmentClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        className="py-28 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
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
              Projects with{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
                Global Impact Potential
              </span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              From church technology revolutionizing worship to election systems
              strengthening democracy
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const StatusIcon = projectStatus[project.status].icon;
              const CategoryIcon = projectCategories[project.category].icon;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <article
                    className={`h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-700 group-hover:border-yellow-500/50 dark:group-hover:border-yellow-400/50 ${
                      projectCategories[project.category].color
                    }`}
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                            <CategoryIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                                  projectStatus[project.status].color
                                }`}
                              >
                                <StatusIcon className="w-3 h-3" />
                                {projectStatus[project.status].label}
                              </span>
                            </div>
                          </div>
                        </div>

                        {project.investmentNeeded && (
                          <button
                            onClick={() => handleInvestmentClick(project)}
                            className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all hover:scale-105"
                          >
                            <DollarSign className="w-4 h-4" />
                            Invest
                          </button>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Detailed Features for AutoVerse */}
                    {project.id === "autoverse" && project.detailedFeatures && (
                      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.detailedFeatures
                            .slice(0, 6)
                            .map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Impact */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Potential Impact
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {project.impact}
                        </p>
                      </div>

                      {/* Market Size */}
                      {project.marketSize && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Market Size
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {project.marketSize}
                          </p>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Investment Details */}
                      {project.investmentNeeded ? (
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                              <h4 className="font-bold text-gray-900 dark:text-white">
                                Investment Needed
                              </h4>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-black text-yellow-600 dark:text-yellow-400">
                                {project.investmentAmount}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">
                                Timeline:
                              </span>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {project.timeline}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">
                                Status:
                              </span>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {projectStatus[project.status].label}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => handleInvestmentClick(project)}
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold rounded-lg transition-all hover:scale-105"
                          >
                            <Handshake className="w-4 h-4" />
                            Discuss Investment Opportunity
                          </button>
                        </div>
                      ) : (
                        <a
                          href="#contact"
                          className="block w-full text-center px-4 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
                        >
                          Contact About This Project
                        </a>
                      )}
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>

          {/* Investment CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
            id="investment"
          >
            <div className="bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 dark:from-yellow-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded-full mb-6">
                  <Handshake className="w-5 h-5" />
                  Looking for Strategic Investors
                </div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Partner in Liberia&apos;s Tech Revolution
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  These projects need investors who see the potential in West
                  Africa&apos;s growing tech ecosystem. ROI includes both financial
                  returns and meaningful social impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400 mb-4">
                    $65K
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Total Investment Needed
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    For AutoVerse and NEC Companion to reach production
                  </p>
                </div>

                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400 mb-4">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Projects Seeking Partners
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Each with clear market need and competitive advantage
                  </p>
                </div>

                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-black text-yellow-600 dark:text-yellow-400 mb-4">
                    2029
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Key Launch Deadline
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    NEC Companion must launch before next national elections
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Investment Process
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  {[
                    {
                      step: "1",
                      title: "Initial Discussion",
                      desc: "Review business plan & demo",
                    },
                    {
                      step: "2",
                      title: "Term Sheet",
                      desc: "Agree on investment terms",
                    },
                    {
                      step: "3",
                      title: "Due Diligence",
                      desc: "Technical & market review",
                    },
                    {
                      step: "4",
                      title: "Funding & Launch",
                      desc: "Execute agreement & begin development",
                    },
                  ].map((item) => (
                    <div key={item.step} className="text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 text-gray-900 font-black text-xl flex items-center justify-center mx-auto mb-3">
                        {item.step}
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleInvestmentClick(projects[0])} // AutoVerse as default
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-black text-xl rounded-2xl transition-all hover:scale-105 shadow-2xl"
                >
                  <Handshake className="w-6 h-6" />
                  Schedule Investment Discussion
                </button>

                <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
                  Open to various investment structures: equity, convertible
                  notes, or project-based funding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Modal */}
      <InvestmentModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
