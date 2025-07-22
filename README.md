# Acmedix Pharma Website

A modern pharmaceutical company website built with React, TypeScript, and Tailwind CSS. The site showcases pharmaceutical products, R&D capabilities, manufacturing facilities, and corporate information.

## 🚀 Features

- **Product Categories**: Anti-Diabetic, Cardiac Care, Neuro Care, and Other Therapy products
- **Interactive Navigation**: Click-based product dropdown with category pages
- **Real Product Showcase**: 46+ pharmaceutical products with actual product images
- **Responsive Design**: Mobile-first design with modern UI components
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS with custom pharmaceutical design system
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/varunisrani/acmedix.git
   cd acmedix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn-ui components
│   ├── Navigation.tsx    # Main navigation with product dropdown
│   ├── Footer.tsx        # Site-wide footer
│   └── [Other].tsx       # Various page components
├── pages/            # Route components
│   ├── AntiDiabetic.tsx  # Anti-diabetic products
│   ├── CardiacCare.tsx   # Cardiac care products
│   ├── NeuroCare.tsx     # Neurological products
│   └── OtherTherapy.tsx  # Other therapeutic products
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
└── assets/           # Static images and resources
```

## 🎨 Design System

- **Primary Color**: Acmedix Red (`--primary: 0 74% 42%`)
- **Components**: Pharmaceutical-themed UI with hover effects
- **Typography**: Professional medical/pharmaceutical styling
- **Animations**: Smooth transitions and scroll-triggered effects

## 📱 Key Pages

- **Homepage** (`/`) - Company overview and flagship products
- **About** (`/about`) - Company information and history
- **Manufacturing** (`/manufacturing`) - Manufacturing capabilities
- **Products** - Four category pages:
  - `/products/anti-diabetic` - Anti-diabetic medications
  - `/products/cardiac-care` - Cardiovascular treatments
  - `/products/neuro-care` - Neurological medications
  - `/products/other-therapy` - Other therapeutic solutions
- **Export** (`/export`) - International markets and services
- **Careers** (`/careers`) - Job opportunities
- **Contact** (`/contact`) - Contact information and inquiry forms

## 🚀 Deployment

The project is ready for deployment on any modern hosting platform:

- **Vercel**: `npm run build` then deploy `dist` folder
- **Netlify**: Connect GitHub repo for automatic deployments
- **AWS S3/CloudFront**: Upload `dist` folder to S3 bucket
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Acmedix Pharma.

## 📞 Contact

For any questions or support, please contact the development team.

---

Built with ❤️ for Acmedix Pharma