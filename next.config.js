/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Article de ville refusé par Google, 0 clic sur 90 jours (Rémy 02/11/2026, articles à 7 par semaine).
  async redirects() {
    return [
      {
        source: '/conseils/electricien-garde-nuit-dijon-intervention',
        destination: '/services/urgence-depannage-electricien',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
