import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'A snappy chat experience with websockets, typing indicators, and playful emojis.',
    tech: ['React', 'FastAPI', 'WebSocket'],
    link: '#',
    stars: 321,
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D models with smooth camera transitions and hotspots.',
    tech: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    stars: 289,
  },
  {
    title: 'AI Notes Assistant',
    description: 'Summarizes and organizes notes using modern LLMs with a delightful UI.',
    tech: ['Vite', 'OpenAI', 'Tailwind'],
    link: '#',
    stars: 402,
  },
];

function ProjectCard({ project }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setPos({ x, y });
  };

  const rotateX = (0.5 - pos.y) * 10;
  const rotateY = (pos.x - 0.5) * 12;

  return (
    <motion.a
      href={project.link}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0.5, y: 0.5 })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative block rounded-xl bg-white/80 p-5 ring-1 ring-gray-200 backdrop-blur shadow-sm hover:shadow-xl"
      style={{ transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 opacity-0 transition-opacity group-hover:opacity-10" />
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-blue-600">
          <Code className="h-5 w-5" />
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-amber-500" />
          <span className="text-xs font-medium text-amber-600">{project.stars}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
        Explore <ExternalLink className="h-4 w-4" />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Featured Projects</h2>
          <p className="mt-1 text-sm text-gray-600">Hover, tilt, and explore the details.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow"
        >
          Interactive Grid
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
