<!-- @format -->

# Marwan Atef — Front-End Engineer Portfolio

A modern, dark-themed personal portfolio site built with Next.js, React and MUI. It showcases projects, skills, and contact information with polished UI, subtle motion, and responsive layout.

[Live demo] (https://marwan-atef-portfolio.vercel.app/)

---

## Table of Contents

-   Features
-   Tech stack
-   Project structure
-   Quick start
-   Environment variables (EmailJS)
-   Available scripts
-   Responsiveness & accessibility
-   Deployment (Vercel)
-   Contributing
-   License
-   Contact

---

## Features

-   Hero section with typed titles and CTAs
-   About, Skills, Projects, Contact sections
-   Responsive layout using MUI and `sx` props
-   Framer Motion animations for smooth micro-interactions
-   Data-driven Projects grid with demo & GitHub links
-   Contact form integrated with EmailJS and client-side validation
-   Centralized MUI theme (dark mode)

---

## Tech stack

-   Next.js (App Router)
-   React 19
-   TypeScript
-   MUI (v7)
-   Framer Motion
-   lucide-react & react-icons
-   EmailJS (`@emailjs/browser`)
-   pnpm

---

## Project structure (important files)

```
src/
  app/
    layout.tsx                # Root layout (font + ThemeProvider + Navbar)
    page.tsx                  # Home page mounting sections
    ThemeProviderClient.tsx   # MUI ThemeProvider wrapper
    components/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Contact.tsx
      Navbar.tsx
      Footer.tsx
    data/
      projects.ts
      skills.ts
    theme/
      theme.ts

package.json
README.md
```

---

## Quick start

Prerequisites:

-   Node.js (v18+ recommended)
-   pnpm

```powershell
git clone <repo-url>
cd my-portfolio
pnpm install
pnpm dev
```

Open http://localhost:3000

---

## Environment variables (EmailJS)

Configure EmailJS keys via environment variables. Create `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Update `Contact.tsx` to read these values through `process.env.NEXT_PUBLIC_...` if you want to remove hard-coded keys.

Note: EmailJS is imported dynamically client-side in the project (good practice for Next.js).

---

## Available scripts

-   `pnpm dev` — Start dev server
-   `pnpm build` — Build for production
-   `pnpm start` — Run production server
-   `pnpm run lint` — ESLint

---

## Responsiveness & accessibility

-   Uses MUI breakpoints and responsive `sx` props
-   Navbar switches to a mobile Drawer on small screens
-   Hero typography and typed title scale across breakpoints
-   Ensure the fixed AppBar is accounted for in page padding
-   Run Lighthouse to audit accessibility & performance

Note: the project uses a `Grid` prop `size={{ ... }}` as a codebase convention. If migrating to the standard MUI Grid API (`item xs={...}`), update all Grid usages.

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo into Vercel
3. Add environment variables in Vercel settings
4. Deploy (Vercel runs `pnpm build`)

---

## Contributing

1. Fork
2. Create a branch
3. Make changes and test locally
4. Open a PR

Consider adding a CI job to run ESLint for PRs.

---

## Suggested next steps

-   Move EmailJS keys to env vars and remove hard-coded values
-   Standardize Grid usages to MUI's API for type-safety
-   Add unit tests for form validation and components
-   Add CI for linting

---

## Contact

Marwan Atef — marwanatef54@gmail.com

Profiles:

-   GitHub: https://github.com/Marwanatef96
-   LinkedIn: https://www.linkedin.com/in/marwan-atef-dev/

---

If you want, I can:

-   Move EmailJS config into env vars and update the code
-   Standardize Grid usage across the codebase
-   Add `CONTRIBUTING.md` and CI linting

Tell me which and I'll implement it.
