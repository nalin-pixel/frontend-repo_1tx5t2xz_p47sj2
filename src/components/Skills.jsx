import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brush, Database, Zap } from 'lucide-react';

const skills = [
  { icon: Cpu, name: 'Frontend Engineering', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Database, name: 'Backend & Data', items: ['FastAPI', 'MongoDB', 'REST', 'Auth'] },
  { icon: Zap, name: 'Performance', items: ['Optimizations', 'Accessibility', 'Lighthouse 95+'] },
  { icon: Brush, name: 'Design Systems', items: ['Component libs', 'Design tokens', 'Prototyping'] },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">What I Do</h2>
        <p className="mt-1 text-sm text-gray-600">Tap the cards to cycle highlights.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <motion.button
              key={s.name}
              onClick={() => setActive((prev) => (prev + 1) % skills.length)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group rounded-xl border p-5 text-left shadow-sm transition-all ${
                isActive
                  ? 'border-blue-300 bg-blue-50/60 ring-2 ring-blue-200'
                  : 'border-gray-200 bg-white/80 hover:bg-white'
              }`}
            >
              <div className={`flex items-center gap-2 ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>
                <Icon className="h-5 w-5" />
                <h3 className="text-base font-semibold">{s.name}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
