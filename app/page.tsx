import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { Hero } from '@/components/sections/Hero'
import { Symptoms } from '@/components/sections/Symptoms'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Stats } from '@/components/sections/Stats'
import { WhyUs } from '@/components/sections/WhyUs'
import { Gallery } from '@/components/sections/Gallery'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LeadForm } from '@/components/ui/LeadForm'
import { Faq } from '@/components/ui/Faq'
import { CtaBanner } from '@/components/ui/CtaBanner'

const TITLE = `Électricien à ${siteConfig.city}, dépannage et urgence 7j/7`
const DESC = `Électricien à ${siteConfig.city} et dans la métropole : dépannage en urgence, disjoncteur qui saute, recherche de panne, tableau électrique, mise aux normes. Prix annoncé avant intervention.`

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: '/' })

export default function HomePage() {
  const services = getServices()
  const zones = getZones()

  return (
    <>
      <Hero />
      <Symptoms />
      <Services services={services} />
      <About />
      <Process />
      <Stats />
      {siteConfig.features.gallery && <Gallery />}
      <WhyUs />
      <ServiceArea zones={zones} />

      <section id="devis" className="bg-sand-100 py-24 lg:py-32" aria-labelledby="devis-title">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeader
            id="devis-title"
            eyebrow="Décrire ma situation"
            title={
              <>
                Trois questions,
                <span className="text-gradient-ink italic"> et on vous rappelle</span>
              </>
            }
            subtitle="Plus vous êtes précis sur ce qui a coupé et depuis quand, plus notre estimation au téléphone sera juste."
          />
          <div className="mt-12">
            <LeadForm />
          </div>
        </div>
      </section>

      <Faq
        items={siteConfig.homeFaq as unknown as { q: string; a: string }[]}
        subtitle={`Prix, urgence, disjoncteur qui saute, mise aux normes, responsabilité locataire ou propriétaire : ce qu'on nous demande le plus souvent à ${siteConfig.city}.`}
      />

      <CtaBanner />
    </>
  )
}
