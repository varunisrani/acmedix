# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Acmedix Pharma is a pharmaceutical company website built as a React SPA using modern web technologies. The site showcases the company's pharmaceutical products, R&D capabilities, manufacturing facilities, and corporate information.

**Built with Lovable**: This project was created and is managed through the Lovable platform (https://lovable.dev), which provides automated Git integration for changes.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS with custom pharmaceutical design system
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React
- **Package Manager**: Multiple lockfiles present (npm, pnpm, bun)

## Development Commands

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Linting
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

### Route Structure
- `/` - Homepage with hero, company overview, flagship products
- `/about` - Company information and history  
- `/manufacturing` - Manufacturing capabilities and facilities
- `/products` - R&D capabilities and product development (currently R&D focused)
- `/export` - Export services and international markets
- `/careers` - Career opportunities and company culture
- `/contact` - Contact information and inquiry forms

### Component Architecture
```
src/
├── components/
│   ├── ui/           # shadcn-ui components (buttons, cards, dialogs, etc.)
│   ├── Navigation.tsx    # Sticky nav with contact bar and mobile menu
│   ├── HeroSection.tsx   # Homepage hero with CTA
│   ├── Footer.tsx        # Site-wide footer
│   └── [Other].tsx       # Page-specific sections
├── pages/            # Route components
├── hooks/            # Custom React hooks
├── lib/              # Utilities (utils.ts with cn() helper)
└── assets/           # Static images
```

### Design System

**Colors**: HSL-based pharmaceutical design system with Acmedix Red primary (`--primary: 0 74% 42%`)

**Key CSS Classes**:
- `.card-pharmaceutical` - Styled cards with hover effects
- `.btn-primary` / `.btn-secondary` - Branded buttons  
- `.gradient-text` - Red gradient text effect
- `.section-padding` - Consistent section spacing (py-16 px-4)
- `.hero-section` - Full-screen hero backgrounds

**Animations**: Custom Tailwind keyframes for `fade-in-up`, `scale-in`, `float`, `pulse-glow`

### State Management
- TanStack Query configured globally in App.tsx for server state
- React Router for client-side routing
- Component-level useState for UI interactions

## Code Conventions

- **Path Aliases**: `@/` maps to `./src/`
- **TypeScript**: Configured with relaxed settings (no strict null checks, unused vars allowed)
- **ESLint**: React hooks and TypeScript rules enabled, unused vars rule disabled
- **Component Structure**: Functional components with proper TypeScript interfaces
- **Styling**: Tailwind classes with custom pharmaceutical design tokens

## Key Features to Understand

1. **Pharmaceutical Branding**: Heavy use of red color scheme and medical iconography
2. **Responsive Design**: Mobile-first with responsive navigation and layouts  
3. **Animation System**: Scroll-triggered animations and hover effects throughout
4. **shadcn-ui Integration**: Complete UI component library with consistent theming
5. **Contact Integration**: Top navigation bar shows company contact information

## Navigation Structure

The main navigation includes a contact bar (phone, email, location) and main nav items. The Products page is currently focused on R&D capabilities rather than actual product listings.

## Important Notes

- Vite dev server configured for host "::" (all interfaces) on port 8080
- Component tagging enabled in development mode via `lovable-tagger`
- Multiple package managers supported but npm is primary based on package-lock.json
- Images use external Unsplash URLs for placeholders
- No custom domain setup required for Lovable deployment