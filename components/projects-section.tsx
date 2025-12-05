"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { ScrollAnimation } from "./ui/scroll-animation"

const projects = [
  {
    id: 1,
    title: "Vocalyx",
    description:
      "A voice-based communication platform with real-time transcription and translation features.",
    image: "/images/vocalyx.jpg",
    tags: ["React", "Django", "Google Cloud", "MongoDB"],
    liveUrl: "https://vocalyx.online/",
    githubUrl: "https://github.com/karl2522/Vocalyx",
  },
  {
    id: 2,
    title: "SavorSpace",
    description:
      "A recipe sharing and meal planning application with social features and dietary preferences.",
    image: "/images/savorspace.jpg",
    tags: ["ReactJS", "Springboot", "PostgreSQL", "Vite"],
    liveUrl: "https://savorspace-frontend.vercel.app/",
    githubUrl: "https://github.com/karl2522/SavorSpace-Frontend",
  },
  {
    id: 3,
    title: "Leisure Resort",
    description:
      "A comprehensive resort booking and management system with real-time availability and payment processing.",
    image: "/images/leisureresort.jpg",
    tags: ["React", "SpringBoot", "MySQL", "Google App Engine"],
    liveUrl: "https://leisure-resort-frontend.onrender.com/",
    githubUrl: "https://github.com/jankanz-prog/IT-342-Leisure-Resort",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Work</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Project Carousel */}
        <ScrollAnimation delay={0.2}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-1">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="aspect-video rounded-xl overflow-hidden border border-border bg-background">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <a href={project.liveUrl} className="flex items-center gap-2 text-primary hover:underline">
                          <ExternalLink size={16} />
                          Video Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
