import tsEslint from 'typescript-eslint'
import importX from 'eslint-plugin-import-x'
import { createNodeResolver } from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export default tsEslint.config({
  name: 'import-x',
  plugins: {
    'import-x': importX,
  },
  settings: {
    'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
  },
  rules: {
    'import-x/no-named-as-default': 'off',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-unresolved': 'off',
    'import-x/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
})
