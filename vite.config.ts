import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    resolve:{
      alias:{
        '@':'/src'
      }
    },
    server:{
      proxy:{
        //https://github.com/http-party/node-http-proxy#options
        '/apiDevlopment':{},
        '/apiTest':{},
        '/apiBuild':{}
      }
    },
    plugins: [
      react(),
      visualizer()
    ],
  }
})
