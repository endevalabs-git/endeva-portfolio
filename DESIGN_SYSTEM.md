# Endeva Labs Website

A premium, minimal, intentional digital studio website built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## 🎯 Design Philosophy

- **Calm but powerful** — Clean layouts with confident typography
- **Minimal but meaningful** — Every element serves a purpose
- **Innovative subtly** — Motion and interaction that feel natural
- **Globally competitive** — Apple/Nike/Vercel quality

## 🏗️ Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page with all sections
└── globals.css         # Global typography and reset

components/
├── Navigation.tsx      # Fixed navigation with mobile menu
├── Hero.tsx            # Hero section with statement
├── ValueSection.tsx    # Philosophy/values statements
├── ServicesSection.tsx # 7 core services display
├── ProcessSection.tsx  # 4-step process (Discover → Scale)
├── ProjectsSection.tsx # Project grid showcase
├── CTASection.tsx      # Call-to-action with button
├── Footer.tsx          # Footer with links and info
└── ScrollReveal.tsx    # Reusable scroll animation component
```

## 🎨 Design System

### Color Palette
- **Background:** White (`#ffffff`)
- **Text:** Charcoal (`#171717`)
- **Secondary:** Neutral-600 (`#525252`)
- **Accents:** Neutral-900 (`#171717`)
- **Borders:** Neutral-200

### Typography
- **Font:** System font stack (SF Pro, Segoe UI, Roboto)
- **Weight:** Light (400) for elegant appearance
- **Hierarchy:** Size and spacing over color variation

### Spacing Scale
- **Section padding:** 24px (md: 32px, lg: 40px)
- **Component gaps:** 12px (md: 16px, lg: 20px)
- **Vertical rhythm:** Multiples of 4px

## ✨ Key Features

### 1. ScrollReveal Animation
Subtle entrance animations on scroll (fade + translateY) with staggered delays.

```tsx
<ScrollReveal delay={0.1}>
  <h2>Content appears with smooth reveal</h2>
</ScrollReveal>
```

### 2. Navigation
- Fixed positioning with smooth scrolling
- Mobile-responsive hamburger menu
- Minimal, intentional design

### 3. Sections (In Order)
1. **Hero** — Brand statement and hook
2. **Value** — 5 philosophy statements
3. **Services** — 7 service offerings in clean grid
4. **Process** — 4-step Apple-style process
5. **Projects** — 6 project showcase grid
6. **CTA** — Single statement with button
7. **Footer** — Links, navigation, info

### 4. Motion
- Uses Framer Motion sparingly
- Only opacity, translateY, subtle scale
- Duration: 600ms for scroll reveals, 300ms for interactions
- Easing: Natural curve ([0.25, 0.46, 0.45, 0.94])

## 🚀 Development

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

## 📝 Content Guidelines

### Typography Hierarchy
```
Hero: text-5xl/6xl/7xl (light)
Section headings: text-4xl/5xl (light)
Subsection headings: text-2xl/3xl (light)
Body text: text-base/lg (leading-relaxed)
Small text: text-sm (secondary color)
```

### Spacing Rules
- Large sections: 24-40px padding vertically
- Content blocks: 12-16px gaps
- Inline text: Standard line-height (1.6)
- Between sections: 24px (md: 32px, lg: 40px)

## ✅ Design Constraints (Maintained)

✓ No random colors — Neutral palette only  
✓ No gradient overlays — Clean backgrounds  
✓ No heavy borders — Minimal line weights  
✓ No noisy elements — Focus on content  
✓ One font family — System stack throughout  
✓ Respects globals.css — No overrides  
✓ Mobile-first responsive — Works everywhere  
✓ Production-ready — Clean, semantic code  

## 🎬 Animation Principles

Motion is used to:
- Guide attention subtly
- Create rhythm on scroll
- Enhance hover states
- Feel like part of the design, not addition

**Never:**
- Use bounce easing
- Animate for more than 600ms
- Create motion that distracts
- Override global preferences

## 📱 Responsive Design

- **Mobile:** Base layout, single column
- **Tablet (md: 768px):** Optimized spacing, 2-column grids
- **Desktop (lg: 1024px):** Full layouts, 3-column grids

## 🔧 Technologies

- **Next.js 16** — App Router, RSC
- **React 19** — Latest features
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Performant animations
- **TypeScript** — Type safety
- **ESLint** — Code quality

## 📄 License

Endeva Labs © 2026. All rights reserved.
