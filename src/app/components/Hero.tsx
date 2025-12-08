// src/app/components/Hero.tsx  ←  UPDATED VERSION with smaller image
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 md:pt-20"
    >
      {/* Code rain + floating Blender icons */}
      <div className="absolute inset-0 opacity-60">
        <pre className="absolute top-10 left-10 text-green-400 font-mono text-sm animate-slide-down">
          {`const creator = {
  name: "Emmanuel",
  powers: ["Code", "3D", "Cinema"]
};`}
        </pre>
        <pre className="absolute top-32 right-20 text-pink-400 font-mono text-sm animate-slide-down-delay">
          {`<Laptop rotation={[0.3, Math.PI, 0]}/>`}
        </pre>
        <pre className="absolute bottom-40 left-32 text-yellow-400 font-mono text-sm animate-slide-down-slow">
          {`render() => "Unforgettable";`}
        </pre>
        <pre className="absolute bottom-20 right-10 text-cyan-400 font-mono text-sm animate-slide-up">
          {`// Live @ NEC Liberia`}
        </pre>
        <div className="absolute top-20 left-20 text-purple-500 text-6xl animate-blender-float">
          Cube
        </div>
        <div className="absolute top-40 right-32 text-pink-500 text-5xl animate-blender-float-delay">
          Sphere
        </div>
        <div className="absolute bottom-32 left-40 text-teal-400 text-7xl animate-blender-spin">
          Suzanne
        </div>
        <div className="absolute bottom-48 right-20 text-yellow-500 text-6xl animate-blender-float-slow">
          Camera
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 md:mt-0"
        >
          {/* Reduced image size */}
          <Image
            src="/profile.webp"
            alt="Emmanuel Cheeseman"
            width={140}
            height={140}
            className="rounded-full mx-auto mb-6 md:mb-8 border-6 border-white/20 shadow-xl backdrop-blur-sm"
            priority
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter">
            EMMANUEL <span className="text-yellow-500">CHEESEMAN</span>
          </h1>

          <div className="h-16 md:h-20 mb-4 md:mb-6">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1800,
                "3D Artist & Animator",
                1800,
                "Media Director @ Word of Life",
                1800,
                "Live Broadcast Engineer @ NEC",
                1800,
                "AI Video Creator",
                2000,
                "Building Liberia's digital future",
                3000,
              ]}
              wrapper="p"
              speed={40}
              repeat={Infinity}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 px-4"
            />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto mt-6 md:mt-10 mb-10 md:mb-14 px-4">
            From national election systems to 10,000-person worship productions
            — I fuse code, 3D, and live media into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mb-10 md:mb-16 px-4">
            <a
              href="#projects"
              className="px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-yellow-500 text-black font-bold sm:font-black text-lg sm:text-xl md:text-2xl rounded-xl sm:rounded-2xl hover:bg-yellow-400 transition transform hover:scale-105 shadow-xl"
            >
              ENTER MY WORLD
            </a>
            <a
              href="#contact"
              className="px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 border-3 sm:border-4 border-yellow-500 text-yellow-500 font-bold sm:font-black text-lg sm:text-xl md:text-2xl rounded-xl sm:rounded-2xl hover:bg-yellow-500 hover:text-black transition"
            >
              HIRE ME
            </a>
          </div>

          <div className="flex justify-center gap-8 md:gap-12">
            <a href="https://github.com/ewill123" target="_blank">
              <Github className="w-8 h-8 md:w-10 md:h-10 text-gray-400 hover:text-yellow-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuelcheeseman"
              target="_blank"
            >
              <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-gray-400 hover:text-yellow-500 transition" />
            </a>
            <a href="https://x.com/EmmanuelCh39270" target="_blank">
              <Twitter className="w-8 h-8 md:w-10 md:h-10 text-gray-400 hover:text-yellow-500 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
