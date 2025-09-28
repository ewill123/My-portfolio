"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "Node.js",
    "Firebase",
    "Supabase",
    "UI/UX Design",
    "Graphic Design",
    "Video Editing",
    "Blender 3D",
    "Broadcast Technician",
  ];

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white gap-10"
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-yellow-500 flex-shrink-0"
      >
        <img
          src="/ema.jpeg"
          alt="Emmanuel Cheeseman"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-start gap-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500">
          Emmanuel Cheeseman
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          I am a passionate multi-disciplinary creator:{" "}
          <strong>
            Web & Mobile Developer, Graphic Designer, Video Editor, Blender 3D
            Designer, and Broadcast Technician.
          </strong>{" "}
          I build modern, interactive, and visually stunning web & mobile apps
          using React, Next.js, React Native, Firebase, Supabase, Three.js, and
          Tailwind CSS. I also bring creativity from graphic design, 3D
          modeling, video production, and broadcast technology to craft engaging
          experiences across both digital and media platforms.
        </p>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.1, rotate: 2, y: -3 }}
              className="relative bg-gray-800/60 backdrop-blur-lg rounded-lg px-3 sm:px-4 py-2 text-center text-yellow-400 font-semibold cursor-pointer shadow-md transition-transform w-full"
            >
              {skill}

              {/* Tooltip on hover */}
              {hoveredSkill === skill && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs sm:text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap"
                >
                  {`Expert in ${skill}`}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Typewriter effect below skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-semibold text-yellow-400"
        >
          <Typewriter
            words={[
              "These are all my skills.",
              "I build, design, and create.",
              "Web, Mobile, Graphics, 3D, and more!",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
