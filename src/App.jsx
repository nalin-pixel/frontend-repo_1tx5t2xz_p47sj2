import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Aaditya Kumar — Built with React, Tailwind & Spline
        </div>
      </footer>
    </div>
  );
}
