# base-vite-react

## Getting Started Steps

```bash
git clone https://github.com/ariym/base-vite-react project-name
cd project-name
git remote remove origin
npm i
```

## Usage

### Import Path Shortcut for `/src`

`import from '@/dir_or_filename'` makes is easy to import universal components inside nested directories

### Downloading new UI components

1. Find a component on [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)
1. `npx shadcn-ui@latest add component-name`

### Environment Variables

1. Inside of project root run:
    - ```cp env.template .env.development.local```
    - ```cp env.template .env.production.local```
1. Prefix every variable with ```VITE_``` (```VITE_SOMETHING=xxx```)
1. Import with ```import.meta.env.VITE_SOMETHING```

[Vite Documentation](https://vitejs.dev/guide/env-and-mode.html#env-files) on env files.

#### Enviroment MODE

Instead of ```NODE_ENV```, use ```import.meta.env.MODE``` by passing ```vite --mode MODE``` at startup.

**Note to *AVOID*** passing ```NODE_ENV=``` at startup which can get confusing as [documented here](https://vitejs.dev/guide/env-and-mode#node-env-and-modes).

## Libraries Included

- **data fetching** – [react query](https://tanstack.com/query/v5/docs/framework/react/overview)
  - state management for updated data
  - loading screen
- **navigation** – [react router](https://reactrouter.com/home)
  - adding a route
  - url parameters
- **ui components** – shadcn
- **icons** – radix-ui/react-icons
- **build sytstem** – vite
