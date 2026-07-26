import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

/**
 * Galerie des situations traitées, en mosaïque asymétrique (un grand visuel qui
 * ouvre la grille, cinq vignettes autour) plutôt qu'en grille régulière.
 *
 * ⚠️ Cadrage éditorial : ce ne sont pas des « réalisations » revendiquées (le site
 * n'a pas encore d'historique d'intervention et le CLAUDE.md interdit d'inventer
 * une preuve). Ce sont les cas de figure du métier, présentés comme tels.
 */
const items = [
  {
    src: '/gallery/01-tableau-repere.jpg',
    alt: 'Tableau électrique moderne aux circuits repérés par étiquettes',
    title: 'Tableau repris et repéré',
    caption:
      "Rangées séparées, différentiels adaptés, chaque départ étiqueté : une coupure devient localisée au lieu d'éteindre tout le logement.",
    className: 'lg:col-span-2 lg:row-span-2',
    ratio: 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[30rem]',
  },
  {
    src: '/gallery/02-mesure-multimetre.jpg',
    alt: 'Mesure de tension au multimètre sur un circuit ouvert',
    title: 'Recherche de panne',
    caption: 'On sectionne, on mesure, on désigne le circuit fautif.',
    className: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/gallery/03-prise-echauffement.jpg',
    alt: 'Prise murale démontée dont les bornes ont noirci',
    title: 'Point qui a chauffé',
    caption: 'Une prise noircie ne se remet jamais en service sans contrôle.',
    className: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/gallery/04-differentiel-test.jpg',
    alt: 'Doigt appuyant sur le bouton test d’un interrupteur différentiel',
    title: 'Essai des différentiels',
    caption: 'Le test qui vérifie que la protection des personnes fonctionne.',
    className: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/gallery/05-cave-voutee.jpg',
    alt: 'Boîtier électrique étanche fixé sur la pierre d’une cave voûtée',
    title: 'Caves et locaux humides',
    caption: 'Matériel étanche et circuit séparé, la règle en cave bourguignonne.',
    className: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/gallery/06-communs-immeuble.jpg',
    alt: 'Coffret électrique de parties communes dans un local technique d’immeuble',
    title: 'Parties communes',
    caption: 'Éclairage, colonne, coffret des communs : le périmètre du syndic.',
    className: '',
    ratio: 'aspect-[4/3]',
  },
]

export function Gallery() {
  return (
    <section
      className="noise-overlay relative overflow-hidden bg-ink-950 py-24 lg:py-32"
      aria-labelledby="gallery-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgb(var(--c-brand-600)/0.28),transparent_58%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
              Sur le terrain
            </p>
            <h2 id="gallery-title" className="mt-5 text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-sand-50">
              Les situations
              <span className="text-gradient-accent"> que nous traitons</span>
            </h2>
          </div>
          <p className="leading-relaxed text-sand-300 lg:col-span-5 lg:col-start-8">
            Six cas de figure qui reviennent sans cesse dans les logements et les immeubles
            dijonnais, et le geste technique qui va avec.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <AnimatedSection
              key={item.src}
              delay={(idx % 3) * 0.07}
              className={`group relative overflow-hidden rounded-card border border-ink-700/50 ${item.className}`}
            >
              <div className={`relative w-full overflow-hidden bg-ink-900 ${item.ratio}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 620px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-xl font-medium text-sand-50">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-sand-300">{item.caption}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
