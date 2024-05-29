import tsEslint from 'typescript-eslint'

export default tsEslint.config({
  name: 'esm',
  files: ['**/*.{js,mjs,ts}'],
  rules: {
    'import/default': 'off',
  },
})
