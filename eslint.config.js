import tsEslint from 'typescript-eslint'

import { eslint } from './src/index.js'

export default tsEslint.config(
  ...eslint.typescript, //
  ...eslint.prettier,
  ...eslint.commonjs,
  ...eslint.esm,
  ...eslint.imports,
  eslint.ignores.base,
  eslint.ignores.env,
  ...eslint.ignores.packageManagers
)
