import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: './',
    plugins: [
        viteStaticCopy({
            targets: [
                { src: '_header.html', dest: '.' },
                { src: '_footer.html', dest: '.' },
                { src: 'images', dest: '.' },
                { src: 'js', dest: '.' },
                { src: '.nojekyll', dest: '.' },
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        },
    },
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                index:           'index.html',
                firstTeam:       'first-team.html',
                reserveTeam:     'reserve-team.html',
                aTeam:           'a-team.html',
                bTeam:           'b-team.html',
                u12Team:         'u12-team.html',
                u14Team:         'u14-team.html',
                committee:       'committee.html',
                safeguarding:    'safeguarding.html',
                codesOfConduct:  'codes-of-conduct.html',
                functionRoom:    'function-room.html',
                contact:         'contact.html',
            },
        },
    },
});
