# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Will Craft Software website built with [Lume](https://lume.land), a static site generator for Deno. The site includes blog posts, a landing page, journey content, and a content management system (CMS).

## Commands

### Development

- `deno task serve` - Start local development server with hot reload
- `deno task cms` - Launch the Lume CMS interface for content management

### Build

- `deno task build` or `deno task lume` - Generate static site in `_site/` directory

### Code Formatting

- `dprint fmt` - Format code using dprint with configured plugins (TypeScript, JSON, Markdown, CSS, HTML, YAML)
- `dprint check` - Check formatting without making changes

## Architecture

### Core Configuration

- `_config.ts` - Main Lume configuration with plugins (Tailwind CSS, Prism for syntax highlighting, Mermaid diagrams, icons, favicons)
- `_cms.ts` - CMS configuration
- `deno.json` - Deno configuration with task definitions and import maps

### Content Structure

- `/posts/` - Blog posts in Markdown with frontmatter metadata
- `/posts/_data.yml` - Default data for all posts (layout, navbar configuration)
- `/journey/` - Journey content organized by weeks (week-01 through week-14)
- `index.yml` - Homepage content configuration
- `_data.yml` - Site-wide default data (meta tags, navbar, footer)

### Templates & Layouts

- `_includes/layouts/` - Page layouts (base, landing, post, posts list, tags, journey)
- `_includes/templates/` - Reusable components (navbar, footer, post-list, tag-item)
- `.vto` files - Vento templating engine (similar to Nunjucks/Liquid)

### Static Assets

- `/static/` - Files copied directly to site root (CNAME, robots.txt, logos, scripts)
- `/uploads/` - User-uploaded images and media
- `styles.css` - Main stylesheet processed with Tailwind CSS and PostCSS

### Generated Output

- `_site/` - Static site output (do not edit directly)
- `_cache/` - Build cache (can be safely deleted)

### Special Files

- `tags_result.page.js` - Dynamic page generator for tag archives
  - Creates pages at `/tags/{tagname}/` for each unique tag

## Plugin Stack

- **Tailwind CSS** with Typography and Animated plugins for styling
- **Prism.js** for code syntax highlighting (supports Bash, TypeScript, YAML, Diff)
- **Mermaid** for diagram rendering
- **Lightning CSS** for CSS optimization
- **PostCSS** for CSS processing
- **Icons** plugin for icon support
- **Favicon** plugin for multi-format favicon generation

## Development Notes

When modifying content:

- Blog posts use frontmatter for metadata (title, date, tags, excerpt)
- The CMS provides a UI for editing content without touching code
- All posts automatically get the layout and navbar from `posts/_data.yml`
- Journey content follows similar structure with weekly organization

When modifying templates:

- Vento templates support includes, conditionals, loops, and filters
- Base layout wraps all pages with common HTML structure
- Component templates in `_includes/templates/` are reusable across layouts

## Journey Content Guidelines

When working with `/journey/` content, follow the comprehensive style guide at `/journey/CLAUDE.md`. Key points:

### Tone & Voice
- **Warm, friendly, casual** - Like Favor Church Manila style
- Write like talking to a younger sibling or friend
- Use "you" and "we" frequently
- Encouraging and supportive

### Content Requirements  
- **Length**: ~200 lines per file (max 250)
- **Time**: 20-30 minute lessons
- **Language**: ELI5 for complex concepts
- **Examples**: College/early-career relevant
- **Exercises**: Quick, practical, immediately actionable

### Structure
1. Opening hook (relatable problem)
2. Core concept (one main idea)
3. Practical application
4. Quick exercise (5-10 minutes)
5. Remember this (key takeaway)

See individual week CLAUDE.md files for week-specific guidance.
