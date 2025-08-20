import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
