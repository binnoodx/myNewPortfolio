"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

export default function PortfolioPage() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowArrow(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#10192e] via-[#0f172a] to-[#0e1a2b] text-white font-sans min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col mt-10 mb-10 items-center justify-center text-center relative px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="text-cyan-400">Binod's Homepage 👋</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-300 max-w-xl px-4"
        >
          Hey, I’m a Cross-Platform Full Stack Developer crafting modern apps for web & mobile.
        </motion.p>
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-10 animate-bounce text-cyan-400"
          >
            <FaArrowDown size={28} />
          </motion.div>
        )}

        <section className="py-16 px-4 sm:px-6 text-center  w-full">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-2">
            {[
              {
                title: "RandomlyTV",
                description:
                  "OmeTV-style video chat app using ZEGOCLOUD, Socket.IO & Next.js. Includes random matchmaking, skip, and mobile-ready design.",
              },
              {
                title: "BeatIOE",
                description:
                  "Quiz platform for engineering students. Full-stack app with question feeds, ranking, solutions, and user authentication.",
                link: "https://beatioe.vercel.app",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1e293b] p-6 rounded-xl shadow-md shadow-cyan-500/20 text-left"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </section>

      {/* About Me */}
      <section className="py-16 px-4 sm:px-6 text-center bg-[#0e1a2b]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a self-taught full stack cross platform developer based in Nepal. I love building real-time, scalable applications with technologies like React, Next.js, MongoDB, and React Native.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "React",
            "Next Js",
            "React Native",
            "Expo",
            "Node Js",
            "Express Js",
            "MongoDB",
            "Socket.IO",
            "ZEGOCLOUD",
            "Next-Auth",
            "Clerk",
            "Shadcn",
            "Tailwind CSS",
          ].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="bg-[#1e293b] rounded-lg py-4 px-2 shadow-md shadow-cyan-400/20"
            >
              <p className="text-lg font-semibold text-white text-center">{tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 text-center bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Connect With Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-6 text-cyan-400"
        >
          <a
            href="https://github.com/binnoodx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:thebinod404@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-[#0f172a] text-sm px-4">
        © {new Date().getFullYear()} Binod. All rights reserved.
      </footer>
    </div>
  );
}
