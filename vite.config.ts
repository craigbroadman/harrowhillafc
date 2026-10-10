import fs from 'node:fs';
import path from 'path';
import { defineConfig } from 'vite';

const staticExportEntries = [
  '.nojekyll',
  '_footer.html',
  '_header.html',
  'a-team.html',
  'assets',
  'b-team.html',
  'codes-of-conduct.html',
  'committee.html',
  'contact.html',
  'first-team.html',
  'function-room.html',
  'images',
  'index.html',
  'js',
  'metadata.json',
  'reserve-team.html',
  'safeguarding.html',
  'script.js',
  'u12-team.html',
  'u14-team.html',
];

function exportStaticSite() {
  return {
    name: 'export-static-site',
    writeBundle() {
      const rootDir = __dirname;
      const distDir = path.resolve(rootDir, 'dist');

      staticExportEntries.forEach((entry) => {
        const source = path.resolve(rootDir, entry);
        const target = path.resolve(distDir, entry);

        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.cpSync(source, target, { recursive: true });
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [exportStaticSite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
