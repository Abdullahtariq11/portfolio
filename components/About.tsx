'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experience = [
  {
    title: "Software Test Engineer II",
    company: "Gaming Laboratories International LLC",
    period: "Dec 2023 – Present",
    location: "Burnaby, BC · Hybrid",
    type: "Full-time",
    color: "bg-orange-500",
    bullets: [
      "Conducted comprehensive regression testing at various phases of the SDLC to ensure existing functionality remained intact after new updates.",
      "Performed integration testing and validated software modifications for client iGaming platforms and games, ensuring seamless integration.",
      "Meticulously documented results of regression and integration testing, providing detailed reports on software modifications.",
      "Utilized JIRA to formalize test results, report bugs, and document game defects in accordance with technical requirements and regulations.",
      "Interacted closely with developers to follow up on defects and issues, providing detailed feedback and collaborating on solutions.",
      "Maintained clear and proactive communication regarding the status of testing activities with all relevant internal and external parties.",
    ],
  },
  {
    title: "Software Test Engineer I",
    company: "Gaming Laboratories International LLC",
    period: "Feb 2022 – Dec 2023",
    location: "Burnaby, BC",
    type: "Full-time",
    color: "bg-amber-500",
    bullets: [
      "Performed regression testing at various phases of the development life cycle for impacted existing functionality.",
      "Documented results of regression testing, integration testing, and software modification of client iGaming platforms and games.",
      "Formalized test results and reported bugs and game defects on JIRA, according to technical requirements and regulations.",
      "Interacted with developers to follow up on defects and issues.",
      "Proactively communicated the status of testing with all relevant internal and external parties.",
    ],
  },
  {
    title: "Software Developer",
    company: "Space Chicken",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    type: "Contract · Part-time",
    color: "bg-green-500",
    bullets: [
      "Designed, developed, and deployed the official website for Space Chicken using Next.js and TailwindCSS.",
      "Delivered a fully responsive, SEO-optimized, and user-friendly site with interactive menu, customer reviews, Google Maps location & hours, and social media integration.",
      "Continuously maintained and enhanced the site to improve performance, accessibility, and user experience.",
      "Planned and developed backend functionality using ASP.NET Core.",
      "Collaborated directly with the business owner for ongoing improvements aligned with business goals.",
    ],
  },
  {
    title: "Electromechanical Technologist",
    company: "Algo Communication Products Ltd",
    period: "Aug 2021 – Dec 2021",
    location: "Burnaby, BC",
    type: "Co-op",
    color: "bg-blue-500",
    bullets: [
      "Tested user interface protocols and scripts to locate bugs in firmware control SIP communication products.",
      "Collaborated with production team to test devices for standardized test cases including structural uniformity, power consumption, and firmware installation.",
      "Created and maintained automated test scripts using WebdriverIO.",
      "Developed and maintained test documentation, including test plans, test cases, and test reports.",
    ],
  },
  {
    title: "Electromechanical Technologist",
    company: "Algo Communication Products Ltd",
    period: "Sep 2020 – Jan 2021",
    location: "Burnaby, BC",
    type: "Co-op",
    color: "bg-cyan-500",
    bullets: [
      "Tested user interface protocols and scripts to locate bugs in firmware control SIP communication products.",
      "Collaborated with production team on standardized test cases including structural uniformity and power consumption.",
      "Performed product verification testing with standardized operating procedures.",
      "Identified and documented defects using JIRA and worked closely with developers to resolve them.",
      "Assisted with the development and execution of test plans and test cases for web-based applications.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Northeastern University",
    period: "Sep 2025 – Apr 2027",
    location: "Vancouver, BC",
    badge: "GPA 4.0",
    badgeColor: "text-green-300 bg-green-500/10 border-green-500/20",
  },
  {
    degree: "B.A.Sc. Mechatronic Systems Engineering",
    school: "Simon Fraser University",
    period: "Sep 2017 – Dec 2021",
    location: "Burnaby, BC",
    badge: "Dean's List",
    badgeColor: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Java", "C#", "Python", "JavaScript", "TypeScript", "C++"] },
  { label: "Backend", items: ["Spring Boot", "ASP.NET Core", "Node.js", "Express.js"] },
  { label: "Frontend & Mobile", items: ["React", "Next.js", "React Native", ".NET MAUI"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase"] },
  { label: "DevOps", items: ["Docker", "Railway", "Vercel", "Git", "GitHub"] },
  { label: "Testing & Tools", items: ["xUnit", "Moq", "Postman", "Swagger", "WebdriverIO", "JIRA", "Prisma"] },
];

const interests = [
  { icon: "⚽", label: "Football", desc: "Love playing football with friends — nothing beats a good weekend game" },
  { icon: "🔴", label: "Manchester United", desc: "Lifelong fan through thick and thin. Glory Glory Man United. #GGMU" },
  { icon: "💻", label: "Building Products", desc: "Turning ideas into real, shipped software — from concept to production" },
  { icon: "📱", label: "iOS Development", desc: "Building native Swift & SwiftUI apps for iPhone and Mac" },
  { icon: "🎮", label: "Gaming", desc: "Strategy, RPGs, and everything in between" },
  { icon: "☕", label: "Coffee & Code", desc: "Best combo for late-night builds and debugging sessions" },
];

type Tab = "about" | "experience" | "education" | "skills" | "interests";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const tabs: { id: Tab; label: string }[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "interests", label: "Interests" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-950 relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">About Me</h2>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 bg-gray-900/50 border border-white/5 p-1 rounded-xl mb-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-orange-500 rounded-lg"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {/* ABOUT */}
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: "4.0", label: "GPA", sub: "Northeastern University" },
                  { value: "3+", label: "Years", sub: "Industry Experience" },
                  { value: "5+", label: "Projects", sub: "Shipped & Personal" },
                ].map(({ value, label, sub }) => (
                  <div key={label} className="bg-gray-900 border border-white/5 rounded-2xl p-6 text-center">
                    <p className="text-4xl font-black text-orange-400">{value}</p>
                    <p className="text-white font-bold mt-1">{label}</p>
                    <p className="text-slate-500 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 border border-white/5 rounded-2xl p-8 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I&apos;m a software developer with a background spanning mechatronic systems engineering
                  and computer science. Currently pursuing my{" "}
                  <span className="text-indigo-400 font-semibold">Master of Computer Science at Northeastern University</span>{" "}
                  (GPA 4.0), I combine engineering rigour with modern software development to build things that matter.
                </p>
                <p>
                  I have hands-on experience building full-stack web applications, REST APIs, and native iOS/macOS apps — from idea to deployment.
                  I love the full product lifecycle and thrive in environments where I can contribute across the stack.
                </p>
                <p>
                  Currently working as a <span className="text-white font-semibold">Software Test Engineer II</span> at Gaming Laboratories International,
                  with 3+ years of experience in software quality, API testing, and cross-functional collaboration in an enterprise iGaming environment.
                  I&apos;m actively seeking <span className="text-orange-400 font-semibold">co-op and full-time software developer roles</span> where I can grow and make an impact.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  {[
                    { icon: "📍", text: "Vancouver, BC" },
                    { icon: "🎓", text: "MCS @ Northeastern" },
                    { icon: "💼", text: "Seeking Co-op & Full-time" },
                    { icon: "🔴", text: "Man United Fan" },
                  ].map(({ icon, text }) => (
                    <span key={text} className="flex items-center gap-1.5 text-sm text-slate-400 bg-gray-800 border border-white/5 px-3 py-1.5 rounded-full">
                      {icon} {text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div id="experience" className="relative pl-4">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/60 via-white/10 to-transparent" />
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-6"
                    >
                      {/* Dot */}
                      <div className={`absolute left-[-4px] top-5 w-2.5 h-2.5 rounded-full ${job.color} ring-4 ring-gray-950`} />

                      <div className="bg-gray-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                          <div>
                            <h3 className="text-white font-bold text-base">{job.title}</h3>
                            <p className="text-orange-400 font-semibold text-sm">{job.company}</p>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                            <span className="text-slate-400 text-xs">{job.period}</span>
                            <span className="text-xs bg-gray-800 border border-white/5 text-slate-400 px-2 py-0.5 rounded-full">{job.type}</span>
                          </div>
                        </div>
                        <p className="text-slate-500 text-xs mb-4">📍 {job.location}</p>

                        <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${expandedJob === i ? "max-h-96" : "max-h-16"}`}>
                          {job.bullets.map((b, j) => (
                            <li key={j} className="text-slate-300 text-sm flex gap-2">
                              <span className="text-orange-400 flex-shrink-0 mt-0.5">›</span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                          className="mt-3 text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 transition-colors"
                        >
                          {expandedJob === i ? "Show less ↑" : `Show all ${job.bullets.length} bullets ↓`}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🎓</span>
                      <h3 className="text-white font-bold">{edu.degree}</h3>
                    </div>
                    <p className="text-orange-400 font-semibold text-sm mb-1">{edu.school}</p>
                    <p className="text-slate-500 text-xs">📍 {edu.location}</p>
                    <span className={`inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full border ${edu.badgeColor}`}>
                      🏆 {edu.badge}
                    </span>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-slate-400 text-sm font-medium">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skillGroups.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-gray-900 border border-white/5 rounded-2xl p-5"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-800 border border-white/5 hover:border-orange-500/40 hover:text-orange-300 text-slate-300 rounded-lg text-xs font-semibold transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* INTERESTS */}
          {activeTab === "interests" && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {interests.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`bg-gray-900 border rounded-2xl p-5 transition-all duration-200 ${
                    item.label === "Manchester United"
                      ? "border-red-500/30 bg-gradient-to-br from-red-950/30 to-gray-900"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
