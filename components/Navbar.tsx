"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3.5 md:px-5 ${
          scrolled
            ? "border-[var(--line)] bg-[#101010]/88 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-[#ffffff1a] bg-[#0f0f0f]/68 backdrop-blur-md"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="Scroll to top"
        >
          <span className="grid h-7 w-7 place-content-center rounded-full border border-[var(--line)] text-[10px] font-bold">
            AT
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] md:text-sm">
            ABDULLAH TARIQ
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/abdullah-tariq-resume.pdf"
            download
            className="rounded-full border border-[var(--line)] bg-[var(--panel-2)] px-4 py-1.5 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[#ffffff47]"
          >
            Resume
          </a>
          <a
            href="https://github.com/Abdullahtariq11"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] bg-[var(--panel-2)] px-4 py-1.5 text-xs font-semibold text-[var(--ink)] transition-colors hover:border-[#ffffff47]"
          >
            GitHub
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
