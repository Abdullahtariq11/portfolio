"use client";

import { motion } from "framer-motion";

const links: { label: string; href: string; primary: boolean; download?: boolean; external?: boolean }[] = [
  {
    label: "Download Resume",
    href: "/abdullah-tariq-resume.pdf",
    download: true,
    primary: false,
  },
  {
    label: "abdullahtariq096@gmail.com",
    href: "mailto:abdullahtariq096@gmail.com",
    primary: true,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/abdullah-tariq-499629171/",
    external: true,
    primary: false,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="px-6 pb-12 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,#101010_0%,#171717_100%)] p-8 md:p-10"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* left copy */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
            <h2 className="mt-3 text-5xl leading-[0.95] text-[var(--ink)]">Let&apos;s connect.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
              Reach out directly for opportunities or collaborations.
            </p>
          </motion.div>

          {/* right — staggered link buttons */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } } }}
            className="flex flex-col gap-3"
          >
            {links.map(({ label, href, primary, download: dl, external }) => (
              <motion.a
                key={label}
                href={href}
                download={dl ?? undefined}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
                }}
                whileHover={
                  primary
                    ? { scale: 1.03, boxShadow: "0 0 20px rgba(255,122,61,0.35)" }
                    : { scale: 1.03, borderColor: "rgba(255,255,255,0.28)" }
                }
                whileTap={{ scale: 0.97 }}
                className={`rounded-full px-5 py-2 text-center text-sm font-semibold transition-colors ${
                  primary
                    ? "border border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border border-[var(--line)] bg-[#1a1a1a] text-[var(--ink)]"
                }`}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 flex max-w-6xl items-center justify-between text-xs text-[var(--muted)]"
      >
        <p>Abdullah Tariq</p>
        <p>{new Date().getFullYear()}</p>
      </motion.div>
    </footer>
  );
}
