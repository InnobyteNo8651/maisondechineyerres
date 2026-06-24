# Design System Tokens & Guidelines

This document outlines the design tokens and system specifications for the Maison de Chine de Val d'Yerres website.

## Color Palette
All color values are defined using standard HSL values and hex values:

- **Primary Crimson**
  - Hex: `#c51f24`
  - HSL: `hsl(358, 73%, 45%)`
  - Purpose: Active states, CTA buttons, and key accents.

- **Secondary Navy**
  - Hex: `#0f2c59`
  - HSL: `hsl(217, 71%, 20%)`
  - Purpose: Headers, primary text, and dark theme backgrounds.

- **Background Cream**
  - Hex: `#faf8f5`
  - HSL: `hsl(36, 20%, 98%)`
  - Purpose: Subtle section backdrops, overall page background.

- **Text Slate**
  - Hex: `#2d3748`
  - HSL: `hsl(220, 24%, 23%)`
  - Purpose: Highly readable body text.

- **Accent Gold**
  - Hex: `#d4af37`
  - HSL: `hsl(47, 65%, 53%)`
  - Purpose: Decorative lines, borders, and icons.

## Typography
- **Headlines / Titles**: 'Playfair Display', serif. Used for page titles, section headings, and display text to evoke elegance and tradition.
- **UI / Navigation / Body Text**: 'Outfit', sans-serif. Used for clean, legible, modern text layout.

## Micro-animations
- **Transitions**: Smooth transition transitions for interactive elements (e.g., `transition: all 0.3s ease;`).
- **Hovers**: Subtle scaling on interactive cards or buttons (e.g., `transform: scale(1.02);`).
- **Entry Animations**: Fading and sliding entry effects for main sections (e.g., fade-in-up animations).

## CSS Custom Properties Example
```css
:root {
  --color-primary: hsl(358, 73%, 45%);
  --color-secondary: hsl(217, 71%, 20%);
  --color-bg-cream: hsl(36, 20%, 98%);
  --color-text-slate: hsl(220, 24%, 23%);
  --color-accent-gold: hsl(47, 65%, 53%);
  
  --font-display: 'Playfair Display', serif;
  --font-body: 'Outfit', sans-serif;
  
  --transition-smooth: all 0.3s ease;
}
```
