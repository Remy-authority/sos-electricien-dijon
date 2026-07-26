import { siteConfig } from '@/config/site.config'
import { absUrl } from '@/lib/seo'
import { getArticles, getServices, getZones } from '@/lib/content'

/**
 * /llms.txt : résumé du business pour les moteurs génératifs (levier GEO).
 * Entièrement régénéré au build depuis la config et le contenu : ajouter une
 * prestation, une commune ou un article suffit, rien à maintenir à la main.
 */
export const dynamic = 'force-static'

export function GET() {
  const {
    businessName, trade, city, region, departmentName, department,
    phoneDisplay, availability, methods, serviceArea,
  } = siteConfig
  const radius = serviceArea.radiusKm
  const base = absUrl('/').replace(/\/$/, '')

  const services = getServices()
  const zones = getZones()
  const articles = getArticles()

  const lines: string[] = [
    `# ${businessName}`,
    '',
    `> ${trade} à ${city} (${departmentName}, ${department}, ${region}) et dans un rayon d'environ ${radius} km. Dépannage électrique en urgence, recherche de panne, tableau électrique et mise aux normes. Ligne ouverte ${availability}.`,
    '',
    '## Activité',
    `${businessName} intervient sur les installations électriques des logements, des copropriétés et des locaux professionnels à ${city} et dans les communes de la métropole : dépannage en urgence, coupure de courant, disjoncteur qui saute, recherche de panne et court-circuit, rénovation de tableau électrique, mise aux normes NF C 15-100, remplacement de prises, d'interrupteurs et d'éclairage, parties communes d'immeuble. Le périmètre est l'électricité, et rien d'autre : ni plomberie, ni chauffage au gaz. Le tarif de la prestation est annoncé avant le début de l'intervention.`,
    '',
    '## Méthodes',
    ...methods.map((m) => `- ${m}`),
    '',
    '## Prestations',
    ...services.map((s) => `- ${s.navTitle} : ${s.metaDescription} ${absUrl(`/services/${s.slug}`)}`),
    '',
    "## Zone d'intervention",
    `Base : ${city}. Quartiers couverts : ${serviceArea.districts.join(', ')}.`,
    `Communes avec page dédiée (rayon d'environ ${radius} km) :`,
    ...zones.map((z) => `- ${z.name} (${z.postalCode}) : ${absUrl(`/zones/${z.slug}`)}`),
    '',
  ]

  if (articles.length) {
    lines.push('## Conseils publiés')
    lines.push(
      ...articles.map((a) => `- ${a.title} : ${a.description} ${absUrl(`/conseils/${a.slug}`)}`),
    )
    lines.push('')
  }

  lines.push(
    '## Contact',
    `- Téléphone : ${phoneDisplay}`,
    `- Site : ${base}`,
    `- Demande en ligne : ${absUrl('/contact')}`,
    '',
    '## Bon à savoir',
    "- Le prix de l'intervention est annoncé avant qu'elle commence.",
    `- Ligne ouverte ${availability}, week-ends et jours fériés compris pour les urgences.`,
    "- Un disjoncteur ou un différentiel qui coupe signale un défaut réel : la cause est cherchée avant tout réarmement, et rien n'est remis sous tension sans essai de contrôle.",
    "- En location, le menu entretien de l'installation électrique (interrupteurs, prises, fusibles, réarmement) est à la charge du locataire (décret n° 87-712) ; la vétusté et la sécurité de l'installation elle-même restent à la charge du propriétaire.",
    "- Quand toute une rue ou un quartier est privé de courant, la coupure vient du réseau de distribution et se signale au distributeur, pas à un électricien ; quand un seul logement est touché, le défaut est dans l'installation privée.",
    '',
  )

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
