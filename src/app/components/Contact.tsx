// src/app/components/Contact.tsx - FIXED VERSION
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowRight,
  MessageSquare,
  Handshake,
  Briefcase,
  Globe,
  CheckCircle,
  DollarSign,
  Building,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  category: z.enum(["investment", "project", "partnership", "media", "other"]),
  project: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
});

type FormData = z.infer<typeof formSchema>;

const contactCategories = [
  {
    value: "investment",
    label: "Investment Opportunity",
    description:
      "Discuss funding for AutoVerse, NEC Companion, or other projects",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    value: "project",
    label: "Project Collaboration",
    description:
      "Hire me for election technology, media production, or software",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    value: "partnership",
    label: "Strategic Partnership",
    description: "Government, NGO, or institutional partnership",
    icon: <Handshake className="w-5 h-5" />,
  },
  {
    value: "media",
    label: "Media Production",
    description: "Live broadcast, streaming, or church media needs",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    value: "other",
    label: "Other Inquiry",
    description: "General questions or speaking engagements",
    icon: <Globe className="w-5 h-5" />,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "investment",
      timeline: "Within 3 months",
    },
  });

  const currentCategory = watch("category");

  // Fetch CSRF token on mount
  useEffect(() => {
    fetch("/api/csrf")
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch(() => setError("Failed to initialize form. Please refresh."));
  }, []);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          csrfToken,
          inquiryType: "professional",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const errorData = await res.json();
        setError(
          errorData.error || "Failed to send message. Please try again."
        );
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
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
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Liberia&apos;s Future
            </span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From election technology investors to media production partners —
            let&apos;s discuss how we can create impact together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info & Process */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 dark:from-yellow-900/20 dark:to-purple-900/20 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 dark:bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Primary Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      bomiqueenliberia@gmail.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 dark:bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +231880223272
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +231880575207
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +231777567849
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      WhatsApp & Telegram available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 dark:bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monrovia, Liberia
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available for on-site projects nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Process */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What to Expect
                </h4>
                <div className="space-y-4">
                  {[
                    "Initial response within 24 hours",
                    "Detailed proposal within 3-5 business days",
                    "Investment discussions scheduled promptly",
                    "Government/NGO procurement process support",
                    "Technical consultation available",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 space-y-8 lg:col-span-2"
          >
            {/* Category Selection */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What would you like to discuss?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {contactCategories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() =>
                      setValue(
                        "category",
                        category.value as FormData["category"]
                      )
                    }
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      currentCategory === category.value
                        ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-yellow-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          currentCategory === category.value
                            ? "bg-yellow-500 text-gray-900"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {category.icon}
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {category.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@organization.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Company / Organization
                </label>
                <input
                  {...register("company")}
                  placeholder="Your company or institution"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  placeholder="+231 77 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                />
              </div>
            </div>

            {/* Dynamic Fields Based on Category */}
            {currentCategory === "investment" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Project of Interest
                  </label>
                  <select
                    {...register("project")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                  >
                    <option value="">Select a project</option>
                    <option value="AutoVerse Bible App">
                      AutoVerse Bible App
                    </option>
                    <option value="NEC Companion">NEC Companion</option>
                    <option value="Election Payment System">
                      Election Payment System
                    </option>
                    <option value="Digital Reporting Platform">
                      Digital Reporting Platform
                    </option>
                    <option value="Other">Other Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Investment Timeline
                  </label>
                  <select
                    {...register("timeline")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                  >
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="2029 Election Cycle">
                      2029 Election Cycle
                    </option>
                    <option value="Flexible">Flexible Timeline</option>
                  </select>
                </div>
              </div>
            )}

            {(currentCategory === "project" || currentCategory === "media") && (
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Project Budget (Optional)
                </label>
                <input
                  {...register("budget")}
                  placeholder="e.g., $5,000 - $10,000 or To be discussed"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Your Message *
              </label>
              <textarea
                {...register("message")}
                placeholder={
                  currentCategory === "investment"
                    ? "Tell me about your investment goals, amount you&apos;re considering, and any specific questions about the projects..."
                    : "Describe your project needs, timeline, and any specific requirements..."
                }
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <p className="text-sm text-green-600 dark:text-green-400">
                  Thank you for your message! I&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !csrfToken}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-black text-lg rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              {loading ? (
                "Sending..."
              ) : submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Professional Inquiry
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              For urgent matters, call +231880223272 directly. All inquiries are
              confidential.
            </p>
          </motion.form>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 dark:from-yellow-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-2 border-yellow-500/20 dark:border-yellow-400/20 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Liberia&apos;s Digital Infrastructure?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Whether you&apos;re an investor, government agency, or
              organization with a vision, I have the expertise to bring your
              national-scale projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+231880223272"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now for Urgent Inquiries
              </a>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setValue("category", "investment");
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold rounded-xl transition-all hover:scale-105"
              >
                <DollarSign className="w-5 h-5" />
                Discuss Investment Opportunities
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
