# Maison de Chine de Val d'Yerres - Agent Contract (AGENTS.md)

This file serves as the contract, architectural guide, and workflow specification for LLM agents working on this codebase.

## Tech Stack
- **Framework**: React (v18+) with TypeScript
- **Build System**: Vite, configured with `vite-plugin-singlefile` to compile the entire application into a single, self-contained `index.html` file in the `dist/` directory.
- **Styling**: Pure Vanilla CSS using CSS Custom Properties (variables) for design tokens. No utility-first frameworks (like Tailwind CSS) or css-in-js.
- **Fonts**: 'Outfit' for UI, navigation, and body text; 'Playfair Display' for serif headlines.
- **Color Palette**: HSL-based colors (detailed in `design.md`).

## Project & Component Architecture
The application is structured as a lightweight, high-performance React application optimized for single-file delivery.

- **`src/main.tsx`**: Entry point that bootstraps the React application.
- **`src/App.tsx`**: The core component that houses the layout, structural sections (Header, Hero, Features, About, Footer), and custom inline SVGs.
- **`src/index.css`**: Centralized stylesheet specifying typography, layout layout (such as containers), component states, and responsive styling.

### Stateful Mobile Hamburger Menu
The mobile navigation is implemented within `src/App.tsx` and styled in `src/index.css`:
- **State Management**: React state variable `isMobileMenuOpen` (boolean) manages the toggle state.
- **Toggle Mechanism**:
  - The toggle button (`#mobile-menu-toggle-btn`) displays either `<HamburgerSVG />` or `<CloseSVG />` dynamically based on `isMobileMenuOpen`.
  - Clicking this button toggles `isMobileMenuOpen` and sets `aria-expanded` reactively for accessibility.
- **Drawer Animation & Visibility**:
  - The mobile drawer navigation overlay (`#mobile-nav-menu`) uses the CSS class `.mobile-nav-overlay`.
  - When `isMobileMenuOpen` is true, the `.open` class is appended.
  - This transitions the overlay from hidden (`opacity: 0; visibility: hidden; transform: translateY(-10px);`) to visible (`opacity: 1; visibility: visible; transform: translateY(0);`) over a `0.3s ease` animation.
  - Clicking any navigation link closes the drawer automatically by calling `setIsMobileMenuOpen(false)`.
- **Responsive Breakpoints**:
  - Media queries in `src/index.css` toggle the visibility of the desktop navigation and actions at `(max-width: 1023px)`, revealing the `.mobile-menu-toggle` button.

## Step-by-Step Agent Workflow
All development and code modification tasks must follow this workflow:

1. **Rule 1: Read Documentation First**
   Always read `AGENTS.md` and `design.md` before making edits to code or design tokens to understand the rules and constraints.
2. **Rule 2: Keep CSS Variables Synchronized**
   When styling new components or adjusting existing layouts, always utilize standard CSS custom variables defined in `design.md` and `src/index.css`. Never write raw hex, HSL, spacing, or animation values unless declaring a new token.
3. **Rule 3: Ensure Single-File Compilability**
   The application MUST build into a single `index.html` file without errors. Run `npm run build` after any edit.
4. **Rule 4: Enforce Type Safety**
   All files must pass strict typechecks. Verify by running `npx tsc --noEmit` before proposing changes.
5. **Rule 5: Check Responsive Performance**
   Verify changes on both desktop (1200px+) and mobile views (specifically checking breakpoints at `1023px` and `768px`).

## Asset Compilation and Inlining
Because the project targets a single-file delivery (`dist/index.html`), asset handling is strictly automated:
- **`vite-plugin-singlefile`**: This Vite plugin bundles all CSS and JS directly inside the compiled `index.html` file.
- **Image Assets**: Standard images (e.g. PNG/JPG) are imported as ES modules in `src/App.tsx`. Vite's bundling compiles these assets and inlines them directly into the output code as Base64 Data URLs.
- **Vector Graphics (SVGs)**: Small icons (e.g., logo, knots, books) are implemented as react inline component functions (e.g., `LogoSVG`, `BookSVG`) rather than separate image imports. This allows for styling with CSS variables (e.g., `stroke="var(--color-primary)"`) and direct path manipulation.

## GitLab CI/CD Pipeline
The project defines automated pipelines in `.gitlab-ci.yml` that run on every push to ensure code health and deployment:
- **lint**: Runs `npm run lint` to execute code quality and syntax checks.
- **test**: Runs `npx tsc --noEmit` to verify typechecker safety.
- **deploy (GitLab Pages)**:
  - Triggered only on pushes to the `main` branch.
  - Builds the single-file website via `npm run build`.
  - Clears the target deployment folder (`rm -rf public`).
  - Moves the build directory (`dist`) to `public/` so GitLab Pages can host it.
  - Uploads the `public` directory as a deployment artifact.
