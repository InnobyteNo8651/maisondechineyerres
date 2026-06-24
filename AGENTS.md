# Maison de Chine de Val d'Yerres - Agent Contract (AGENTS.md)

This file serves as the contract and guidelines for LLM agents working on this codebase.

## Tech Stack
- **Framework**: React (v18+) with TypeScript
- **Build System**: Vite, configured with `vite-plugin-singlefile` to compile the entire application into a single, self-contained `index.html` file in the `dist/` directory.
- **Styling**: Pure Vanilla CSS using CSS Custom Properties (variables) for design tokens. No utility-first frameworks (like Tailwind CSS) or css-in-js.
- **Fonts**: 'Outfit' for UI, navigation, and body text; 'Playfair Display' for serif headlines.
- **Color Palette**: HSL-based colors (detailed in `design.md`).

## Component Conventions
- All components must be written as functional React components with explicit TypeScript prop types.
- Components should be modular, self-contained, and kept clean.
- Inline styles are discouraged; use classes and semantic CSS instead.

## Asset Policy
- Zero placeholder image assets are to be committed. All imagery should be handled dynamically, or use standard inline SVG/pure CSS shapes for placeholders where necessary.

## Build Requirements
- The output of the build must be a single self-contained `index.html` in `dist/`. All CSS, JS, and small assets must be inlined.
