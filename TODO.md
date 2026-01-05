# Endeva Labs Website Refactor Tasks

## 🎯 Refactor Objectives
- Remove all borders, gradients, shadows from sections
- Simplify hover effects to opacity/transform only
- Ensure minimal, intentional design
- Respect existing globals.css and design system
- Maintain scroll reveals and motion principles

## 📋 Sections to Refactor

### 1. ServicesSection.tsx
- [x] Remove border, rounded corners from service cards
- [x] Remove hover background change (bg-neutral-50)
- [x] Remove hover border change
- [x] Simplify to text-only with minimal hover (opacity/transform)
- [x] Keep grid layout and spacing

### 2. ProcessSection.tsx
- [x] Remove bottom borders (border-b border-neutral-200)
- [x] Remove hover text color changes
- [x] Keep 12-column grid and numbering
- [x] Maintain large titles and descriptions

### 3. ProjectsSection.tsx
- [x] Remove gradients (bg-gradient-to-br)
- [x] Remove shadows (group-hover:shadow-lg)
- [x] Remove borders (border border-neutral-200)
- [x] Remove hover border change
- [x] Remove scale effects on hover
- [x] Simplify to clean blocks with opacity hover only
- [x] Keep grid layout and metadata

### 4. Testing & Verification
- [x] Run dev server and check all sections
- [x] Verify no borders, gradients, or heavy effects
- [x] Ensure mobile responsiveness
- [x] Confirm scroll reveals still work
- [x] Check hover states are subtle (opacity/transform only)

## ✅ Design Constraints to Maintain
- One font family (system stack)
- Neutral color palette only
- Spacing and hierarchy as main design tools
- Scroll-based reveal animations
- Mobile-first responsive design
- Framer Motion for meaningful motion only

## 🎨 UI Enhancement Updates
- [x] Enhanced ScrollReveal with directional options (up/down/left/right/scale)
- [x] Added varied motion directions to ValueSection statements
- [x] Implemented alternating left/right animations in ProcessSection
- [x] Added subtle hover transforms (translate-x, scale) to interactive elements
- [x] Created staggered animations for Hero statistics
- [x] Added minimal geometric background texture to Hero (opacity-5)
- [x] Improved motion timing and easing for better flow
- [x] Added unique filler content to Services (7 → 12 services) and Projects (6 → 12 projects)
- [x] Redesigned card styles with geometric icons and varied layouts
- [x] Applied glassmorphism effects with rounded corners and subtle pink/green gradients
- [x] Enhanced hover states with backdrop blur, shadow effects, and color transitions
