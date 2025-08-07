# Code Style and Conventions

- **TypeScript**: Strict mode enabled, path aliases (`@/*`, `@public/*`)
- **ESLint**: Uses Next.js core web vitals and typescript configs (see `eslint.config.mjs`)
- **Styling**: Tailwind CSS, mobile-first, responsive, dark/light mode
- **Components**: Functional, typed with interfaces/props, colocated with related files
- **Naming**: PascalCase for components, camelCase for variables/functions
- **State**: Managed with Zustand for global state, React state for local
- **Documentation**: Key flows and components documented in README files
- **No explicit Prettier config found**; formatting likely handled by ESLint and Tailwind conventions.