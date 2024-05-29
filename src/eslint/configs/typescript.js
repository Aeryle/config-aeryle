import globals from 'globals'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  ...tsEslint.configs.recommended, //
  {
    name: 'typescript',
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte'],
      },
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
  }
)
