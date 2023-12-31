import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      devSourcemap: command === 'serve'
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            echarts: ['echarts']
          }
        }
      }
    },
    server: {
      proxy: {
        //https://github.com/http-party/node-http-proxy#options
        '/apiDevlopment': {},
        '/apiTest': {},
        '/apiBuild': {}
      }
    },
    plugins: [
      legacy(),
      react(),
      visualizer()
    ],
  }
})
