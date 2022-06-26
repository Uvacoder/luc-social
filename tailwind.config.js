/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx,css}'],
    theme: {
        extend: {
            colors: {
                discord: {
                    1: 'rgb(88, 101, 242)',
                    2: 'rgb(71, 82, 196)',
                },
                twitter: {
                    1: 'rgb(29, 155, 240)',
                    2: 'rgb(26, 140, 216)',
                },
                lens: {
                    1: 'rgba(171,254,44,.8)',
                    2: 'rgb(0, 80, 30)',
                },
                instagram: {
                    1: '#f30005',
                    2: '#ba00af',
                },
                telegram: {
                    1: '#2AABEE',
                    2: '#229ED9',
                },
                neutral: {
                    900: '#121212',
                },
            },
        },
    },
    plugins: [],
};
