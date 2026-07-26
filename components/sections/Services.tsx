import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/config/site.config'
import type { Service } from '@/lib/content'

/**
 * Grille des prestations. Composition propre à ce site : en-tête sur deux colonnes
 * (titre à gauche, chapeau à droite), section claire, et première prestation mise
 * en avant sur une carte sombre large. Le reste suit en cartes numérotées.
 */
export function Services({ services }: { services: Service[] }) {
  if (!services.length) return null
  const [featured, ...rest] = services

  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-sand-100 py-24 lg:py-32"
      aria-labelledby="prestations-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 border-b border-sand-300/70 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-500">
              Nos prestations
            </p>
            <h2 id="prestations-title" className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              Huit interventions,
              <br />
              <span className="text-gradient-ink italic">un seul métier</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-sand-600 lg:col-span-5">
            De l&apos;urgence du dimanche soir au tableau à reprendre entièrement, chaque situation
            a sa page : ce que nous cherchons, comment nous procédons, et ce que vous pouvez
            vérifier avant notre arrivée.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <Link
              href={`/services/${featured.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-panel bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-9 lg:p-11"
            >
              <div aria-hidden="true" className="bg-circuit absolute inset-0" />
              <span
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent-300">
                  <span className="h-1.5 w-1.5 animate-arc-pulse rounded-full bg-accent-400" aria-hidden="true" />
                  Le plus demandé
                </span>

                <h3 className="mt-7 max-w-lg text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-sand-50">
                  {featured.navTitle}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-sand-300">
                  Ligne ouverte 7j/7 sur {siteConfig.city} et les communes de la métropole. Vous
                  décrivez ce qui se passe, nous qualifions le risque et nous vous donnons les
                  gestes à faire avant même de partir.
                </p>
              </div>

              <div className="relative mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                {featured.bullets.map((b) => (
                  <span key={b} className="flex items-center gap-2 text-sm text-sand-200">
                    <Check size={15} strokeWidth={3} className="shrink-0 text-accent-400" />
                    {b}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-accent-400 transition-colors group-hover:text-accent-300">
                  Voir la prestation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {rest.map((service, idx) => (
            <AnimatedSection key={service.slug} delay={(idx % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col rounded-card border border-sand-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-brand-300">
                    <ServiceIcon icon={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-medium text-sand-300">
                    {String(idx + 2).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-7 text-xl leading-snug">{service.navTitle}</h3>

                {/* La 1re carte partage sa rangée avec la carte large : elle affiche
                    une puce de plus pour ne pas laisser de vide en bas. */}
                <ul className="mt-4 space-y-2">
                  {service.bullets.slice(0, idx === 0 ? 3 : 2).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-sand-600">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-7 text-sm font-medium text-brand-600 transition-colors group-hover:text-accent-500">
                  Voir la prestation
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
