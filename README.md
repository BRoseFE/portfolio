# Branson Rose - Personal Site

A responsive personal portfolio built with React, TypeScript, and Vite to showcase my projects, technical skills, certifications, and professional background.

The project began as a static HTML and CSS portfolio and is being rebuilt as a React application while preserving the original visual identity and expanding the site into a larger collection of web development work.

---

## 🌐 Live Website

[Branson Rose](https://bransonrose.dev/)

---

## ✨ Features

- Responsive portfolio layout across desktop, tablet, and mobile devices
- Component-based React architecture
- Project showcase with live website and GitHub repository links
- Featured project presentation with custom visual layouts
- Technical skills section organized by development area
- Professional certification section
- Responsive navigation with section-based anchor links
- Semantic HTML structure for accessibility and SEO
- Accessible navigation and interactive elements
- Descriptive image alternatives and decorative image handling
- Responsive hero section with professional headshot
- Custom nature-inspired visual design
- Responsive project cards and technology lists
- Resume links throughout the site
- Dynamically generated copyright year
- Direct email contact links
- Custom CSS without a UI framework

---

## 🧠 Design & Engineering Decisions

- **Component-based architecture**
  The original static HTML portfolio was divided into focused React components representing the major sections of the site, including the header, hero, projects, about, skills, certifications, contact, and footer.

- **Progressive migration**
  The project is a migration from a static HTML/CSS portfolio into a React and TypeScript application. The existing visual design and content are being preserved while the underlying structure is converted to React.

- **Custom CSS**
  The site's visual system is implemented using custom CSS rather than Bootstrap, Tailwind CSS, or a component library. This provides direct control over the portfolio's layout, responsive behaviour, typography, spacing, colours, and visual effects.

- **Semantic HTML**
  Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` are used throughout the application to provide meaningful document structure.

- **Accessibility**
  Accessibility is incorporated through semantic markup, labelled navigation and sections, descriptive image alternatives, decorative image handling, appropriate ARIA attributes, and keyboard-accessible interactive elements.

- **Responsive layout**
  CSS Grid, Flexbox, responsive sizing with `clamp()`, and media queries are used to adapt the portfolio across different viewport sizes.

- **Asset management**
  Images, GIFs, icons, screenshots, and the resume are imported from the application's `src/assets` directory and processed through Vite's asset pipeline.

- **Path aliases**
  The project uses the `@/*` TypeScript path alias to simplify imports from the `src` directory.

---

## 🧱 Tech Stack

- **React 19**
- **TypeScript 6**
- **Vite 8**
- **HTML5**
- **CSS3**
- **ESLint**

Custom CSS is used for the site's layout and visual system rather than Bootstrap, Tailwind CSS, or another UI component framework.

---

## 📁 Project Structure

```text
src
├── assets/
│   ├── gifs/
│   │   ├── coding.gif
│   │   └── squirrel.gif
│   ├── icons/
│   │   └── mountain.png
│   ├── resume/
│   │   └── Branson_Rose_Full_Stack_Developer.pdf
│   ├── screenshots/
│   │   ├── og-preview.png
│   │   └── vg-screenshot.png
│   ├── headshot.jpg
│   ├── tree-off-side.png
│   ├── underline.png
│   └── wave-line.png
│
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

Each major section of the portfolio is represented by its own React component, while the global styling remains in the main index.css file.

---

## 🚧 Project Status

This project is an active portfolio application that is being expanded beyond a traditional developer portfolio.

The current site serves as the primary personal portfolio and showcases projects, technical skills, certifications, and professional information.

Future development will introduce additional pages and resources, including:

- Landing page templates
- Additional project showcases
- Reusable web design examples
- Additional development examples
- Expanded resources and demonstrations

The long-term goal is to develop the site into both a personal portfolio and a collection of web development work demonstrating different approaches to building responsive and accessible web experiences.

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📚 What I Learned

- Converting a static HTML/CSS website into a React application
- Structuring a React application using focused section components
- Using TypeScript within a React and Vite project
- Managing imported assets through Vite
- Using TypeScript path aliases to simplify imports
- Building responsive layouts with CSS Grid, Flexbox, `clamp()`, and media queries
- Maintaining semantic HTML while transitioning from static HTML to JSX
- Improving accessibility through semantic structure, ARIA attributes, and keyboard navigation
- Organizing custom CSS for maintainability and responsive design
- Preserving an established visual identity while changing the underlying application architecture
- Planning a React application for future expansion into multiple pages and web development resources

---

## 📬 Contact

- Website: https://bransonrose.dev/
- Email: branson@bransonrose.dev
- GitHub: https://github.com/BRoseFE

---

## License

Copyright © 2026 Branson Rose. All rights reserved.

The source code in this repository is available for viewing only.
No permission is granted to copy, modify, distribute, or reuse this code or design without explicit written permission.
