"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const statusMessages = [
  "Initializing Neural Link...",
  "Loading Core Systems...",
  "Indexing Core Modules...",
  "Establishing Secure Protocol...",
  "Syncing Quantum Networks...",
  "Activating Visual Matrix...",
  "System Ready.",
]

export function TerminalPreloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentStatus, setCurrentStatus] = useState(0)
  const [glitchText, setGlitchText] = useState("WELCOME TO WORLD")
  const [showCursor, setShowCursor] = useState(true)

  const originalText = "WELCOME TO WORLD"
  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01"

  useEffect(() => {
    // Glitch effect for the welcome text
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitched = originalText
          .split("")
          .map((char) =>
            Math.random() > 0.8
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join("")
        setGlitchText(glitched)
        setTimeout(() => setGlitchText(originalText), 100)
      }
    }, 150)

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 3 + 1
      })
    }, 100)

    // Status messages
    const statusInterval = setInterval(() => {
      setCurrentStatus((prev) => {
        if (prev >= statusMessages.length - 1) {
          clearInterval(statusInterval)
          return statusMessages.length - 1
        }
        return prev + 1
      })
    }, 700)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(cursorInterval)
      clearInterval(progressInterval)
      clearInterval(statusInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* Scanline effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-0 h-[2px] w-full bg-neon-cyan/20"
            animate={{ y: ["0vh", "100vh"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Terminal window */}
        <motion.div
          className="relative w-full max-w-2xl border border-neon-cyan/30 bg-black/80 p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Terminal header */}
          <div className="mb-6 flex items-center gap-2 border-b border-neon-cyan/20 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-4 font-mono text-xs text-neon-cyan/60">
              system://neural_interface/v2.0.77
            </span>
          </div>

          {/* Welcome text with glitch */}
          <motion.h1
            className="mb-8 text-center font-mono text-3xl font-bold tracking-widest text-neon-cyan md:text-5xl"
            style={{
              textShadow:
                "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)",
            }}
          >
            <span className="relative">
              {glitchText}
              {/* Glitch layers */}
              <span
                className="absolute left-[2px] top-0 text-neon-pink opacity-70"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              >
                {glitchText}
              </span>
              <span
                className="absolute left-[-2px] top-0 text-neon-green opacity-70"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              >
                {glitchText}
              </span>
            </span>
          </motion.h1>

          {/* Status messages */}
          <div className="mb-6 font-mono text-sm">
            {statusMessages.slice(0, currentStatus + 1).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-1 flex items-center gap-2"
              >
                <span className="text-neon-green">{">"}</span>
                <span
                  className={
                    i === currentStatus ? "text-neon-cyan" : "text-neon-cyan/50"
                  }
                >
                  {msg}
                </span>
                {i === currentStatus && showCursor && (
                  <span className="text-neon-cyan">_</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="mb-2 flex justify-between font-mono text-xs text-neon-cyan/60">
              <span>LOADING SYSTEMS</span>
              <span>{Math.min(100, Math.floor(progress))}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden border border-neon-cyan/30 bg-black">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-cyan"
                style={{ width: `${Math.min(100, progress)}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, progress)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            {/* Progress bar glow */}
            <motion.div
              className="absolute bottom-0 left-0 h-2 blur-sm"
              style={{
                width: `${Math.min(100, progress)}%`,
                background:
                  "linear-gradient(to right, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))",
              }}
            />
          </div>

          {/* Corner decorations */}
          <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-neon-cyan" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-neon-cyan" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-neon-cyan" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-neon-cyan" />
        </motion.div>

        {/* Random floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-neon-cyan"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
