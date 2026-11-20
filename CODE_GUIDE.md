# Beginner Code Guide

This guide explains the main coding ideas used in this portfolio. The examples below come from the actual project.

## The app's path from HTML to page

1. `index.html` contains `<div id="root"></div>`.
2. `src/main.tsx` finds that element and asks React to render the app there. It also imports `src/index.css` once so global styles apply everywhere.
3. `src/App.tsx` combines the shared layout components and the portfolio sections.
4. Each section reads typed data from `src/data/` and displays it with reusable components.

The app is a single page. It does not use a routing library. Navbar links such as `#projects` scroll to sections whose HTML IDs are `projects`.

## React components

A React component is a function that returns a description of the interface using JSX. Component names begin with a capital letter. For example, `App` composes the site, while `Projects` renders the project section and `ProjectCard` renders one project.

The project uses the same component in a list:

```tsx
{filteredProjects.map((project, index) => (
  <ProjectCard key={project.id} project={project} index={index} />
))}
```

React runs `ProjectCard` once for each project record. The `key` helps React keep track of each item when the list changes.

## TypeScript

TypeScript adds type information to JavaScript. It helps catch mistakes while editing, before the page is opened.

The project describes a project record in `src/data/projects.ts`:

```ts
export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  image: string;
  // More fields describe categories and technologies.
}
```

For example, `title: string` means every project title must be text. The `ProjectItem` type is also used by the project card so the component knows what data it receives.

## Props

Props are values passed from a parent component to a child component. `ProjectCard` receives a project record and its position in the list:

```tsx
interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // The card reads project.title, project.image, and other fields.
}
```

When the card's data changes, its displayed title, image, categories, and description change too. This lets one card layout display many project records.

## Imports and exports

An `export` makes a component, type, or data value available to other files. An `import` brings it into the file that needs it.

For example, `src/sections/Projects.tsx` imports `ProjectCard` from `src/components/cards/ProjectCard.tsx` and project records from `src/data/projects.ts`. The file path is relative to the importing file. Named exports use braces, such as `import { ProjectCard } ...`; `App.tsx` is a default export, so `main.tsx` imports it without braces.

When moving a file, update every relative import that points to it. TypeScript's `npm run lint` check helps catch missing imports.

## Data files

The data modules hold content separately from the page markup:

- `src/data/personal.ts` contains profile, biography, location, and contact information.
- `src/data/projects.ts` contains project entries and filter names.
- `src/data/experience.ts` contains work and leadership timeline entries.
- `src/data/volunteering.ts` contains organizations, statistics, and gallery photos.
- `src/data/achievements.ts` contains awards.
- `src/data/skills.ts` contains technology categories and skill entries.

To update a project description, normally edit `projects.ts`; the card layout stays in `ProjectCard.tsx`. Keep image URLs aligned with the actual files under `public/assets/`.

## State

State is information that can change while a person uses the page. React's `useState` hook stores that information and causes the affected component to render again when it changes.

`src/sections/Projects.tsx` stores the selected project filter and display mode:

```tsx
const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All Projects');
const [viewMode, setViewMode] = useState<'grid' | 'slide'>('grid');
```

Selecting another filter updates `activeFilter`, so the section shows a different subset of the existing project data. The page also uses state for the mobile menu, selected gallery organization, image error fallback, and lightbox selection.

## Hooks

Hooks are React functions that let components use state and other React features. Hook names start with `use` and must be called at the top level of a component or another hook.

Hooks used in this project include:

- `useState` for filters, menu visibility, and selected images.
- `useEffect` for browser events and timers. `Navbar.tsx` listens for scrolling and observes visible sections; `Projects.tsx` starts and cleans up the automatic slideshow timer.
- `useMemo` for derived gallery/project lists that should be recalculated when their inputs change.
- Motion hooks such as `useScroll`, `useSpring`, and `useInView` for scroll-linked effects and viewport animations.

There is no custom-hooks folder because the existing code does not need a reusable custom hook yet.

## Event handling

Events describe user actions such as clicking a button or moving the pointer. In JSX, event handlers are written as props beginning with `on`.

In the project filter bar, a click changes the active filter:

```tsx
onClick={() => setActiveFilter(filter)}
```

The navbar also closes its mobile drawer when a navigation link is selected. Event logic is usually kept close to the component that owns the state it changes.

## CSS and Tailwind CSS

`src/index.css` imports Tailwind CSS and defines site-wide base rules, font theme values, reusable custom classes, and keyframe animations. Most component styling uses Tailwind utility classes directly in JSX. For example, `className="grid grid-cols-1 sm:grid-cols-2 gap-5"` creates a one-column layout by default and a two-column layout at the `sm` breakpoint.

Responsive prefixes such as `sm:`, `md:`, `lg:`, and `xl:` apply styles at larger viewport widths. Preserve these classes when reorganizing components; they are part of the current responsive behavior.

Custom classes such as `glass-panel`, `ambient-starfield`, and `animate-marquee` are defined in `src/index.css` and used by components. Tailwind is integrated through the Vite plugin in `vite.config.ts`.

## Motion / Framer Motion-style animation

This project uses the `motion` package, imported from `motion/react` (not the older `framer-motion` package name). Components use `motion.div`, `motion.button`, and related elements to animate the same HTML elements they replace.

Examples include the active navbar pill, project cards that animate into view, and the lightbox transition. `MotionConfig` in `App.tsx` sets the shared reduced-motion behavior. The extracted `ScrollProgress.tsx` uses Motion's scroll values and spring to move the progress indicator smoothly.

## Routing and navigation

There is no React Router or page-by-page URL router. This is a one-page portfolio. A navbar link such as `href="#about"` uses the browser's built-in anchor navigation to find an element such as `<section id="about">` in `About.tsx`.

When changing a section ID, update links that refer to it in `Navbar.tsx`, `Footer.tsx`, and any other anchor link. The navbar uses `IntersectionObserver` to highlight the section currently in view.

## Vite

Vite is the development server and production bundler. It serves the app locally with fast updates, understands TypeScript/JSX through its plugins, and creates the deployable `dist/` folder for a production build.

Static files in `public/` are copied and served from the site root. For example, `public/assets/projects/kalvi40.png` is referenced by a URL starting with `/assets/projects/kalvi40.png`. Keep those URLs in sync with the files. The custom asset-copy step in `vite.config.ts` also preserves specific `src/assets` URL use; do not remove it casually.

## npm

npm installs packages and runs the scripts in `package.json`. Run these commands from the project root:

| Command | Purpose |
| --- | --- |
| `npm install` | Install the dependencies listed in `package.json` and locked in `package-lock.json`. |
| `npm run dev` | Start the local Vite development server (configured for port 3000). |
| `npm run lint` | Run TypeScript checking with `tsc --noEmit`; it does not change files. |
| `npm run build` | Create the optimized production bundle in `dist/`. |
| `npm run preview` | Preview the already-built Vite site locally. |
| `npm run preview:cloudflare` | Build and run the output with Wrangler's Cloudflare Pages local preview. |
| `npm run deploy` | Build and deploy to the configured Cloudflare Pages project. Use only when you intend to deploy. |

## Production build and Cloudflare Pages

A production build converts the source into static optimized files. Cloudflare Pages serves the files in `dist/`, as declared by `wrangler.jsonc`. The deploy and Cloudflare preview scripts in `package.json` build before using Wrangler.

After changing component locations, run `npm run lint` and `npm run build`. A successful build confirms that Vite can resolve and bundle the app; it does not automatically publish the site.

## A practical way to make a content update

To add a project, add a typed record in `src/data/projects.ts` and put its image in the matching `public/assets/projects/` location (and its optimized thumbnail if one is available). `Projects.tsx` already maps the data into `ProjectCard`, so you usually do not need to change the section layout. Then run the type check and production build.
