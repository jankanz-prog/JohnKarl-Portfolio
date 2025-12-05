import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:hidden mb-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <img
                  src="/images/ProfileImageMe.png"
                  alt="JohnKarl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <p className="text-primary font-medium">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">John Karl Gadiane</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">Full Stack Developer</h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              I build accessible, digital experiences for the web. like connecting puzzle pieces to create a beautiful image.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                View Work
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
              <a
                href="https://github.com/jankanz-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:jkpgadiane@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <img
                  src="/images/ProfileImageMe.png"
                  alt="JohnKarl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-16">
          <a
            href="#about"
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
