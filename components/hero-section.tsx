"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Terminal, Code2, Cpu } from "lucide-react"

const typingTags = [
  "Full Stack Developer",
  "Creative Technologist",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
]

export function HeroSection() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTag = typingTags[currentTagIndex]

    if (isTyping) {
      if (displayedText.length < currentTag.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTag.slice(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentTagIndex((prev) => (prev + 1) % typingTags.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentTagIndex])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[Terminal, Code2, Cpu].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            initial={{
              x: `${20 + i * 30}%`,
              y: `${30 + i * 20}%`,
            }}
            animate={{
              y: [`${30 + i * 20}%`, `${20 + i * 20}%`, `${30 + i * 20}%`],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 5 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            <Icon size={100 + i * 50} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Glitch name */}
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-2 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            {"// Welcome to my digital space"}
          </span>
        </motion.div>

        <motion.h1
          className="relative mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="relative inline-block">
            RAJ
            <span
              className="absolute left-[2px] top-0 -z-10 text-neon-pink/50"
              aria-hidden="true"
            >
              RAJ
            </span>
          </span>{" "}
          <span
            className="text-primary"
            style={{ textShadow: "0 0 30px currentColor" }}
          >
            PATIL
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-2 font-mono text-lg text-muted-foreground md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-primary">{">"}</span>
          <span>{displayedText}</span>
          <motion.span
            className="inline-block h-6 w-0.5 bg-primary"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about crafting immersive digital experiences that push the
          boundaries of web technology. Specializing in full-stack development
          with a focus on performance, accessibility, and cutting-edge design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="group relative overflow-hidden rounded border border-primary bg-primary px-8 py-3 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="group relative overflow-hidden rounded border border-primary/50 px-8 py-3 font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-24 h-32 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute left-6 top-24 h-px w-32 bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute bottom-24 right-6 h-32 w-px bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="absolute bottom-24 right-6 h-px w-32 bg-gradient-to-l from-primary/50 to-transparent" />
      </div>
    </section>
  )
}
