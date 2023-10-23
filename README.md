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

1. Create a ```.env``` file in project root.
1. Prefix every variable with ```VITE_``` (```VITE_SOMETHING=xxx```)
1. Import with ```import.meta.env.VITE_SOMETHING```

[Vite Documentation](https://vitejs.dev/guide/env-and-mode.html#env-files) on env files.

## Features

- react query
- react router
- shadcn
- radix-ui/react-icons
- vite
