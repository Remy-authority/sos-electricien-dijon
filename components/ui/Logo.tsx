import { siteConfig } from '@/config/site.config'

/**
 * Identité visuelle du site : un tracé de circuit imprimé, une piste qui descend
 * puis repart en angle droit, ponctuée d'un noeud de connexion carmin. Le bloc
 * cuivre reste lisible sur le crème clair comme sur le prune sombre : un seul jeu
 * de couleurs pour tous les fonds.
 *
 * Le pictogramme est en SVG, le nom en HTML : la typographie Fraunces du site
 * s'applique donc réellement au mot-symbole (pas de police système figée).
 */
export function LogoMark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="14" className="fill-brand-600" />
      {/* Piste principale : entrée à gauche, coude, sortie en haut à droite. */}
      <path
        d="M11 15 H21 a4 4 0 0 1 4 4 V29 a4 4 0 0 0 4 4 H37"
        fill="none"
        strokeWidth="4.2"
        strokeLinecap="round"
        className="stroke-sand-50"
      />
      {/* Noeuds de connexion : le départ et l'arrivée du courant. */}
      <circle cx="11" cy="15" r="3.2" className="fill-accent-400" />
      <circle cx="37" cy="33" r="3.2" className="fill-accent-400" />
    </svg>
  )
}

export function Logo({
  tone = 'dark',
  className = '',
}: {
  /** `dark` : texte encre sur fond clair. `light` : texte crème sur fond sombre. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  const light = tone === 'light'
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-medium tracking-tight ${
            light ? 'text-sand-50' : 'text-ink-950'
          }`}
        >
          SOS Électricien
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-accent-300' : 'text-accent-600'
          }`}
        >
          {siteConfig.city} · {siteConfig.departmentName}
        </span>
      </span>
    </span>
  )
}

export default Logo
