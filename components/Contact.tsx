"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const infoCards = [
  { icon: "💻", title: "Full-time Roles",   desc: "Software Developer, Full-Stack, Backend, iOS/mobile positions" },
  { icon: "🎓", title: "Co-op Positions",   desc: "Software engineering co-ops aligned with my MCS program" },
  { icon: "📍", title: "Location",          desc: "Based in Vancouver, BC — open to hybrid, remote, or on-site" },
] as const;

const opportunityTypes = ["Full-time", "Co-op", "Contract", "Remote", "Hybrid", "On-site"] as const;

/* ── variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const [name,        setName]        = useState("");
  const [email,       setEmail]       = useState("");
  const [message,     setMessage]     = useState("");
  const [roleType,    setRoleType]    = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted,   setSubmitted]   = useState(false);
  const [error,       setError]       = useState<string | null>(null);

  const toggleType = (t: string) =>
    setRoleType((prev) =>
      prev.includes(t) ? prev.filter((s) => s !== t) : [...prev, t]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/abdullahtariq096@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name, email,
          roleType: roleType.join(", "),
          message,
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error((await res.text()) || "Failed");
      setName(""); setEmail(""); setMessage(""); setRoleType([]);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 pb-10 pt-6 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-6 rounded-[1.75rem] border border-[var(--line)] bg-[#111111] p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Let&apos;s Connect</p>
          <h2 className="mt-2 text-5xl leading-[0.95] text-[var(--ink)]">Open to Opportunities</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            I&apos;m actively looking for co-op and full-time software developer roles. If you have an opening or just want to connect, reach out.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">

          {/* ── info cards ─────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="flex flex-col gap-3"
          >
            {infoCards.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -3, borderColor: "rgba(255,122,61,0.28)" }}
                className="flex gap-4 rounded-2xl border border-[var(--line)] bg-[#131313] p-4 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* direct links */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[var(--line)] bg-[#131313] p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Reach Me Directly</p>
              {[
                { href: "mailto:abdullahtariq096@gmail.com",                   label: "abdullahtariq096@gmail.com", icon: "✉️" },
                { href: "https://www.linkedin.com/in/abdullah-tariq-499629171/", label: "LinkedIn Profile",          icon: "🔗", external: true },
                { href: "https://github.com/Abdullahtariq11",                   label: "GitHub",                    icon: "💻", external: true },
              ].map(({ href, label, icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 3 }}
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] last:mb-0"
                >
                  <span>{icon}</span> {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── form ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-[#121212] p-7 space-y-5"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/20 bg-red-900/15 px-4 py-3 text-sm text-red-300"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* name + email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { id: "name",  label: "Name",  type: "text",  placeholder: "Your name",       value: name,  onChange: setName },
                      { id: "email", label: "Email", type: "email", placeholder: "you@company.com", value: email, onChange: setEmail },
                    ].map(({ id, label, type, placeholder, value, onChange }) => (
                      <div key={id}>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          className="w-full rounded-xl border border-[var(--line)] bg-[#1a1a1a] px-4 py-3 text-sm text-[var(--ink)] placeholder-[#555] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(255,122,61,0.15)]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* opportunity type */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      Opportunity Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {opportunityTypes.map((t) => (
                        <motion.button
                          key={t}
                          type="button"
                          onClick={() => toggleType(t)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={roleType.includes(t)
                            ? { backgroundColor: "var(--accent)", borderColor: "var(--accent)", color: "#fff" }
                            : { backgroundColor: "#1a1a1a", borderColor: "rgba(255,255,255,0.12)", color: "var(--muted)" }}
                          transition={{ duration: 0.18 }}
                          className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                        >
                          {t}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* message */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about the role or opportunity..."
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-none rounded-xl border border-[var(--line)] bg-[#1a1a1a] px-4 py-3 text-sm text-[var(--ink)] placeholder-[#555] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(255,122,61,0.15)]"
                    />
                  </div>

                  {/* submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 20px rgba(255,122,61,0.3)" } : undefined}
                    whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                    className="w-full rounded-full border border-[var(--accent)] bg-[var(--accent)] py-3 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[var(--line)] bg-[#121212] p-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
                    className="mb-4 text-5xl"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[var(--ink)]">Message sent!</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
