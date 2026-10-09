/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './*.html',
        './_header.html',
        './_footer.html',
        './js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'club-maroon': '#6a0e1a',
                'club-blue':   '#a4c2de',
                'club-gold':   '#d4af37',
                'club-navy':   '#1a202c',
            },
        },
    },
    plugins: [],
};
