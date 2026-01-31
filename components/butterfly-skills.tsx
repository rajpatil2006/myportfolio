"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationFrame } from "framer-motion"
import { 
  Code2, Database, Globe, Layers, 
  Palette, Server, Smartphone, Terminal,
  Cpu, Cloud, Lock, Zap
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ElementType
  color: string
}

const skills: Skill[] = [
  { name: "React", icon: Code2, color: "#61DAFB" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "TypeScript", icon: Terminal, color: "#3178C6" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "Next.js", icon: Globe, color: "#ffffff" },
  { name: "Tailwind", icon: Palette, color: "#06B6D4" },
  { name: "GraphQL", icon: Layers, color: "#E10098" },
  { name: "React Native", icon: Smartphone, color: "#61DAFB" },
  { name: "Docker", icon: Cpu, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Security", icon: Lock, color: "#00D4AA" },
  { name: "Performance", icon: Zap, color: "#FFD700" },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  skill: Skill
}

export function ButterflySkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 })
  const [isHovered, setIsHovered] = useState<number | null>(null)

  // Initialize particles
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Initialize particles with random positions and velocities
    const initialParticles = skills.map((skill) => ({
      x: Math.random() * (dimensions.width - 80) + 40,
      y: Math.random() * (dimensions.height - 80) + 40,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      skill,
    }))
    setParticles(initialParticles)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Brownian motion animation
  useAnimationFrame(() => {
    setParticles((prev) =>
      prev.map((particle, index) => {
        if (isHovered === index) return particle

        // Add random Brownian motion
        let newVx = particle.vx + (Math.random() - 0.5) * 0.3
        let newVy = particle.vy + (Math.random() - 0.5) * 0.3

        // Damping
        newVx *= 0.99
        newVy *= 0.99

        // Clamp velocity
        const maxSpeed = 1.5
        const speed = Math.sqrt(newVx * newVx + newVy * newVy)
        if (speed > maxSpeed) {
          newVx = (newVx / speed) * maxSpeed
          newVy = (newVy / speed) * maxSpeed
        }

        // Update position
        let newX = particle.x + newVx
        let newY = particle.y + newVy

        // Bounce off walls
        const padding = 40
        if (newX < padding || newX > dimensions.width - padding) {
          newVx *= -1
          newX = Math.max(padding, Math.min(dimensions.width - padding, newX))
        }
        if (newY < padding || newY > dimensions.height - padding) {
          newVy *= -1
          newY = Math.max(padding, Math.min(dimensions.height - padding, newY))
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        }
      })
    )
  })

  return (
    <section id="skills" className="relative py-24 md:py-32">
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
            {"// 002"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Butterfly <span className="text-primary">Skills</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch my technical skills float freely - each icon represents a technology
            I have mastered. Hover to capture them.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Butterfly container */}
        <motion.div
          ref={containerRef}
          className="relative mx-auto h-[500px] max-w-5xl overflow-hidden rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(0, 255, 255, 0.03) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Particles */}
          {particles.map((particle, index) => (
            <motion.div
              key={particle.skill.name}
              className="absolute flex cursor-pointer flex-col items-center"
              style={{
                left: particle.x,
                top: particle.y,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ scale: 1.3 }}
            >
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background/80 backdrop-blur-sm transition-all"
                style={{
                  borderColor: particle.skill.color,
                  boxShadow:
                    isHovered === index
                      ? `0 0 30px ${particle.skill.color}, 0 0 60px ${particle.skill.color}40`
                      : `0 0 10px ${particle.skill.color}40`,
                }}
                animate={{
                  rotate: isHovered === index ? 0 : [0, 5, -5, 0],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <particle.skill.icon
                  className="h-8 w-8"
                  style={{ color: particle.skill.color }}
                />
              </motion.div>
              <motion.span
                className="mt-2 whitespace-nowrap rounded bg-background/80 px-2 py-1 font-mono text-xs backdrop-blur-sm"
                style={{ color: particle.skill.color }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isHovered === index ? 1 : 0.7, y: 0 }}
              >
                {particle.skill.name}
              </motion.span>
            </motion.div>
          ))}

          {/* Corner decorations */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-primary/50" />
        </motion.div>
      </div>
    </section>
  )
}
