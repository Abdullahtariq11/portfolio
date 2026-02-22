"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  name: string;
  status: string;
  period: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
  codeUrl?: string;
  codeLabel?: string;
  extraLinks?: { label: string; url: string }[];
  images: string[];
  mobileScreenshots?: boolean;
  demoVideo?: string;
  stores?: { appStore?: string; playStore?: string };
};

const projects: Project[] = [
  {
    name: "BrokeTogether",
    status: "Product in development",
    period: "Nov 2025 - Jan 2026",
    description:
      "Shared-expense product for roommates and friends. This site is the future launch hub for store downloads.",
    tech: ["Spring Boot", "PostgreSQL", "JWT", "Docker", "Railway", "React Native"],
    codeUrl: "https://github.com/Abdullahtariq11/BrokeTogetherBackend",
    codeLabel: "Backend Source",
    images: [
      "/projects/broketogether-1.png",
      "/projects/broketogether-2.png",
      "/projects/broketogether-3.png",
      "/projects/broketogether-4.png",
      "/projects/broketogether-5.png",
    ],
    mobileScreenshots: true,
    stores: {},
  },
  {
    name: "Space Chicken",
    status: "Live client project",
    period: "Apr 2025 - Aug 2025",
    description:
      "Official restaurant website with SEO-driven pages, interactive menu, maps, reviews, and social integrations.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "ASP.NET Core"],
    demoUrl: "https://www.spacechicken.ca",
    demoLabel: "Live Demo",
    images: ["/projects/spacechicken-1.png"],
  },
  {
    name: "Premier Predict",
    status: "Personal build",
    period: "Oct 2025 - Dec 2025",
    description:
      "Prediction platform with match lock rules, dynamic ranking logic, and data-aware backend caching.",
    tech: ["React", "Express", "Prisma", "PostgreSQL"],
    demoUrl: "https://premier-predict.vercel.app/",
    demoLabel: "Live Demo",
    codeUrl: "https://github.com/Abdullahtariq11",
    codeLabel: "GitHub Profile",
    images: [
      "/projects/premierpredict-1.png",
      "/projects/premierpredict-2.png",
      "/projects/premierpredict-3.png",
      "/projects/premierpredict-4.png",
      "/projects/premierpredict-5.png",
    ],
  },
  {
    name: "Budget App",
    status: "Full-stack project",
    period: "Oct 2024 - Jan 2025",
    description:
      "Integrated frontend + backend finance application for budgets, expenses, categories, and authentication.",
    tech: ["React", "TypeScript", "ASP.NET Core", "EF Core", "PostgreSQL", "xUnit"],
    demoUrl: "https://budget-app-frontend-rosy.vercel.app",
    demoLabel: "Frontend Demo",
    codeUrl: "https://github.com/Abdullahtariq11/BudgetAppFrontend",
    codeLabel: "Frontend Source",
    extraLinks: [
      { label: "Backend API Demo", url: "https://budget-app-backend-self.vercel.app" },
      { label: "Backend Source",   url: "https://github.com/Abdullahtariq11/BudgetAppBackend" },
    ],
    images: ["/projects/budgetapp-1.png", "/projects/budgetapp-2.png"],
  },
  {
    name: "Doctor Lucky",
    status: "Academic project",
    period: "2025",
    description:
      "Java desktop board game implementation with MVC architecture and object-oriented design patterns.",
    tech: ["Java", "Swing", "MVC", "OOP"],
    codeUrl: "https://github.com/Abdullahtariq11/BoardGame-DrLucky",
    codeLabel: "Source Code",
    images: ["/projects/doctorlucky-1.png"],
    demoVideo: "/projects/dr-lucky-demo.mov",
  },
];

/* ── variants ─────────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function Projects() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

  const getSlide = (name: string) => activeSlides[name] ?? 0;
  const setSlide = (name: string, next: number, total: number) => {
    const wrapped = ((next % total) + total) % total;
    setActiveSlides((prev) => ({ ...prev, [name]: wrapped }));
  };

  return (
    <section id="projects" className="px-6 pb-24 pt-6 md:px-10 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-6xl">

        {/* header card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-5 rounded-[1.75rem] border border-[var(--line)] bg-[#111111] p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Projects &amp; Demos</p>
          <h2 className="mt-2 text-5xl leading-[0.95] text-[var(--ink)]">Product Showcase</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            A selection of shipped work, personal builds, and demos across web, API, mobile, and desktop.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(255,122,61,0.22)" }}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-[#151515] p-6 transition-colors"
            >
              {/* title row */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-3xl leading-none text-[var(--ink)]">{project.name}</h3>
                <span className="rounded-full border border-[var(--line)] bg-[#1f1f1f] px-2.5 py-1 text-xs font-semibold text-[var(--muted)]">
                  {project.period}
                </span>
              </div>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--muted)]">{project.status}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

              {/* image section — hidden when project has a demo video */}
              {!project.demoVideo && (
                <div className="mt-5">
                  {project.mobileScreenshots ? (
                    /* ── Portrait / mobile screenshot strip ── */
                    <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div className="flex gap-3" style={{ width: "max-content" }}>
                        {project.images.map((src, idx) => (
                          <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.06 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="flex-shrink-0 overflow-hidden rounded-2xl border border-[var(--line)] bg-[#121212] shadow-lg"
                            style={{ width: 130 }}
                          >
                            <Image
                              src={src}
                              alt={`${project.name} screen ${idx + 1}`}
                              width={390}
                              height={844}
                              className="w-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* ── Landscape carousel ── */
                    <>
                      <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[#121212]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${project.name}-${getSlide(project.name)}`}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Image
                              src={project.images[getSlide(project.name)]}
                              alt={`${project.name} preview ${getSlide(project.name) + 1}`}
                              width={1200}
                              height={720}
                              className="h-48 w-full object-cover md:h-52"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* prev / next — only show when more than one image */}
                        {project.images.length > 1 && (
                          <>
                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSlide(project.name, getSlide(project.name) - 1, project.images.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[#101010cc] px-2.5 py-1.5 text-xs font-semibold text-[var(--ink)]"
                              aria-label={`Previous ${project.name} image`}
                            >
                              ←
                            </motion.button>
                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSlide(project.name, getSlide(project.name) + 1, project.images.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[#101010cc] px-2.5 py-1.5 text-xs font-semibold text-[var(--ink)]"
                              aria-label={`Next ${project.name} image`}
                            >
                              →
                            </motion.button>
                          </>
                        )}
                      </div>

                      {/* dots — only show when more than one image */}
                      {project.images.length > 1 && (
                        <div className="mt-2 flex items-center justify-center gap-1.5">
                          {project.images.map((_, dotIndex) => (
                            <motion.button
                              key={`${project.name}-dot-${dotIndex}`}
                              type="button"
                              onClick={() => setSlide(project.name, dotIndex, project.images.length)}
                              aria-label={`Go to ${project.name} image ${dotIndex + 1}`}
                              animate={{
                                width: getSlide(project.name) === dotIndex ? 24 : 10,
                                backgroundColor: getSlide(project.name) === dotIndex
                                  ? "var(--accent)"
                                  : "#6e6e6e",
                              }}
                              transition={{ duration: 0.25 }}
                              className="h-1.5 rounded-full"
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* demo video (Doctor Lucky) */}
              {project.demoVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Gameplay Demo</p>
                  <video
                    src={project.demoVideo}
                    controls
                    muted
                    playsInline
                    className="w-full rounded-xl border border-[var(--line)] bg-[#121212]"
                    style={{ maxHeight: "260px", objectFit: "contain" }}
                  />
                </motion.div>
              )}

              {/* tech pills */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {project.tech.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      show:   { opacity: 1, scale: 1, transition: { duration: 0.25 } },
                    }}
                    whileHover={{ scale: 1.07, borderColor: "rgba(255,122,61,0.45)" }}
                    className="cursor-default rounded-full border border-[var(--line)] bg-[#1b1b1b] px-3 py-1 text-xs font-semibold text-[var(--muted)] transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>

              {/* links — GitHub source only, no live demo buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.codeUrl && (
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full border border-[var(--line)] bg-[#1b1b1b] px-4 py-2 text-xs font-semibold text-[var(--ink)]"
                  >
                    {project.codeLabel ?? "Source Code"}
                  </motion.a>
                )}
              </div>

              {/* BrokeTogether store section */}
              {project.name === "BrokeTogether" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 rounded-xl border border-[var(--line)] bg-[#111111] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Mobile Store Launch</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stores?.appStore ? (
                      <motion.a
                        href={project.stores.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white"
                      >
                        App Store
                      </motion.a>
                    ) : (
                      <span className="rounded-full border border-[var(--line)] bg-[#1b1b1b] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
                        App Store (Soon)
                      </span>
                    )}
                    {project.stores?.playStore ? (
                      <motion.a
                        href={project.stores.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white"
                      >
                        Google Play
                      </motion.a>
                    ) : (
                      <span className="rounded-full border border-[var(--line)] bg-[#1b1b1b] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
                        Google Play (Soon)
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
