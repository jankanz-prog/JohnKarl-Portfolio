# JohnKarl Portfolio

A modern, minimalistic portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- 🌑 **Dark Theme** - Professional dark color scheme with teal accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Clean, minimalistic design with smooth animations
- ⚡ **Fast Performance** - Built with Next.js 16 App Router
- 🎯 **Type Safe** - Full TypeScript support
- 🎭 **Custom Animations** - Infinite logo marquee, smooth carousel transitions, and scroll-triggered pop-in effects

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui, Lucide React, react-icons
- **Animations:** Framer Motion
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
JohnKarl-Portfolio/
├── app/
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.tsx          # Root layout with fonts
│   └── page.tsx            # Main landing page
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero-section.tsx    # Hero section
│   ├── about-section.tsx   # About section
│   ├── skills-section.tsx  # Skills with marquee animation
│   ├── projects-section.tsx    # Projects carousel
│   ├── achievements-section.tsx # Achievements carousel
│   ├── contact-section.tsx     # Contact form
│   ├── contact-section.tsx     # Contact form
│   ├── footer.tsx          # Footer
│   └── ui/
│       └── scroll-animation.tsx # Reusable scroll animation component
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

### Theme Colors

Modify color variables in `app/globals.css`:
```css
:root {
  --background: oklch(0.13 0.02 250);
  --primary: oklch(0.75 0.15 180);
  /* ... other colors */
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ by JohnKarl**
