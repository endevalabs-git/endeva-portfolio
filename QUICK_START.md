# 🚀 Quick Start Guide

## Getting Started

### 1. Run the Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. View the Live Site
The website features 8 sections:
- **Hero** — Opening statement
- **Value** — 5 philosophy statements
- **Services** — 7 service offerings
- **Process** — 4-step methodology (Discover → Scale)
- **Projects** — 6 project showcase
- **CTA** — Call-to-action
- **Footer** — Navigation & info
- **Navigation** — Fixed header with mobile menu

### 3. Making Changes

#### Edit Content
- Hero copy: [app/components/Hero.tsx](./components/Hero.tsx)
- Services: [app/components/ServicesSection.tsx](./components/ServicesSection.tsx)
- Process steps: [app/components/ProcessSection.tsx](./components/ProcessSection.tsx)
- Projects: [app/components/ProjectsSection.tsx](./components/ProjectsSection.tsx)

#### Edit Styling
- Global styles: [app/globals.css](./app/globals.css)
- Component styles: Use Tailwind classes in component files
- Never use inline `style={}` props

#### Add New Sections
Copy this template to `components/NewSection.tsx`:
```tsx
'use client';

import { ScrollReveal } from './ScrollReveal';

export function NewSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light">Your Title</h2>
        </ScrollReveal>
        
        {/* Your content here */}
      </div>
    </section>
  );
}
```

Then import in [app/page.tsx](./app/page.tsx):
```tsx
import { NewSection } from '@/components/NewSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full pt-16 md:pt-20">
        <Hero />
        <ValueSection />
        <NewSection /> {/* Add here */}
        {/* ... */}
      </main>
    </>
  );
}
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Complete design philosophy and specs |
| [BUILD_SUMMARY.md](./BUILD_SUMMARY.md) | Architecture and build details |
| [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) | Developer reference for components |

---

## 🎨 Design System at a Glance

### Colors
- **Background**: White
- **Primary Text**: Charcoal (#171717)
- **Secondary Text**: Gray (#525252)
- **Accents**: Only neutral tones

### Typography
- **Font**: System UI (no external fonts)
- **Weight**: Light (400) throughout
- **Hierarchy**: Size only, no color variation

### Spacing
```
Mobile: 24px padding
Tablet: 32px padding
Desktop: 40px padding
```

### Motion
- Scroll reveals: 600ms fade + translate
- Hover states: 300ms opacity/scale
- Easing: Natural curve (no bounce)

---

## 🔍 Key Files to Know

### Page Structure
- [app/layout.tsx](./app/layout.tsx) — HTML structure, metadata
- [app/page.tsx](./app/page.tsx) — Assembles all sections
- [app/globals.css](./app/globals.css) — Typography, reset, base styles

### Components
- [components/ScrollReveal.tsx](./components/ScrollReveal.tsx) — Scroll animation
- [components/Navigation.tsx](./components/Navigation.tsx) — Fixed header
- [components/Hero.tsx](./components/Hero.tsx) — Opening section
- All others: Follow same pattern

---

## ✅ Common Tasks

### Change Logo/Brand Name
Edit [components/Navigation.tsx](./components/Navigation.tsx):
```tsx
<a href="#" className="text-xl font-light">
  Your Brand Name {/* Change here */}
</a>
```

### Update Service List
Edit [components/ServicesSection.tsx](./components/ServicesSection.tsx):
```tsx
const SERVICES = [
  {
    title: 'Your Service',
    description: 'Your description.',
  },
  // Add more...
];
```

### Add Project
Edit [components/ProjectsSection.tsx](./components/ProjectsSection.tsx):
```tsx
const PROJECTS = [
  {
    title: 'Project Name',
    category: 'Category',
    color: 'from-neutral-100 to-neutral-50',
  },
  // Add more...
];
```

### Update Footer Links
Edit [components/Footer.tsx](./components/Footer.tsx):
```tsx
const FOOTER_SECTIONS = [
  {
    title: 'Section',
    links: ['Link 1', 'Link 2', 'Link 3'],
  },
  // Update these
];
```

### Add Mobile Navigation Link
Edit [components/Navigation.tsx](./components/Navigation.tsx):
```tsx
<a
  href="#your-section"
  className="block text-sm text-neutral-600 hover:text-neutral-900"
>
  Your Link
</a>
```

---

## 🚨 Things NOT to Do

❌ Don't edit CSS directly in components (use Tailwind classes)
❌ Don't add new colors (stick to neutral palette)
❌ Don't remove the ScrollReveal wrapper on sections
❌ Don't change the 'use client' directive at top of components
❌ Don't use inline styles (`style={}`)
❌ Don't add heavy shadows or complex effects
❌ Don't override globals.css base styles

---

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
git add .
git commit -m "Your message"
git push origin main
```
Vercel will automatically deploy from your git push.

### Deploy to Other Platforms
The project is a standard Next.js 16 app. Use:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js host

---

## 🐛 Troubleshooting

### Changes not showing
- Clear browser cache: `Ctrl+Shift+R` (hard refresh)
- Restart dev server: Stop and run `npm run dev` again

### Styling looks broken
- Check Tailwind classes are spelled correctly
- Make sure you're using only existing Tailwind classes
- Avoid space characters in class names

### Animation feels janky
- Reduce animation duration (try 400ms instead of 600ms)
- Check browser DevTools Performance tab
- Ensure ScrollReveal isn't nested

### Mobile menu not working
- Verify Navigation.tsx has `'use client'` at top
- Check useState import is present
- Ensure onClick handlers are properly attached

---

## 📞 Getting Help

1. Check the [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)
2. Review similar component for patterns
3. Read [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for principles
4. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
5. Check Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)

---

## 🎉 You're Ready!

The site is production-ready. Start customizing with your content and brand details. Remember: **Restraint is elegance.**

Happy building! 🚀
