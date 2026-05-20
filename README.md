# Edson Wasswa - Personal Web Portfolio

A high-end, editorial-style personal portfolio built with React 19, Framer Motion, and Tailwind CSS. This project is a complete redesign and engineering upgrade from the original HTML/CSS/JS version.

## 🚀 Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite

## ✨ Key Features

- **Refined Editorial Dark Theme**: A sophisticated dark aesthetic with sharp typography and strategic whitespace.
- **Custom Animated Cursor**: A magnetic-trailing cursor that reacts to interactive elements.
- **Cinematic Hero Section**: Staggered text reveals and magnetic hover effects.
- **Smooth Page Transitions**: Fluid navigation between views using `AnimatePresence`.
- **Responsive Design**: Mobile-first architecture with custom navigation for smaller screens.
- **Dark/Light Mode**: Persisted theme preferences with smooth transitions.
- **Performance Optimized**: Lazy-loaded routes and GPU-accelerated animations.
- **Accessibility**: ARIA labels, semantic HTML, and visible focus states.

## 🛠️ Project Structure

```text
src/
├── components/
│   ├── layout/         (Navbar, Footer, Layout wrapper)
│   ├── ui/             (Button, Badge, CustomCursor - reusable atoms)
│   └── sections/       (Hero, About, Projects, Skills, Contact)
├── pages/              (Home, ProjectDetail, NotFound)
├── hooks/              (useScrollProgress, useMousePosition, useDarkMode, useKonamiCode)
├── data/               (projects.js, skills.js, experience.js, about.js - all content as data)
├── assets/             (images, icons)
├── styles/             (global.css, variables.css)
└── utils/              (helpers, constants)
```

## 🏃 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd personal_Web_Portifolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚢 Deployment

This project is optimized for deployment on **Vercel** or **Netlify**.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will automatically detect the Vite project and deploy it.

---

Designed & built with obsession by Edson Wasswa.
