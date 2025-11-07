import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, MousePointerClick, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-4 py-24 md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200 backdrop-blur"
        >
          <Rocket className="h-3.5 w-3.5" /> Interactive Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Your Name</span>
          <br /> I build playful, modern web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-gray-700 md:text-lg"
        >
          Explore a fully interactive portfolio. Drag and play with the 3D scene, hover over projects, and tap around to discover delightful details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 backdrop-blur transition-colors hover:bg-white"
          >
            <MousePointerClick className="h-4 w-4" />
            Get in Touch
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 ring-1 ring-gray-200 backdrop-blur transition-all hover:translate-y-[-2px] hover:bg-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-blue-700 ring-1 ring-gray-200 backdrop-blur transition-all hover:translate-y-[-2px] hover:bg-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
