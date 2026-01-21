# Repair To Go - Mobile Phone Repair Service

## Overview

A bilingual (English/Arabic) mobile phone repair service landing page for "Repair To Go" operating in Erbil. The application allows customers to request repair services through a contact form, with requests stored in a PostgreSQL database. The site emphasizes mobile-first design with smooth animations and a professional blue/white theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth entry effects and scrolling
- **Build Tool**: Vite with custom path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **API Pattern**: Type-safe API contracts defined in `shared/routes.ts` with Zod schemas for request/response validation
- **Development**: Hot module replacement via Vite middleware in development mode

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Drizzle Kit with migrations stored in `/migrations`
- **Database URL**: Required via `DATABASE_URL` environment variable
- **Current Tables**: `contact_requests` table for storing customer service requests

### API Structure
- **Contract-First Design**: API routes defined in `shared/routes.ts` with full type safety
- **Validation**: Input/output validation using Zod schemas shared between client and server
- **Error Handling**: Standardized error response schemas for validation (400) and internal errors
- **Current Endpoints**:
  - `POST /api/contact` - Create new contact/service request

### Build System
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server with selective dependency bundling for faster cold starts
- **Production**: Single `dist/index.cjs` entry point serving static files

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database access layer with type-safe queries
- **connect-pg-simple**: PostgreSQL session store (available for future auth needs)

### UI Framework
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library

### Third-Party Libraries
- **Framer Motion**: Animation library for page transitions and micro-interactions
- **React Hook Form + Zod**: Form management and validation
- **TanStack Query**: Server state management and caching
- **date-fns**: Date formatting utilities

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **TypeScript**: Full type safety across client and server with shared types