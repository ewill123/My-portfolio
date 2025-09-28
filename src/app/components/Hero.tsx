"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF, Html, useProgress } from "@react-three/drei";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

// Preload the 3D model for faster initial load
useGLTF.preload("/models/laptop.glb");

// Loader component for Canvas
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white font-bold text-lg">
        {Math.round(progress)}%
      </div>
    </Html>
  );
}

// 3D Laptop Model with smooth hover rotation
function LaptopModel({
  mouseX,
  mouseY,
  onLoaded,
}: {
  mouseX: number;
  mouseY: number;
  onLoaded?: () => void;
}) {
  const gltf = useGLTF("/models/laptop.glb");
  const ref = useRef<any>(null);

  useEffect(() => {
    if (gltf && onLoaded) onLoaded();
  }, [gltf, onLoaded]);

  useFrame(() => {
    if (ref.current) {
      const targetY = (mouseX / window.innerWidth - 0.5) * Math.PI * 0.4;
      const targetX = -(mouseY / window.innerHeight - 0.5) * Math.PI * 0.2;

      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    }
  });

  return (
    <primitive ref={ref} object={gltf.scene} scale={1} position={[0, -1, 0]} />
  );
}

export default function Hero() {
  const [zoomed, setZoomed] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Mouse tracking (client-side only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-950 to-blue-900 overflow-hidden text-white px-4"
    >
      {/* 3D Laptop Canvas */}
      <AnimatePresence>
        {!zoomed && (
          <motion.div
            className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] relative"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.6 }}
          >
            {!modelLoaded && (
              <img
                src="/assets/placeholder.png"
                alt="Laptop placeholder"
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}

            <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Stage environment="city" intensity={0.6}>
                <LaptopModel
                  mouseX={mouseX}
                  mouseY={mouseY}
                  onLoaded={() => setModelLoaded(true)}
                />
              </Stage>
              {!modelLoaded && <Loader />}
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Go Button + Intro Text */}
      {!zoomed && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col items-center text-center max-w-xl"
        >
          <button
            onClick={() => setZoomed(true)}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition transform hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            <Typewriter
              words={["Enter Portfolio"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
            />
          </button>

          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome! I build modern web applications with engaging, responsive
            designs. Explore my work and see how I turn ideas into interactive
            digital experiences.
          </p>
        </motion.div>
      )}

      {/* Laptop Screen Content */}
      {zoomed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            Emmanuel Cheeseman
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl">
            <Typewriter
              words={[
                "I build modern web apps.",
                "I design engaging experiences.",
                "I craft responsive UIs.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105 text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition transform hover:scale-105 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/ewill123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-600 transition transform hover:scale-125" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-600 transition transform hover:scale-125" />
            </a>
            <a
              href="https://x.com/EmmanuelCh39270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 sm:w-7 sm:h-7 hover:text-yellow-600 transition transform hover:scale-125" />
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
