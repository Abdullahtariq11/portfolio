'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Java", "C#", "Python", "JavaScript", "TypeScript", "C++"] },
  { category: "Backend", items: ["Spring Boot", "ASP.NET Core", "Node.js", "Express.js"] },
  { category: "Frontend & Mobile", items: ["React", "Next.js", "React Native", ".NET MAUI"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase"] },
  { category: "DevOps & Tools", items: ["Docker", "Railway", "Vercel", "Git", "GitHub", "Prisma"] },
  { category: "Testing", items: ["xUnit", "Moq", "Postman", "Swagger", "WebdriverIO", "JIRA"] },
];

const experience = [
  {
    title: "Software Test Engineer II",
    company: "Gaming Laboratories International LLC",
    period: "March 2022 – Present",
    location: "Burnaby, BC",
    bullets: [
      "Reduced post-release defects by 15% through regression and integration testing across the SDLC.",
      "Supported onboarding of 20+ client integrations into production for iGaming platforms.",
      "Executed back-end SQL data validation across distributed environments to ensure transaction accuracy.",
      "Conducted API testing with Postman and Swagger for JSON/XML response verification.",
      "Collaborated cross-functionally to reduce deployment delays by 20%.",
    ],
  },
  {
    title: "Software Developer (Contract, Part-time)",
    company: "Space Chicken",
    period: "April 2025 – August 2025",
    location: "Vancouver, BC",
    bullets: [
      "Built and deployed the official restaurant website using Next.js and Tailwind CSS.",
      "Implemented a responsive, SEO-optimized UI with interactive menu, reviews, and location integration.",
      "Integrated backend features using Express.js to enhance website functionality and UX.",
    ],
  },
  {
    title: "Electromechanical Technologist",
    company: "Algo Communication Products Ltd",
    period: "September 2020 – December 2021",
    location: "Burnaby, BC",
    bullets: [
      "Resolved firmware control SIP communication bugs, improving system reliability by 25%.",
      "Created and maintained automated test scripts using WebdriverIO.",
      "Authored comprehensive test documentation improving traceability by 30%.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Northeastern University",
    period: "September 2025 – April 2027",
    location: "Vancouver, BC",
    note: "GPA 4.0",
  },
  {
    degree: "B.A.Sc. in Mechatronic Systems Engineering",
    school: "Simon Fraser University",
    period: "September 2017 – December 2021",
    location: "Burnaby, BC",
    note: "Dean's List — April 2019",
  },
];

type Tab = "about" | "experience" | "education" | "skills";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "about", label: "About", emoji: "👤" },
  { id: "experience", label: "Experience", emoji: "💼" },
  { id: "education", label: "Education", emoji: "🎓" },
  { id: "skills", label: "Skills", emoji: "⚡" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <section id="about" className="py-24 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 bg-gray-900 border border-gray-800 rounded-2xl p-6"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-orange-500 flex items-center justify-center shadow-xl flex-shrink-0">
            <span className="text-white text-2xl font-bold">AT</span>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Abdullah Tariq</h3>
            <p className="text-orange-400 font-medium text-sm">Software Developer · Founder of CodeInstincts</p>
            <p className="text-slate-400 text-sm mt-1">Vancouver, BC · abdullahtariq096@gmail.com</p>
            <div className="flex gap-3 mt-2 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/abdullah-tariq-499629171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium underline transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="https://github.com/Abdullahtariq11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium underline transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-900 border border-gray-800 p-1 rounded-xl mb-8 w-fit mx-auto flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-slate-300 space-y-5 text-base leading-relaxed bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <p>
                I&apos;m a software developer with a background in both mechatronic systems engineering
                and computer science. Currently pursuing my{" "}
                <span className="text-indigo-400 font-semibold">Master of Computer Science at Northeastern University</span>{" "}
                with a 4.0 GPA, I combine engineering rigour with modern software development to build products that matter.
              </p>
              <p>
                Under <span className="text-orange-400 font-semibold">CodeInstincts</span>, I design and develop
                web and mobile applications — from consumer iOS apps to full-stack platforms. I love working across
                the full product lifecycle, from idea through to a shipped, polished experience.
              </p>
              <p>
                Outside of personal projects, I work as a{" "}
                <span className="text-white font-semibold">Software Test Engineer II</span> at Gaming Laboratories
                International, where I&apos;ve contributed to reducing post-release defects by 15% and improving
                deployment reliability for iGaming platforms.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { label: "GPA", value: "4.0" },
                  { label: "Experience", value: "3+ Years" },
                  { label: "Projects", value: "5+" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-orange-400">{value}</p>
                    <p className="text-slate-400 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <p className="font-bold text-white text-base">{job.title}</p>
                      <p className="text-orange-400 font-medium text-sm">{job.company}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <p className="text-slate-400 text-xs">{job.period}</p>
                      <p className="text-slate-500 text-xs">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-slate-300 text-sm flex gap-2">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-orange-400 font-medium text-sm">{edu.school}</p>
                    {edu.note && (
                      <span className="inline-block mt-2 text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-medium">
                        🏆 {edu.note}
                      </span>
                    )}
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-slate-400 text-sm">{edu.period}</p>
                    <p className="text-slate-500 text-xs">{edu.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {skills.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1 bg-gray-800 text-slate-300 border border-gray-700 hover:border-orange-500/50 hover:text-orange-300 rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
