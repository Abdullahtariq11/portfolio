'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [projectType, setProjectType] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleType = (t: string) =>
    setProjectType((prev) => prev.includes(t) ? prev.filter((s) => s !== t) : [...prev, t]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('https://formsubmit.co/ajax/abdullahtariq096@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name, email,
          projectType: projectType.join(', '),
          message,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      if (!res.ok) throw new Error(await res.text() || 'Failed to submit');
      setName(''); setEmail(''); setMessage(''); setProjectType([]);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Let&apos;s Talk</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Want me to build your app?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you have a rough idea or a detailed brief — I&apos;d love to hear it. Reach out and let&apos;s build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {[
              { icon: "📱", title: "iOS & macOS Apps", desc: "Native Swift & SwiftUI — App Store ready" },
              { icon: "🌐", title: "Web Apps", desc: "React, Next.js, full-stack development" },
              { icon: "🔧", title: "APIs & Backends", desc: "Spring Boot, ASP.NET Core, Node.js, Express" },
              { icon: "💡", title: "End to End", desc: "Idea → design → build → deploy" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{title}</p>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mt-2">
              <p className="text-slate-400 text-sm mb-1">📬 Email me directly</p>
              <a
                href="mailto:abdullahtariq096@gmail.com"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
              >
                abdullahtariq096@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-7 space-y-5"
                >
                  {error && (
                    <div className="text-sm text-red-300 bg-red-900/30 border border-red-500/30 px-4 py-2 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">I need</label>
                    <div className="flex flex-wrap gap-2">
                      {['iOS App', 'macOS App', 'Web App', 'Backend / API', 'Something Else'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleType(t)}
                          className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                            projectType.includes(t)
                              ? 'bg-orange-500 border-orange-500 text-white'
                              : 'border-gray-700 text-slate-400 hover:border-orange-500/50 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">Tell me about your idea</label>
                    <textarea
                      rows={5}
                      placeholder="Describe what you'd like to build..."
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                    whileTap={!isSubmitting ? { scale: 0.97 } : undefined}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending…' : "Let's Build Something 🚀"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-gray-900 border border-green-500/30 rounded-2xl p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
