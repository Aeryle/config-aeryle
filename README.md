# Config made with ❤️ by Aeryle

## Includes ESLint and Prettier configs

## Installation

```bash
npm install config-aeryle eslint prettier
```

Or with other package managers:

```bash
# Yarn
yarn add config-aeryle eslint prettier

# Pnpm
pnpm add config-aeryle eslint prettier

# Bun
bun add config-aeryle eslint prettier
```

### Usage in `eslint.config.js`

```js
import { eslint } from 'config-aeryle'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...eslint.typescript, //
  ...eslint.prettier,

  // Add your own configurations here
]
```

### Plugins in `eslint.config.js`

```js
import { eslint } from 'config-aeryle'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...eslint.typescript, //
  ...eslint.prettier,

  // eslint-plugin-import
  ...eslint.commonjs,
  ...eslint.esm,
  ...eslint.imports,

  // Ignore files
  eslint.ignores.base, // node_modules, .DS_Store
  eslint.ignores.env, // Environment files
  eslint.ignores.svelte, // SvelteKit
  ...eslint.ignores.packageManagers, // NPM, Pnpm, Yarn, Bun
]
```

### Usage in `prettier.config.js`

```js
import { prettier } from 'config-aeryle'

/** @type {import("prettier").Config} */
const config = {
  ...prettier.config,

  // Add your own configurations here
}

export default config
```
