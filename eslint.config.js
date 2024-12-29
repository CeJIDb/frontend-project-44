import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import jest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Настройки языка
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера
        ...globals.node, // Глобальные переменные Node.js
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  // Рекомендуемые настройки от eslint
  pluginJs.configs.recommended,
  // Рекомендуемые настройки для Jest
  {
    plugins: {
      jest,
    },
    rules: jest.configs.recommended.rules,
  },
  // Настройки для Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Применение правил Prettier
    },
  },
  {
    // Собственные правила
    rules: {
      semi: ['error', 'always'], // Всегда использовать точку с запятой
      quotes: ['error', 'single'], // Одинарные кавычки
      'no-console': 'off', // Разрешить использование console
      'import/extensions': 'off', // Отключить проверку расширений импорта
    },
  },
];
