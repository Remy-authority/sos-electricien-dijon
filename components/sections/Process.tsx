import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/config/site.config'

/**
 * Déroulé d'intervention. Composition propre à ce site : au lieu de quatre cartes
 * alignées, les étapes descendent le long d'un conducteur vertical en cuivre, avec
 * un noeud sous tension à chaque étape. Titre à gauche, étapes à droite.
 */
export function Process() {
  const steps = siteConfig.process

  return (
    <section
      id="deroulement"
      className="noise-overlay relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 py-24 lg:py-32"
      aria-labelledby="process-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgb(var(--c-brand-500)/0.2),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Colonne de titre collante : sans cela, elle s'arrête à la 2e étape et
            laisse un grand vide à gauche pendant le défilement des étapes. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
            Comment ça se passe
          </p>
          <h2 id="process-title" className="mt-5 text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-sand-50">
            De votre appel
            <span className="text-gradient-accent"> au contrôle final</span>
          </h2>
          <p className="mt-6 leading-relaxed text-sand-300">
            Quatre étapes, sans zone d&apos;ombre. Vous savez à chaque moment ce que nous faisons,
            pourquoi, et ce qu&apos;il reste à faire quand nous repartons.
          </p>
          <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-brand-400/60 to-transparent lg:block" />
        </div>

        <ol className="relative lg:col-span-8">
          {/* Conducteur vertical qui relie les quatre étapes. */}
          <span
            aria-hidden="true"
            className="absolute left-[1.4rem] top-4 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-400/60 via-brand-400/30 to-transparent sm:block"
          />

          {steps.map((step, idx) => (
            <AnimatedSection
              key={step.step}
              delay={idx * 0.09}
              as="li"
              className="group relative pb-10 last:pb-0 sm:pl-16"
            >
              {/* Noeud de connexion sur le conducteur. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-3 hidden h-11 w-11 items-center justify-center rounded-full border border-brand-400/35 bg-ink-950 sm:flex"
              >
                <span className="h-2 w-2 animate-arc-pulse rounded-full bg-accent-400" />
              </span>

              <div className="rounded-card border border-ink-700/55 bg-ink-900/45 p-7 transition-colors duration-500 hover:border-brand-400/45 hover:bg-ink-800/50 lg:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-display text-4xl font-medium text-brand-400/35">
                    {step.step}
                  </span>
                  <h3 className="text-xl text-sand-50 sm:text-2xl">{step.title}</h3>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-300">
                    <ServiceIcon icon={step.icon} className="h-3.5 w-3.5" strokeWidth={2.4} />
                    {step.duration}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-sand-300">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  )
}
