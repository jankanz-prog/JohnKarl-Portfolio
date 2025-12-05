"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ScrollAnimation } from "./ui/scroll-animation"

const aboutSlides = [
  {
    id: 1,
    title: "Who I Am",
    image: "https://placehold.co/600x600/1a1a1a/888888?text=Developer+Portrait",
    content: `I'm a developer passionate about crafting accessible, User interfaces that blend thoughtful design. My favorite work lies at the intersection of design and development.`,
  },
  {
    id: 2,
    title: "What I Do",
    image: "https://placehold.co/600x600/1a1a1a/888888?text=Coding+Workspace",
    content: `Currently, I'm a Student specializing in building modern web applications. I contribute to the creation and maintenance of UI components, focusing on performance and accessibility.`,
  },
  {
    id: 3,
    title: "My Journey",
    image: "https://placehold.co/600x600/1a1a1a/888888?text=Career+Growth",
    content: `With over 3 years of experience, I've worked on Student Projects. From building MVPs to scaling production systems, each project has shaped my approach to problem-solving and collaboration.`,
  },
  {
    id: 4,
    title: "Beyond Code",
    image: "https://placehold.co/600x600/1a1a1a/888888?text=Creative+Hobbies",
    content: `In my spare time, I enjoy reading, travelling, and exploring new technologies. I believe in continuous learning and sharing knowledge with my friends.`,
  },
]

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "7", label: "Projects Completed" },

]

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutSlides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.targetTouches[0].clientX
    setDragOffset(currentX - dragStart)
  }

  const onTouchEnd = () => {
    handleDragEnd()
  }

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setDragStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    setDragOffset(currentX - dragStart)
  }

  const onMouseUp = () => {
    handleDragEnd()
  }

  const onMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > minSwipeDistance) {
      if (dragOffset < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setIsDragging(false)
    setDragOffset(0)
  }

  const currentSlide = aboutSlides[currentIndex]

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Crafting digital experiences with passion</h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div
            ref={containerRef}
            className={`relative select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 text-muted-foreground/60 text-sm pointer-events-none">
              <span className="hidden md:inline">Drag to explore</span>
              <span className="md:hidden">Swipe to explore</span>
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12"
                />
              </svg>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-100"
              style={{
                transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : "translateX(0)",
              }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto overflow-hidden pointer-events-none">
                  <img
                    src={currentSlide.image || "/placeholder.svg"}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center pointer-events-none">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono text-sm">0{currentSlide.id}</span>
                      <div className="h-px w-12 bg-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{currentSlide.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{currentSlide.content}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {aboutSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
