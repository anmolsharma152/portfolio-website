# Anmol Sharma - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS for the Buildfolio Hackathon by Manipal University Jaipur. Showcasing projects, skills, and experience with a clean, responsive design and smooth animations.

## 🏆 Hackathon Submission

- **Event**: Buildfolio Hackathon
- **Organizer**: Manipal University Jaipur
- **Submission Date**: July 20, 2025
- **Features**:
  - Interactive 3D card in Hero section
  - Responsive design for all devices
  - Contact form with SendGrid email integration
  - Dark/Light theme support
  - Animated UI components

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS
- **3D Animations**: Interactive 3D card with Framer Motion
- **Dark/Light Theme**: Built-in theme switching with `next-themes`
- **Contact Form**: Functional contact form with SendGrid email notifications
- **Responsive Design**: Mobile-first, fully responsive layout
- **Performance Optimized**: Fast page loads and smooth animations
- **Type Safety**: Full TypeScript support
- **Form Validation**: Client and server-side validation with Zod

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Email**: SendGrid API
- **UI Components**: Shadcn/ui
- **3D Effects**: Framer Motion 3D
- **Type Checking**: TypeScript 5.3.3
- **Linting**: ESLint + Prettier

## ✨ Key Features

### 🎯 Modern Architecture
- **App Router**: Leveraging Next.js 14 App Router for better performance and SEO
- **Server Components**: Optimized performance with React Server Components
- **Edge Runtime**: Optimized for global performance
- **Image Optimization**: Built-in Next.js Image component with WebP format

### 🎭 3D Interactive Elements
- **3D Card**: Interactive card in Hero section with hover effects
- **Smooth Animations**: Page transitions and micro-interactions
- **Parallax Effects**: Subtle depth effects on scroll
- **Performance Optimized**: Hardware-accelerated animations

### 📝 Contact Form
- **Client/Server Validation**: Using React Hook Form and Zod
- **Email Integration**: SendGrid API for reliable email delivery
- **Real-time Feedback**: Toast notifications for form status
- **Error Handling**: Comprehensive validation and error messages

### 🎨 Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Dark/Light Mode**: Smooth theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Typography**: Custom font stack with optimal readability

### 🛠 Development Experience
- **TypeScript**: Full type safety throughout the application
- **ESLint + Prettier**: Enforced code style and formatting
- **Git Hooks**: Pre-commit checks with lint-staged and Husky
- **VS Code**: Recommended editor with workspace settings
- **Debugging**: Built-in Next.js debugging support
- **Environment Management**: Easy configuration with `.env.local` files
- **Error Handling**: Graceful fallbacks for API failures

### 📄 Interactive Resume
- **Tabbed Interface**: Timeline-based experience display
- **Downloadable PDF**: Professional resume export
- **Smooth Transitions**: Animated tab switching

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later (or pnpm, yarn)
- Git
- SendGrid API key (for contact form functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anmolsharma152/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   - Open `.env.local` and update the following:
     ```
     SENDGRID_API_KEY=your_sendgrid_api_key_here
     NEXT_PUBLIC_SENDER_EMAIL=your_verified_sendgrid_email@example.com
     NEXT_PUBLIC_RECIPIENT_EMAIL=your_email@example.com
     ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗 Project Structure

```
.
├── app/                    # App Router
│   ├── api/                # API routes
│   │   └── contact/        # Contact form API route
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # Shadcn/ui components
│   ├── Contact.tsx         # Contact form component
│   └── ToastProvider.tsx   # Toast notifications
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Global styles and themes
```

## 🛠 Development

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

### Building for Production
```bash
npm run build
```

### Running Production Build
```bash
npm start
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anmolsharma152/portfolio-website.git
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
│   ├── About.tsx       # About section with animations
│   ├── Contact.tsx     # Contact form and social links
│   ├── GitHubStats.tsx # Live GitHub data integration
│   ├── Hero.tsx        # Hero section with typewriter effect
│   ├── LoadingScreen.tsx # Loading animation
│   ├── Navigation.tsx  # Navigation with theme toggle
│   ├── ParticleBackground.tsx # Canvas particle system
│   ├── Projects.tsx    # Projects showcase with GitHub API
│   ├── Resume.tsx      # Interactive resume component
│   └── Skills.tsx      # Skills section with progress bars
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
- `src/components/Hero.tsx` - Name and professional titles
- `src/components/About.tsx` - Personal description
- `src/components/Contact.tsx` - Contact details and social links
- `src/components/Projects.tsx` - GitHub username for API integration
- `src/components/Skills.tsx` - Skills and expertise levels
- `src/components/Resume.tsx` - Experience timeline and education

### GitHub Integration
- Update GitHub username in `src/components/GitHubStats.tsx`
- Configure GitHub API endpoints if needed
- Customize repository display preferences

### Styling
- Colors and theme: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Particle settings: `src/components/ParticleBackground.tsx`

### Animations
- Framer Motion variants: `src/utils/animations.ts`
- GSAP animations: `src/hooks/useGSAPAnimations.ts`
- Typewriter timing: `src/components/Hero.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with preview deployments

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `"homepage": "https://anmolsharma152.github.io/portfolio-website"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt seamlessly across devices with optimized touch interactions.

## 🎯 Performance

- **Optimized Animations**: 60fps performance with hardware acceleration
- **Lazy Loading**: Ready for component-level code splitting
- **Tree Shaking**: Unused code elimination
- **Minimal Bundle**: Optimized build size
- **API Caching**: GitHub data caching for better performance

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_GITHUB_USERNAME=your-github-username
VITE_GITHUB_TOKEN=your-github-token (optional)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Design Inspiration & Next Steps

To keep your portfolio at the cutting edge, consider these creative enhancements:

- Micro-interactions and animated feedback on all clickable elements
- Animated SVG or morphing section dividers for visual flow
- Parallax/3D tilt effects on cards and images
- Animated avatar in Hero/About section
- Dynamic blog/articles with animated post cards
- Interactive media gallery with lightbox and filtering
- Animated timeline for career milestones/events
- Newsletter signup with animated modal/slide-in
- Social proof carousel for testimonials or client logos
- Gamification elements (badges, achievements)
- Accessibility widget for high-contrast mode, font size, etc.
- PWA support for installability and offline use
- Analytics dashboard for engagement tracking
- AI/ML playground for interactive demos
- Multilingual support (i18n)

**How to Use These Ideas:**
- Pick a few that excite you most and fit your goals
- Sketch out the UI/UX and plan the implementation
- Build incrementally, focusing on performance and accessibility
- Share updates and gather feedback from users

Keep innovating and let your portfolio reflect your growth as a developer and designer!

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- GSAP for advanced animation capabilities
- Tailwind CSS for utility-first styling
- GitHub API for live data integration
- Vite for fast development experience

---

Built with ❤️ by Anmol Sharma

*Last updated: December 2024*
