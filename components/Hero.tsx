"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/* ── count-up hook ─────────────────────────────────────────── */
function useCountUp(target: number, decimals = 0, startOnView = true) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (!startOnView || inView) raw.set(target);
  }, [inView, raw, target, startOnView]);

  useEffect(
    () =>
      spring.on("change", (v) =>
        setDisplay(v.toFixed(decimals))
      ),
    [spring, decimals]
  );

  return { ref, display };
}

/* ── snapshot rows ─────────────────────────────────────────── */
const snapshot = [
  { label: "Current Role",  value: "Software Test Engineer II" },
  { label: "Company",       value: "Gaming Laboratories International" },
  { label: "Experience",    value: "4+ Years" },
  { label: "Education",     value: "MCS @ Northeastern" },
] as const;

/* ── container variants ────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  /* ping dot blinking */
  const [ping, setPing] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setPing((p) => !p), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-34 md:px-10 md:pt-40 lg:pb-24">
      {/* background blobs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--accent-soft)] blur-3xl pointer-events-none"
      />
      <div className="absolute -right-16 top-40 h-56 w-56 rounded-full border border-[var(--line)] bg-[#151515]/60 pointer-events-none" />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">

        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <motion.div variants={container} initial="hidden" animate="show">

          {/* status pill */}
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[#121212] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] ${ping ? "animate-ping opacity-75" : "opacity-0"} transition-opacity duration-700`}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Open to Software Developer Co-op + Full-time Roles
          </motion.p>

          {/* headline */}
          <motion.h1
            variants={item}
            className="mt-6 max-w-4xl text-5xl leading-[0.9] text-[var(--ink)] sm:text-6xl md:text-7xl"
          >
            Abdullah Tariq.
            <br />
            Software engineering,
            <br />
            built to last.
          </motion.h1>

          {/* sub */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
          >
            Software Developer with 4+ years of industry experience building, testing,
            and shipping software. Currently seeking co-op and full-time software
            developer opportunities.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.04, boxShadow: "0 0 18px rgba(255,122,61,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white"
            >
              View Projects
            </motion.button>
            <motion.a
              href="/abdullah-tariq-resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[#ffffff4a]"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="mailto:abdullahtariq096@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[#ffffff4a]"
            >
              Email Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — snapshot card ─────────────────── */}
        <motion.aside
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-end rounded-[2rem] border border-[var(--line)] bg-[#131313]/85 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Snapshot
          </p>

          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } } }}
            initial="hidden"
            animate="show"
            className="mt-5 space-y-3"
          >
            {snapshot.map(({ label, value }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, x: 14 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ x: 3, borderColor: "rgba(255,122,61,0.35)" }}
                className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[#1a1a1a] px-4 py-3 transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</span>
                <span className="text-sm font-semibold text-[var(--ink)]">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.aside>

      </div>
    </section>
  );
}
