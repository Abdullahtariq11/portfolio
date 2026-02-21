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
        body: JSON.stringify({ name, email, projectType: projectType.join(', '), message, _captcha: 'false', _template: 'table' }),
      });
      if (!res.ok) throw new Error(await res.text() || 'Failed');
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
    <section id="contact" className="py-24 bg-gray-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Let&apos;s build something great
          </h2>
          <p className="text-slate-400 max-w-lg">
            Have an app idea? Looking for a developer? I&apos;d love to hear from you. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: "📱",
                title: "iOS & macOS",
                desc: "Native Swift apps for iPhone, iPad, and Mac",
              },
              {
                icon: "🌐",
                title: "Web Apps",
                desc: "React, Next.js, full-stack development",
              },
              {
                icon: "🔧",
                title: "Backend & APIs",
                desc: "Spring Boot, ASP.NET Core, Node.js",
              },
              {
                icon: "🚀",
                title: "End to End",
                desc: "From wireframe to live production",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-gray-900 border border-white/5 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-900 border border-white/5 rounded-xl p-5 mt-2">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Contact Info</p>
              <a href="mailto:abdullahtariq096@gmail.com" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors mb-2">
                <span>✉️</span> abdullahtariq096@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/abdullah-tariq-499629171/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors mb-2">
                <span>🔗</span> LinkedIn Profile
              </a>
              <a href="https://github.com/Abdullahtariq11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <span>💻</span> GitHub
              </a>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-900 border border-white/5 rounded-2xl p-7 space-y-5"
                >
                  {error && (
                    <div className="text-sm text-red-300 bg-red-900/20 border border-red-500/20 px-4 py-3 rounded-xl">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-800 border border-white/5 focus:border-orange-500/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-800 border border-white/5 focus:border-orange-500/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">What do you need?</label>
                    <div className="flex flex-wrap gap-2">
                      {['iOS App', 'macOS App', 'Web App', 'Backend / API', 'Full Stack', 'Other'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleType(t)}
                          className={`text-xs px-3 py-2 rounded-lg font-semibold border transition-all duration-150 ${
                            projectType.includes(t)
                              ? 'bg-orange-500 border-orange-500 text-white'
                              : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-800 border border-white/5 focus:border-orange-500/50 text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.01 } : undefined}
                    whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                    className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Send Message 🚀"
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-900 border border-green-500/20 rounded-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-xl font-black text-white mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
