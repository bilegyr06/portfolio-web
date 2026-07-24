# Development Rules

## Purpose

This document defines the development workflow, engineering standards, and decision-making principles for this project.

Every AI assistant (GitHub Copilot, Codex, Claude, Cursor, Gemini, ChatGPT, etc.) should follow these rules before making changes.

The goal is to maintain consistency, prevent architectural drift, and ensure every contribution improves the project.

---

# Primary Principle

This project values:

Understanding

->

Planning

->

Implementation

->

Refinement

Never skip directly to implementation.

---

# AI Workflow

Every task should follow this workflow.

## Step 1 - Understand

Before writing code:

- understand the request
- understand the purpose
- identify affected components
- identify dependencies
- identify possible side effects

Never assume.

---

## Step 2 - Plan

Explain the implementation plan before making major architectural changes.

Large features should be broken into smaller tasks.

Prefer incremental improvements.

---

## Step 3 - Build

Implement one feature at a time.

Avoid changing unrelated files.

Avoid unnecessary refactoring.

Preserve existing architecture unless there is a compelling reason to improve it.

---

## Step 4 - Review

After implementation verify:

- responsiveness
- accessibility
- consistency
- performance
- readability

Fix issues before moving on.

---

## Step 5 - Refine

After functionality is complete:

- simplify code
- improve naming
- remove duplication
- improve readability
- improve maintainability

Optimization comes after correctness.

---

# Development Philosophy

This project is built as if it will be maintained for many years.

Every decision should favor:

- readability
- maintainability
- scalability
- consistency

Avoid clever code.

Prefer obvious code.

---

# Before Writing Code

Always ask:

What problem am I solving?

Why does this component exist?

Can an existing component solve this?

Will this introduce duplication?

Does this match the design system?

Does this support the project's philosophy?

---

# File Organization

Every file should have one responsibility.

Avoid large files.

Prefer splitting files by responsibility.

Example:

components/

Hero/

Projects/

Journey/

Writing/

Contact/

ui/

layout/

Avoid dumping unrelated components into one folder.

---

# Component Rules

Components should:

- be reusable
- have a single responsibility
- receive data through props
- avoid unnecessary internal state
- remain easy to understand

Avoid "god components."

---

# Styling Rules

Follow the Design System.

Never create one-off styling without good reason.

Maintain consistency in:

spacing

typography

colors

animations

border radius

cards

buttons

---

# Layout Rules

Do not hardcode layout values repeatedly.

Use reusable layout primitives.

Examples:

Container

Section

Stack

Grid

Spacer

Maintain consistent spacing throughout the application.

---

# Naming Rules

Names should describe intent.

Good examples:

ProjectCard

JourneyTimeline

ReadingCard

SectionHeading

TechnologyChip

Avoid vague names such as:

Card2

Item

DataComponent

Stuff

---

# Props

Props should remain explicit.

Avoid passing unnecessary objects.

Prefer:

title

description

image

status

rather than generic objects whenever practical.

---

# State Management

Keep state as local as possible.

Lift state only when necessary.

Avoid global state unless it clearly simplifies the architecture.

---

# Reusability

Before creating a new component ask:

Can an existing component be extended?

Prefer extension over duplication.

---

# Content

Content should come from structured data whenever possible.

Avoid hardcoding repeated text.

Prefer data-driven rendering.

Examples:

Projects

Books

Articles

Technologies

Timeline

Experience

should all be renderable from data structures.

---

# Performance

Prioritize performance.

Avoid unnecessary renders.

Lazy load heavy assets.

Optimize images.

Minimize bundle size.

Do not optimize prematurely.

Measure first.

---

# Accessibility

Accessibility is mandatory.

Every interactive element must:

- be keyboard accessible
- have visible focus states
- include descriptive labels
- support screen readers

Use semantic HTML.

Never sacrifice accessibility for appearance.

---

# Responsive Design

Every feature must work on:

Desktop

Tablet

Mobile

Design mobile intentionally.

Do not simply shrink desktop layouts.

---

# Animation Rules

Animations should communicate.

Never animate simply because something can move.

Preferred animations:

Fade

Reveal

Slide

Stagger

Timeline

Avoid:

Bounce

Continuous floating

Large rotations

Distracting effects

Respect prefers-reduced-motion.

---

# Dependencies

Avoid adding new libraries unless they provide significant long-term value.

Before adding a dependency ask:

Can this be built with existing tools?

Will this dependency still be valuable in two years?

Does it justify the additional bundle size?

---

# Error Handling

Handle failure gracefully.

Avoid silent failures.

Display meaningful feedback where appropriate.

Never expose raw errors to users.

---

# Refactoring

Refactor only when:

- it improves clarity
- it removes duplication
- it simplifies architecture
- it improves maintainability

Do not refactor unrelated code while implementing a feature.

---

# Git Philosophy

Commits should represent one logical change.

Examples:

feat(hero): redesign hero section

feat(projects): add project case study cards

refactor(layout): extract reusable section component

fix(contact): improve mobile layout

Avoid mixing unrelated changes.

---

# Documentation

Whenever introducing:

- a new architecture
- reusable utilities
- shared hooks
- complex logic

Update the documentation accordingly.

Documentation should evolve with the codebase.

---

# AI Collaboration Rules

When contributing to this project, every AI assistant should:

Understand before implementing.

Respect existing architecture.

Follow the Design System.

Follow the Content Guide.

Avoid generic portfolio patterns.

Preserve the project's identity.

Prefer reusable solutions.

Avoid unnecessary complexity.

Explain significant architectural decisions.

Ask for clarification if requirements are ambiguous.

Never invent content that has not been provided.

---

# Definition of Done

A feature is considered complete only when it:

- [x] Matches the design specification
- [x] Is responsive
- [x] Is accessible
- [x] Is consistent with the design system
- [x] Uses reusable components
- [x] Is well documented
- [x] Has clean, maintainable code
- [x] Introduces no unnecessary complexity
- [x] Preserves the project's overall philosophy

---

# Final Principle

This portfolio is not just a software project.

It is the digital representation of how I think.

Every design decision, component, animation, and line of code should support that purpose.

If a feature does not improve clarity, storytelling, usability, or maintainability, it probably does not belong in the project.
