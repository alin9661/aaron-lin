# Portfolio Website

A single-page portfolio application built with React and TypeScript, featuring a minimalist design with smooth transitions and multiple view states.

## Key Features

- Single-page application with state-based navigation
- Responsive grid-based layout with decorative overlays
- Project gallery with detailed views and image carousels
- Blog post listings with metadata and tags
- Animated scroll indicators and fade-in effects

## Technology Stack

**Core:**
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0

**Dependencies:**
- lucide-react - Icon library
- Tailwind CSS - Utility-first styling (via CDN)

**Development:**
- @vitejs/plugin-react
- Node.js

## Installation

```bash
# Clone the repository
git clone https://github.com/alin9661/aaron-lin.git

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Add your GEMINI_API_KEY to .env.local
```

## Usage

```bash
# Start development server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── components/          # Reusable UI components
│   ├── DecorativeGrid.tsx
│   ├── FadeIn.tsx
│   ├── Header.tsx
│   ├── MenuOverlay.tsx
│   ├── ProjectRow.tsx
│   ├── ScrollIndicator.tsx
│   └── SectionLabel.tsx
├── sections/           # Page sections
│   ├── About.tsx
│   ├── AllBlogs.tsx
│   ├── AllProjects.tsx
│   ├── Blog.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Hobbies.tsx
│   ├── ProjectDetail.tsx
│   └── Work.tsx
├── App.tsx            # Main application component with view state management
├── data.ts            # Content data (projects, blog posts, hobbies)
├── index.tsx          # Application entry point
├── index.html         # HTML template with Tailwind CDN
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

The application uses a view state system managed in App.tsx to handle navigation between home, project details, and listing views. All content is centralized in data.ts with TypeScript interfaces for type safety. Components use inline Tailwind classes with a consistent zinc color palette for styling.