"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "#00D4FF",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"],
  },
  {
    title: "Frameworks",
    color: "#FF00D4",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Express.js", "NestJS", "Django"],
  },
  {
    title: "Libraries",
    color: "#00FF88",
    skills: ["Redux", "Zustand", "TanStack Query", "Framer Motion", "Three.js", "Socket.io", "Axios"],
  },
  {
    title: "Databases",
    color: "#FFD700",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "DynamoDB"],
  },
  {
    title: "Web Development",
    color: "#FF6B6B",
    skills: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Core Concepts",
    color: "#9D4EDD",
    skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Design Patterns", "Testing", "CI/CD"],
  },
  {
    title: "Soft Skills",
    color: "#06D6A0",
    skills: ["Problem Solving", "Team Leadership", "Communication", "Agile/Scrum", "Mentoring", "Time Management"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function CategorizedSkills() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            {"// 005"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive overview of my technical skills organized by category
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden rounded-lg border border-primary/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header with color accent */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: category.color,
                    boxShadow: `0 0 10px ${category.color}`,
                  }}
                />
                <h3
                  className="font-mono text-lg font-bold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="rounded border border-primary/20 bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: category.color,
                      borderColor: category.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Background gradient on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                style={{
                  background: `radial-gradient(circle at center, ${category.color} 0%, transparent 70%)`,
                }}
              />

              {/* Corner decoration */}
              <div
                className="absolute bottom-0 right-0 h-16 w-16"
                style={{
                  borderBottom: `2px solid ${category.color}20`,
                  borderRight: `2px solid ${category.color}20`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill level indicator */}
        <motion.div
          className="mt-16 rounded-lg border border-primary/20 bg-card/50 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-center font-mono text-lg text-primary">
            Proficiency Levels
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { level: "Expert", percentage: 90, color: "#00D4FF" },
              { level: "Advanced", percentage: 75, color: "#FF00D4" },
              { level: "Intermediate", percentage: 60, color: "#00FF88" },
              { level: "Learning", percentage: 40, color: "#FFD700" },
            ].map((item) => (
              <div key={item.level} className="text-center">
                <div className="relative mx-auto mb-2 h-20 w-20">
                  <svg className="h-full w-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-muted/20"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke={item.color}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 35}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                      whileInView={{
                        strokeDashoffset:
                          2 * Math.PI * 35 * (1 - item.percentage / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      style={{
                        filter: `drop-shadow(0 0 6px ${item.color})`,
                      }}
                    />
                  </svg>
                  <span
                    className="absolute inset-0 flex items-center justify-center font-mono text-sm font-bold"
                    style={{ color: item.color }}
                  >
                    {item.percentage}%
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
