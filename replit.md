# OLOX SHOP - Digital Subscriptions Platform

## Overview

OLOX SHOP is a full-stack Arabic e-commerce platform for selling digital subscriptions in Morocco. The platform offers streaming services, gaming top-ups, music subscriptions, and software/AI tools. Built with a modern tech stack featuring React, Express, and PostgreSQL, it provides a neon-futuristic dark theme with RTL (right-to-left) layout for Arabic content.

The application serves as a digital storefront where customers can browse products across multiple categories (Media, Gaming, Music, Tech), submit orders through a form, and receive automated WhatsApp contact for order confirmation. An admin dashboard allows order management and monitoring.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- RTL layout system for Arabic language support

**UI Component Library**
- Shadcn/ui components built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom dark neon theme
- Cairo and Tajawal Google Fonts for Arabic typography
- Custom CSS variables for consistent theming (purple/blue neon glow effects)

**State Management**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Session-based authentication state

**Design System**
- Dark neon futuristic theme with deep blue/purple backgrounds (#0e0e24)
- Neon purple (hsl(263 85% 60%)) and blue accents for glow effects
- Responsive grid layouts (4 columns desktop → 1 column mobile)
- Animated gradient backgrounds and pulse effects for visual interest
- RTL-first component architecture

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- Node.js runtime
- ESBuild for production bundling with allowlisted dependencies for cold start optimization
- Session middleware using express-session

**API Design**
- RESTful endpoints with JSON payloads
- `/api/orders` - POST endpoint for order creation
- `/api/admin/*` - Protected admin routes
- Session-based authentication for admin access
- Request logging middleware with timestamps

**Data Layer**
- Repository pattern implementation via `DatabaseStorage` class
- Separation of database logic from route handlers
- Type-safe data access through Drizzle ORM schemas

**Authentication & Authorization**
- Simple credential-based admin login (username/password)
- Session-based authentication with httpOnly cookies
- `requireAdmin` middleware for protected routes
- 24-hour session expiration

### Data Storage

**Database**
- PostgreSQL as primary database
- Drizzle ORM for type-safe database operations
- Schema-first design with TypeScript inference

**Schema Design**
- `users` table: Admin user credentials (id, username, password)
- `orders` table: Customer orders (id, fullName, phone, email, productId, productName, duration, notes, createdAt)
- Timestamps for order tracking
- Serial primary keys with auto-increment

**Migrations**
- Drizzle Kit for schema migrations
- Migration files stored in `/migrations` directory
- `db:push` script for schema synchronization

### External Dependencies

**Third-Party Services**
- WhatsApp Business API integration via direct URL (`wa.me/+212716594562`)
- Google Fonts CDN for Arabic typography (Cairo, Tajawal)

**Payment Processing**
- Manual payment confirmation workflow (mentioned in FAQ: CashPlus, Wafacash, bank transfer)
- No automated payment gateway integration in current implementation

**UI Component Libraries**
- Radix UI primitives for accessible components (accordion, dialog, select, etc.)
- Lucide React for iconography
- Embla Carousel for potential carousel functionality
- CMDK for command palette components

**Form Validation**
- Zod for schema validation
- Drizzle-Zod for database schema to validation schema conversion
- React Hook Form resolver integration

**Development Tools**
- Replit-specific plugins (vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner)
- TypeScript for type checking
- PostCSS with Tailwind and Autoprefixer

**Database Connection**
- node-postgres (pg) as PostgreSQL driver
- Connection pooling via pg.Pool
- Environment variable based configuration (DATABASE_URL)

**Session Storage**
- In-memory session storage (default express-session)
- Optional PostgreSQL session storage via connect-pg-simple (installed but not configured)