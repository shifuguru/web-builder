This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Web Builder — Interactive Website Preview Tool

A mobile-first, config-driven web application that allows users to instantly preview a custom website by entering content, selecting sections, and adjusting styles in real time.

---

## Overview

This project is a refactored Next.js + Tailwind CSS application designed to function as a guided website preview tool rather than a full site builder.

Users input key business details (e.g. name, tagline, calls-to-action, colours), and the application dynamically renders a live website preview using a structured configuration model.

The goal is to:

- Demonstrate web design capabilities interactively  
- Allow potential clients to visualise their site before committing  
- Convert user input into qualified leads  

---

## Core Functionality

- Live preview that updates instantly as inputs change  
- Config-driven rendering (no hardcoded content)  
- Predefined, reusable layout sections (Hero, Features, CTA, Contact)  
- Section toggling to simulate different site structures  
- Mobile-first responsive layout  
- “Request This Site” action to capture user-defined configurations  

---

## Features

- Real-time editing of:
  - Business name  
  - Tagline  
  - Call-to-action text  
  - Colour scheme  

- Dynamic section rendering based on configuration  
- Controlled template system (not freeform editing)  
- Clean split layout:
  - Builder panel (inputs)  
  - Preview panel (output)  

- Lightweight and fast — no backend required for core functionality  

---

## Tech Stack

- Next.js (App Router)  
- React  
- TypeScript  
- Tailwind CSS  
- PostCSS  

---

## Local Development

```bash
npm install
npm run dev