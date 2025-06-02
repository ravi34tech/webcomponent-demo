import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],

  // 👇 Insert these lines
  build: {
    lib: {
      entry: "index.html",
      name: "raviwebcomponent",
      fileName: (format) => `ravi-web-component.${format}.js`,
    },
    target: "esnext",
  },
});
