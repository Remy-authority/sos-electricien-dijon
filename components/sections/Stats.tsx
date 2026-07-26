'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { siteConfig } from '@/config/site.config'

/**
 * Bande de chiffres, comptés à l'entrée dans le viewport.
 *
 * ⚠️ Règle éditoriale : ces chiffres décrivent uniquement le FONCTIONNEMENT du
 * service (disponibilité annoncée, rayon, nombre de prestations). Aucun chiffre
 * d'activité (interventions réalisées, années d'expérience) tant que Rémy n'a pas
 * fourni de données réelles.
 */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--c-accent-500)/0.12),transparent_58%)]"
      />
      <div className="rule-glow absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="rule-glow absolute inset-x-0 bottom-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Alignement à gauche et filets verticaux en cuivre : la bande se lit comme
            un bornier, pas comme une rangée de chiffres centrés. */}
        <dl className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-brand-400/25 px-0 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0"
            >
              <dd className="font-display text-5xl font-medium tracking-tight text-brand-300 lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-sand-300">
                <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
