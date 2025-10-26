# zkGenesis - Web3 Zero-Knowledge Community Landing Page

A modern, interactive landing page for the zkGenesis community, built to showcase zero-knowledge technology and foster collaboration in the Web3 space.

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC)

## 🌟 Features

- **Interactive Background**: Dynamic animated background with floating elements
- **Smooth Animations**: Scroll-triggered animations and hover effects throughout
- **Responsive Design**: Fully responsive across all device sizes
- **Loading Screen**: Professional loading animation with branding
- **Modern UI Components**: Built with shadcn/ui component library
- **Zero-Knowledge Theming**: Specialized content for ZK technology community
- **Performance Optimized**: Built with Vite for fast development and builds

## 🚀 Tech Stack

### Core Technologies
- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.0+** - Type-safe JavaScript development
- **Vite 5.0+** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **shadcn/ui** - Modern component library (57+ components)
- **Lucide React** - Beautiful icon library
- **Tailwind Animate** - CSS animation utilities

### Utilities
- **clsx** - Conditional CSS class composition
- **Tailwind Merge** - Intelligent Tailwind class merging
- **Class Variance Authority** - Component variant management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
zkgenesis-landing/
├── public/                 # Static assets
│   ├── placeholder-logo.svg
│   ├── privacy-technology-future.jpg
│   ├── secure-blockchain-development.jpg
│   ├── zero-knowledge-proof-circuit.jpg
│   └── zk-snarks-development.jpg
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components (57 components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (50+ more)
│   │   ├── header.tsx     # Navigation header
│   │   ├── hero.tsx       # Main hero section
│   │   ├── events.tsx     # Events showcase
│   │   ├── community.tsx  # Community section
│   │   ├── highlights.tsx # Project highlights
│   │   ├── partners.tsx   # Partners section
│   │   ├── footer.tsx     # Site footer
│   │   ├── loading-screen.tsx
│   │   ├── interactive-background.tsx
│   │   ├── hoverable-text.tsx
│   │   ├── scroll-animations.tsx
│   │   └── theme-provider.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib/               # Utilities
│   │   └── utils.ts       # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.js        # Vite configuration
├── components.json       # shadcn/ui configuration
├── .gitignore           # Git ignore patterns
└── README.md            # Project documentation
```

## 🏗️ Component Architecture

### Main Sections
- **Header**: Navigation with smooth scrolling and responsive menu
- **Hero**: Eye-catching introduction with animated text effects
- **Events**: Showcase upcoming community events and workshops
- **Community**: Highlight community features and engagement
- **Highlights**: Feature project highlights and achievements
- **Partners**: Display partner organizations and sponsors
- **Footer**: Contact information and additional links

### Interactive Elements
- **InteractiveBackground**: Animated floating elements and gradients
- **ScrollAnimations**: Fade-in and slide animations on scroll
- **HoverableText**: Interactive text highlighting effects
- **LoadingScreen**: Branded loading experience

### UI Components (shadcn/ui)
The project includes a comprehensive UI library with 57+ components:
- Form components (Input, Button, Select, etc.)
- Layout components (Card, Tabs, Accordion, etc.)
- Navigation components (Menu, Breadcrumb, etc.)
- Feedback components (Toast, Alert, Dialog, etc.)
- Data display (Table, Chart, Calendar, etc.)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zkgenesis-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚫 Git Ignore Configuration

The project includes a comprehensive `.gitignore` file that excludes:

### Development Files
- **Dependencies**: `node_modules/`, `jspm_packages/`, `bower_components`
- **Build Outputs**: `dist/`, `build/`, `out/`, `storybook-static/`
- **Cache Directories**: `.cache`, `.eslintcache`, `.stylelintcache`
- **Environment Variables**: `.env*` files for all environments

### IDE and Editor Files
- **VS Code**: `.vscode/` (except essential config files)
- **JetBrains**: `.idea/`, `*.iml`, `*.ipr`, `*.iws`
- **Text Editors**: Vim, Emacs, Sublime Text temporary files

### Operating System Files
- **Windows**: `Thumbs.db`, `Desktop.ini`, `$RECYCLE.BIN/`
- **macOS**: `.DS_Store`, `.Spotlight-V100`, `.Trashes`
- **Linux**: `.directory`, `.Trash-*`, `.nfs*`

### Platform-Specific
- **Deployment**: `.vercel/`, `.netlify/`, `amplify/`, `.firebase/`
- **Testing**: `coverage/`, `.nyc_output/`, `lib-cov/`
- **Package Managers**: `.yarn/cache`, `.pnp.*`, `.npm`

This ensures a clean repository without unnecessary files while preserving essential configuration.

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The built files will be available in the `dist/` directory.

### Deploy Options
The project is configured for easy deployment to:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the community forums

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)
- [ ] Advanced animations and micro-interactions
- [ ] Integration with community platforms
- [ ] Performance monitoring and analytics

---

**Built with ❤️ for the Zero-Knowledge community**

*zkGenesis - Pioneering the future of privacy-preserving technology*
#
