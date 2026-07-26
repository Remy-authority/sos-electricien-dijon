# tasks/todo.md — SOS Électricien Dijon

> Suivi opérationnel des sessions. La checklist de référence long terme vit dans
> `docs/ETAT.md` (section 2). Ici : les tâches des sessions en cours.

## ⚠️ ARBITRAGE CEO du 27/07/2026 (à lire par le Builder AVANT de continuer)

Le Builder a démarré avant que `docs/SEO-GEO-PLAN.md` existe et a établi sa propre liste
de pages. Le plan SEO a été livré depuis, audité par le CEO (15 communes vérifiées une à
une sur geo.api.gouv.fr, doctrine respectée). **Décision : `docs/SEO-GEO-PLAN.md` est la
référence unique du contenu.** Conséquences :

- **Services : les 8 slugs du plan SEO (section 4)** remplacent la liste improvisée.
  Le travail déjà écrit se recycle en grande partie (recherche-de-panne identique,
  tableau/conformité à remapper vers `renovation-tableau-electrique` et
  `mise-aux-normes-nfc15100`). `borne-de-recharge-voiture-electrique` et
  `chauffage-electrique-chauffe-eau` sont ABANDONNÉS pour l'instant (hors positionnement
  urgence, proposables à Rémy plus tard en pages 9-10).
- **Communes : les 15 du plan SEO (section 5)**, toutes dans Dijon Métropole.
  Gevrey-Chambertin, Genlis et Nuits-Saint-Georges sont retirées (hors métropole,
  candidates vague 2 selon le rayon que Rémy tranchera). Une seule page pour
  Neuilly-Crimolois (fusion administrative, voir plan section 2).
- Le calendrier éditorial (48 articles) pointe déjà vers les slugs du plan SEO :
  toute divergence de slug casserait le maillage de l'autoblog.
- Travail Builder : à committer sur la branche `builder/identite-dijon`, JAMAIS sur `main`.

## Session du 27/07/2026 (CEO), infra + audits

- [x] Lire CLAUDE.md + docs/ETAT.md + tasks/lessons.md
- [x] Créer le repo GitHub `Remy-authority/sos-electricien-dijon` (public) + push de `main`
- [x] Créer le projet Vercel `sos-electricien-dijon` + poser `SEO_NOINDEX=1` en env
      Production AVANT toute connexion git (leçon Metz)
- [x] Connecter le repo GitHub au projet Vercel (déploiement auto sur `main`)
- [x] Corriger le Framework Preset (« Other » → « nextjs », voir lessons.md) + redéployer
- [x] Vérifier robots.txt production : `Disallow: /` confirmé, homepage HTTP 200
      (alias : https://sos-electricien-dijon.vercel.app)
- [x] Vérifier la GitHub Action `publish-article.yml` : active sur le nouveau repo
- [x] Audit CEO du livrable SEO : conforme (15 communes revérifiées une à une sur
      geo.api.gouv.fr : 15/15 exactes, codes Insee compris ; zéro tiret cadratin dans le
      contenu ; pas de chiffres inventés)
- [x] Détecter et arbitrer la divergence Builder / plan SEO (voir encadré ci-dessus)
- [ ] Superviser les prochains comptes-rendus (Builder réaligné, Autoblog)
- [ ] Contrôle visuel CEO : comparer côte à côte avec Metz (refuser un simple
      recoloriage), vérifier 1 image UNIQUE par page commune
- [ ] Mettre à jour docs/ETAT.md en fin de session

## Session du 27/07/2026 (Builder, Opus), identité Dijon — TERMINÉE

Socle hérité de Metz (système PROTEC-DARD multi-pages) CONSERVÉ. Identité Dijon créée
par-dessus. Liste des pages : `docs/SEO-GEO-PLAN.md` sections 4 et 5 (réalignement fait,
la liste improvisée au démarrage est caduque).

- [x] Palette Dijon (prune graphite, cuivre, carmin) dans `config/site.config.ts` + fallback `globals.css`
- [x] Signature du métier : trame `.bg-circuit`, rail `.wire-rail`, animations `current-run` et `arc-pulse`
- [x] `config/site.config.ts` : identité, persona DEMO, téléphone ARCEP fiction, about, process, whyUs, stats, FAQ accueil
- [x] `content/legal.json` adapté
- [x] 8 fiches `content/services/*.json` (slugs du plan SEO section 4)
- [x] 15 fiches `content/zones/*.json` (communes du plan SEO section 5, codes postaux copiés du plan)
- [x] `lib/seo.ts` : schema `Electrician` + `areaServed` (ville, quartiers, 15 communes lues depuis `content/zones`)
- [x] `app/llms.txt` : identité Dijon
- [x] Variations de composition : Hero (panneau photo + barre de preuves), Symptoms (nouveau bandeau
      de tri, remplace TrustBar), Services (carte vedette), About (inversé), Process (conducteur
      vertical, colonne de titre collante), Gallery (mosaïque asymétrique), ServiceArea (inversé),
      page commune (bandeau photo pleine largeur + repères factuels)
- [x] Logo, favicon, `public/logo.svg`, textes de toutes les pages restantes
- [x] Images : 42 visuels (hero, og, persona, 6 galerie, 17 prestations, 15 communes), 1 UNIQUE par commune
- [x] Suppression du pool d'images partagé `HERO_POOL`/`BODY_POOL` du socle Metz
- [x] Vérification : `tsc` propre, `npm run build` vert (40 pages), captures Playwright desktop + mobile
- [x] Corrections issues du contrôle visuel : vide asymétrique du bloc process (colonne collante),
      carte 02 des prestations trop vide (3 puces), textes citant des prestations abandonnées
- [ ] Commit sur branche `builder/identite-dijon` + push (preview Vercel)

## En attente de Rémy

- Achat du domaine `sos-electricien-dijon.fr` (vérifié disponible le 26/07/2026)
- Numéro 09 dédié (le site affichera un numéro de la plage ARCEP réservée à la fiction
  en attendant, marqué `phoneIsDemo: true`)
- Email de contact réel
- Nom commercial et identité réelle de l'artisan (persona en DEMO)
- Assurance de l'artisan (RC pro / décennale) pour `content/legal.json`
- Rayon d'intervention Dijon (30 km comme Metz ? conditionne une éventuelle vague 2 de
  communes : Gevrey-Chambertin, Genlis, Nuits-Saint-Georges)
