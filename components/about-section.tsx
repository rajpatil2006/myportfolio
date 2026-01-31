"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Code, Award, Users } from "lucide-react"

interface OdometerProps {
  value: number
  duration?: number
}

function Odometer({ value, duration = 2000 }: OdometerProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="relative">
      <span className="font-mono text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        {displayValue.toString().split("").map((digit, i) => (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="inline-block"
            style={{ textShadow: "0 0 20px currentColor" }}
          >
            {digit}
          </motion.span>
        ))}
        <span className="text-2xl text-primary/70">+</span>
      </span>
    </div>
  )
}

const stats = [
  { icon: Code, value: 50, label: "Projects Completed", suffix: "+" },
  { icon: Briefcase, value: 3, label: "Years Experience", suffix: "+" },
  { icon: Award, value: 15, label: "Certifications", suffix: "" },
  { icon: Users, value: 20, label: "Happy Clients", suffix: "+" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 cyber-grid opacity-50" />

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
            {"// 001"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded border border-primary/20 bg-card/50 p-6 backdrop-blur-sm">
              <div className="absolute -left-px top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />
              <h3 className="mb-4 font-mono text-lg text-primary">
                {"<Developer />"}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                I am a passionate full-stack developer with a keen eye for design and a
                love for creating seamless digital experiences. My journey in tech
                began with curiosity and has evolved into a career dedicated to
                pushing the boundaries of what is possible on the web.
              </p>
            </div>

            <div className="relative rounded border border-primary/20 bg-card/50 p-6 backdrop-blur-sm">
              <div className="absolute -left-px top-0 h-full w-1 bg-gradient-to-b from-accent via-primary to-accent" />
              <h3 className="mb-4 font-mono text-lg text-accent">
                {"<Philosophy />"}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                I believe in writing clean, maintainable code that not only works
                but tells a story. Every project is an opportunity to learn, grow,
                and create something meaningful that makes a difference in how people
                interact with technology.
              </p>
            </div>

            <div className="relative rounded border border-primary/20 bg-card/50 p-6 backdrop-blur-sm">
              <div className="absolute -left-px top-0 h-full w-1 bg-gradient-to-b from-neon-green via-primary to-neon-green" />
              <h3 className="mb-4 font-mono text-lg text-neon-green">
                {"<Mission />"}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                My mission is to bridge the gap between cutting-edge technology and
                user-centric design, creating applications that are not just
                functional but delightful to use. I am constantly exploring new
                technologies and methodologies to stay at the forefront of web
                development.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded border border-primary/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <stat.icon className="mb-4 h-8 w-8 text-primary" />
                <Odometer value={stat.value} />
                <p className="mt-2 font-mono text-sm text-muted-foreground">
                  {stat.label}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/30" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
