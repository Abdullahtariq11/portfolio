'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  icon: string;
  title: string;
  tag: string;
  tagStyle: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  platforms: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    icon: "💸",
    title: "BrokeTogether",
    tag: "Coming Soon",
    tagStyle: "text-orange-300 bg-orange-500/10 border-orange-500/30",
    period: "Nov 2025 – Jan 2026",
    description: "Expense-splitting app for friends & roommates — without the awkwardness.",
    bullets: [
      "RESTful backend with Java Spring Boot for shared expenses and automated balance calculations.",
      "PostgreSQL schema optimized for complex many-to-many user/group relationships.",
      "Spring Security + JWT for secure multi-device access.",
      "Dockerized deployment on Railway — 99.9% uptime, 30% faster deploys.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Railway", "JWT"],
    platforms: ["iOS", "macOS"],
    featured: true,
  },
  {
    icon: "🍗",
    title: "Space Chicken",
    tag: "Live",
    tagStyle: "text-green-300 bg-green-500/10 border-green-500/30",
    period: "Apr – Aug 2025",
    description: "Full web platform for a Vancouver restaurant — menu, reviews, location, ordering.",
    bullets: [
      "Next.js + Tailwind CSS with SEO-optimized, responsive UI.",
      "Interactive menu, reviews, and Google Maps integration.",
      "Express.js backend for dynamic features and performance.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Express.js", "Node.js"],
    platforms: ["Web"],
  },
  {
    icon: "⚽",
    title: "Premier Predict",
    tag: "Personal",
    tagStyle: "text-blue-300 bg-blue-500/10 border-blue-500/30",
    period: "Oct – Dec 2025",
    description: "Full-stack Premier League prediction platform with live data & leaderboards.",
    bullets: [
      "React, Express.js, Prisma ORM, PostgreSQL stack.",
      "JWT auth, user profiles, score predictions with automatic pre-kickoff lock-in.",
      "Dynamic leaderboard and dashboards powered by live PL API data.",
      "Backend caching to handle rate limits and optimize performance.",
    ],
    tech: ["React", "Express.js", "Prisma", "PostgreSQL", "JWT"],
    platforms: ["Web"],
  },
  {
    icon: "💰",
    title: "Budget App",
    tag: "Personal",
    tagStyle: "text-blue-300 bg-blue-500/10 border-blue-500/30",
    period: "Oct 2024 – Jan 2025",
    description: "Personal finance REST API — expenses, budgets, card balances, secure auth.",
    bullets: [
      ".NET 7 + ASP.NET Core with PostgreSQL and Entity Framework Core migrations.",
      "BCrypt hashing + JWT for secure session management.",
      "Modular endpoints for expenses, categories, and card management.",
      "30% defect reduction via xUnit + Moq unit tests.",
    ],
    tech: [".NET 7", "ASP.NET Core", "PostgreSQL", "EF Core", "xUnit", "JWT"],
    platforms: ["API"],
  },
  {
    icon: "🎲",
    title: "Doctor Lucky",
    tag: "Academic",
    tagStyle: "text-purple-300 bg-purple-500/10 border-purple-500/30",
    period: "Sep – Dec 2025",
    description: "Java desktop game with MVC architecture, OOP design patterns, and Java Swing UI.",
    bullets: [
      "MVC architecture with Java Swing for a responsive, modular desktop UI.",
      "OOP principles and design patterns decoupling logic, UI, and controller.",
      "Complete game flow control, state management, and user interaction mechanics.",
    ],
    tech: ["Java", "Java Swing", "MVC", "OOP Design Patterns"],
    platforms: ["Desktop"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Projects</h2>
          <p className="text-slate-400 max-w-xl">From shipped consumer products to personal engineering experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative bg-gray-950 border rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-orange-500/30 hover:border-orange-500/60 shadow-lg shadow-orange-500/5"
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-white font-black text-base group-hover:text-orange-400 transition-colors">{project.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${project.tagStyle}`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs">{project.period}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Platforms */}
              <div className="flex gap-1.5 flex-wrap mb-3">
                {project.platforms.map((p) => (
                  <span key={p} className="text-xs text-slate-500 bg-gray-900 border border-white/5 px-2 py-0.5 rounded-md">
                    {p}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex gap-1.5 flex-wrap mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Expandable bullets */}
              <AnimatePresence>
                {expanded === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-2 mb-4"
                  >
                    {project.bullets.map((b, j) => (
                      <li key={j} className="text-slate-400 text-xs flex gap-2 leading-relaxed">
                        <span className="text-orange-400 flex-shrink-0 mt-0.5">›</span>
                        {b}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <div className="mt-auto">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-xs text-slate-500 hover:text-orange-400 font-semibold transition-colors flex items-center gap-1"
                >
                  {expanded === index ? "↑ Less" : "↓ Details"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BrokeTogether banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-14 relative rounded-2xl overflow-hidden border border-orange-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 via-red-950/40 to-gray-950" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">🚀 Coming Soon</p>
              <h3 className="text-white text-2xl font-black mb-1">BrokeTogether 💸</h3>
              <p className="text-slate-400 text-sm max-w-md">
                The simplest way to track and split shared expenses. Built for roommates, friends, and anyone who&apos;s been burned by splitting bills.
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold">
                🍎 App Store — iOS
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold">
                💻 Mac App Store
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
