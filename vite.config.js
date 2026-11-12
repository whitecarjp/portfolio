import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pagesBase = '/portfolio/';

// Dev stays at `/` so `npm run dev` is unchanged. The production build and
// `npm run preview` use the GitHub Pages project subpath.
function usePagesBase(command) {
  if (command === 'build') return true;
  if (process.env.npm_lifecycle_event === 'preview') return true;
  return process.argv.includes('preview');
}

export default defineConfig(({ command }) => ({
  base: usePagesBase(command) ? pagesBase : '/',
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      apply: 'build',
      closeBundle() {
        const distDir = path.resolve('dist');
        const indexPath = path.join(distDir, 'index.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
        }
      },
    },
  ],
}));
