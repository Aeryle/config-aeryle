import path from 'path'

import tsEslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default tsEslint.config(
  ...compat.extends('plugin:import/recommended'), //
  {
    name: 'import',
    rules: {
      // TODO: Check when this is fixed
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], //
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }
)
