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
- **27/07/2026 (CEO, contrôle visuel)** : contrôle complet de la preview de la branche
  `builder/identite-dijon` (accueil, 2 prestations, hub zones, 5 pages communes, contact,
  conseils, mobile avec menu ouvert) plus comparaison côte à côte avec Metz en ligne.
  VERDICT : identité Dijon réussie et nettement distincte de Metz (palette prune/carmin vs
  teal/vermillon, hero panneau photo vs photo pleine largeur, bandeau symptômes inédit, carte
  vedette, galerie asymétrique, pages communes en bandeau pleine largeur vs photo encadrée),
  pas un recoloriage. Images communes réellement différenciées (empreintes toutes distinctes,
  décors locaux crédibles : plateau de Talant, vignes de Marsannay, tram de Quetigny, canal à
  Plombières). Les deux défauts de menu mobile de Metz sont absents. DEUX VESTIGES METZ à
  corriger avant validation Rémy (vocabulaire plomberie) : titre de la page contact « ne
  s'écoule plus » (`app/contact/page.tsx:36`) et question du formulaire « Qu'est-ce qui est
  bouché ? » (`components/ui/LeadForm.tsx:136`). Message correctif transmis au Builder via
  Rémy. Domaine : acheté par Rémy le 27/07/2026, en attente de validation AFNIC.
- **27/07/2026 (CEO, re-contrôle)** : passe corrective du Builder vérifiée (commit `a1993e1`,
  diff de code limité aux 2 lignes attendues, contrôlé dans git ET en captures sur la preview :
  titre contact « Dites-nous ce qui ne répond plus », formulaire « Que se passe-t-il chez
  vous ? », cartes de symptômes, barre d'étapes et bouton intacts). Plus aucun vocabulaire
  plomberie dans `app/` et `components/`. Le site sur `builder/identite-dijon` est PRÊT POUR
  LA VALIDATION RÉMY (avec valeurs DEMO : téléphone fiction ARCEP, persona, email). Message
  Autoblog T1 préparé. Prochaines étapes : drafts Autoblog, validation Rémy, injection des
  vraies valeurs (domaine validé AFNIC, 09, email, artisan), merge `main`, Étape 6.
- **27/07/2026 (CEO, domaine + audit Autoblog)** : domaine `sos-electricien-dijon.fr` VALIDÉ
  à l'AFNIC (acheté chez OVH). CEO : audit des 6 drafts Autoblog conforme (zéro tiret, zéro
  chiffre inventé, tous les `relatedServices` valides, FAQ sans redite) et push du commit
  `1625751` sur `builder/identite-dijon`. Domaine rattaché au projet Vercel par le CEO :
  `www.sos-electricien-dijon.fr` en principal (= `canonicalBase` du site), apex en
  redirection 308 vers www, les deux vérifiés côté Vercel. Reste côté Rémy : coller la zone
  DNS chez OVH (A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com, et redirection email
  via ForwardEmail comme sur les 3 autres sites du portefeuille : MX mx1/mx2.forwardemail.net
  + TXT `forward-email=contact:remy@remyzaoui.com`, zone fournie par le CEO). Demandes
  Rémy transmises au Builder : logo à recolorer dans la palette du site (design conservé),
  portrait persona DE FACE (40-50 ans, visage sympathique), prénom/nom à consonance
  bourguignonne (persona toujours DEMO). Le verrou noindex reste actif : brancher le DNS
  n'expose rien à l'indexation.
- **27/07/2026 (CEO, re-contrôle passe n°3 + DNS)** : correction CEO sur l'email (OVH
  n'inclut plus de redirections gratuites) : zone refaite sur le modèle ForwardEmail des
  3 autres sites, collée par Rémy, propagation CONSTATÉE (A @ → 76.76.21.21, www →
  cname.vercel-dns.com, MX forwardemail ; https://www.sos-electricien-dijon.fr répond et
  sert `Disallow: /`). Re-contrôle passe n°3 du Builder (commit `25d4039`, diff 8 fichiers
  conforme) : logo recoloré dans la charte (pastille prune, liseré carmin, piste crème,
  zéro orange), lisible sur header sombre, header clair et footer ; portrait persona DE
  FACE conforme (≈45 ans, sympathique, ceinture porte-outils, aucun texte/logo lisible) ;
  persona renommé `Vincent Bonnardot` (DEMO), citation à la première personne. TOUT EST
  PRÊT : en attente de la validation finale de Rémy pour merger `builder/identite-dijon`
  sur `main` (le domaine réel affichera alors le site Dijon, toujours en noindex).
  Resteront avant l'Étape 6 : numéro 09 dédié, identité artisan réelle, assurance.
- **27/07/2026 (Autoblog)** : Tranche 1 des drafts blog conseils écrite, 6 articles dans
  `content/drafts/` (`001-` à `006-`), sujets pris dans `docs/CALENDRIER-EDITORIAL.md` en
  commençant par juillet (orages d'été, 4 sujets) puis août (2 sujets), pas par janvier.
  Liens vers pages service aux slugs exacts du plan SEO (`panne-de-courant-coupure-electricite`
  ×3, `recherche-de-panne-electrique` ×2, `renovation-tableau-electrique` ×1). Zéro tiret
  cadratin, zéro chiffre inventé, FAQ de 3 questions par article vérifiées non redondantes
  avec la FAQ des pages service liées, frontmatter YAML validé par script. Pas d'image inline
  dans le corps, `cover` seul renseigné (dégradation propre déjà gérée par le code tant que
  le visuel n'existe pas). En attente : audit CEO du contenu avant mise en file de publication.
