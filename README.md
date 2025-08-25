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
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
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
└── vitest.config.mts          # Vitest configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Supabase account

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

   Add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**

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

## 🔧 Configuration Files

- `components.json` - shadcn/ui configuration
- `eslint.config.mjs` - ESLint rules and settings
- `vitest.config.mts` - Unit test configuration
- `playwright.config.ts` - E2E test configuration
- `next.config.ts` - Next.js build configuration
- `middleware.ts` - Authentication middleware

## 📚 Key Features

- ✅ **Type-safe development** with TypeScript
- ✅ **Modern React patterns** with hooks and server components
- ✅ **Comprehensive testing setup** (unit, integration, E2E)
- ✅ **Authentication & database** ready with Supabase
- ✅ **State management** with Zustand and TanStack Query
- ✅ **Modern UI components** with shadcn/ui and Tailwind CSS
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
