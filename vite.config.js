import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.cjs', 'src/**/*.mjs']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    include: [
      'src/styles/main.css'
    ]
  },
  build: {
    lib: {
      entry: 'src/lib/index.js',
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        main: 'src/lib/index.js'
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
