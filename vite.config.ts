import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/webcomponent-demo/',
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],  

   // 👇 Insert these lines
  build: {
    lib: {
      entry: "./src/index.js",
      name: "RaviWebComponent",
      fileName: (format) => `ravi-web-component.${format}.js`,
      formats: ['es', 'umd'],
    },
    //  rollupOptions: {
    //   external: ['react', 'react-dom'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //     },
    //   },
    // },
    target: "esnext",
  },
});
