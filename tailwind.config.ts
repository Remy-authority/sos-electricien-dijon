import type { Config } from 'tailwindcss'

/**
 * tailwind.config.ts, design tokens branchés sur les CSS variables émises par
 * lib/theme.ts depuis `siteConfig.palette`. Aucune couleur en dur ici : changer
 * les 4 échelles dans site.config.ts re-thème tout le site (clé du template N+1).
 *
 * Système de design transposé de la référence PROTEC-DARD :
 *  - deux familles de police, Inter (UI, corps) et Fraunces (display, titres)
 *  - rayons généreux (cartes 24px, panneaux 32px, blocs héros 40px, boutons ronds)
 *  - ombres douces à deux couches, halos animés, textures de bruit et de grille
 */
const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`

const scale = (family: string, levels: number[]) =>
  Object.fromEntries(levels.map((l) => [l, c(`--c-${family}-${l}`)]))

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: scale('ink', [600, 700, 800, 900, 950]),
        sand: scale('sand', [50, 100, 200, 300, 400, 500, 600, 700]),
        brand: {
          ...scale('brand', [300, 400, 500, 600, 700]),
          DEFAULT: c('--c-brand-600'),
        },
        accent: {
          ...scale('accent', [300, 400, 500, 600]),
          DEFAULT: c('--c-accent-500'),
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '1.5rem',
        panel: '2rem',
        hero: '2.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(23 15 27 / 0.05), 0 8px 24px -8px rgb(23 15 27 / 0.12)',
        'card-hover': '0 4px 12px rgb(23 15 27 / 0.08), 0 24px 48px -12px rgb(23 15 27 / 0.2)',
        glow: '0 0 40px -10px rgb(var(--c-accent-500) / 0.55)',
        'glow-brand': '0 0 44px -12px rgb(var(--c-brand-400) / 0.5)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        /* Impulsion qui parcourt un conducteur : signature visuelle du métier. */
        'current-run': {
          '0%': { transform: 'translateX(-160%)', opacity: '0' },
          '14%': { opacity: '1' },
          '86%': { opacity: '1' },
          '100%': { transform: 'translateX(460%)', opacity: '0' },
        },
        /* Noeud sous tension : respiration lente d'un point de contact. */
        'arc-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.92)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'current-run': 'current-run 3.4s ease-in-out infinite',
        'arc-pulse': 'arc-pulse 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
