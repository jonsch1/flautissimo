# Musikhaus-Aachen

Modern website for Musikhaus-Aachen built with Astro and Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
│   └── img/            # Image files
├── src/
│   ├── components/     # Astro components
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts (markdown)
│   │   └── config.ts   # Content collection schemas
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/          # Route pages
│       ├── index.astro
│       ├── about.astro
│       ├── products.astro
│       ├── contact.astro
│       ├── impressum.astro
│       ├── 404.astro
│       └── blog/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm run dev`         | Starts local dev server at `localhost:4321`      |
| `pnpm run build`       | Build your production site to `./dist/`          |
| `pnpm run preview`     | Preview your build locally, before deploying     |
| `pnpm run astro ...`   | Run CLI commands like `astro add`, `astro check` |

## 📝 Adding Blog Posts

Blog posts are stored as markdown files in `src/content/blog/`. To add a new post:

1. Create a new file in `src/content/blog/` with the naming pattern: `YYYY-MM-DD-title.md`
2. Add frontmatter at the top:

```markdown
---
title: Your Post Title
date: 2025-10-20
description: A brief description of your post
tags: [tag1, tag2]
---

Your post content here...
```

## 🎨 Styling

The site uses Tailwind CSS for styling. The primary color scheme:
- Primary: `#D64000`
- Primary Dark: `#FF2F1E`

You can customize these in [tailwind.config.mjs](tailwind.config.mjs).

## 📦 Deployment

The site can be deployed to any static hosting service (Netlify, Vercel, etc.). The build output will be in the `dist/` directory.

### Netlify

The contact form is configured for Netlify Forms. Make sure your `netlify.toml` is configured, or deploy through the Netlify UI.

## 🔧 Migration Notes

This site was migrated from Gatsby to Astro:
- ✅ All blog posts migrated from `src/pages/blog/*.md` to `src/content/blog/*.md`
- ✅ Replaced Bulma CSS with Tailwind CSS
- ✅ Removed Netlify CMS (now using plain markdown files)
- ✅ All pages converted from React/JSX to Astro components
- ✅ Images moved from `static/img/` to `public/img/`

## 📞 Contact

For questions about the website, please contact:
- Email: schumacher@flautissimo.de
- Phone: +49 241 95451475
