# Codex Test Vite + React + Chakra UI

This project was bootstrapped manually to match the default Vite React + TypeScript template while integrating [Chakra UI](https://chakra-ui.com/) for rapid UI development.

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

## Project Structure

- `src/` contains the React application written in TypeScript.
- `src/theme.ts` configures Chakra UI and its color mode settings.
- `src/App.tsx` implements the landing layout and color mode toggle button.
- `public/` holds static assets served as-is.
- `vite.config.ts` defines the Vite build configuration.

## Customization Tips

- Update `src/theme.ts` to adjust Chakra tokens such as colors, fonts, and breakpoints.
- Modify the landing content in `src/App.tsx` to reflect your app's purpose.
- Extend the Chakra `ChakraProvider` wrapper in `src/main.tsx` to add context providers or global layout components.

Feel free to customize the Chakra theme or add new components to suit your needs.
