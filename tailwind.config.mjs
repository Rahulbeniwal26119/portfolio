/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				background: 'var(--color-background)',
				surface: 'var(--color-surface)',
				text: 'var(--color-text)',
				'text-muted': 'var(--color-text-muted)',
			},
			fontFamily: {
				sans: ['Outfit', 'sans-serif'],
				display: ['Syne', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'grain': 'grain 8s steps(10) infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				grain: {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -10%)' },
					'20%': { transform: 'translate(-15%, 5%)' },
					'30%': { transform: 'translate(7%, -25%)' },
					'40%': { transform: 'translate(-5%, 25%)' },
					'50%': { transform: 'translate(-15%, 10%)' },
					'60%': { transform: 'translate(15%, 0%)' },
					'70%': { transform: 'translate(0%, 15%)' },
					'80%': { transform: 'translate(3%, 35%)' },
					'90%': { transform: 'translate(-10%, 10%)' },
				},
			},
		},
	},
	plugins: [],
}
