import tsEslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig} */
export default tsEslint.config({
  name: 'ignores',
  ignores: [
    '.DS_Store',
    'node_modules',
    'build',
    '.svelte-kit',
    'package',
    '.env',
    '.env.*',
    '!.env.example',
    'android',
  ],
})

/** @type {import('eslint').Linter.FlatConfig} */
export const base = {
  name: 'ignores.base',
  ignores: ['.DS_Store', 'node_modules'],
}

/** @type {import('eslint').Linter.FlatConfig} */
export const bun = {
  name: 'ignores.bun',
  ignores: ['bun.lockb'],
}

/** @type {import('eslint').Linter.FlatConfig} */
export const pnpm = {
  name: 'ignores.pnpm',
  ignores: ['pnpm-lock.yaml'],
}

/** @type {import('eslint').Linter.FlatConfig} */
export const yarn = {
  name: 'ignores.yarn',
  ignores: ['yarn.lock'],
}

/** @type {import('eslint').Linter.FlatConfig} */
export const npm = {
  name: 'ignores.npm',
  ignores: ['package-lock.json'],
}

/**
 * @description This is a collection of all package managers
 * @type {import('eslint').Linter.FlatConfig}
 */
export const packageManagers = tsEslint.config(bun, pnpm, yarn, npm)

/**
 * @description This is for environment files
 * @type {import('eslint').Linter.FlatConfig}
 */
export const env = {
  name: 'ignores.env',
  ignores: ['.env', '.env.*', '!.env.example'],
}

/**
 * @description This is for SvelteKit
 * @type {import('eslint').Linter.FlatConfig}
 */
export const svelte = {
  name: 'ignores.svelte',
  ignores: ['build', '.svelte-kit'],
}
