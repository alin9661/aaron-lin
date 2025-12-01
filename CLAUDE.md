# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a minimalist portfolio website built with React, TypeScript, and Vite. Originally created with Google AI Studio, it features a modern, brutalist-inspired design with smooth animations and multiple view states.

## Development Commands

```bash
# Install dependencies (npm or pnpm supported)
npm install

# Start development server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Configuration
The project requires a `GEMINI_API_KEY` in `.env.local` for AI Studio functionality. The key is exposed to the client via Vite's environment variable system.

## Architecture

### View State Management
The app uses a single-page architecture with view state management in `App.tsx`:
- **home**: Main portfolio view with all sections
- **all-blogs**: Full blog list view
- **all-projects**: Complete project gallery
- **project-detail**: Individual project details with image gallery

Navigation between views is handled through state updates rather than routing, maintaining simplicity while providing a fluid user experience.

### Data Architecture
All content is centralized in `data.ts` with TypeScript interfaces:
- **PROJECTS**: Portfolio projects with metadata, descriptions, and image galleries
- **BLOG_POSTS**: Blog entries with tags and metadata
- **HOBBIES**: Personal interests grid
- **SOCIALS** and **MENU_ITEMS**: Navigation and social links

### Component Organization
- `/components`: Reusable UI components (Header, MenuOverlay, FadeIn animations, etc.)
- `/sections`: Page sections rendered conditionally based on view state
- Components use inline Tailwind CSS with a consistent zinc-based color palette

### Styling Approach
- Tailwind CSS for utility-first styling
- Consistent use of zinc color scale for monochromatic design
- CSS Grid for layout with decorative grid overlay
- Custom animations using CSS transforms and transitions
- Selection styling and scroll indicators for enhanced UX

### Key Technical Patterns
1. **Scroll-based effects**: Header transparency changes on scroll, scroll progress indicator
2. **Menu overlay**: Full-screen navigation with body scroll lock when open
3. **Lazy image loading**: Using placeholder URLs from Picsum with grayscale filter
4. **Responsive design**: Mobile-first with specific breakpoints for larger screens
5. **Animation components**: FadeIn wrapper for scroll-triggered animations

## Important Files
- `App.tsx`: Main application logic and view state management
- `data.ts`: All content and project data
- `vite.config.ts`: Development server configuration with port 3000 and environment variables