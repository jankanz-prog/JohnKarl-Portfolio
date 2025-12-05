# JohnKarl Portfolio

A modern, minimalistic portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- 🌑 **Dark Theme** - Professional dark color scheme with teal accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Clean, minimalistic design with smooth animations
- ⚡ **Fast Performance** - Built with Next.js 16 App Router
- 🎯 **Type Safe** - Full TypeScript support
- 🎭 **Custom Animations** - Infinite logo marquee and smooth carousel transitions

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui, Lucide React, react-icons
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
│   └── footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/hero-section.tsx`):
   - Update name, title, and description
   - Replace social media links

2. **About Section** (`components/about-section.tsx`):
   - Update stats (years of experience, projects, clients)
   - Update description text

3. **Skills Section** (`components/skills-section.tsx`):
   - Modify skill categories and technologies

4. **Projects Section** (`components/projects-section.tsx`):
   - Add/update project details
   - Replace demo links and GitHub URLs

5. **Contact Section** (`components/contact-section.tsx`):
   - Update email, phone, and location
   - Customize form submission logic

### Theme Colors

Modify color variables in `app/globals.css`:
```css
:root {
  --background: oklch(0.13 0.02 250);
  --primary: oklch(0.75 0.15 180);
  /* ... other colors */
}
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ by JohnKarl**
