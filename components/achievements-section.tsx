"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Award, X, MousePointerClick } from "lucide-react"
import { ScrollAnimation } from "./ui/scroll-animation"

const achievements = [
  {
    id: 1,
    icon: Award,
    year: "2024",
    title: "AWS Cloud Architecting",
    issuer: "Amazon Web Services",
    description: "Training certification demonstrating expertise in designing and architecting cloud solutions on AWS.",
    image: "/certificates/AWS Cloud Architecting Training Badge Certificate.jpg",
  },
  {
    id: 2,
    icon: Award,
    year: "2024",
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    description: "Foundation level training certification covering core AWS services and cloud computing fundamentals.",
    image: "/certificates/AWS Cloud Foundations Training Badge Certificate.jpg",
  },
  {
    id: 3,
    icon: Award,
    year: "2024",
    title: "NCII Computer Systems Servicing",
    issuer: "TESDA",
    description: "Foundation level training certification covering core AWS services and cloud computing fundamentals.",
    image: "/images/Computer Systems Servicing.jpg",
  },

]

export function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Achievements</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recognition & Awards</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Previous achievement"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Next achievement"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Achievement Carousel */}
        <ScrollAnimation delay={0.2}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div key={achievement.id} className="w-full flex-shrink-0 px-1">
                    <div className="max-w-2xl mx-auto">
                      <button
                        onClick={() => setSelectedImage(achievement.image)}
                        className="relative w-full bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
                        </div>

                        {/* Content */}
                        <div className="relative p-8 md:p-12 text-center">
                          <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                          <div className="text-sm text-primary font-medium mb-2">{achievement.year}</div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{achievement.title}</h3>
                          <div className="text-muted-foreground mb-4">{achievement.issuer}</div>
                          <p className="text-muted-foreground leading-relaxed mb-6">{achievement.description}</p>

                          {/* Click Hint */}
                          <div className="flex items-center justify-center gap-2 text-sm text-primary/70 group-hover:text-primary transition-colors">
                            <MousePointerClick className="w-4 h-4" />
                            <span>Click to view certificate</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-xl border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
