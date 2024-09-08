/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			black: '#1C1B1F',
			white: '#FFFFFF',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				bebasNeue: ['Bebas Neue', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
