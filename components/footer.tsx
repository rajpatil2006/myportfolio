"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-primary/20 bg-card/30 py-8 backdrop-blur-sm">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-mono text-lg font-bold tracking-wider text-primary"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            style={{
              textShadow: "0 0 10px currentColor",
            }}
          >
            {"<CYBER/>"}
          </motion.a>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="h-4 w-4 fill-neon-pink text-neon-pink" />
            </motion.div>
            <span>by Raj Patil</span>
            <span className="text-primary/50">|</span>
            <span>{new Date().getFullYear()}</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-accent"
            whileHover={{ y: -3 }}
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </motion.button>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Tech stack */}
        <div className="mt-4 text-center font-mono text-xs text-muted-foreground/50">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </div>
      </div>
    </footer>
  )
}
