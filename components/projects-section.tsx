"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Commerce",
    description: "A next-gen e-commerce platform with AI-powered recommendations and real-time inventory management. Built with microservices architecture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Next.js", "Node.js", "MongoDB", "AI/ML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "CyberChat",
    description: "Real-time messaging application with end-to-end encryption, voice calls, and AI-powered content moderation.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
    tags: ["React", "Socket.io", "WebRTC", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "DataViz Pro",
    description: "Interactive data visualization dashboard with custom charts, real-time updates, and exportable reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["D3.js", "React", "GraphQL", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "CloudSync",
    description: "Cloud file synchronization service with version control, team collaboration, and automated backups.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    tags: ["AWS", "Node.js", "React Native", "S3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "TaskFlow",
    description: "Project management tool with Kanban boards, time tracking, and team analytics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Express", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "HealthTrack",
    description: "Personal health monitoring app with wearable integration and AI health insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    tags: ["React Native", "Firebase", "TensorFlow", "IoT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const filteredProjects = filter === "featured" 
    ? projects.filter(p => p.featured) 
    : projects

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            {"// 003"}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Filter tabs */}
          <div className="mt-8 flex justify-center gap-4">
            {["all", "featured"].map((f) => (
              <motion.button
                key={f}
                onClick={() => {
                  setFilter(f as "all" | "featured")
                  setActiveIndex(0)
                }}
                className={`rounded border px-6 py-2 font-mono text-sm uppercase tracking-wider transition-all ${
                  filter === f
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/30 text-muted-foreground hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project showcase */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.button
            onClick={prevProject}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/80 p-3 text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 md:-left-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/80 p-3 text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 md:-right-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Project card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredProjects[activeIndex]?.id}
              className="overflow-hidden rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-0 md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden md:aspect-auto">
                  <img
                    src={filteredProjects[activeIndex]?.image || "/placeholder.svg"}
                    alt={filteredProjects[activeIndex]?.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Project number */}
                  <div className="absolute left-4 top-4 font-mono text-6xl font-bold text-primary/20">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                    {filteredProjects[activeIndex]?.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {filteredProjects[activeIndex]?.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {filteredProjects[activeIndex]?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={filteredProjects[activeIndex]?.liveUrl}
                      className="flex items-center gap-2 rounded border border-primary bg-primary px-4 py-2 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={filteredProjects[activeIndex]?.githubUrl}
                      className="flex items-center gap-2 rounded border border-primary/50 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {filteredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
