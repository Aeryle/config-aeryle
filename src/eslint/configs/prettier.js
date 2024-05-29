import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig} */
export default tsEslint.config({
  name: 'prettier',
  ...eslintPluginPrettier,
})
