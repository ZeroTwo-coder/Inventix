/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#13151f",
                white: "#ffffff",
                blue_1: "#2266e1",
                blue_border: "#4a88ff",
                gray_1: "#9fa6b2",
                gray_2: "#1e202d",
                grey_border: "rgba(235,245,255,0.2)",
                black_1: "#22242f",
                main: "#191b24",
                grey_3: "#2c2f42",
            },

            spacing: {
                'indent-all': '30px',
                'indent-2xl': '40px',
            }

        },
    },
    plugins: [],
}
