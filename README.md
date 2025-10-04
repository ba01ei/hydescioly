# Hyde Science Olympiad Team Website

A clean, minimalist website for the Hyde Science Olympiad Team featuring subtle glassmorphism effects and sidebar navigation.

## ✨ Features

- **Minimalist Design** - Clean layout with ample white space and neutral color palette
- **Subtle Glassmorphism** - Frosted glass effects without color tints for modern aesthetics
- **Sidebar Navigation** - Fixed sidebar for easy access to all pages
- **Fully Responsive** - Mobile-first design that adapts to all screen sizes
- **Multi-Page Structure** - Organized content across dedicated pages

## 📄 Pages

- **Home** - Welcome section and team overview
- **Instructions** - Event assignments, team structure, and season timeline
- **Resources** - Study materials, official links, and helpful resources
- **2024-2025 Team** - Competition results and team achievements

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

**Colors:**

- Background: `#f8f9fa` (light gray)
- Surface: `#ffffff` (white)
- Text Primary: `#1a1a1a` (near black)
- Text Secondary: `#6c757d` (gray)
- Border: `#e9ecef` (light gray)

**Glassmorphism:**

- Background: `rgba(255, 255, 255, 0.7)`
- Backdrop blur: `12px`
- Border: `rgba(255, 255, 255, 0.3)`
- Subtle shadows for depth

## 📦 Project Structure

```
app/
├── components/
│   ├── Sidebar.tsx              # Fixed sidebar navigation
│   ├── Sidebar.module.css
│   ├── PageLayout.tsx           # Main layout wrapper
│   └── PageLayout.module.css
├── instructions/
│   ├── page.tsx                 # Instructions page
│   └── page.module.css
├── resources/
│   ├── page.tsx                 # Resources page
│   └── page.module.css
├── team-2024-2025/
│   ├── page.tsx                 # Team results page
│   └── page.module.css
├── globals.css                  # Global styles
├── layout.tsx                   # Root layout
├── page.tsx                     # Home page
└── page.module.css
```

## 🛠️ Built With

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- Minimalist Design + Glassmorphism

## 📱 Responsive Breakpoints

- Desktop: 768px+
- Mobile: < 768px

## 🔗 Contact

- Team Email: hsoteams@gmail.com
- Group Assignments: http://tiny.cc/hydescioly26
- Hyde PTSA: hydeptsa@gmail.com

---

Made for Hyde Science Olympiad Team 🧪
