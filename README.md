# Next.js Supabase Scaffold

![Unit & Integration Tests](https://github.com/berkaycirak/nextjs-supabase-scaffold/workflows/Unit%20%26%20Integration%20Tests/badge.svg)
![E2E Tests](https://github.com/berkaycirak/nextjs-supabase-scaffold/workflows/E2E%20Tests/badge.svg)

A modern, full-stack web application scaffold built with Next.js 15, Supabase, and TypeScript. Features a comprehensive testing setup, state management, and developer experience tools.

## 🚀 Tech Stack

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Database & Authentication

- **[Supabase](https://supabase.com/)** - Backend-as-a-Service with PostgreSQL database
- **[@supabase/ssr](https://supabase.com/docs/guides/auth/server-side/nextjs)** - Server-side rendering support
- **[Prisma](https://prisma.io/)** - Type-safe database ORM with migrations and introspection
  git

### State Management

- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[TanStack Query](https://tanstack.com/query)** - Async state management and server state caching

### UI & Styling

- **[shadcn/ui](https://ui.shadcn.com/)** - Modern UI components built on Radix UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - Runtime schema validation

### Testing

- **[Vitest](https://vitest.dev/)** - Unit and integration testing
- **[Testing Library](https://testing-library.com/)** - Simple and complete testing utilities
- **[Playwright](https://playwright.dev/)** - End-to-end testing
- **[MSW](https://mswjs.io/)** - API mocking for testing
- **[jsdom](https://github.com/jsdom/jsdom)** - DOM implementation for testing

### Developer Experience

- **[ESLint](https://eslint.org/)** - Code linting with Next.js config
- **[Prettier](https://prettier.io/)** - Code formatting with Tailwind plugin
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

## 📁 Project Structure

```
nextjs-supabase-scaffold/
├── public/                     # Static assets
├── prisma/                     # Prisma database schema and migrations
│   └── schema.prisma           # Database schema definition
├── src/
│   ├── __mocks__/              # MSW mock handlers for testing
│   ├── app/                    # Next.js App Router
│   │   ├── auth/               # Authentication routes
│   │   ├── error/              # Error pages
│   │   ├── (your-pages)/       # Add your application pages here
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   └── ui/                 # shadcn/ui components
│   ├── config/                 # Configuration files
│   ├── constants/              # App constants
│   ├── features/               # Feature-based modules
│   │   └── (your-features)/    # Organize code by business features
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   │   └── db.ts               # Prisma database client
│   ├── store/                  # State management (Zustand)
│   ├── tests/                  # Unit & integration tests
│   │   ├── e2e/                # E2E test specs
│   │   └── unit/               # Unit test files
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
│       └── supabase/           # Supabase client configurations
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── middleware.ts              # Next.js middleware
├── next.config.ts             # Next.js configuration
├── playwright.config.ts       # Playwright configuration
├── prisma.config.ts           # Prisma configuration
└── vitest.config.mts          # Vitest configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Supabase account (for DB)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-supabase-scaffold
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your Supabase credentials and database URL:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=your_database_connection_string
   ```

   **Important**: The `DATABASE_URL` is required for Prisma to connect to your database. Without it, database operations will fail.

4. **Set up the database**

   Run your first migration to create the database tables:

   ```bash
   npx prisma migrate dev --name init
   ```

   This command will create migration files, apply them to your database, and generate the Prisma Client.

5. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run unit/integration tests with Vitest
- `pnpm test:e2e` - Run end-to-end tests with Playwright
- `pnpm coverage` - Generate test coverage report
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Regenerate Prisma client after manual schema changes

## 🧪 Testing Strategy

### Unit & Integration Tests (Vitest + Testing Library)

- Located in `src/tests/`
- Run with `pnpm test`
- Uses jsdom environment
- Includes MSW for API mocking

### End-to-End Tests (Playwright)

- Located in `tests/`
- Run with `pnpm test:e2e`
- Tests across Chrome, Firefox, and Safari
- Generates HTML reports

### Test Configuration

- **Vitest**: Configured for React components with jsdom
- **MSW**: Mock service worker for API testing
- **Testing Library**: React component testing utilities
- **Playwright**: Cross-browser E2E testing

## 🎨 UI Components

This project uses **shadcn/ui** with the following configuration:

- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

Add new components:

```bash
pnpx shadcn@latest add [component-name]
```

## 🔒 Authentication Flow

- Supabase Auth integration
- Server-side rendering support
- Protected routes with middleware
- Email confirmation handling

## 🚀 Deployment

This scaffold is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any Node.js hosting platform**

## 🤝 Development Workflow

### Pre-commit Hooks

- **Husky**: Manages Git hooks
- **lint-staged**: Runs linters on staged files
- Automatically formats code with Prettier
- Runs ESLint with auto-fix

### Code Quality

- TypeScript for type safety
- ESLint with Next.js configuration
- Prettier with Tailwind CSS plugin
- Consistent import aliases (`@/`)

## 🗄️ Database Setup

This project uses **Prisma** as the ORM for type-safe database operations:

### Database Configuration

- **Schema**: Defined in `prisma/schema.prisma`
- **Client**: Generated types and client in `src/lib/db.ts`
- **Configuration**: Prisma settings in `prisma.config.ts`

### Working with the Database

```bash
# Create and apply migrations (recommended workflow)
npx prisma migrate dev --name your_migration_name

# Open Prisma Studio (database GUI)
npx prisma studio

# Regenerate Prisma client after manual schema.prisma edits
npx prisma generate

# Push schema changes without migrations (prototyping only)
npx prisma db push

# Reset database and apply all migrations (development only)
npx prisma migrate reset
```

**Recommended workflow:**

1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name describe_your_change`
3. Prisma will automatically generate the client and apply migrations

## 🏗️ Feature-Based Development

This scaffold promotes **feature-based architecture** for better code organization and maintainability:

### Feature Structure

Organize your code by business features in the `src/features/` directory:

```
src/features/
├── auth/                       # Authentication feature
│   ├── components/             # Feature-specific components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── hooks/                  # Feature-specific hooks
│   │   └── useAuth.ts
│   ├── services/               # API calls and business logic
│   │   └── authService.ts
│   ├── stores/                 # Feature-specific state
│   │   └── authStore.ts
│   ├── types/                  # Feature-specific types
│   │   └── auth.types.ts
│   └── index.ts                # Feature exports
├── dashboard/                  # Dashboard feature
├── profile/                    # User profile feature
└── settings/                   # Settings feature
```

### Benefits of Feature-Based Architecture

- **Scalability**: Easy to add new features without affecting existing code
- **Maintainability**: Related code is co-located and easier to find
- **Team Collaboration**: Different teams can work on different features
- **Code Reusability**: Clear separation between shared and feature-specific code
- **Testing**: Feature-specific tests are easier to organize and maintain

### Guidelines

1. **Keep features independent**: Minimize dependencies between features
2. **Use shared components**: Place reusable UI components in `src/components/`
3. **Export cleanly**: Use `index.ts` files to expose feature APIs
4. **Follow naming conventions**: Use consistent naming across features
5. **Test by feature**: Organize tests to match your feature structure

## 🔧 Configuration Files

- `components.json` - shadcn/ui configuration
- `eslint.config.mjs` - ESLint rules and settings
- `vitest.config.mts` - Unit test configuration
- `playwright.config.ts` - E2E test configuration
- `next.config.ts` - Next.js build configuration
- `middleware.ts` - Authentication middleware
- `prisma.config.ts` - Prisma configuration
- `prisma/schema.prisma` - Database schema definition

## 📚 Key Features

- ✅ **Type-safe development** with TypeScript
- ✅ **Modern React patterns** with hooks and server components
- ✅ **Comprehensive testing setup** (unit, integration, E2E)
- ✅ **Authentication & database** ready with Supabase and Prisma
- ✅ **State management** with Zustand and TanStack Query
- ✅ **Modern UI components** with shadcn/ui and Tailwind CSS
- ✅ **Feature-based architecture** for scalable code organization
- ✅ **Developer experience** tools (ESLint, Prettier, Husky)
- ✅ **Production ready** with optimized build configuration

## 🤖 Dev-Friendly Structure

This scaffold is designed to work seamlessly with

- Clear folder structure with logical separation
- Consistent naming conventions
- Comprehensive type definitions
- Well-documented configuration files
- Modern patterns and best practices

---

Built with ❤️ using modern web development best practices.
