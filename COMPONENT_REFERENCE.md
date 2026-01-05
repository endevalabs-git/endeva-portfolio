# 🎨 Component Library Reference

Quick reference for using and extending Endeva Labs components.

## ScrollReveal Component

The foundation of all scroll-triggered animations.

### Usage
```tsx
import { ScrollReveal } from '@/components/ScrollReveal';

<ScrollReveal delay={0.1}>
  <h2>This content reveals on scroll</h2>
</ScrollReveal>
```

### Props
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;      // Content to reveal
  delay?: number;                 // Stagger delay in seconds (default: 0)
  className?: string;             // Additional CSS classes
}
```

### Behavior
- Initial state: `opacity: 0, translateY: 20px`
- Final state: `opacity: 1, translateY: 0`
- Triggers at: 10% visibility in viewport
- Duration: 600ms
- Easing: `[0.25, 0.46, 0.45, 0.94]` (natural curve)

### Example: Staggered List
```tsx
{items.map((item, index) => (
  <ScrollReveal key={index} delay={index * 0.1}>
    <div>{item}</div>
  </ScrollReveal>
))}
```

---

## Navigation Component

Fixed header with mobile menu.

### Features
- ✅ Sticky positioning
- ✅ Mobile hamburger menu
- ✅ Smooth scroll anchors
- ✅ Contact CTA button

### Responsive Behavior
- **Mobile**: Hamburger menu with dropdown
- **Desktop (md)**: Inline navigation links

### Customization
Edit `Navigation.tsx` to:
- Change logo text
- Adjust navigation links
- Modify button text/style
- Update z-index if needed

---

## Section Components

All major sections follow the same pattern:

### Base Structure
```tsx
<section className="w-full bg-white py-24 md:py-32 lg:py-40">
  <div className="mx-auto max-w-6xl px-6 md:px-8">
    <ScrollReveal>
      <h2>Section Title</h2>
    </ScrollReveal>
    
    {/* Content with staggered reveals */}
  </div>
</section>
```

### Spacing System
```
py-24  → 96px (mobile)
md:py-32 → 128px (tablet)
lg:py-40 → 160px (desktop)

px-6   → 24px (mobile)
md:px-8 → 32px (desktop)
```

### Grid Layouts
- **Services**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Projects**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Process**: Custom 12-column layout for alignment

---

## Typography Patterns

### Headings
```tsx
// Hero (very large)
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light">

// Section title
<h2 className="text-4xl md:text-5xl font-light">

// Subsection
<h3 className="text-2xl md:text-3xl font-light">

// Metadata
<p className="text-sm text-neutral-600">
```

### Body Text
```tsx
// Regular paragraph
<p className="text-base md:text-lg text-neutral-600 leading-relaxed">

// Description (smaller)
<p className="text-sm text-neutral-600">

// Muted secondary text
<p className="text-sm text-neutral-500">
```

---

## Color Palette

### Use Cases
```
Background:     bg-white
Primary Text:   text-neutral-900 (or default)
Secondary Text: text-neutral-600
Muted Text:     text-neutral-500
Light BG:       bg-neutral-100 or bg-neutral-50
Border:         border-neutral-200
Hover (text):   hover:text-neutral-900
Hover (bg):     hover:bg-neutral-900 hover:text-white
```

### Avoiding Color Mistakes
❌ Don't use arbitrary colors (`text-[#xyz]`)
❌ Don't mix neutral shades (stick to: 50, 100, 200, 500, 600, 900)
❌ Don't add accent colors without design review

---

## Button Patterns

### Primary CTA Button
```tsx
<button className="px-8 py-3 md:px-10 md:py-4 border border-neutral-900 text-neutral-900 rounded-none font-light transition-all duration-300 hover:bg-neutral-900 hover:text-white active:scale-95">
  Button Text
</button>
```

### Properties
- Border: Black (`border-neutral-900`)
- Padding: Small/medium depending on placement
- Font-weight: Light (matches body)
- Hover: Dark background invert
- Active: Subtle scale down (95%)
- Duration: 300ms transition

---

## Hover State Patterns

### Text Links
```tsx
<a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
  Link Text
</a>
```

### Opacity Hover (Images/Cards)
```tsx
<div className="transition-opacity duration-300 group-hover:opacity-80">
  Content
</div>
```

### Never Use
❌ `shadow-lg`, `shadow-xl` (heavy shadows)
❌ Large scale changes (only use `scale-95` on click)
❌ Rotation or skew
❌ Complex transform chains

---

## Responsive Design Checklist

For new sections, ensure:

- ✅ Mobile: Single column, comfortable padding
- ✅ Tablet (md): 2-column layouts, adjusted gaps
- ✅ Desktop (lg): Full multi-column, generous spacing
- ✅ All text readable (contrast ≥ 4.5:1)
- ✅ Buttons/links ≥ 44px tall on touch devices
- ✅ Line length max ~80 characters (readability)

---

## Creating New Sections

### Template
```tsx
'use client';

import { ScrollReveal } from './ScrollReveal';

export function NewSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light mb-16 md:mb-24">
            Section Title
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Content with staggered reveals */}
        </div>
      </div>
    </section>
  );
}
```

### Best Practices
1. Always use `'use client'` at top
2. Import ScrollReveal
3. Wrap scrollable content with ScrollReveal
4. Use consistent grid patterns
5. Test on mobile before committing
6. Keep animations subtle (600ms max)
7. Avoid complexity — clarity wins

---

## Performance Tips

### Do
✅ Use `transform` and `opacity` for animations (GPU-accelerated)
✅ Lazy load images with Next.js `<Image>` component
✅ Keep animation durations under 700ms
✅ Use Intersection Observer (built into ScrollReveal)
✅ Minimize re-renders with proper React patterns

### Don't
❌ Animate `width`, `height`, `left`, `right` (causes layout shift)
❌ Use `box-shadow` on hover (expensive)
❌ Create animations on every mouse move
❌ Export large unoptimized images
❌ Nest ScrollReveal components (only outer level)

---

## Accessibility Checklist

- ✅ Semantic HTML (`<section>`, `<h1>`, `<nav>`)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for images (when added)
- ✅ Color contrast ≥ 4.5:1
- ✅ Focus states on buttons/links
- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigation support

---

## Common Issues & Solutions

### Issue: Content jumps on scroll
**Solution**: Use `scroll-mt-20` on section headings for anchor link offset

### Issue: Animation feels slow
**Solution**: Reduce duration (try 400ms), check easing curve

### Issue: Mobile menu doesn't close after navigation
**Solution**: Add `onClick={() => setIsOpen(false)}` to mobile links

### Issue: Text doesn't wrap properly on mobile
**Solution**: Use `line-clamp-3` or set explicit width, avoid whitespace-nowrap

### Issue: Buttons feel unresponsive
**Solution**: Ensure `active:scale-95` is present for tactile feedback

---

## Questions?

Refer to:
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — Full design philosophy
- [BUILD_SUMMARY.md](./BUILD_SUMMARY.md) — Architecture overview
- Component files — Self-documented with clear props
