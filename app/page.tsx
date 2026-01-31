"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { TerminalPreloader } from "@/components/terminal-preloader"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ButterflySkills } from "@/components/butterfly-skills"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { CategorizedSkills } from "@/components/categorized-skills"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        {isLoading && (
          <TerminalPreloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative min-h-screen overflow-hidden">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ButterflySkills />
          <ProjectsSection />
          <TimelineSection />
          <CategorizedSkills />
          <ContactSection />
          <Footer />
        </main>
      )}
    </ThemeProvider>
  )
}
