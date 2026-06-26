# Maison de Chine de Val d'Yerres

Modern Next.js website for Maison de Chine de Val d'Yerres — Chinese language courses, cultural activities, and Franco-Chinese exchanges.

## Stack

- **Next.js** 16.2.9 (Turbopack, App Router)
- **React** 19.2.4
- **next-intl** 4.13
- **Tailwind CSS** 4
- **TypeScript** 5
- **Docker**

## Quick Start

### Prerequisites
- Git
- Docker

### Get Started

```bash
git clone git@github.com:InnobyteNo8651/maisondechineyerres.git
cd maisondechineyerres
make dev
```

App runs at **http://localhost:3000**

## Commands

```bash
make dev       # Start dev server (rebuild)
make start     # Start server (no rebuild, faster)
make stop      # Stop containers
make restart   # Restart without rebuild
make reset     # Clean rebuild (remove volumes)
make logs      # Follow container logs
make install   # Install dependencies
make lint      # Run ESLint
make build     # Build for production
make help      # Show all commands
```

## Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Locale layout (fonts, i18n, metadata)
│   │   ├── page.tsx      # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── courses/
│   │   │   └── page.tsx
│   │   ├── activities/
│   │   │   └── page.tsx
│   │   ├── news/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── robots.ts         # /robots.txt
│   └── sitemap.ts        # /sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCards.tsx
│   └── About.tsx
├── lib/
│   ├── config.ts         # Site URL and metadata
│   └── constants.ts      # Static data (services)
├── messages/
│   ├── fr.json
│   └── zh.json
├── proxy.ts              # next-intl middleware (Next.js 16)
├── i18n.ts               # Routing and locale config
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── Dockerfile            # Production image
├── Dockerfile.dev        # Development image
├── docker-compose.yml
└── Makefile
```

## Languages

| Code | Language | URL       |
|------|----------|-----------|
| `fr` | Français | `/fr/...` |
| `zh` | 中文     | `/zh/...` |

Default language: French. Automatic detection is disabled.

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://maisondechine-valerres.fr
```

Next.js loads `.env.local` automatically — never commit it to git.

## Production Deployment

> ⚠️ Not tested yet — may contain errors.

### Build and run locally

```bash
docker build -t maisondechineyerres .
docker run -p 3000:3000 maisondechineyerres
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Next.js and deploys with optimal settings.

## Development Checklist

- [ ] `make dev` works
- [ ] App loads at http://localhost:3000
- [ ] Hot reload works
- [ ] `make lint` passes
- [ ] `make build` succeeds
- [ ] `make stop` stops containers cleanly

## For Team Members

After cloning:

```bash
git clone git@github.com:InnobyteNo8651/maisondechineyerres.git
cd maisondechineyerres
make dev
```

To add a dependency:

```bash
docker exec -it app npm install <package-name>
```

## Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [TypeScript 5 Documentation](https://www.typescriptlang.org)
- [Docker Compose Reference](https://docs.docker.com/compose)
