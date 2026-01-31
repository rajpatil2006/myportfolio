"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
    setFormState({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setStatus("idle"), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
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
            {"// 006"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out.
            I am always open to discussing new opportunities.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-sm text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-primary/30 bg-background/50 px-4 py-3 font-mono text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-sm text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-primary/30 bg-background/50 px-4 py-3 font-mono text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-mono text-sm text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-primary/30 bg-background/50 px-4 py-3 font-mono text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-sm text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded border border-primary/30 bg-background/50 px-4 py-3 font-mono text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded border border-primary bg-primary px-8 py-4 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    Error - Try Again
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info cards */}
            <div className="space-y-4">
              <motion.div
                className="group flex items-center gap-4 rounded border border-primary/20 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
                whileHover={{ x: 10 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-muted-foreground">
                    Email
                  </p>
                  <p className="font-mono text-primary">hello@johncyber.dev</p>
                </div>
              </motion.div>

              <motion.div
                className="group flex items-center gap-4 rounded border border-primary/20 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
                whileHover={{ x: 10 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-muted-foreground">
                    Location
                  </p>
                  <p className="font-mono text-primary">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 font-mono text-sm uppercase text-muted-foreground">
                Connect with me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary transition-all hover:border-primary hover:bg-primary/10"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="rounded border border-neon-green/30 bg-neon-green/5 p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-neon-green" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-neon-green"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <span className="font-mono text-sm text-neon-green">
                  Available for new projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
