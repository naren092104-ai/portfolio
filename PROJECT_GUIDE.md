# Portfolio Project Guide

This guide describes the current project layout and the purpose of its main files. The codebase is a single-page React + TypeScript portfolio built with Vite and Tailwind CSS, with static files served by Vite/Cloudflare Pages.

## Project tree

```text
portfolio/
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc
├── .env.example
├── .gitignore
├── PROJECT_GUIDE.md
├── CODE_GUIDE.md
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   └── assets/
│       ├── ambient-network.svg
│       ├── portrait-cutout.png
│       ├── aistudio/       (existing source/reference images)
│       ├── awards/         (award images and optimized/ thumbnails)
│       ├── logos/          (organization logos)
│       ├── projects/       (project images and optimized/ thumbnails)
│       └── volunteering/   (gallery photos and optimized/ thumbnails)
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── assets/
    │   └── Narendhar_D_Resume.pdf
    ├── components/
    │   ├── layout/
    │   │   ├── AmbientBackground.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── ScrollProgress.tsx
    │   │   └── ScrollToTop.tsx
    │   ├── common/
    │   │   ├── AnimatedCounter.tsx
    │   │   ├── Lightbox.tsx
    │   │   └── SectionHeading.tsx
    │   └── cards/
    │       ├── ProjectCard.tsx
    │       ├── SkillCard.tsx
    │       └── Timeline.tsx
    ├── data/
    │   ├── achievements.ts
    │   ├── experience.ts
    │   ├── personal.ts
    │   ├── projects.ts
    │   ├── skills.ts
    │   └── volunteering.ts
    ├── sections/
    │   ├── About.tsx
    │   ├── Achievements.tsx
    │   ├── Contact.tsx
    │   ├── Experience.tsx
    │   ├── Hero.tsx
    │   ├── Projects.tsx
    │   ├── TechStack.tsx
    │   └── Volunteering.tsx
    └── utils/
        ├── images.ts
        └── resume.ts
```

Generated build output (`dist/`), installed packages (`node_modules/`), Git internals (`.git/`), and Wrangler local state (`.wrangler/`) are not source folders and are intentionally not listed in detail.

## Root files

| File | What it is and why it exists | Edit it when | Connected files |
| --- | --- | --- | --- |
| `index.html` | The HTML document Vite serves. It provides the page title, metadata, favicon, and the `root` element where React starts. | Changing page metadata, the browser tab icon, or the HTML shell. | Loads `src/main.tsx`; references `public/favicon.svg`. |
| `package.json` | Project name, dependencies, and commands for development, checks, builds, and Cloudflare. | Adding/removing a dependency or changing a command. | `package-lock.json`, Vite, TypeScript, Wrangler. |
| `package-lock.json` | Exact installed dependency versions for repeatable npm installs. | Normally update it through npm when dependencies change. | `package.json`. |
| `tsconfig.json` | TypeScript compiler settings, including JSX and import rules. | Changing TypeScript behavior or compiler options. | All TypeScript files in `src/`. |
| `vite.config.ts` | Vite plugins and development/build configuration. It includes a custom build step that copies `src/assets` to `dist/src/assets`; keep this behavior because the app relies on source-asset URLs. | Changing Vite behavior only when necessary. | `src/`, `dist/`, Tailwind, React, and the imported resume asset. |
| `wrangler.jsonc` | Cloudflare Pages project name, compatibility date, and build output directory. | Changing Cloudflare Pages deployment configuration. | `dist/` and Wrangler commands in `package.json`. |
| `metadata.json` | Project metadata used by its authoring environment; it is not the React app's runtime data source. | Updating project-level description/capabilities. | The project tooling that reads this metadata. |
| `.env.example` | A template showing environment-variable names, if needed. Do not put real secrets in it. | Documenting a new required environment variable. | Local environment setup and whichever code reads that variable. |
| `.gitignore` | Tells Git which generated or local files not to track. | Adjusting which local/build files are versioned. | Git, `dist/`, `node_modules/`, local environment files. |
| `PROJECT_GUIDE.md` | This map of folders and responsibilities. | Updating the project layout after future changes. | The whole repository. |
| `CODE_GUIDE.md` | A beginner explanation of the React, TypeScript, styling, and build concepts used here. | Updating examples when implementation patterns change. | The source files described below. |

## `src/`: application code

| Folder/file | What it does and why it exists | Edit it when | Connected files |
| --- | --- | --- | --- |
| `src/main.tsx` | The browser entry point. It imports the global stylesheet and mounts `App` into the HTML `root`. | Changing how the React app is mounted or adding a top-level provider. | `index.html`, `App.tsx`, `index.css`. |
| `src/App.tsx` | Assembles the shared page shell and portfolio sections in display order. It also sets the shared reduced-motion preference. | Changing the order of sections or global layout components. | `components/layout/`, `sections/`. |
| `src/index.css` | Global Tailwind import, theme font tokens, base styles, custom utility classes, and keyframe animations. | Changing global styles, shared effects, fonts, or animation definitions. | Imported by `main.tsx`; class names are used throughout components. |
| `src/vite-env.d.ts` | Vite type declarations for TypeScript. | Usually only when adding project-wide Vite type declarations. | TypeScript and Vite. |
| `src/assets/` | Source assets imported by code. The resume PDF is imported by Vite so the download action can use the bundled file. | Replacing the source resume or adding an asset that should be bundled from TypeScript. | `utils/resume.ts`; custom asset-copy behavior in `vite.config.ts`. |
| `src/components/` | Reusable interface pieces used by the app and sections. | Creating or relocating a reusable UI component. | `App.tsx` and `sections/`. |
| `src/components/layout/` | Site-wide pieces that frame the page or stay fixed while scrolling. | Editing navigation, footer, background, or scroll controls. | `App.tsx`, `data/personal.ts`, `utils/resume.ts`, and `index.css`. |
| `AmbientBackground.tsx` | Renders the animated ambient background, network layer, and cursor spotlight. | Changing those background effects. | `src/index.css` and `App.tsx`. |
| `Navbar.tsx` | Responsive anchor navigation, active-section tracking, mobile drawer, and resume button. | Changing top navigation or its interactions. | `data/personal.ts`, `utils/resume.ts`, section IDs, `App.tsx`. |
| `Footer.tsx` | Footer identity, navigation, contact/social links, and back-to-top action. | Changing footer content or links. | `data/personal.ts`, section IDs, `App.tsx`. |
| `ScrollProgress.tsx` | The fixed animated progress bar and rocket indicator at the top of the viewport. It is separate so the layout has a clear scroll-progress component. | Changing the top progress animation. | `App.tsx`, Motion, `lucide-react`. |
| `ScrollToTop.tsx` | The floating button that appears after scrolling and smoothly returns to the top. | Changing that floating scroll control. | `App.tsx`, Motion, `lucide-react`. |
| `src/components/common/` | Reusable UI that is not tied to one particular portfolio content type. | Adding a shared heading, counter, or overlay. | Portfolio sections. |
| `SectionHeading.tsx` | Shared animated heading pattern used at the beginning of sections. | Changing the common section heading appearance or accepted props. | Most files in `sections/`. |
| `AnimatedCounter.tsx` | Counts a number up when it enters the viewport and respects reduced-motion preference. | Changing animated number behavior. | `Volunteering.tsx`, Motion. |
| `Lightbox.tsx` | Reusable full-screen image viewer with close and previous/next keyboard controls. | Changing image viewing or keyboard behavior. | `Achievements.tsx`, `Volunteering.tsx`. |
| `src/components/cards/` | Components that display individual or repeated content items. | Changing a project, skill, or experience-card layout. | `Projects.tsx`, `TechStack.tsx`, and `Experience.tsx`. |
| `ProjectCard.tsx` | Displays one project preview and its project details. | Changing an individual project card's appearance or interactions. | `Projects.tsx`, `data/projects.ts`, `utils/images.ts`. |
| `SkillCard.tsx` | Displays one technology skill and its logo. | Changing a skill item layout or logo mapping. | `TechStack.tsx`, `data/skills.ts`. |
| `Timeline.tsx` | Displays the experience entries in the existing animated timeline/card layout. It remains named Timeline because it owns the whole timeline, rather than one isolated experience card. | Changing the experience timeline or its entry layout. | `Experience.tsx`, `data/experience.ts`. |
| `src/sections/` | Each file renders one major part of the one-page portfolio. | Editing the content or layout of that page section. | `App.tsx`, `components/`, and `data/`. |
| `Hero.tsx` | First/intro section, portrait, role labels, and resume action. | Changing the introductory content or hero behavior. | `data/personal.ts`, `utils/resume.ts`. |
| `About.tsx` | About narrative, organizations, education, and highlights. | Editing the about-section presentation. | `data/personal.ts`, `SectionHeading.tsx`. |
| `TechStack.tsx` | Groups and displays technology skills by category. | Changing skill-section layout or grouping behavior. | `data/skills.ts`, `SkillCard.tsx`. |
| `Projects.tsx` | Project filtering and grid/slideshow presentation. | Changing project filters, view modes, or section layout. | `data/projects.ts`, `ProjectCard.tsx`. |
| `Experience.tsx` | Experience section heading and timeline placement. | Changing how experience is introduced or positioned. | `data/experience.ts`, `Timeline.tsx`. |
| `Volunteering.tsx` | Organization cards, impact counters, photo filtering, and gallery/lightbox state. | Changing volunteering content display or gallery interactions. | `data/volunteering.ts`, common components, `utils/images.ts`. |
| `Achievements.tsx` | Award cards and award-image lightbox. | Changing award presentation or image interactions. | `data/achievements.ts`, `Lightbox.tsx`, `utils/images.ts`. |
| `Contact.tsx` | Contact details and social/contact actions. | Changing the contact section presentation. | `data/personal.ts`. |
| `src/data/` | Typed content kept separate from JSX so portfolio facts can be updated without editing layout code. | Updating text, URLs, image paths, categories, or lists. | The matching components and sections. |
| `personal.ts` | Personal profile, introduction, biography, location, education, contact details, and social links. | Updating identity, bio, contact, or social information. | Hero, About, Contact, Navbar, Footer. |
| `projects.ts` | Project types, filter options, and project records. | Adding a project or changing its title, description, links, tags, or image. | `Projects.tsx`, `ProjectCard.tsx`. |
| `experience.ts` | Experience-entry type and timeline entries. | Adding or updating work/leadership experience. | `Experience.tsx`, `Timeline.tsx`. |
| `volunteering.ts` | Organization, impact-stat, and volunteer-photo types and records. | Updating volunteer organizations, statistics, or gallery details. | `Volunteering.tsx`. |
| `achievements.ts` | Award type and award records. | Adding or updating awards and award image paths. | `Achievements.tsx`. |
| `skills.ts` | Skill type, category list, and technology records. | Adding or updating technology skills. | `TechStack.tsx`, `SkillCard.tsx`. |
| `src/utils/` | Small helper functions used by more than one component. | Adding a focused helper with no UI of its own. | Components/sections that import the helper. |
| `images.ts` | Produces the optimized `.webp` thumbnail path when an image has a corresponding optimized version. | Changing thumbnail path rules. | Project and award cards, `public/assets/**/optimized/`. |
| `resume.ts` | Downloads the bundled resume PDF and uses `/resume.pdf` as a fallback. | Changing resume download behavior or fallback filename. | `Navbar.tsx`, `Hero.tsx`, `src/assets/Narendhar_D_Resume.pdf`, `public/resume.pdf`. |

## `public/`: files served directly

| Folder/file | What it does | Edit it when | Connected files |
| --- | --- | --- | --- |
| `public/favicon.svg` | Browser tab icon. | Replacing the favicon artwork. | `index.html`. |
| `public/resume.pdf` | Public fallback resume download. | Replacing the downloadable resume. | `utils/resume.ts`, `data/personal.ts`. |
| `public/assets/` | Static images and SVGs served at root URLs such as `/assets/projects/...`. Keeping these paths avoids changing the many existing data-file URLs. | Replacing a static image, logo, or background while keeping the same URL (or updating the data record if the URL changes). | `src/data/*.ts`, `src/index.css`, and UI components. |
| `public/assets/awards/` | Award photos and optimized thumbnails. | Updating award images. | `data/achievements.ts`, `utils/images.ts`. |
| `public/assets/projects/` | Project previews and optimized thumbnails. | Updating a project image. | `data/projects.ts`, `utils/images.ts`. |
| `public/assets/volunteering/` | Volunteer/gallery photos and optimized thumbnails. | Updating gallery media. | `data/volunteering.ts`, `utils/images.ts`. |
| `public/assets/logos/` | Partner organization logos. | Updating an organization logo. | `data/volunteering.ts`. |
| `public/assets/ambient-network.svg` | Decorative background network graphic. | Replacing the ambient network art. | `src/index.css`. |
| `public/assets/portrait-cutout.png` | Hero portrait image. | Replacing the portrait. | `data/personal.ts`. |
| `public/assets/aistudio/` | Existing image/source materials retained from the authoring workflow. | Only when managing those source materials. | No direct runtime import is required by the current portfolio. |

## Why some suggested folders/files are not present

- There is no `hooks/` folder because the current app has no custom hooks; it uses React and Motion hooks directly where needed.
- There is no `styles/` folder because the project has one global stylesheet, `src/index.css`, and Tailwind utility classes. A folder would add no useful separation yet.
- No new generic `Button`, `AnimatedSection`, `ExperienceCard`, or `VolunteerCard` was created. Their current behavior is already handled by existing section/card code, and adding wrappers without a real reuse need would make the project harder to follow.
- The user-facing image URLs under `public/assets/` remain unchanged. Moving them to a new `public/images/` folder would require updating many records and could break deployed image URLs.
- Both resume files are intentional: the `src/assets` copy is bundled by Vite for the primary download flow, while `public/resume.pdf` is the fallback.

## How the website connects

1. The browser opens `index.html`, whose `root` element is mounted by `src/main.tsx`.
2. `main.tsx` imports `index.css` and renders `App.tsx`.
3. `App.tsx` lays out shared components and renders the page sections in order.
4. Each section imports reusable components and its matching data module.
5. Images are served directly from `public/assets/`; `utils/images.ts` selects optimized thumbnails where available.
6. Vite compiles the app into `dist/`. Wrangler serves/deploys that output on Cloudflare Pages.
