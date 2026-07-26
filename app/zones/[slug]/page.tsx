import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Phone } from 'lucide-react'
import { getServices, getZone, getZones } from '@/lib/content'
import { buildMetadata, jsonLdScript, zoneJsonLd } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { Faq } from '@/components/ui/Faq'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ServiceBlock } from '@/components/ui/ServiceBlock'
import { ServiceIcon } from '@/components/ui/ServiceIcon'

export const dynamicParams = false

export function generateStaticParams() {
  return getZones().map((z) => ({ slug: z.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const z = getZone(params.slug)
  if (!z) return {}
  return buildMetadata({
    title: z.metaTitle,
    description: z.metaDescription,
    path: `/zones/${z.slug}`,
  })
}

/**
 * ⚠️ RÈGLE PERMANENTE (décision Rémy 27/07/2026) : chaque commune a SA propre image
 * de tête, `public/zones/<slug>.jpg`, au décor réellement différencié. Aucun pool
 * d'images partagé entre communes. Ajouter une commune = ajouter son JSON ET son
 * image portant exactement le même slug.
 */
function zoneImage(slug: string) {
  return `/zones/${slug}.jpg`
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = getZone(params.slug)
  if (!zone) notFound()

  const zones = getZones()
  const hero = zoneImage(zone.slug)

  // Maillage : les prestations les plus probables sur une commune résidentielle.
  const mainServices = getServices()
    .filter((s) =>
      [
        'urgence-depannage-electricien',
        'panne-de-courant-coupure-electricite',
        'disjoncteur-qui-saute',
        'renovation-tableau-electrique',
      ].includes(s.slug),
    )
    .slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(zoneJsonLd(zone)) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: "Zones d'intervention", path: '/zones' },
          { name: zone.name, path: `/zones/${zone.slug}` },
        ]}
      />

      {/* En-tête de commune : bandeau photo pleine largeur, propre à la commune. */}
      <section className="noise-overlay relative isolate overflow-hidden bg-ink-950">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero}
            alt={`Rue et bâti de ${zone.name}, commune desservie par nos électriciens`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
              <MapPin size={16} />
              {zone.name} · {zone.postalCode}
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-sand-50 md:text-5xl">{zone.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-sand-200">{zone.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${siteConfig.phone}`} variant="accent" size="lg">
                <Phone size={18} strokeWidth={2.5} />
                {siteConfig.phoneDisplay}
              </Button>
              <Button href="/contact#formulaire" variant="ghost" size="lg">
                Décrire ma panne
              </Button>
            </div>
          </div>
        </div>

        {/* Rail conducteur : rappel de la signature du site en bas du bandeau. */}
        <div aria-hidden="true" className="wire-rail absolute inset-x-0 bottom-0">
          <span className="absolute inset-y-0 left-0 w-24 animate-current-run bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
        </div>
      </section>

      <article className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose-content space-y-10">
            {zone.blocks.map((b, i) => (
              <div key={b.heading}>
                <ServiceBlock block={b} />
                {i === 0 && (
                  <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-sand-200 bg-sand-200 sm:grid-cols-4">
                    {[
                      { k: 'Commune', v: zone.name },
                      { k: 'Code postal', v: zone.postalCode },
                      { k: 'Département', v: `${siteConfig.departmentName} (${siteConfig.department})` },
                      { k: 'Ligne urgence', v: siteConfig.availability },
                    ].map((item) => (
                      <div key={item.k} className="bg-white px-5 py-4">
                        <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sand-500">
                          {item.k}
                        </dt>
                        <dd className="mt-1.5 font-medium text-ink-950">{item.v}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-16">
            <h2 className="text-2xl">Nos prestations à {zone.name}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {mainServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-card border border-sand-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:shadow-card"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600">
                      <ServiceIcon icon={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-ink-900 group-hover:text-brand-700">
                      {s.navTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {zone.neighbours.length > 0 && (
            <AnimatedSection className="mt-14">
              <h2 className="text-2xl">Communes limitrophes desservies</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {zone.neighbours.map((n) => {
                  const match = zones.find((z) => z.name === n)
                  return (
                    <li key={n}>
                      {match ? (
                        <Link
                          href={`/zones/${match.slug}`}
                          className="inline-flex rounded-full border border-sand-300 bg-white px-4 py-2 text-sm text-sand-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                        >
                          {n}
                        </Link>
                      ) : (
                        <span className="inline-flex rounded-full border border-sand-200 bg-sand-100 px-4 py-2 text-sm text-sand-600">
                          {n}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </AnimatedSection>
          )}
        </div>
      </article>

      <Faq items={zone.faq} eyebrow={zone.name} />

      <CtaBanner
        title={`Panne électrique à ${zone.name} ?`}
        subtitle={`Nous intervenons à ${zone.name} et dans les communes voisines. Appelez, nous qualifions le risque, nous vous donnons le tarif et un créneau réaliste.`}
      />
    </>
  )
}
