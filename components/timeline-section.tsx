"use client"

import React from "react"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Download } from "lucide-react"

interface TimelineItem {
  id: number
  type: "education" | "work" | "achievement"
  title: string
  organization: string
  date: string
  description: string
  icon: React.ElementType
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "Tech University",
    date: "2018 - 2022",
    description: "Graduated with honors, specializing in Software Engineering and Artificial Intelligence.",
    icon: GraduationCap,
  },
  {
    id: 2,
    type: "work",
    title: "Junior Developer",
    organization: "StartUp Labs",
    date: "2022 - 2023",
    description: "Built responsive web applications and contributed to the development of internal tools.",
    icon: Briefcase,
  },
  {
    id: 3,
    type: "achievement",
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "2023",
    description: "Achieved professional certification in cloud development and architecture.",
    icon: Award,
  },
  {
    id: 4,
    type: "work",
    title: "Full Stack Developer",
    organization: "Digital Innovations Inc.",
    date: "2023 - 2024",
    description: "Led development of customer-facing applications serving 100K+ users.",
    icon: Briefcase,
  },
  {
    id: 5,
    type: "education",
    title: "Master of Software Engineering",
    organization: "Tech Institute",
    date: "2024 - Present",
    description: "Pursuing advanced studies in distributed systems and machine learning.",
    icon: GraduationCap,
  },
  {
    id: 6,
    type: "work",
    title: "Senior Developer",
    organization: "CyberTech Solutions",
    date: "2024 - Present",
    description: "Architecting scalable solutions and mentoring junior developers in best practices.",
    icon: Briefcase,
  },
]

const typeColors = {
  education: "from-neon-cyan to-primary",
  work: "from-neon-pink to-accent",
  achievement: "from-neon-green to-primary",
}

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 md:py-32">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            {"// 004"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Professional <span className="text-primary">Timeline</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Download Resume Button */}
          <motion.a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <motion.div
                  className="group relative overflow-hidden rounded border border-primary/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    } top-0 h-full w-1 bg-gradient-to-b ${typeColors[item.type]}`}
                  />

                  <span className="mb-2 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.date}
                  </span>
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 font-mono text-sm text-primary">
                    {item.organization}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <motion.div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background ${
                    item.type === "education"
                      ? "border-neon-cyan text-neon-cyan"
                      : item.type === "work"
                      ? "border-neon-pink text-neon-pink"
                      : "border-neon-green text-neon-green"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    boxShadow: `0 0 20px currentColor`,
                  }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { type: "education", label: "Education", color: "text-neon-cyan" },
            { type: "work", label: "Work Experience", color: "text-neon-pink" },
            { type: "achievement", label: "Achievement", color: "text-neon-green" },
          ].map((legend) => (
            <div key={legend.type} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${legend.color} bg-current`} />
              <span className="font-mono text-sm text-muted-foreground">
                {legend.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
