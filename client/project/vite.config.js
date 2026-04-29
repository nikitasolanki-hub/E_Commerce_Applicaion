import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Force JSX transform for .js files
      babel: {
        plugins: [],
      },
      include: "**/*.{js,jsx,ts,tsx}"
    })
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  }
});