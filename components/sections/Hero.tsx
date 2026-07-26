'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Euro, Phone, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientBlob } from '@/components/ui/GradientBlob'
import { LiveDot } from '@/components/ui/LiveDot'
import { EASE } from '@/lib/motion'
import { siteConfig } from '@/config/site.config'

/**
 * Hero de Dijon. Composition volontairement différente de celle des autres sites
 * du portefeuille : la photo n'est plus un fond fondu mais un panneau assumé à
 * droite, traversé par un rail conducteur animé (signature du métier), et les
 * arguments passent dans une barre basse pleine largeur au lieu d'une liste.
 */
const proofs = [
  { icon: Zap, title: 'Mise en sécurité', desc: "On isole le circuit en cause, pas tout le logement" },
  { icon: Euro, title: 'Prix annoncé avant', desc: 'Le tarif est donné avant de commencer' },
  { icon: ShieldCheck, title: 'Contrôle sous tension', desc: 'Rien ne repart sans essai devant vous' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="noise-overlay relative isolate overflow-hidden bg-ink-950 pb-0 pt-28 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgb(var(--c-ink-800)/0.85),transparent_58%),radial-gradient(ellipse_at_85%_75%,rgb(var(--c-brand-600)/0.22),transparent_55%),linear-gradient(180deg,rgb(var(--c-ink-950))_0%,rgb(var(--c-ink-900))_58%,rgb(var(--c-ink-950))_100%)]"
      />
      <div aria-hidden="true" className="bg-circuit absolute inset-0" />

      <GradientBlob className="-left-52 top-10" color="deep" size={540} intensity="strong" duration={21} />
      <GradientBlob className="-right-40 top-1/3" color="brand" size={600} intensity="strong" duration={17} />
      <GradientBlob className="left-1/2 bottom-0" color="accent" size={420} intensity="strong" duration={14} />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 lg:px-10 xl:grid-cols-12 xl:gap-10"
      >
        <div className="xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <LiveDot>Ligne urgence ouverte, week-ends et jours fériés compris</LiveDot>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-7 text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.06] text-sand-50"
          >
            Panne électrique
            <br />à {siteConfig.city},
            <span className="text-gradient-accent"> réglée à la source.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-sand-200 md:text-xl"
          >
            Disjoncteur qui retombe, pièce sans courant, prise qui a noirci, tableau hors d&apos;âge.
            Nous cherchons la cause circuit par circuit, nous réparons, et nous ne remettons sous
            tension qu&apos;après contrôle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={`tel:${siteConfig.phone}`} variant="accent" size="lg">
              <Phone size={18} strokeWidth={2.5} />
              {siteConfig.phoneDisplay}
            </Button>
            <Button href="/contact#formulaire" variant="ghost" size="lg">
              Décrire ma panne
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Panneau photo assumé : la vraie image, cadrée, et non un fond fondu. */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative xl:col-span-6"
        >
          <div className="relative mx-auto max-w-xl xl:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-500/25 via-accent-500/10 to-transparent blur-3xl"
            />

            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-hero border border-brand-400/25 sm:aspect-[16/10]">
              <Image
                src="/hero.jpg"
                alt="Électricien contrôlant un tableau électrique à l'aide d'une pince ampèremétrique"
                fill
                priority
                sizes="(min-width: 1280px) 640px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-ink-950/85 via-ink-950/25 to-transparent"
              />

              {/* Rail conducteur : une impulsion parcourt le bas de l'image. */}
              <div aria-hidden="true" className="wire-rail absolute inset-x-8 bottom-10">
                <span className="absolute inset-y-0 left-0 w-16 animate-current-run bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
              </div>

              <p className="absolute bottom-5 left-8 text-xs uppercase tracking-[0.22em] text-sand-300">
                {siteConfig.city} · {siteConfig.departmentName}
              </p>
            </div>

            {/* Carte flottante : l'engagement de méthode, en débord du panneau. */}
            <div className="relative z-10 mx-4 -mt-10 rounded-card border border-brand-400/25 bg-ink-900/85 p-6 backdrop-blur-xl sm:mx-8 sm:-mt-12 sm:p-7">
              <span className="inline-flex rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-brand-300">
                Notre règle
              </span>
              <p className="mt-4 font-display text-xl font-medium leading-snug text-sand-50 sm:text-2xl">
                Un disjoncteur qui saute n&apos;est pas le problème. C&apos;est le message.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-sand-300">
                Nous cherchons ce qui l&apos;a fait tomber avant de le relever. Réarmer sans chercher,
                c&apos;est désactiver une sécurité qui vient de faire son travail.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Barre basse pleine largeur : remplace la liste de badges de nos autres sites. */}
      <div className="relative border-t border-ink-700/60 bg-ink-950/60 backdrop-blur">
        <ul className="mx-auto grid max-w-7xl gap-px px-6 py-8 sm:grid-cols-3 lg:px-10">
          {proofs.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: EASE }}
              className="flex items-start gap-3 sm:px-4 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/12 text-brand-300 ring-1 ring-brand-400/25">
                <Icon size={17} strokeWidth={2.2} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-sand-50">{title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-sand-400">{desc}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
