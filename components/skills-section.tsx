"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiSpringboot,
  SiDjango,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiFigma,
  SiVercel,
  SiJetbrains,
} from "react-icons/si"
import { Server, Layout, Wrench, Code } from "lucide-react"
import { ScrollAnimation } from "./ui/scroll-animation"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "MySQL", "REST APIs", "SpringBoot", "Django"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "JetBrains", "WindSurf"],
  },
]

const techLogos = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiSpringboot, name: "SpringBoot" },
  { icon: SiDjango, name: "Django" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiAmazonwebservices, name: "AWS" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiJetbrains, name: "JetBrains" },
  { icon: Code, name: "VS Code" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Technologies I work with</h2>
          </div>
        </ScrollAnimation>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 gap-4 md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 mb-16 scrollbar-none">
          {skillCategories.map((category, index) => (
            <ScrollAnimation
              key={category.title}
              delay={index * 0.1}
              variant="fadeUp"
              className="min-w-[85vw] snap-center md:min-w-0"
            >
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center mx-8 min-w-[80px] group"
                >
                  <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
