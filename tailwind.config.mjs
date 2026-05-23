/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				text: 'rgb(var(--color-text) / <alpha-value>)',
				'text-muted': 'rgb(var(--color-muted) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				soft: 'rgb(var(--color-soft) / <alpha-value>)',
			},
			fontFamily: {
				heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'monospace'],
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
