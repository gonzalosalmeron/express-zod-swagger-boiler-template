// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: ['prettier', 'standard-with-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    indent: ['warn', 2],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'no-duplicate-imports': 'error',
  },
}
