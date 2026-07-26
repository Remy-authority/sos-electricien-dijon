/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  site.config.ts, LE fichier unique qui pilote l'identité du site.
 * ─────────────────────────────────────────────────────────────────────────────
 *  Coeur du template « site local N+1 ». Pour déployer un nouveau site (autre
 *  métier / ville / locataire) : on édite CE fichier + le logo + content/*.json,
 *  SANS toucher aux composants ni au SEO.
 *
 *  ⚠️ Garde-fous :
 *   - `palette` est la SOURCE UNIQUE des couleurs. lib/theme.ts la convertit en
 *     CSS variables (canaux RGB) posées sur <html>, tailwind.config.ts les lit.
 *     Changer la palette d'un site N+1 = éditer ce bloc, rien d'autre.
 *   - `features.reviews=false` tant qu'il n'y a pas d'avis réels (aucun faux avis).
 *   - `legal` = gabarit paramétrable : NE PAS inventer SIREN / éditeur.
 *   - `showAddress=false` par défaut : pas d'`address` dans le schema tant que
 *     Rémy n'a pas tranché (artisan mobile vs adresse physique exposée).
 *   - Tout ce qui est marqué DEMO attend une donnée réelle de Rémy.
 */

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  /* ── Identité commerciale (louable / remplaçable par l'artisan locataire) ── */
  businessName: 'SOS Électricien Dijon',
  trade: 'Dépannage et travaux électriques',
  tradeShort: 'Électricité',
  city: 'Dijon',
  region: 'Bourgogne-Franche-Comté',
  departmentName: "Côte-d'Or",
  department: '21',

  /* ── Contact ── */
  // DEMO – numéro de la plage ARCEP réservée à la fiction (03 53 01 XX XX,
  // zone Bourgogne). À remplacer par le 09 dédié dès que Rémy l'a ouvert.
  phone: '+33353012121',
  phoneDisplay: '03 53 01 21 21',
  phoneIsDemo: true,
  // DEMO – domaine pas encore acheté.
  email: 'contact@sos-electricien-dijon.fr',

  /* ── Branding ── */
  logo: '/logo.svg',

  /**
   * Palette du site. Quatre familles, chacune avec ses échelles :
   *  - `ink`    : fonds sombres, prune graphite (nuit bourguignonne, sections sombres)
   *  - `sand`   : neutres clairs, écho à la pierre calcaire de Comblanchien
   *  - `brand`  : cuivre (le conducteur du métier : structure, icônes, liens, chrome)
   *  - `accent` : carmin électrique (URGENCE et action seules : CTA, eyebrow, point vivant)
   * Règle de composition : `brand` porte la structure, `accent` ne sert qu'à l'action.
   * Identité volontairement distincte des autres sites du portefeuille (teal/vermillon
   * à Metz, navy/ambre à Annecy, bleu/orange à Angers).
   */
  palette: {
    ink: {
      600: '#57405F',
      700: '#43304B',
      800: '#32233A',
      900: '#241829',
      950: '#170F1B',
    },
    sand: {
      50: '#FBF8F6',
      100: '#F4EEEA',
      200: '#E8DFD9',
      300: '#D6C9C0',
      400: '#B3A499',
      500: '#8A7B72',
      600: '#635650',
      700: '#453A37',
    },
    brand: {
      300: '#E8B183',
      400: '#D28C4E',
      500: '#B96E2C',
      600: '#9C5620',
      700: '#7B411A',
    },
    accent: {
      300: '#F98BA0',
      400: '#EE4E6E',
      500: '#D81E4A',
      600: '#AE1339',
    },
  },

  /** Alias de compatibilité (manifest, thème navigateur, OG). */
  colors: {
    primary: '#9C5620',
    primaryDark: '#7B411A',
    accent: '#D81E4A',
    dark: '#170F1B',
    light: '#FBF8F6',
  },

  /* ── Réassurance / preuve ── */
  availability: '24h/24 · 7j/7',
  responseTime: 'Intervention rapide sur Dijon et son agglomération',
  usps: ['Devis avant intervention', 'Remise en sécurité', 'Artisan local', 'Urgence 7j/7'],
  methods: [
    'Pince ampèremétrique et multimètre',
    'Contrôle des différentiels et de la terre',
    'Caméra thermique sur tableau',
    'Repérage de circuit par sectionnement',
  ],

  /* ── Zone d'intervention (schema areaServed + bloc zones) ── */
  serviceArea: {
    base: 'Dijon',
    radiusKm: 30,
    // Quartiers de Dijon cités pour la couverture géo fine (maillage, pas de page dédiée).
    districts: [
      'Centre-ville', 'Montchapet', "Fontaine d'Ouche", 'Grésilles',
      'Chevreul-Parc', 'Toison d\'Or', 'Université', 'Bourroches',
      'Maladière', 'Port du Canal', 'Faubourg Raines', 'Varennes',
    ],
  },

  /* ── Leads / formulaire ── */
  // Vide => l'API interne /api/contact gère le fallback (log + email tier gratuit).
  formEndpoint: '',

  /* ── SEO global ── */
  seo: {
    // NB : basculer sur le domaine final quand Rémy l'a acheté. Preview = URL Vercel.
    canonicalBase: 'https://www.sos-electricien-dijon.fr',
    defaultOgImage: '/og.jpg',
    locale: 'fr_FR',
    lang: 'fr',
  },

  /* ── Feature flags ── */
  features: {
    reviews: false, // ⛔ aucun avis affiché
    gallery: true,
    blog: true,
  },

  /* ── Persona artisan (DEMO, à remplacer par les infos du loueur) ── */
  persona: {
    // DEMO – à remplacer par les infos du loueur
    name: 'Damien Lachaux',
    // DEMO – portrait généré, remplaçable par une photo réelle
    photo: '/persona.jpg',
    // DEMO – à remplacer par les infos du loueur
    title: 'Responsable des interventions électriques',
    // DEMO – à remplacer par les infos du loueur
    quote:
      "Une panne se cherche circuit par circuit, jamais au jugé. On coupe, on teste, on répare, et on ne remet sous tension qu'une fois la cause trouvée.",
  },

  /* ── Bloc « à propos » ── */
  about: {
    eyebrow: 'Qui sommes-nous',
    title: 'Le courant,\nde la panne à la mise aux normes',
    // DEMO – texte à valider avec le loueur
    body: [
      "SOS Électricien Dijon intervient sur les installations électriques des logements et des locaux professionnels, à Dijon et dans les communes de la métropole. Disjoncteur qui saute, prise qui chauffe, pièce sans courant, tableau vétuste, odeur de brûlé : nous traitons l'urgence, puis nous remontons à la cause au lieu de réarmer et de partir.",
      "Nous faisons de l'électricité, et rien d'autre. Dépannage en urgence, coupure de courant, disjoncteur qui saute, recherche de panne et court-circuit, rénovation de tableau, mise aux normes, prises, interrupteurs et éclairage, parties communes de copropriété et locaux professionnels. Le devis est annoncé avant l'intervention, et chaque chantier se termine par un contrôle sous tension.",
    ],
    highlight: 'Aucune remise sous tension sans contrôle',
  },

  /* ── Étapes d'intervention ── */
  process: [
    {
      icon: 'phone',
      step: '01',
      title: 'Votre appel',
      desc: "Vous décrivez ce qui se passe : disjoncteur qui retombe, pièce entière sans courant, prise noircie, odeur de brûlé. Nous qualifions le risque et nous vous donnons les gestes à faire tout de suite.",
      duration: 'Immédiat',
    },
    {
      icon: 'shield',
      step: '02',
      title: 'Mise en sécurité',
      desc: "En arrivant, nous isolons le circuit en cause plutôt que de couper tout le logement, pour que le réfrigérateur et le chauffage continuent de tourner pendant la recherche.",
      duration: 'Dès l\'arrivée',
    },
    {
      icon: 'search',
      step: '03',
      title: 'Recherche et réparation',
      desc: "Nous sectionnons le réseau circuit par circuit, nous mesurons, nous localisons le défaut, et nous réparons : conducteur abîmé, appareillage hors service, différentiel fatigué, borne desserrée.",
      duration: 'Jour J',
    },
    {
      icon: 'check',
      step: '04',
      title: 'Contrôle sous tension',
      desc: "Nous testons les différentiels, nous vérifions le circuit remis en service devant vous, et nous vous disons ce qui reste à surveiller ou à reprendre sur l'installation.",
      duration: 'Avant de partir',
    },
  ],

  /**
   * Chiffres affichés. Règle : uniquement des données vérifiables sur le site lui-même
   * (disponibilité annoncée, rayon d'intervention, nombre de prestations et de communes).
   * ⛔ Aucun chiffre d'activité inventé (interventions réalisées, années d'expérience).
   */
  stats: [
    { value: 24, suffix: 'h/24', label: 'Ligne urgence' },
    { value: 7, suffix: 'j/7', label: 'Week-ends et fériés' },
    { value: 30, suffix: ' km', label: 'Rayon autour de Dijon' },
    { value: 8, suffix: '', label: 'Prestations électricité' },
  ],

  whyUs: [
    {
      icon: 'shield',
      title: 'On cherche la cause, pas le bouton',
      desc: "Un disjoncteur qui saute signale un défaut réel. Le réarmer sans chercher ce qui l'a fait tomber revient à désactiver une sécurité qui vient de faire son travail.",
    },
    {
      icon: 'clock',
      title: 'Une ligne ouverte 7j/7',
      desc: "Une coupure totale un dimanche soir, un chauffe-eau mort en plein hiver, une prise qui a noirci : ces situations ne choisissent pas leur horaire.",
    },
    {
      icon: 'euro',
      title: 'Le prix annoncé avant',
      desc: "Vous savez ce que coûte l'intervention avant qu'elle commence. Si ce qu'on trouve derrière le tableau change la donne, vous le savez avant, pas sur la facture.",
    },
    {
      icon: 'star',
      title: 'Un artisan, pas une plateforme',
      desc: "Vous parlez à la personne qui interviendra chez vous. Pas de centrale d'appel qui revend votre demande au premier disponible du secteur.",
    },
  ],

  /* ── FAQ accueil ── */
  homeFaq: [
    {
      q: 'Combien coûte une intervention électrique à Dijon ?',
      a: "Le prix dépend de la prestation, pas de l'heure de l'appel : une recherche de panne sur un circuit, le remplacement d'un différentiel, la reprise complète d'un tableau ou la mise aux normes d'un logement entier ne se facturent pas de la même façon. Nous annonçons le tarif au téléphone à partir de ce que vous décrivez, puis nous le confirmons sur place avant de commencer. Rien ne démarre sans votre accord.",
    },
    {
      q: 'Intervenez-vous en urgence le soir, le week-end et les jours fériés ?',
      a: "Oui. Une installation qui déclenche en boucle, une odeur de brûlé au tableau ou une coupure totale dans un logement occupé ne peuvent pas attendre le lundi. Notre ligne est ouverte 7j/7 pour les urgences sur Dijon et les communes de l'agglomération, dans un rayon d'environ 30 km.",
    },
    {
      q: 'Mon disjoncteur saute sans arrêt, qu\'est-ce que ça veut dire ?',
      a: "Cela dépend de l'organe qui tombe. Un disjoncteur divisionnaire seul indique un défaut sur son circuit, souvent une surcharge ou un appareil défectueux branché dessus. Un interrupteur différentiel qui coupe toute une rangée signale une fuite de courant vers la terre : appareil humide, résistance de chauffe-eau percée, conducteur abîmé. Le disjoncteur général qui tombe pointe plutôt une surcharge globale ou un défaut en amont. Dans tous les cas, réarmer en boucle sans chercher use le matériel et laisse le vrai défaut en place.",
    },
    {
      q: 'La mise aux normes de mon installation est-elle obligatoire ?',
      a: "Il n'existe pas d'obligation générale de mettre à niveau une installation existante qui fonctionne. La norme NF C 15-100 s'impose au neuf et à la rénovation, et une attestation de conformité visée par le Consuel est exigée pour une mise en service après travaux importants. En revanche, en cas de vente, le diagnostic électrique est obligatoire pour une installation de plus de quinze ans, et en location, le logement doit répondre aux critères de décence, ce qui rend la reprise nécessaire quand l'installation présente un risque.",
    },
    {
      q: 'Je n\'ai plus de courant du tout : panne chez moi ou coupure du réseau ?',
      a: "Regardez d'abord si vos voisins immédiats sont touchés et si l'éclairage public fonctionne. Si tout le quartier est dans le noir, la coupure vient du réseau et se signale au service dépannage du distributeur, dont le numéro figure sur votre facture d'électricité. Si vous êtes le seul concerné, ouvrez le tableau : un organe abaissé indique une panne interne à votre installation. S'il n'y a rien d'abaissé et plus rien qui fonctionne, le problème se situe entre le compteur et le tableau, et là, il faut nous appeler.",
    },
    {
      q: 'En location, qui paie la réparation électrique, le locataire ou le propriétaire ?',
      a: "Le décret n° 87-712 place à la charge du locataire le menu entretien de l'installation : remplacement des interrupteurs, des prises, des ampoules, des fusibles, et le rétablissement d'un circuit après un simple déclenchement. Tout ce qui relève de la vétusté ou de la sécurité de l'installation elle-même, tableau hors d'âge, absence de mise à la terre, conducteurs dégradés, revient au propriétaire. Notre compte rendu d'intervention décrit ce qui a été trouvé, ce qui permet de trancher sans discussion.",
    },
  ],

  /* ── Légal (GABARIT, à compléter par Rémy avant prod) ── */
  legal: {
    showAddress: false, // false => schema SANS address
    address: { street: '', postalCode: '21000', city: 'Dijon' },
  },
} as const
