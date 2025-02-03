import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],

  test: {
    alias: {
      '~': resolve('./app'),
      '~~': resolve('./'),
      '#imports': resolve('./vitest.emptymock.ts'),
      '#components': resolve('./vitest.emptymock.ts'),
    },
    coverage: {
      reporter: ['text'],
      include: [
        'app',
        'server',
      ],
    },
    environment: 'jsdom',
    setupFiles: [
      './vitest.setup.ts',
    ],
  },
})
