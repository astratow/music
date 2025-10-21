// eslint.config.js
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginCypress from 'eslint-plugin-cypress'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/base',
    files: ['**/*.{js,mjs,jsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Twoje reguły tutaj:
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // JavaScript rekomendacje
  js.configs.recommended,

  // Vue 3 (flat config)
  pluginVue.configs['flat/essential'],

  // Vitest (tylko dla testów)
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // Cypress (dla testów e2e)
  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
  },

  // Wyłączenie konfliktów z Prettierem
  ...skipFormatting,
])
