# Design System Tokens & Guidelines

This document outlines the design tokens and system specifications for the Maison de Chine de Val d'Yerres website.

## Color Palette
All color values are defined using standard HSL values and hex values:

- **Primary Crimson**
  - Hex: `#c51f24`
  - HSL: `hsl(358, 73%, 45%)`
  - Purpose: Active states, CTA buttons, and key accents.
  - Hover HSL: `hsl(358, 73%, 38%)`

- **Secondary Navy**
  - Hex: `#0f2c59`
  - HSL: `hsl(217, 71%, 20%)`
  - Purpose: Headers, primary text, and dark theme backgrounds.
  - Hover HSL: `hsl(217, 71%, 15%)`

- **Background Cream**
  - Hex: `#faf8f5`
  - HSL: `hsl(36, 20%, 98%)`
  - Purpose: Subtle section backdrops, overall page background.

- **Background White**
  - Hex: `#ffffff`
  - Purpose: Cards and white backgrounds.

- **Text Slate**
  - Hex: `#2d3748`
  - HSL: `hsl(220, 24%, 23%)`
  - Purpose: Highly readable body text.

- **Text Light**
  - Hex: `#718096`
  - HSL: `hsl(220, 15%, 50%)`
  - Purpose: Subtitles, secondary text, metadata.

- **Accent Gold**
  - Hex: `#d4af37`
  - HSL: `hsl(47, 65%, 53%)`
  - Purpose: Decorative lines, borders, and icons.

- **Accent Gold Light**
  - HSL: `hsl(47, 65%, 90%)`
  - Purpose: Icon hover backgrounds.

## Layout Parameters
- **Maximum Container Width**: `1200px` for desktop grids, with a side padding of `24px` on each side to ensure readability.
- **Responsive Breakpoints**:
  - **Desktop View**: `>= 1024px` (horizontal layouts, inline actions, full navigation).
  - **Mobile/Tablet Toggle**: `< 1023px` (menu collapses, mobile header triggers, hamburger toggle appears, about page drops to single-column layout).
  - **Mobile Portrait View**: `< 768px` (hero layout centers, grid columns collapse to single column, margins condense, action buttons stack vertically).

## Typography Hierarchy
All typography relies on font definitions specified in the CSS custom properties:
- **UI / Navigation / Body Text**: 'Outfit', sans-serif. Used for clean, legible, modern text layout.
- **Headlines / Titles**: 'Playfair Display', serif. Used for page titles, section headings, and display text to evoke elegance and tradition.

### Typography Specifications
| Level | CSS Class / Element | Font Family | Size (Desktop) | Size (Mobile) | Font Weight | Line Height |
|---|---|---|---|---|---|---|
| Page Title | `.hero-title` | Display | `3.5rem` | `2.8rem` | 700 | 1.25 |
| Section Heading | `h2`, `.about-title` | Display | `2.75rem` | `2.2rem` | 700 | 1.25 |
| Card Title | `h3`, `.feature-title` | Display | `1.25rem` | `1.25rem` | 700 | 1.25 |
| Subtitle | `.hero-subtitle` | Body | `1.0rem` | `0.9rem` | 700 | 1.25 (uppercase) |
| Body Text | `body`, `.about-text` | Body | `1.05rem` | `1.0rem` | 400 | 1.6 |
| Navigation Links | `.nav-link` | Body | `0.95rem` | - | 500 | 1.0 |
| Mobile Navigation Links | `.mobile-nav-link` | Body | - | `1.1rem` | 600 | 1.0 |

## Decorative SVGs Styling
To maintain a cohesive aesthetic when using cultural or decorative illustrations, the following rules apply:
- **Color Sync**: Paths must use the standard custom variables (e.g. `var(--color-primary)` or `var(--color-accent-gold)`). Do not embed hardcoded hex codes within SVG paths.
- **Stylized Clouds (`.hero-deco-cloud`, `.deco-cloud-left`)**:
  - Primary path styled with `stroke="var(--color-secondary)"` and an opacity of `0.3` (or `0.15` on dark backdrops).
  - Accent paths styled with `stroke="var(--color-accent-gold)"` and an opacity of `0.4` for subtle depth.
  - Interaction: Set `pointer-events: none` so user interactions pass through.
- **Hanging Chinese Lanterns (`.deco-lantern`)**:
  - Absolute positioning on section boundaries (e.g. `top: 0`, `right: 10px`).
  - Swings gently using a keyframe animation.
  - **Keyframes (`lanternSwing`)**:
    - Starts at `-4deg` rotation, swings to `4deg` rotation.
    - Animation declaration: `lanternSwing 3.5s ease-in-out infinite alternate`.
    - Transform Origin: Must set `transform-origin: top center` to swing realistically.

## CSS Custom Variables Specification
The variables should be defined at the `:root` pseudo-class in `src/index.css`:

```css
:root {
  /* Colors */
  --color-primary: hsl(358, 73%, 45%);
  --color-primary-hover: hsl(358, 73%, 38%);
  --color-secondary: hsl(217, 71%, 20%);
  --color-secondary-hover: hsl(217, 71%, 15%);
  --color-bg-cream: hsl(36, 20%, 98%);
  --color-bg-white: #ffffff;
  --color-text-slate: hsl(220, 24%, 23%);
  --color-text-light: hsl(220, 15%, 50%);
  --color-accent-gold: hsl(47, 65%, 53%);
  --color-accent-gold-light: hsl(47, 65%, 90%);
  
  /* Fonts */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Outfit', system-ui, -apple-system, sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(15, 44, 89, 0.05);
  --shadow-md: 0 8px 16px rgba(15, 44, 89, 0.08);
  --shadow-lg: 0 16px 32px rgba(15, 44, 89, 0.12);
  
  /* Border Radii */
  --border-radius-sm: 6px;
  --border-radius-md: 12px;
  --border-radius-lg: 24px;
  
  /* Transitions & Animations */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Micro-animations */
@keyframes lanternSwing {
  0% { transform: rotate(-4deg); }
  100% { transform: rotate(4deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
