import tsEslint from 'typescript-eslint'

export default tsEslint.config({
  name: 'commonjs',
  files: ['**/*.cjs'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
})
