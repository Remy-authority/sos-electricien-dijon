import Image from 'next/image'
import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/config/site.config'

/**
 * Bloc « qui sommes-nous ». Composition inversée par rapport aux autres sites du
 * portefeuille : le portrait ouvre la section à gauche, le texte occupe la droite,
 * et la citation se pose sous le portrait plutôt qu'en débord. Les techniques du
 * métier sont listées en colonnes, pas en pastilles.
 */
export function About() {
  const { about, persona, methods } = siteConfig
  const [titleTop, titleBottom] = about.title.split('\n')

  return (
    <section id="a-propos" className="relative bg-sand-50 py-24 lg:py-32" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-500/18 via-transparent to-accent-500/10 blur-2xl"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel border border-sand-200 shadow-card">
                <Image
                  src={persona.photo}
                  alt={`${persona.name}, ${persona.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950/85 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-display text-xl font-medium text-sand-50">{persona.name}</p>
                  <p className="mt-1 text-sm text-sand-300">{persona.title}</p>
                </div>
              </div>

              <div className="mt-5 rounded-card border-l-4 border-accent-500 bg-white p-6 shadow-card">
                <Quote size={18} className="text-accent-500" aria-hidden="true" />
                <blockquote className="mt-3 font-display text-lg font-medium italic leading-snug text-ink-950">
                  {persona.quote}
                </blockquote>
              </div>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-500">
              {about.eyebrow}
            </p>
            <h2 id="about-title" className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              {titleTop}
              <br />
              <span className="text-gradient-ink italic">{titleBottom}</span>
            </h2>

            <AnimatedSection delay={0.12} className="mt-8 space-y-5 text-lg leading-relaxed text-sand-600">
              {about.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-500">
                Ce avec quoi nous cherchons
              </p>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {methods.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 border-t border-sand-200 pt-3 text-sand-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              delay={0.28}
              className="mt-10 flex items-center gap-4 rounded-card bg-ink-950 p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25">
                <ServiceIcon icon="check" className="h-5 w-5" />
              </span>
              <p className="font-medium text-sand-50">{about.highlight}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
