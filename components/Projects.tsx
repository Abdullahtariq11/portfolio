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
  platforms?: string[];
};

const projects: Project[] = [
  {
    icon: "💸",
    title: "BrokeTogether",
    tag: "Coming Soon",
    tagStyle: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    period: "Nov 2025 – Jan 2026",
    description: "Split shared expenses with friends and roommates — without the awkwardness.",
    bullets: [
      "RESTful backend with Java Spring Boot for managing shared household expenses and automated balance calculations.",
      "PostgreSQL schema designed for complex many-to-many relationships between users and expense groups.",
      "Spring Security + JWT authentication enabling secure multi-device access.",
      "Dockerized Spring Boot app deployed to Railway — 99.9% uptime in production.",
      "Reduced deployment time by 30% with containerized environments.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Railway", "JWT"],
    platforms: ["App Store (iOS)", "Mac App Store"],
  },
  {
    icon: "🍗",
    title: "Space Chicken — Web App",
    tag: "Live",
    tagStyle: "bg-green-500/20 text-green-300 border-green-500/30",
    period: "Apr 2025 – Aug 2025",
    description: "Full web application for Space Chicken, a local Vancouver restaurant.",
    bullets: [
      "Built and deployed with Next.js and Tailwind CSS.",
      "Responsive, SEO-optimized UI with interactive menu, reviews, and location integration.",
      "Express.js backend integrated for enhanced website functionality.",
      "Improved site performance, accessibility, and UX throughout.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Express.js", "Node.js"],
    platforms: ["Web"],
  },
  {
    icon: "⚽",
    title: "Premier Predict",
    tag: "Personal Project",
    tagStyle: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    period: "Oct 2025 – Dec 2025",
    description: "Full-stack football prediction platform with live Premier League data.",
    bullets: [
      "Built with React, Express.js, Prisma ORM, and PostgreSQL.",
      "JWT-based auth, user profiles, and score predictions with automatic lock-in before kickoff.",
      "Dynamic leaderboard and real-time dashboards using live PL data from external API.",
      "Backend caching to respect API rate limits and improve performance.",
    ],
    tech: ["React", "Express.js", "Prisma", "PostgreSQL", "JWT"],
    platforms: ["Web"],
  },
  {
    icon: "💰",
    title: "Budget App",
    tag: "Personal Project",
    tagStyle: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    period: "Oct 2024 – Jan 2025",
    description: "RESTful personal finance API for tracking expenses, budgets, and card balances.",
    bullets: [
      "Built with .NET 7 and ASP.NET Core for robust finance management.",
      "PostgreSQL + Entity Framework Core with schema versioning migrations.",
      "BCrypt password hashing + JWT token auth for secure session management.",
      "Modular endpoints for expense tracking, categories, and card balances.",
      "30% defect reduction via xUnit + Moq unit tests.",
    ],
    tech: [".NET 7", "ASP.NET Core", "PostgreSQL", "EF Core", "xUnit", "JWT"],
    platforms: ["API / Backend"],
  },
  {
    icon: "🎲",
    title: "Doctor Lucky",
    tag: "Personal Project",
    tagStyle: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    period: "Sep 2025 – Dec 2025",
    description: "Java desktop game built with MVC architecture and Java Swing.",
    bullets: [
      "MVC architecture with Java Swing for a responsive, modular desktop UI.",
      "OOP principles and design patterns to decouple game logic, UI, and controller.",
      "Game flow control, user interaction mechanics, and state management.",
    ],
    tech: ["Java", "Java Swing", "MVC", "OOP"],
    platforms: ["Desktop"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">What I&apos;ve Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From shipped products to personal experiments — things I&apos;ve built across web, mobile, and backend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-950 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-6 flex flex-col transition-colors duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.span
                  className="text-4xl"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.tagStyle}`}>
                  {project.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-xs mb-2">{project.period}</p>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Platforms */}
              {project.platforms && (
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.platforms.map((p) => (
                    <span key={p} className="text-xs bg-gray-800 text-slate-400 px-2 py-0.5 rounded-md">
                      {p}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded-full">
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
                      <li key={j} className="text-slate-400 text-sm flex gap-2">
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
                  className="text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  {expanded === index ? "↑ Show less" : "↓ See details"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BrokeTogether callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-500/20 rounded-2xl p-10 text-center"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Coming Soon</p>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">BrokeTogether 💸</h3>
          <p className="text-slate-300 max-w-lg mx-auto mb-8">
            The simplest way to split expenses with the people in your life.
            Launching soon on the <span className="text-orange-400 font-semibold">App Store</span> and{" "}
            <span className="text-orange-400 font-semibold">Mac App Store</span>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium">
              🍎 iOS — App Store
            </span>
            <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium">
              💻 macOS — Mac App Store
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
