# Atlas Paragliding Website

A modern, high-performance paragliding website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static Site Generation (SSG)
- **Hosting**: Vercel (recommended) or any static hosting

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm start
```

The static site will be generated in the `/out` directory.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   ├── podcast/             # Podcast page
│   ├── atlas/               # Atlas destinations
│   │   ├── kenya/
│   │   ├── india/
│   │   └── peru/
│   ├── knowledge-base/      # Knowledge base sections
│   │   ├── competitions/
│   │   ├── meteorology/
│   │   ├── core-series/
│   │   ├── industry/
│   │   └── technical-focus/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   └── Navigation.tsx       # Main navigation
├── public/                  # Static assets
└── Media/                   # Media files

```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy (automatic)

### Manual Static Hosting

```bash
npm run build
# Upload /out directory to any static host
```

## Performance Features

- ✅ Static Site Generation (SSG)
- ✅ Optimized images
- ✅ Tailwind CSS (minimal CSS bundle)
- ✅ TypeScript for type safety
- ✅ Mobile-responsive navigation
- ✅ Dark mode support

## License

All rights reserved.
