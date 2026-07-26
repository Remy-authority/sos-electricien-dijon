import {
  BadgeCheck,
  BatteryCharging,
  Building2,
  Cable,
  ClipboardCheck,
  Clock,
  Euro,
  Gauge,
  House,
  LampCeiling,
  LayoutPanelTop,
  Phone,
  Plug,
  Search,
  ShieldCheck,
  Siren,
  Star,
  Thermometer,
  ToggleRight,
  Wrench,
  Zap,
  ZapOff,
  type LucideIcon,
} from 'lucide-react'

/**
 * Table de correspondance entre les clés `icon` du contenu JSON / de la config et
 * les pictogrammes. Le contenu ne connaît jamais lucide-react : un site N+1 change
 * de métier en changeant cette table, pas les fichiers de contenu.
 */
const ICONS: Record<string, LucideIcon> = {
  // Prestations électricité (clés utilisées par content/services/*.json)
  urgence: Siren,
  coupure: ZapOff,
  disjoncteur: ToggleRight,
  recherche: Search,
  tableau: LayoutPanelTop,
  conformite: ClipboardCheck,
  prises: Plug,
  pro: Building2,
  // Divers métier
  cable: Cable,
  eclairage: LampCeiling,
  mesure: Gauge,
  renovation: House,
  borne: BatteryCharging,
  chauffage: Thermometer,
  // Étapes et arguments
  phone: Phone,
  search: Search,
  tool: Wrench,
  check: BadgeCheck,
  shield: ShieldCheck,
  clock: Clock,
  euro: Euro,
  star: Star,
}

export function resolveIcon(icon: string): LucideIcon {
  return ICONS[icon] ?? Zap
}

export function ServiceIcon({
  icon,
  className = 'h-6 w-6',
  strokeWidth = 1.9,
}: {
  icon: string
  className?: string
  strokeWidth?: number
}) {
  const Icon = resolveIcon(icon)
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
