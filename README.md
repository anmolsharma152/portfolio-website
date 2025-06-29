# Anmol Sharma - Portfolio Website

A modern, interactive portfolio website showcasing advanced frontend development skills with sophisticated animations, responsive design, and excellent user experience.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript
- **Advanced Animations**: Framer Motion + GSAP
- **Interactive Background**: Canvas-based particle system
- **Dark/Light Theme**: Dynamic theme switching with localStorage persistence
- **Typewriter Effect**: Dynamic text animation in hero section
- **Magnetic Buttons**: Interactive hover effects
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: 60fps animations and optimized builds

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 + Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4 + GSAP 3.12.2
- **Icons**: Lucide React 0.263.1
- **Language**: TypeScript
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Hero.tsx        # Hero section with typewriter
│   ├── LoadingScreen.tsx # Loading animation
│   ├── Navigation.tsx  # Navigation with theme toggle
│   ├── ParticleBackground.tsx # Canvas particle system
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── hooks/              # Custom React hooks
│   └── useGSAPAnimations.ts # GSAP animation management
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── animations.ts   # Animation variants
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Personal description
- `src/components/Contact.tsx` - Contact details
- `src/components/Projects.tsx` - Project links
- `src/components/Skills.tsx` - Skills and expertise

### Styling
- Colors and theme: `src/index.css`
- Tailwind config: `tailwind.config.js`

### Animations
- Framer Motion variants: `src/utils/animations.ts`
- GSAP animations: `src/hooks/useGSAPAnimations.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Optimized animations for 60fps
- Lazy loading ready
- Tree shaking enabled
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Anmol Sharma
