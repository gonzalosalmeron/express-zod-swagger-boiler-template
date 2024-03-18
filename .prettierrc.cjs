/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  pluginSearchDirs: [],
  trailingComma: 'es5',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@images/(.*)$',
    '^@/api/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^@/pages/(.*)$',
    '^@/(.*)$',
  ],
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}