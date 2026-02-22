"use client";

import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

/* ── data ─────────────────────────────────────────────────── */
type Role = {
  title: string;
  company: string;
  employment: string;
  period: string;
  location: string;
  skills: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Software Test Engineer II",
    company: "Gaming Laboratories International, LLC",
    employment: "Permanent Full-time",
    period: "Dec 2023 - Present",
    location: "Burnaby, BC (Hybrid)",
    skills: "ASP.NET Web API, Code Review + more",
    bullets: [
      "Conduct comprehensive regression testing across SDLC phases to protect existing functionality after updates.",
      "Perform integration testing and validate software modifications for iGaming platforms and games.",
      "Document regression and integration outcomes with clear, detailed reporting.",
      "Formalize test results and track defects in Jira based on technical and regulatory requirements.",
      "Partner closely with developers to triage defects and resolve issues quickly.",
      "Maintain proactive communication on testing status with internal and external stakeholders.",
    ],
  },
  {
    title: "Software Test Engineer I",
    company: "Gaming Laboratories International, LLC",
    employment: "Permanent Full-time",
    period: "Feb 2022 - Dec 2023",
    location: "Burnaby, BC",
    skills: "Selenium, HTML5 + more",
    bullets: [
      "Performed regression testing throughout the development lifecycle for impacted functionality.",
      "Documented regression, integration, and software modification results for client iGaming products.",
      "Reported game defects and test outcomes in Jira according to technical requirements.",
      "Collaborated with developers to follow up on defect resolution and validation.",
      "Communicated progress and status updates to relevant internal and external teams.",
    ],
  },
  {
    title: "Software Developer",
    company: "Space Chicken",
    employment: "Contract Part-time",
    period: "Apr 2025 - Aug 2025",
    location: "Remote",
    skills: "Next.js, TypeScript + more",
    bullets: [
      "Designed, developed, and deployed the official website using Next.js and Tailwind CSS.",
      "Delivered a responsive, SEO-optimized user experience with menu, reviews, maps, hours, and social integration.",
      "Continuously maintained and improved performance, accessibility, and UX quality.",
      "Planned and developed backend functionality using ASP.NET Core.",
      "Collaborated directly with the business owner on roadmap and ongoing improvements.",
    ],
  },
  {
    title: "Electromechanical Technologist",
    company: "Algo Communication Products Ltd",
    employment: "Co-op",
    period: "Aug 2021 - Dec 2021",
    location: "Burnaby, BC",
    skills: "Manual Testing, SDLC + more",
    bullets: [
      "Tested UI protocols and scripts to locate firmware-control SIP product defects.",
      "Worked with production to validate structural uniformity, power consumption, and firmware installation.",
      "Created and maintained automated test scripts using WebdriverIO.",
      "Produced test plans, test cases, and reports for repeatable QA execution.",
    ],
  },
  {
    title: "Electromechanical Technologist",
    company: "Algo Communication Products Ltd",
    employment: "Co-op",
    period: "Sep 2020 - Jan 2021",
    location: "Burnaby, BC",
    skills: "Selenium, Manual Testing + more",
    bullets: [
      "Tested UI protocols and scripts to identify issues in firmware-control SIP products.",
      "Contributed to standardized device test cases for structural and operational validation.",
      "Performed product verification testing using standardized operating procedures.",
      "Logged defects in Jira and coordinated with developers on fixes.",
      "Assisted with development and execution of test plans for web-based applications.",
    ],
  },
];

const skills = [
  "TypeScript", "Java", "C#", "React", "Next.js",
  "Spring Boot", "ASP.NET Core", "PostgreSQL", "Prisma",
  "Docker", "Railway", "xUnit", "WebdriverIO", "Jira",
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Northeastern University",
    period: "Sep 2025 - Apr 2027",
    location: "Vancouver, BC",
    note: "GPA 4.0",
  },
  {
    degree: "B.A.Sc. Mechatronic Systems Engineering",
    school: "Simon Fraser University",
    period: "Sep 2017 - Dec 2021",
    location: "Burnaby, BC",
    note: "Dean's List",
  },
];

/* ── shared variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};
const stagger = (delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: 0.055, delayChildren: delay } },
});

/* ── component ────────────────────────────────────────────── */
export default function About() {
  const [openRole, setOpenRole] = useState<number | null>(null);

  return (
    <section id="about" className="px-6 py-18 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* ── Brand / Skills card ─────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger()}
          className="mb-6 grid gap-4 rounded-[1.75rem] border border-[var(--line)] bg-[#111111] p-7 lg:grid-cols-[1fr_1fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Brand</p>
            <h2 className="mt-2 text-5xl leading-[0.95] text-[var(--ink)]">Abdullah Tariq</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Full-stack developer & CS grad student. I build things that ship, work reliably, and solve real problems.
            </p>
          </motion.div>

          {/* skill pills — each staggers in */}
          <motion.div
            variants={stagger(0.1)}
            className="flex flex-wrap content-start gap-2 lg:justify-end"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  show:   { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "backOut" } },
                }}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,122,61,0.5)", color: "var(--ink)" }}
                className="cursor-default rounded-full border border-[var(--line)] bg-[#171717] px-3 py-1 text-xs font-semibold text-[var(--muted)] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Story card ───────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger()}
          className="mb-6 rounded-[1.75rem] border border-[var(--line)] bg-[#111111] p-7 lg:grid lg:grid-cols-[auto_1fr] lg:gap-8"
        >
          {/* left accent label */}
          <motion.div variants={fadeUp} className="mb-4 lg:mb-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Background</p>
            <div className="mt-3 hidden h-full w-px bg-[var(--line)] lg:block" />
          </motion.div>

          {/* right content */}
          <motion.div variants={stagger(0.08)} className="space-y-5">
            {/* quote + father paragraph — fancy italic serif */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p
                className="text-2xl leading-snug text-[var(--ink)]"
                style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 500 }}
              >
                &ldquo;Work hard, be honest, and never stop learning.&rdquo;
              </p>
              <p
                className="text-lg leading-relaxed text-[var(--muted)]"
                style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 500 }}
              >
                My father worked incredibly hard to give me the best education he could. He led by example every single day, and the values he showed me, honesty, dedication, and a quiet relentless work ethic, are the foundation of everything I do.
              </p>
            </motion.div>

            {/* background paragraph — regular body */}
            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-[var(--muted)]">
              At 18 I moved to Canada on my own to pursue something bigger. I worked part time through my entire undergrad at Simon Fraser University and graduated with a degree in Mechatronic Systems Engineering. Now I am completing a Master&apos;s in Computer Science at Northeastern University while working full time. Every step has been a reflection of what my father showed me.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ── Education card ───────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger()}
          className="mb-6 rounded-[1.75rem] border border-[var(--line)] bg-[#121212] p-7"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Education</p>
              <h3 className="mt-2 text-4xl leading-none text-[var(--ink)]">Academic Background</h3>
            </div>
            <motion.a
              href="/abdullah-tariq-resume.pdf"
              download
              whileHover={{ scale: 1.04, borderColor: "rgba(255,122,61,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[var(--line)] bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold text-[var(--ink)] transition-colors"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item, i) => (
              <motion.article
                key={item.degree}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -3, borderColor: "rgba(255,122,61,0.25)" }}
                className="rounded-2xl border border-[var(--line)] bg-[#171717] p-5 transition-colors"
              >
                <h4 className="text-2xl leading-tight text-[var(--ink)]">{item.degree}</h4>
                <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{item.school}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                  {item.period} • {item.location}
                </p>
                <p className="mt-3 inline-flex rounded-full border border-[var(--line)] bg-[#1f1f1f] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ── Experience card ──────────────────────────────── */}
        <motion.div
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger()}
          className="rounded-[1.75rem] border border-[var(--line)] bg-[#0f0f0f] p-7"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
              <h3 className="mt-2 text-4xl leading-none text-[var(--ink)]">LinkedIn Timeline</h3>
            </div>
            <p className="text-sm font-semibold text-[var(--muted)]">Gaming Laboratories International: 4+ years</p>
          </motion.div>

          <div className="space-y-4">
            {roles.map((role, i) => {
              const isOpen = openRole === i;
              return (
                <motion.article
                  key={`${role.company}-${role.title}-${role.period}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07, ease: cubicBezier(0.22, 1, 0.36, 1) } },
                  }}
                  whileHover={{ borderColor: isOpen ? "rgba(255,122,61,0.3)" : "rgba(255,255,255,0.18)" }}
                  className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[#151515] transition-colors"
                >
                  {/* header — always visible, click to toggle */}
                  <button
                    type="button"
                    onClick={() => setOpenRole(isOpen ? null : i)}
                    className="w-full p-5 text-left"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-2xl leading-none text-[var(--ink)]">{role.title}</h4>
                        <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{role.company}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                          {role.employment} • {role.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-[var(--line)] bg-[#1e1e1e] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                          {role.period}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-[var(--muted)] text-lg leading-none select-none"
                        >
                          +
                        </motion.span>
                      </div>
                    </div>
                  </button>

                  {/* collapsible bullets */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="bullets"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--line)] px-5 pb-5">
                          <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
                            className="mt-4 space-y-2"
                          >
                            {role.bullets.map((point) => (
                              <motion.li
                                key={point}
                                variants={{
                                  hidden: { opacity: 0, x: -8 },
                                  show:   { opacity: 1, x: 0, transition: { duration: 0.3 } },
                                }}
                                className="flex gap-2 text-sm leading-relaxed text-[var(--muted)]"
                              >
                                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                                {point}
                              </motion.li>
                            ))}
                          </motion.ul>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {role.skills}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
