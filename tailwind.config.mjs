// Design language is shared with takovibe.com so the portfolio and the
// publication read as one identity:
//   - Syne for display, DM Sans for body, JetBrains Mono for code
//   - warm greys (not Tailwind's cool defaults) with a single orange accent
//   - no gradient text, no glass panels, no glow shadows
// Colours resolve through CSS variables (see src/styles/global.css) so light and
// dark both work from one set of utilities.
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
				line: 'rgb(var(--color-line) / <alpha-value>)',
				// Same ramp as takovibe.com.
				brand: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
					950: '#431407',
				},
			},
			fontFamily: {
				heading: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
			},
		},
	},
	plugins: [],
}
