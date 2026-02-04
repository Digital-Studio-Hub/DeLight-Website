# DeLight Films - Professional Film Production Website

## Overview

DeLight Films is a premium, cinematic website for a professional film production and visual storytelling company operating in South Africa. The site showcases the company's services including movie/series production, commercials, music videos, and motion graphics. It features a dark, cinematic aesthetic with an orange accent color scheme designed to compete visually with top-tier production studios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with React plugin

The frontend follows a pages-based architecture with shared layout components (Header, Footer, Layout wrapper). Pages include Home, About, Services, Portfolio, Contact, Privacy, and Terms.

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: RESTful endpoints under `/api` prefix

The server handles static file serving in production and provides API endpoints for functionality like the contact form email submission.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Managed via drizzle-kit with migrations stored in `/migrations`
- **Current Storage**: MemStorage class for in-memory user data (placeholder implementation)

Note: The database connection requires a `DATABASE_URL` environment variable for PostgreSQL.

### Email Integration
- **Service**: ZeptoMail API for transactional emails
- **Use Case**: Contact form submissions sent to admin and confirmation to users
- **Configuration**: Requires `ZEPTOMAIL_TOKEN` environment variable

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui + custom)
│   │   ├── pages/       # Route pages
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
├── shared/           # Shared schemas and types
├── attached_assets/  # Static images and assets
└── migrations/       # Database migrations
```

### Build and Development
- **Development**: `npm run dev` runs tsx for hot-reloading
- **Production Build**: Custom build script using esbuild for server and Vite for client
- **Type Checking**: `npm run check` for TypeScript validation
- **Database**: `npm run db:push` for schema synchronization

## External Dependencies

### Third-Party Services
- **ZeptoMail**: Email delivery service for contact form submissions (requires `ZEPTOMAIL_TOKEN`)
- **PostgreSQL**: Database storage (requires `DATABASE_URL`)

### Key NPM Packages
- **UI/Styling**: Tailwind CSS, Radix UI primitives, class-variance-authority, lucide-react icons
- **Data/Forms**: TanStack React Query, react-hook-form, zod for validation
- **Database**: drizzle-orm, drizzle-zod, pg (PostgreSQL client)
- **Server**: Express 5, connect-pg-simple for session storage
- **Build**: Vite, esbuild, tsx

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay for development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator