import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import eslintParserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParserTs
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'no-unused-vars': 'warn'
    }
  }
]
