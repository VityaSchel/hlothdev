import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteRawPlugin from 'vite-raw-plugin'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteRawPlugin({
    //   fileRegex: /\.blob$/
    // }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  assetsInclude: ['**/*.blob']
})