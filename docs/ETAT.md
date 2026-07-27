# ETAT.md — Journal de bord SOS Électricien Dijon

> Mémoire du projet. Chaque session lit ce fichier en arrivant et le met à jour avant de finir.
> Dernière mise à jour : 2026-07-27 (session SEO, plan mots-clés + calendrier éditorial).

---

## 🔖🔖 POINT DE REPRISE ACTUEL (fin de session CEO du 27/07/2026 soir, PRIME sur tout le reste)

**LE SITE EST EN LIGNE, INDEXABLE ET COMPLET : https://www.sos-electricien-dijon.fr** (Étape 6
faite, sitemap soumis dans GSC, DNS + email ForwardEmail opérationnels).

**Numéro RÉEL en production : 09 48 19 40 23** (+33948194023, Twilio SID
`PN2cee8ec00115f1f8fdaca4127c332c2f`, étiquette « SOS Electricien Dijon - NE PAS REATTRIBUER
(rank&rent) »). Acheté le 27/07/2026 à 17h49 par la surveillance automatique du CEO (10 min
après ré-armement), injecté par le Builder (commit `488e9a6`), vérifié en prod (tel: + affichage
+ mentions légales, zéro trace du fiction ARCEP). La surveillance Twilio est TERMINÉE, ne plus
la ré-armer.

**Blog TERMINÉ côté production : 78 articles rédigés, 234 images.** Publiés au fil du cron
lun/mer/ven ~7h jusqu'au 22/01/2027 (drafts restants en file). Vague 5 des images (54 fichiers,
commit `684abfb`) auditée et poussée. PLUS RIEN À PRODUIRE (texte comme images) avant le
réapprovisionnement éditorial au-delà de janvier 2027.

**Prochaine phase : exploitation** (suivi indexation GSC, trafic, puis démarchage de locataires).
Points ouverts mineurs en section 2ter.

Circuit des rôles STRICT (leçon majeure du 27/07) : texte articles = Autoblog (Sonnet),
images = Builder (Opus), sujets/file = SEO, audit de CHAQUE commit + push = CEO. Toute
tâche agent = message prêt à coller fourni à Rémy, jamais de « file d'attente » interne.

---

## 🔖 POINT DE REPRISE INITIAL (26/07/2026, contexte de création, périmé sur l'état)

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
- [x] Contrôle visuel CEO (identité distincte de Metz confirmée) → GO Rémy le 27/07/2026 → MERGE sur `main` fait (ff jusqu'à `7880377`), production vérifiée : www.sos-electricien-dijon.fr sert le site Dijon, apex en 308, sitemap 28 URLs, noindex toujours actif
- [x] Rémy : propriété GSC créée, TXT `google-site-verification` posé en DNS (propagation vérifiée par le CEO le 27/07/2026)
- [x] ÉTAPE 6 FAITE le 27/07/2026 sur go explicite de Rémy : `SEO_NOINDEX` retiré de Vercel, production redéployée, vérifié : robots.txt en `Allow` (crawlers IA explicitement autorisés), `Sitemap:` référencé, sitemap 200 avec 28 URLs, meta robots `index, follow`. LE SITE EST EN LIGNE : https://www.sos-electricien-dijon.fr
- [x] Rémy : sitemap soumis dans Search Console le 27/07/2026
- [x] Autoblog EN ROUTE : workflow corrigé par le CEO (`git add` tolérant à l'absence de
      `public/conseils`, les drafts Dijon n'ayant pas de covers), 1ère publication déclenchée
      à la main : article `coupure-courant-orage-ete-dijon` publié. Cadence auto : lun/mer/ven
      ~7h, 5 drafts restants en file.
- [x] Builder : 6 covers d'articles livrées le 27/07/2026 (commit `2c76cfc`, diff limité aux
      images) et VALIDÉES au re-contrôle CEO : noms alignés 6/6 sur les champs `cover`,
      empreintes uniques, aucune marque/texte/visage, direction artistique cohérente
      (prune/carmin), sujets tous différents et raccord avec les articles, cover du 1er
      article vérifiée en prod (200)
- [x] VAGUE 2 complète (27/07/2026) : calendrier SEO 78 sujets audité (`a1cae83`), 15 drafts
      texte Autoblog audités (`21169da`), 45 images Builder aux nouvelles specs 1200px/q75
      auditées (`c0c37b8`, hash `4d0e2a4` annoncé par le Builder erroné). Réserve : 29 drafts,
      jusqu'à mi-octobre. Circuit propre respecté : texte=Autoblog, images=Builder, audit+push=CEO.
- [x] Vagues 3 à 5 : FAIT, les 78 articles sont rédigés et toutes les images produites
      (vague 5 : 54 images, commit `684abfb`, auditées et poussées le 27/07/2026)
- [x] Builder : injection du numéro réel 09 48 19 40 23 + `phoneIsDemo: false`
      (commit `488e9a6`, audité, poussé, vérifié en production le 27/07/2026)
- [x] Numéro : 09 dédié ACHETÉ le 27/07/2026 (surveillance automatique CEO, 09 48 19 40 23,
      bundle National, étiquette anti-réattribution) et EN LIGNE. Dossier numéro clos.

## 2ter. POINTS OUVERTS MINEURS (relevés à l'audit CEO du 27/07 soir)

- **Multiprises 063-1 et 070-1** : alvéoles libres encore partiellement de type allemand
  malgré 2 passes Builder (biais fort du modèle sur cet objet précis ; les prises murales
  sont toutes françaises, la 070-2 clé de l'article est parfaitement française). Jugé NON
  bloquant par le CEO à la taille d'affichage ; Rémy peut demander une reprise.
- **Commentaires DEMO obsolètes** (invisibles pour le visiteur) : `site.config.ts` marque
  encore l'email « DEMO – domaine pas encore acheté » et `legal.json` dit que la boîte n'est
  pas ouverte, alors que `contact@sos-electricien-dijon.fr` fonctionne déjà via la
  redirection ForwardEmail du DNS. À nettoyer à la prochaine passe Builder.
- **`phoneIsDemo` ne pilote RIEN à l'écran** (constat Builder) : simple marqueur documentaire,
  aucun garde-fou visuel n'a jamais existé pour un numéro fictif. À construire sur les sites
  N+1 si on en veut un (à ajouter au playbook au prochain lancement).

## 2bis. POINTS OUVERTS POUR RÉMY (relevés par le Builder)

- **Rayon d'intervention** : le site affiche « environ 30 km » (repris de Metz) dans tous les
  textes. Si Rémy tranche un autre chiffre, c'est un simple remplacement global.
- Les 15 communes du plan SEO sont toutes dans la métropole (moins de 15 km) : Gevrey-Chambertin,
  Genlis et Nuits-Saint-Georges restent candidates à une vague 2 si le rayon est confirmé à 30 km.
- Deux prestations écrites puis retirées sur arbitrage CEO (hors positionnement urgence) :
  borne de recharge de véhicule électrique, chauffage électrique et chauffe-eau. Elles sont
  proposables à Rémy plus tard en pages 9 et 10 (contenu à réécrire, il n'a pas été conservé).

## 3. DÉCISIONS RÉMY

- 27/07/2026 : AU LANCEMENT, 11 articles publiés d'un coup (rattrapage exécuté par le CEO le
  jour même via le script officiel, articles 1 à 11, datés du jour), et la TOTALITÉ des 78
  articles doit être PRODUITE d'avance (vagues 3 à 5 lancées immédiatement, pas au fil de
  l'eau). La cadence 3/semaine (cron lun/mer/ven) déroule ensuite la réserve.
- 27/07/2026 : GO FINAL pour l'Étape 6, en attente uniquement du numéro de téléphone.
- 27/07/2026 : PAS d'assurance affichée sur les sites du portefeuille (décision définitive).
- 27/07/2026 : recettes infra standardisées pour tout site N+1 (DNS OVH + ForwardEmail +
  GSC type Domaine + numéro Twilio) : voir `docs/INFRA-PORTEFEUILLE.md` (nouveau, voyage
  avec le template).
- 27/07/2026 : faute de 09 en stock chez Twilio, Rémy a accepté un 03 39, mais l'achat est
  bloqué par le type de dossier réglementaire (Local absent du compte) → retour au 09,
  surveillance d'achat automatique posée par le CEO (achète dès retour en stock).
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
- **27/07/2026 (CEO, MERGE)** : GO de Rémy → merge fast-forward de `builder/identite-dijon`
  dans `main` (`f373b5d..7880377`), poussé, production Vercel vérifiée sur le domaine réel :
  titre Dijon servi, apex 308 → www, robots `Disallow: /` (verrou intact), sitemap 200 avec
  28 URLs canoniques www. Instructions Google Search Console données à Rémy (propriété type
  Domaine + TXT DNS maintenant ; soumission du sitemap réservée à l'Étape 6, au retrait du
  noindex, pour éviter des URLs signalées « bloquées par robots.txt » en attendant).
- **27/07/2026 (Autoblog)** : Tranche 1 des drafts blog conseils écrite, 6 articles dans
  `content/drafts/` (`001-` à `006-`), sujets pris dans `docs/CALENDRIER-EDITORIAL.md` en
  commençant par juillet (orages d'été, 4 sujets) puis août (2 sujets), pas par janvier.
  Liens vers pages service aux slugs exacts du plan SEO (`panne-de-courant-coupure-electricite`
  ×3, `recherche-de-panne-electrique` ×2, `renovation-tableau-electrique` ×1). Zéro tiret
  cadratin, zéro chiffre inventé, FAQ de 3 questions par article vérifiées non redondantes
  avec la FAQ des pages service liées, frontmatter YAML validé par script. Pas d'image inline
  dans le corps, `cover` seul renseigné (dégradation propre déjà gérée par le code tant que
  le visuel n'existe pas). En attente : audit CEO du contenu avant mise en file de publication.
- **27/07/2026 (SEO, mise à niveau calendrier vague 2)** : décision Rémy transmise par le CEO,
  3 articles/semaine pendant 6 mois, 78 au total (15 déjà publiés/en draft, 63 à planifier).
  `docs/CALENDRIER-EDITORIAL.md` réécrit intégralement : 30 nouveaux sujets ajoutés (surtout
  pour combler `urgence-depannage-electricien` et `electricien-syndic-copropriete-professionnels`,
  quasi absents de l'ancien calendrier à 12 thèmes génériques), 5 titres retouchés pour ne plus
  recouper une FAQ de page service ou un autre sujet, 3 titres désaisonnalisés (mention « été »
  retirée, plus de bonne place dans la fenêtre réelle). File 16 à 78 réordonnée sur le calendrier
  réel de publication (calculé à partir du lundi 27/07/2026, 3x/semaine) : août (fin), septembre,
  octobre, novembre, décembre, janvier 2027. Les 4 sujets de fêtes de fin d'année (guirlandes,
  décorations extérieures, multiprises et coupure pendant un repas) tombent bien en décembre.
  Répartition finale équilibrée : 10 articles par page service, sauf le syndic/copro à 8.
  Vérifié par script : 78 positions sans trou ni doublon, zéro titre dupliqué. En attente :
  audit CEO avant que l'Autoblog convertisse la section 3 en drafts `016-` à `078-`.
- **27/07/2026 (Autoblog)** : Vague 2 du blog écrite, 15 drafts (`016-` à `030-`, sujets 16 à
  30 de la section 3 du calendrier vague 2, ordre exact, non réordonné). Texte uniquement,
  conformément à la règle de circuit (Autoblog=texte, Builder=images) : chaque article
  référence sa cover et 2 images de corps avec légende, aucun fichier image produit. Zéro
  tiret cadratin, zéro chiffre/certification inventés, contenu prudent et conditionnel sur
  les 2 sujets sensibles (assurance habitation, éclairage de secours ERP). Auto-contrôles
  scriptés : frontmatter YAML complet sur les 15 fichiers, `relatedServices` vérifiés contre
  les 8 slugs réels, 2 images en corps partout, aucun doublon exact de question FAQ contre
  les 8 pages service et les 15 articles déjà écrits (45 nouvelles questions comparées à 77
  existantes). Commit LOCAL sur `main`, PAS de push (le CEO audite puis pousse). En attente :
  audit CEO du contenu, puis transmission au Builder pour les 30 visuels correspondants.
- **27/07/2026 (Autoblog)** : Vague 3 du blog écrite, 15 drafts (`031-` à `045-`, sujets 31 à
  45 de la section 3 du calendrier, ordre exact). Décision Rémy transmise par le CEO : produire
  d'avance la totalité des 78 articles, vagues enchaînées sans attendre l'épuisement de la
  réserve. Texte uniquement (règle de circuit Autoblog=texte / Builder=images inchangée).
  Sujets sensibles traités : parafoudre/paratonnerre (distinction claire des deux dispositifs,
  aucune obligation légale affirmée), diagnostic de vente et mise aux normes avant location
  (générique et conditionnel, aucun texte réglementaire précis cité). Trois articles proches
  sur le même thème diagnostic de vente (037 procédure générale, 038 défaut d'isolement
  spécifique, 045 tableau électrique spécifique) rédigés avec des angles volontairement
  distincts pour éviter toute redite. Auto-contrôles scriptés : zéro tiret cadratin, 2 images
  en corps partout, frontmatter YAML complet, `relatedServices` vérifiés contre les 8 slugs
  réels, ordre et service recoupés un par un avec le calendrier, aucun doublon exact de
  question FAQ sur 45 nouvelles questions comparées à 122 existantes (30 articles + 8 pages
  service). Commit LOCAL sur `main`, PAS de push. En attente : audit CEO, puis Builder pour
  les 30 visuels correspondants. Réserve restante après cette vague : 33 sujets (positions
  46 à 78).
- **27/07/2026 (Autoblog)** : Vague 4 du blog écrite, 15 drafts (`046-` à `060-`, sujets 46 à
  60 de la section 3 du calendrier, ordre exact). `git pull` fait en début de session (déjà à
  jour, HEAD `4e7208f`). Ce lot couvre la fin novembre et le début décembre : les 2 sujets de
  fêtes (056 guirlandes de Noël, 059 décorations extérieures) assument Noël pleinement comme
  demandé. Commit de contenu isolé (`git add content/drafts` uniquement, consigne CEO pour ne
  pas interférer avec le travail parallèle du Builder dans `public/`) : hash exact `55b792d`.
  Point corrigé en rédigeant : l'article 048 (personne âgée) mentionnait initialement
  « hiver » alors qu'il est marqué intemporel dans le calendrier, reformulé en « températures
  extrêmes » pour rester valable toute l'année. Auto-contrôles scriptés : zéro tiret cadratin,
  2 images en corps partout, frontmatter YAML complet, `relatedServices` vérifiés contre les
  8 slugs réels, ordre et service recoupés avec le calendrier, aucun doublon exact de question
  FAQ sur 45 nouvelles questions comparées à 167 existantes. Commit LOCAL sur `main`, PAS de
  push. En attente : audit CEO, puis Builder pour les 30 visuels correspondants. Réserve
  restante après cette vague : 18 sujets (positions 61 à 78).
- **27/07/2026 (Autoblog)** : Vague 5 du blog écrite, DERNIÈRE vague, 18 drafts (`061-` à
  `078-`, sujets 61 à 78 de la section 3 du calendrier, ordre exact). **Les 78 articles du
  calendrier sont désormais intégralement rédigés** (11 publiés + 67 en drafts). `git pull`
  fait en début de session (déjà à jour, HEAD `24f7068`). Dates estimées calculées sur la
  cadence réelle lun/mer/ven depuis le 27/07/2026 : position 78 tombe le 22/01/2027, exactement
  la fin de fenêtre annoncée par le calendrier, ce qui valide la méthode de calcul utilisée
  sur les 5 vagues. Règle formelle du 4bis (légendes sans texte lisible décrit) appliquée avec
  un balayage lexical dédié : 1 cas trouvé et corrigé (073, légendes de l'écran du compteur
  communicant reformulées). Commit de contenu isolé (`git add content/drafts` uniquement) :
  hash exact `a8c466d`. Auto-contrôles scriptés : zéro tiret cadratin, 2 images en corps
  partout, frontmatter YAML complet, `relatedServices` vérifiés contre les 8 slugs réels,
  aucun doublon exact de question FAQ sur 54 nouvelles questions comparées à 212 existantes
  (compte exact annoncé par le CEO). Commit LOCAL sur `main`, PAS de push. En attente : audit
  CEO, puis Builder pour les 36 derniers visuels (18 cover + 2×18 corps). Le portefeuille de
  contenu du calendrier éditorial est complet ; seul un réapprovisionnement futur (au-delà de
  janvier 2027) redonnera du travail de rédaction à l'Autoblog.
- **27/07/2026 (CEO, soir : 09 + vague 5, clôture de la production)** : surveillance Twilio
  ré-armée à 17h39 (boucle de fond, contrôle 5 min), 09 trouvé et ACHETÉ automatiquement à
  17h49 : **09 48 19 40 23**, bundle National, étiquette anti-réattribution. Deux livraisons
  Builder auditées sur diff réel puis poussées : `684abfb` (54 images vague 5 : 54/54
  fichiers strictement alignés sur les chemins référencés par les drafts 061-078, tous en
  1200x669 q75, zéro doublon sur les 234 images du blog, contrôle visuel CEO des 9 images à
  risque : compteur 073 sans marque ni afficheur lisible, Schneider effacé sur 076-1,
  personnes de dos sur 067/077/078, matériel français conforme sauf réserve multiprises,
  voir 2ter) et `488e9a6` (numéro réel : diff limité aux 2 fichiers attendus, grep fiction
  = zéro dans le code produit). Build local vert vérifié par le CEO avant push. Production
  vérifiée après redéploiement : tel:+33948194023 et 09 48 19 40 23 servis (accueil +
  mentions légales), image vague 5 en 200. Incident de méthode consigné dans lessons.md :
  une retouche intermédiaire du Builder avait RÉINTRODUIT une marque Schneider sur 076-1
  (rattrapée par son propre re-contrôle). Constat Builder : `phoneIsDemo` n'a jamais rien
  piloté à l'écran (voir 2ter). LA PRODUCTION DU SITE EST TERMINÉE : place à l'exploitation.
