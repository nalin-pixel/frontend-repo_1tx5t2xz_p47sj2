import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send for demo
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-2xl px-4 py-16">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Let's Connect</h2>
        <p className="mt-1 text-sm text-gray-600">Everything on this page reacts to you—this form included.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-200 backdrop-blur"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
            <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <User className="h-4 w-4 text-gray-400" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="Your name"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="h-4 w-4 text-gray-400" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border border-gray-200 bg-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell me about your idea..."
            required
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-600"
          >
            {sent ? 'Thanks! I will get back to you shortly.' : 'Your message will be sent instantly.'}
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
            {sent ? 'Sent!' : 'Send Message'}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
