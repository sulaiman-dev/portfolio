"use client"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <section
        id="about"
        className="section-padding bg-background-light dark:bg-background-dark"
      >
        <About />
      </section>

      <section
        id="projects"
        className="section-padding bg-accent-50 dark:bg-primary-900"
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="section-padding bg-background-light dark:bg-background-dark"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="section-padding bg-accent-50 dark:bg-primary-900"
      >
        <Contact />
      </section>

      {/* Note: Navbar and Footer are already included in your layout.tsx */}
    </>
  )
}
