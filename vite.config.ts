import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
<<<<<<< HEAD
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
=======
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    visualizer()
  ],
>>>>>>> b14fd2c17ad3480eda0d5525e7807af5196f6e91
})
