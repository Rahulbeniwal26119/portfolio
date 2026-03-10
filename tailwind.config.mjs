/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				background: 'var(--color-background)',
				surface: 'var(--color-surface)',
				text: 'var(--color-text)',
				'text-muted': 'var(--color-muted)',
				accent: 'var(--color-accent)',
			},
			fontFamily: {
				heading: ['"Space Grotesk"', 'sans-serif'],
				body: ['"Outfit"', 'sans-serif'],
				sans: ['"Outfit"', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
			},
		},
	},
	plugins: [],
}
