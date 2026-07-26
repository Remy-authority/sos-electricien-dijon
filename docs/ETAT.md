# ETAT.md — Journal de bord SOS Électricien Dijon

> Mémoire du projet. Chaque session lit ce fichier en arrivant et le met à jour avant de finir.
> Dernière mise à jour : 2026-07-27 (session SEO, plan mots-clés + calendrier éditorial).

---

## 🔖 POINT DE REPRISE (état exact au 26/07/2026 — à lire en premier)

**Site n°4 du portefeuille** (métier : électricien d'urgence, ville : Dijon, 21). Rien n'est en
ligne : dossier créé par duplication de **`sos-debouchage-metz.fr`** (site n°3, validé par Rémy),
et NON du pilote d'Angers. Raison : Metz porte déjà le système de design PROTEC-DARD transposé en
multi-pages + les acquis de process (verrou noindex par `SEO_NOINDEX=1`, Action autoblog vérifiée,
règle « images uniques par commune »). Contenu spécifique Metz nettoyé, git initialisé.

**Opportunité validée** par le benchmark vague 2 (détail : `RENT & RANK/docs/BENCHMARK.md`) :
verdict 🟢 Boulevard, n°3 du top 5. Page 1 : 6 artisans locaux faibles, zéro site moderne, plus
3 plateformes nationales (MesDépanneurs, Depanneo, FairFair). Concurrent le plus sérieux :
Leroy et Fils (bon contenu local, tarifs transparents, MAIS design dégradé avec émojis et zéro
avis). CPC estimé 4-8 €, volume estimé 100-250/mois, saisonnalité nulle. Marché « plus bruyant »
qu'Annecy : l'effort de différenciation compte.

**Domaine pressenti : `sos-electricien-dijon.fr`** (vérifié DISPONIBLE à l'AFNIC le 26/07/2026,
PAS ENCORE ACHETÉ, en attente validation Rémy). Numéro 09 dédié à prévoir (règle du portefeuille :
un numéro par site).

---

## ⚠️ DESIGN : MÊME ADN QUE METZ, IDENTITÉ DISTINCTE (voir CLAUDE.md section 2)

- Le socle hérité de Metz applique déjà le système PROTEC-DARD (Inter + Fraunces, Framer Motion,
  rythme des sections) : le GARDER.
- À créer pour Dijon : palette propre au métier électricien (différente d'Angers, Annecy, Metz),
  images 100 % nouvelles (décors bourguignons), variations de sections, textes entièrement
  réécrits. Interdit : un clone pixel par pixel de Metz (anti-empreinte Google + qualité).
- Référence originelle consultable : code source PROTEC-DARD en lecture seule :
  `/Users/zaouiremy/Desktop/Claude code/Template siteweb/Prospects/Deratisation/PROTEC-DARD/`
- Règle permanente héritée : chaque page commune a SA propre image de tête
  (`public/zones/<slug>.jpg`), pas de pool partagé.

---

## 1. CE QU'ON SAIT (acquis)

- Socle technique et visuel hérité de Metz : Next.js, autoblog, GitHub Action
  `publish-article.yml` (à réactiver dans le nouveau repo), couche design PROTEC-DARD.
- `config/site.config.ts`, `content/services/*.json` (8), `content/zones/*.json` (15),
  `content/legal.json`, logo, favicon : réécrits pour électricien/Dijon le 27/07/2026 (Builder).
  Plus aucune trace de contenu Metz dans `app/`, `components/`, `lib/`, `content/`, `config/`.
- Identité Dijon : palette prune / cuivre / carmin, trame « circuit imprimé », animation
  signature `current-run` (impulsion qui parcourt un conducteur), logo tracé de circuit.
- 42 visuels produits, dont **une image de tête unique par commune** (`public/zones/<slug>.jpg`),
  câblée par slug : le pool partagé `HERO_POOL` du socle Metz a été supprimé du code.

## 2. RESTE À FAIRE (checklist playbook)

- [ ] Rémy : valider le domaine (8 candidats libres, voir conversation CEO-portefeuille), l'acheter, fournir le numéro 09 dédié + email + nom commercial
- [x] CEO : repo GitHub `Remy-authority/sos-electricien-dijon` + projet Vercel `sos-electricien-dijon` créés le 27/07/2026, `SEO_NOINDEX=1` posé en Production AVANT la connexion git, robots.txt vérifié en prod : `Disallow: /` (alias https://sos-electricien-dijon.vercel.app, homepage 200), Action `publish-article.yml` active
- [x] SEO : carte mots-clés électricien Dijon + `docs/SEO-GEO-PLAN.md` + `docs/CALENDRIER-EDITORIAL.md` (fait le 27/07/2026, codes postaux vérifiés sur geo.api.gouv.fr)
- [x] Builder : `config/site.config.ts` (identité, palette prune/cuivre/carmin, persona DEMO, téléphone ARCEP fiction) + `content/legal.json` (27/07/2026)
- [x] Builder : `content/services/*.json` (8 pages) et `content/zones/*.json` (15 pages) écrits selon `docs/SEO-GEO-PLAN.md`
- [x] Builder sur Opus : identité visuelle Dijon (ADN PROTEC-DARD conservé, compositions retravaillées : hero à panneau photo, bandeau de tri par symptôme, prestation vedette, déroulé sur conducteur vertical, galerie asymétrique, page commune en bandeau pleine largeur)
- [x] Builder : logo, favicon, portrait persona, 42 visuels dont 1 image UNIQUE par commune
- [ ] Builder : injecter les vraies valeurs de Rémy (domaine, 09 dédié, email, identité artisan, assurance) quand elles arrivent
- [ ] Autoblog : drafts T1 (préfixes 001-…)
- [ ] Contrôle visuel CEO (comparer aussi côte à côte avec Metz : assez distinct ?) → validation Rémy → mise en ligne (Étape 6)

## 2bis. POINTS OUVERTS POUR RÉMY (relevés par le Builder)

- **Rayon d'intervention** : le site affiche « environ 30 km » (repris de Metz) dans tous les
  textes. Si Rémy tranche un autre chiffre, c'est un simple remplacement global.
- Les 15 communes du plan SEO sont toutes dans la métropole (moins de 15 km) : Gevrey-Chambertin,
  Genlis et Nuits-Saint-Georges restent candidates à une vague 2 si le rayon est confirmé à 30 km.
- Deux prestations écrites puis retirées sur arbitrage CEO (hors positionnement urgence) :
  borne de recharge de véhicule électrique, chauffage électrique et chauffe-eau. Elles sont
  proposables à Rémy plus tard en pages 9 et 10 (contenu à réécrire, il n'a pas été conservé).

## 3. DÉCISIONS RÉMY

- 25/07/2026 : top 5 vague 2 validé ; Dijon (électricien) est le n°3 de la file de lancement.
- 26/07/2026 : un numéro 09 dédié par site du portefeuille (preuve des appels pour la location).
- 26/07/2026 : les sites N+1 se dupliquent désormais depuis Metz (porteur du design PROTEC-DARD),
  avec obligation d'identité visuelle distincte par site.

## 4. HISTORIQUE DES SESSIONS

- **26/07/2026 (CEO-portefeuille)** : création du dossier par duplication de Metz (et non du
  pilote), nettoyage du contenu Metz (drafts autoblog, images, plans SEO), CLAUDE.md adapté
  (identité Dijon + règle « même ADN, identité distincte »), journal neuf, git initialisé.
  Aucun contenu Dijon encore écrit : travail du SEO puis du Builder aux prochaines sessions.
- **27/07/2026 (SEO)** : `docs/SEO-GEO-PLAN.md` écrit (8 clusters de mots-clés, 8 pages
  services, 15 pages communes avec codes postaux vérifiés un par un sur `geo.api.gouv.fr`,
  stratégie GEO, maillage interne). `docs/CALENDRIER-EDITORIAL.md` écrit (48 sujets de blog
  sur 12 mois, saisonnalité bourguignonne réelle : chauffage hiver, orages été, humidité
  automne, fêtes décembre). Point notable : Neuilly-lès-Dijon et Crimolois ont fusionné en
  une commune unique « Neuilly-Crimolois » (21800), une seule page zone à prévoir pour les
  deux noms. Rien codé (hors périmètre SEO) : `content/services`, `content/zones` et
  `site.config.ts` restent ceux de Metz, au Builder de les réécrire à partir du plan.
- **27/07/2026 (CEO)** : infrastructure posée dans l'ordre sécurisé : repo GitHub public,
  projet Vercel, `SEO_NOINDEX=1` en Production AVANT la connexion git, premier déploiement,
  robots.txt contrôlé (`Disallow: /`). Incident réglé : le projet créé en CLI avait le
  Framework Preset « Other » (site servi en statique, tout en 404), corrigé en « nextjs »
  via l'API + redéploiement (leçon consignée dans tasks/lessons.md). Audit du livrable SEO :
  conforme, les 15 communes revérifiées une à une sur geo.api.gouv.fr (15/15 exactes).
  ARBITRAGE : le Builder avait démarré avant l'existence du plan SEO et improvisé une liste
  divergente (8 services dont borne de recharge/chauffage, 12 communes dont 3 hors
  métropole) ; décision CEO : `docs/SEO-GEO-PLAN.md` est la référence unique, Builder
  réaligné via tasks/todo.md (encadré ARBITRAGE) et message transmis par Rémy. Constat
  hors périmètre : Metz est passé EN LIGNE (www.sos-debouchage-metz.fr sert Allow), rien
  touché, simple information.
- **27/07/2026 (Builder, Opus)** : identité Dijon posée par-dessus le socle PROTEC-DARD hérité
  de Metz. Palette propre au site (prune graphite, cuivre, carmin électrique), trame « circuit
  imprimé », animation signature `current-run`, logo et favicon en tracé de circuit. Compositions
  retravaillées pour ne pas être un recoloriage de Metz : hero à panneau photo assumé plus barre
  de preuves pleine largeur, bandeau de tri par symptôme à la place du bandeau de réassurance,
  grille de prestations claire avec une carte vedette, déroulé d'intervention le long d'un
  conducteur vertical, galerie asymétrique, page commune en bandeau photo pleine largeur.
  Contenu : 8 prestations et 15 communes écrites d'après `docs/SEO-GEO-PLAN.md`, `legal.json`,
  `llms.txt`, schema `Electrician` avec `areaServed` lu depuis `content/zones`. 42 visuels
  générés (1 unique par commune). Incident de méthode : le Builder avait commencé avec sa propre
  liste de pages avant que le plan SEO existe, réalignement complet sur arbitrage CEO (2 pages
  jetées, 6 communes ajoutées, 4 slugs renommés) ; leçon consignée dans `tasks/lessons.md`.
  Vérifié : `tsc` propre, `npm run build` vert (40 pages), captures Playwright desktop et mobile.
