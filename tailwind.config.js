/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                background: '#f5dccc',
                text: '#8C634F',
                subText: '#694A3B',
                button: '#AA7E67',
                buttonText: '#efe5dc',
            },
        },
    },
    plugins: []
};