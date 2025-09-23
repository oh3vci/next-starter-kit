# Next.js Starter Kit

A production-ready Next.js starter kit with pre-configured development tools and best practices.

## Features

### 🛠 Pre-configured Development Tools

- **ESLint**: Code quality and consistency checks with Next.js best practices
  - Next.js Core Web Vitals rules
  - TypeScript support
  - Import plugin for module import validation
  - Perfectionist plugin for automatic sorting (imports, objects, interfaces, JSX props)
  - Prettier integration for consistent formatting
- **Prettier**: Automatic code formatting with Tailwind CSS class sorting
- **Husky & lint-staged**: Pre-commit hooks for code validation
- **Commitlint**: Enforces consistent commit message conventions

### 🎨 Styling

- **Tailwind CSS v4**: Latest utility-first CSS framework

### 🔧 Build Optimization

- **Turbopack**: Fast development server and build performance

### 🎯 SVG Icon System

The project includes an efficient SVG icon management system with a reusable `Icon` component.

#### Usage

1. Add SVG icons as `<symbol>` elements in `/public/assets/icons.svg`
2. Assign a unique `id` to each symbol
3. Pass the symbol id to the Icon component's `name` prop

```tsx
// Add to icons.svg
<symbol id="my-icon" viewBox="0 0 16 16">
  <!-- SVG paths -->
</symbol>

// Use in component
import Icon from '@/app/components/Icon'

<Icon name="my-icon" width={24} height={24} />
```

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Production

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Scripts

- `npm run dev`: Start development server (with Turbopack)
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Structure

```
next-starter-kit/
├── public/
│   └── assets/
│       └── icons.svg           # SVG icon
├── src/
│   └── app/
│       ├── components/
│       │   ├── Icon.tsx        # Icon component
│       │   └── index.ts        # Component exports
│       ├── layout.tsx
│       └── page.tsx
├── .husky/                     # Git hooks
├── .lintstagedrc.mjs          # Lint-staged configuration
├── commitlint.config.mjs      # Commitlint configuration
├── eslint.config.mjs          # ESLint flat config
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── prettier.config.mjs        # Prettier configuration
└── tsconfig.json              # TypeScript configuration
```

## Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.1
- **React**: 19.1

## License

MIT
