/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: '#588ae8',
				'primary-light': '#D2E0F9',
				danger: '#FF0000',
				'danger-light': '#e16a6a',
				secondary: '#3E435D',
				'dark-gray': '#333333',
				'light-gray': '#C2C2C2',
				'border-light-gray': '#EEEEEE',
			},
		},
	},
	plugins: [],
}
