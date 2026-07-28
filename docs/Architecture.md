# Architecture

## Purpose

This document defines the architectural principles and folder structure for the portfolio.

The goal is to create a maintainable, scalable, and content-driven React application that is easy to extend over time.

The architecture should support future additions without requiring major restructuring.

---

# Core Philosophy

The portfolio should be driven by structured data rather than hardcoded content.

Components should render data.

Pages should compose components.

The architecture should make adding new projects, books, articles, or experiences require changing data files rather than rewriting UI.

---

# Guiding Principles

- Separation of concerns
- Composition over inheritance
- Reusable components
- Data-driven rendering
- Minimal prop drilling
- Consistent naming
- Maintainability over cleverness

---

# Suggested Folder Structure

src/

    assets/
        images/
        icons/
        fonts/

    components/
        layout/
        navigation/
        ui/
        hero/
        timeline/
        projects/
        experience/
        learning/
        reading/
        writing/
        contact/

    data/
        projects.ts
        books.ts
        experiences.ts
        technologies.ts
        journey.ts
        interests.ts
        learning.ts
        articles.ts

    hooks/

    layouts/

    pages/

    styles/

    types/

    utils/

---

# Component Hierarchy

App

↓

Layout

↓

Navigation

↓

Page Sections

↓

Reusable Components

↓

UI Primitives

Each layer should only depend on the layer below it.

---

# Data Philosophy

Portfolio content should live inside structured data files.

Examples:

projects.ts

books.ts

articles.ts

journey.ts

learning.ts

experience.ts

This allows content updates without changing UI components.

---

# Project Model

Every project should contain fields such as:

- id
- title
- subtitle
- status
- summary
- problem
- approach
- outcome
- technologies
- image
- github
- liveDemo
- caseStudy
- featured

The UI should render from this structure.

---

# Journey Model

Each milestone should include:

- title
- description
- year (optional)
- icon (optional)

---

# Book Model

Each book should include:

- title
- author
- cover
- takeaway
- progress

---

# Experience Model

Each experience should include:

- company
- role
- duration
- description
- responsibilities
- technologies

---

# Article Model

Each article should include:

- title
- category
- preview
- date
- readingTime
- slug

---

# Layout Components

Reusable layout primitives should include:

- Container
- Section
- SectionHeading
- Grid
- Stack
- Divider

Avoid repeated layout code.

---

# UI Components

Reusable UI components should include:

- Button
- Card
- Badge
- Tag
- Chip
- Timeline
- Modal
- Tooltip
- Image
- Icon

---

# Styling

Follow the Design System.

Do not create isolated styling decisions.

Spacing, typography, radius, and animation should remain consistent.

---

# Responsiveness

Every section should be responsive by design.

Desktop first.

Tablet second.

Mobile should be intentionally designed rather than automatically scaled.

---

# Performance

Images should be optimized.

Heavy assets should be lazy-loaded.

Avoid unnecessary re-renders.

Keep bundle size small.

---

# Accessibility

Use semantic HTML.

Support keyboard navigation.

Respect prefers-reduced-motion.

Provide descriptive alt text.

---

# Future Expansion

The architecture should support adding:

- more projects
- articles
- books
- talks
- startup case studies
- research
- open-source work

without requiring architectural changes.

---

# Final Principle

The architecture should disappear behind the experience.

Developers should find it easy to understand.

Visitors should never notice it.