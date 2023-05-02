/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'Space-Grotesk': ['Space Grotesk', 'sans-serif'],
				'Roboto-Condensed': [
					'Roboto Condensed',
					'sans-serif',
				],
				Prompt: ['Prompt', 'sans-serif'],
				'Contrail-One': ['Contrail One', 'cursive'],
				'Flow-Circular': ['Flow Circular', 'cursive'],
			},
			animation: {
				text: 'text 5s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '150% 150%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '150% 150%',
						'background-position': 'left center',
					},
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},
	],
};
