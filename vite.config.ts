import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/tfhub': {
        target: 'https://tfhub.dev',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/tfhub/, ''),
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
