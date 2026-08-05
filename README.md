# Ayodeji Ajayi Portfolio Website

A modern, responsive personal portfolio built with React, TypeScript, and Vite. The site presents my journey, projects, experience, writing, learning goals, and contact links in a clean editorial layout with light/dark theme support.

## Overview

This portfolio is designed to communicate not just what I have built, but how I think about products, systems, and ideas. It includes:

- A hero section with personal introduction and portrait
- Timeline-based journey and experience sections
- Featured project cards with context, approach, and outcomes
- Technologies and tools section
- Reading, learning, and writing sections
- Contact links with SVG icon buttons
- A theme toggle for light and dark modes

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS variables and custom responsive layout
- Iconify simple icons

## Project Structure

- `src/App.tsx` - main page composition
- `src/components/` - reusable UI components
- `src/data/portfolio.ts` - portfolio content and copy
- `src/styles.css` - global styling and responsive layout rules
- `src/assets/` - hero image and other assets
- `docs/` - design and content notes

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will run in the browser with hot reload enabled.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and build for production
- `npm run preview` - preview the production build locally

## Customization

Most of the portfolio content lives in `src/data/portfolio.ts`. Update that file to change:

- Projects
- Experience entries
- Learning notes
- Books
- Articles or writing ideas
- Technologies and tools
- Interests

Styling is centralized in `src/styles.css`, which uses CSS variables for theme colors, spacing, and layout behavior.

## Design Notes

The site uses:

- A split editorial layout for stronger visual hierarchy
- A theme-aware color system
- Compact icon-based contact links
- Subtle motion and hover treatment
- Responsive grids that collapse cleanly on smaller screens

## Deployment

This project is ready to deploy as a static site. You can host it on platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Any static file host

Build the project with `npm run build` and deploy the generated output from the Vite build directory.

## License

No license has been specified for this project.
