import Link from 'next/link'
import { ArrowUpRight, Flame, Lightbulb, ToggleRight, ZapOff } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

/**
 * Bandeau de tri par symptôme, juste sous le hero. Il remplace le bandeau de
 * réassurance générique des autres sites du portefeuille : le visiteur d'un site
 * d'urgence ne cherche pas un argument, il cherche SA situation. Chaque carte
 * ouvre directement la page prestation correspondante (point de maillage fort).
 */
const symptoms = [
  {
    icon: ZapOff,
    label: 'Plus de courant du tout',
    hint: 'Coupure totale, compteur ou tableau',
    href: '/services/panne-de-courant-coupure-electricite',
  },
  {
    icon: ToggleRight,
    label: 'Le disjoncteur retombe',
    hint: 'Il saute dès que je le relève',
    href: '/services/disjoncteur-qui-saute',
  },
  {
    icon: Flame,
    label: 'Odeur de brûlé, prise noircie',
    hint: 'À traiter tout de suite',
    href: '/services/urgence-depannage-electricien',
  },
  {
    icon: Lightbulb,
    label: 'Une pièce sans électricité',
    hint: 'Le reste du logement fonctionne',
    href: '/services/recherche-de-panne-electrique',
  },
]

export function Symptoms() {
  return (
    <section
      className="relative border-b border-sand-200 bg-sand-50 py-14 lg:py-16"
      aria-labelledby="symptomes-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p
          id="symptomes-title"
          className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-500"
        >
          Que se passe-t-il chez vous
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map(({ icon: Icon, label, hint, href }, i) => (
            <AnimatedSection key={label} delay={i * 0.07}>
              <Link
                href={href}
                className="group flex h-full items-start gap-4 rounded-card border border-sand-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-accent-500/10 group-hover:text-accent-500">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-start gap-1.5 font-medium leading-snug text-ink-950">
                    {label}
                    <ArrowUpRight
                      size={15}
                      className="mt-1 shrink-0 text-sand-400 transition-colors group-hover:text-accent-500"
                    />
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-sand-500">{hint}</span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
