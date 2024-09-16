/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			black: '#1C1B1F',
			white: '#FFFFFF',
			'green-500': 'rgb(34 197 94)',
			'green-800': 'rgb(22 101 52)',
			'red-500': 'rgb(239 68 68)',
			'red-800': 'rgb(153 27 27)',
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
