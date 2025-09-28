"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
}

export default function Projects() {
  const [message, setMessage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      name: "My Portfolio Website",
      description: "Modern, interactive, and visually stunning portfolio site.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      image: "/projects/1.png",
    },
    {
      name: "QuickQuick Delivery App",
      description:
        "React Native mobile app with live tracking and Firebase integration.",
      tech: ["React Native", "Expo", "Firebase", "Supabase"],
      image: "/projects/2.png",
    },
    {
      name: "3D Blender Animation",
      description: "Creative 3D animation using Blender for media projects.",
      tech: ["Blender", "Animation", "3D Modeling"],
      image: "/projects/3.png",
    },
    {
      name: "E-Commerce Platform",
      description: "Full-stack online shopping platform with payments.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/4.png",
    },
    {
      name: "AI Chatbot",
      description: "Intelligent chatbot integrated into a web platform.",
      tech: ["OpenAI", "Next.js", "TypeScript"],
      image: "/projects/5.png",
    },
    {
      name: "Landing Page Design",
      description: "Beautiful landing page designed for conversion and UX.",
      tech: ["Figma", "HTML", "CSS", "JavaScript"],
      image: "/projects/6.png",
    },
  ];

  const handleComingSoon = () => {
    setMessage("Coming Soon!");
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-16 py-12 bg-gray-800 text-white flex flex-col gap-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 text-center mb-8 sm:mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
          >
            <div className="w-full h-48 sm:h-52 md:h-60 lg:h-64 bg-gray-700">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={handleComingSoon}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base flex-1 text-center"
                >
                  Demo
                </button>
                <button
                  onClick={handleComingSoon}
                  className="px-3 py-2 sm:px-4 sm:py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-sm sm:text-base flex-1 text-center"
                >
                  GitHub
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Toast */}
      {message && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg">
          {message}
        </div>
      )}
    </section>
  );
}
