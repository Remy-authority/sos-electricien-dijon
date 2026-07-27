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
- [x] Superviser le compte-rendu Builder (livraison du 27/07, réalignée sur le plan SEO)
- [x] Contrôle visuel CEO fait (desktop + mobile + comparaison Metz) : VERDICT POSITIF,
      identité distincte confirmée, images communes toutes différenciées (hash vérifiés).
      DEUX corrections demandées au Builder (vestiges plomberie, voir ci-dessous)
- [x] Re-contrôle CEO des 2 corrections Builder (commit a1993e1 : diff limité à 2 lignes de
      code vérifié dans git, captures des 2 écrans conformes : « ne répond plus » et
      « Que se passe-t-il chez vous ? », cartes/étapes/bouton intacts) → prêt pour
      VALIDATION RÉMY
- [x] Message Autoblog (drafts T1) préparé et transmis à Rémy
- [x] Mettre à jour docs/ETAT.md en fin de session

## PASSE CORRECTIVE BUILDER demandée par le CEO (27/07/2026) — 2 points, rien d'autre

1. `app/contact/page.tsx:36` : le titre dit « Dites-nous ce qui ne s'écoule plus »,
   vocabulaire de plomberie hérité de Metz. Reformuler pour l'électricité (par exemple
   « Dites-nous ce qui ne répond plus », au choix du Builder, cohérent avec la charte).
2. `components/ui/LeadForm.tsx:136` : la question de l'étape 1 du formulaire est
   « Qu'est-ce qui est bouché ? ». Reformuler pour l'électricité (par exemple
   « Qu'est-ce qui vous arrive ? » ou « Que se passe-t-il chez vous ? »), les cartes de
   symptômes au-dessous sont déjà correctes.
   Interdits inchangés : tiret cadratin, chiffres inventés. Ne toucher à rien d'autre.

**Fait par le Builder le 27/07/2026 :**

- [x] 1. `app/contact/page.tsx` : « ne s'écoule plus » remplacé par « ne répond plus »
      (le span en dégradé accent est conservé, la charte du PageHeader ne bouge pas).
- [x] 2. `components/ui/LeadForm.tsx` : « Qu'est-ce qui est bouché ? » remplacé par
      « Que se passe-t-il chez vous ? ». Les huit cartes de symptômes sont inchangées.
- [x] Vérifié : plus aucun terme de plomberie dans `app/` et `components/`
      (`écoule`, `bouché`, `refoulement`, `siphon`, `canalisation` : zéro occurrence),
      `tsc` propre, `npm run build` vert (40 pages), contrôle visuel des deux écrans.
      Aucun autre fichier de code touché.

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

## Session du 27/07/2026 (Autoblog), TRANCHE 1 des drafts blog conseils — TERMINÉE

6 articles écrits dans `content/drafts/` (préfixes `001-` à `006-`), sujets piochés dans
`docs/CALENDRIER-EDITORIAL.md` en commençant par la saison en cours (juillet, orages d'été)
puis août, plutôt que par janvier :

- [x] `001-coupure-courant-orage-ete-dijon.mdx` → `panne-de-courant-coupure-electricite`
      (Juillet #1)
- [x] `002-une-seule-piece-sans-courant-causes.mdx` → `panne-de-courant-coupure-electricite`
      (Juillet #2)
- [x] `003-odeur-brule-prise-electrique-reflexe.mdx` → `recherche-de-panne-electrique`
      (Juillet #3)
- [x] `004-difference-coupure-edf-panne-interne.mdx` → `panne-de-courant-coupure-electricite`
      (Juillet #4)
- [x] `005-couper-tableau-electrique-vacances.mdx` → `renovation-tableau-electrique`
      (Août #1)
- [x] `006-verifier-electricite-logement-vide-retour.mdx` → `recherche-de-panne-electrique`
      (Août #2)

Vérifications faites : zéro tiret cadratin (`grep` sur les 6 fichiers, aucune occurrence),
zéro chiffre d'activité/certification inventés, `relatedServices` de chaque draft contrôlés
contre les 8 slugs réels de `content/services/`, frontmatter YAML validé par script Node
(`gray-matter`, champs requis présents, 3 FAQ par article, aucune ne redite les FAQ des
pages service liées). Ancrage local Dijon utilisé quand pertinent (bâti ancien centre-ville
pour le tableau mal étiqueté et l'humidité de cave, climat bourguignon pour le chauffage
d'appoint), jamais plaqué sur les sujets qui ne s'y prêtaient pas (odeur de brûlé, EDF vs
Enedis). Pas d'image inline dans le corps (convention déjà utilisée par certains drafts
Metz non illustrés) : seul `cover` est renseigné, avec dégradation propre déjà gérée par
`lib/content.ts` (`coverIfExists`) tant que le visuel n'existe pas.

- [ ] Audit CEO du contenu (doctrine + qualité) avant que l'Action `publish-article.yml`
      ne commence à les publier (lun/mer/ven, le plus ancien numéro en premier)
- [ ] Réapprovisionner le calendrier avant épuisement de la file (reste 42 sujets pour
      l'année 1 après cette tranche)

## ✅ RE-CONTRÔLE CEO passe n°3 (27/07/2026) : CONFORME, en attente validation finale Rémy

- Diff `25d4039` vérifié (8 fichiers, rien d'autre). Logo dans la charte sur les 3 fonds,
  portrait de face conforme à la demande, `Vincent Bonnardot` en config (DEMO conservé).
- DNS propagé : www.sos-electricien-dijon.fr répond (noindex actif), MX ForwardEmail posés.
- Prochain jalon : GO de Rémy → merge `builder/identite-dijon` → `main` (site réel visible
  sur le domaine, toujours noindex) → puis 09 + identité artisan + assurance → Étape 6.

## PASSE BUILDER n°3 demandée par Rémy le 27/07/2026 (logo + persona), 2 points

1. **Logo : recolorer, design conservé.** Rémy valide le tracé de circuit mais le pavé
   orange/cuivre du logo jure avec la DA prune/carmin. Le recolorer dans la palette du
   site (logo.svg, favicon/icon.svg, composant Logo), cohérent sur fond clair ET sombre.
2. **Portrait persona : DE FACE.** L'actuel montre l'homme de dos. Nouveau portrait :
   homme de 40-50 ans, visage sympathique (pas forcément beau), de face ou trois quarts,
   crédible artisan électricien, décor cohérent. Remplacer `public/persona.jpg` partout où
   il apparaît. Bonus : renommer le persona DEMO avec un prénom/nom à consonance
   bourguignonne (rester marqué DEMO). Vérifier la cohérence config/citation/légendes.

**Fait par le Builder le 27/07/2026 :**

- [x] 1. Logo recoloré dans la charte : pastille prune profond (`ink-800`), liseré carmin
      (`accent-500`), piste crème, noeuds carmin. Design du tracé de circuit inchangé.
      Répercuté sur les trois déclinaisons : `components/ui/Logo.tsx`, `app/icon.svg`
      (favicon) et `public/logo.svg`. Plus aucune couleur cuivre dans la marque.
      Lisibilité contrôlée sur les quatre fonds : header transparent au-dessus du hero
      sombre, header solide clair, footer prune, mobile.
- [x] 2. Nouveau portrait persona de face (homme d'environ 45 ans, veste d'artisan,
      tableau électrique en arrière-plan, décor cohérent avec la série). Passe d'édition
      supplémentaire pour retirer un badge de marque sur la veste et le texte des
      étiquettes du tableau (règle « aucun texte ni logo lisible »).
      Persona DEMO renommé **Vincent Bonnardot** (consonance bourguignonne), citation
      ajustée à la première personne, `title` inchangé. L'alternative textuelle de
      l'image est générée depuis le nom et la fonction : elle suit automatiquement.
- [x] Vérifié : `tsc` propre, `npm run build` vert (40 pages), captures des écrans
      concernés en desktop et mobile. Piège rencontré et contourné : le cache d'images
      de Next servait encore l'ancien portrait (même nom de fichier), purge de
      `.next/cache/images` nécessaire pour le contrôle visuel local.

## Session du 27/07/2026 (Autoblog), VAGUE 2 du blog conseils, TEXTE UNIQUEMENT — TERMINÉE

15 drafts écrits dans `content/drafts/` (`016-` à `030-`), sujets n°16 à n°30 de la section 3
de `docs/CALENDRIER-EDITORIAL.md` (réécrit vague 2), dans l'ordre exact de la file, aucun
réordonnancement ni substitution :

- [x] `016-combien-de-temps-electricien-urgence-dijon.mdx` → `urgence-depannage-electricien` (I)
- [x] `017-electricien-garde-nuit-dijon-intervention.mdx` → `urgence-depannage-electricien` (I)
- [x] `018-que-dire-telephone-electricien-urgence.mdx` → `urgence-depannage-electricien` (I)
- [x] `019-tempete-annoncee-debrancher-appareils-precaution.mdx` → `panne-de-courant-coupure-electricite` (S)
- [x] `020-eclairage-secours-commerce-commission-securite.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `021-tableau-commerce-coupe-pendant-ouverture.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `022-renover-electricite-maison-ancienne-dijon.mdx` → `renovation-tableau-electrique` (I)
- [x] `023-differentiel-saute-apres-tempete-reflexe-normal.mdx` → `disjoncteur-qui-saute` (S)
- [x] `024-reperer-tableau-electrique-vetuste-signes.mdx` → `renovation-tableau-electrique` (I)
- [x] `025-percer-mur-ajouter-prise-cable-cache.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `026-installer-prise-exterieure-jardin-securite.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `027-mise-aux-normes-assurance-habitation-lien.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `028-prise-de-terre-absente-ajouter-sans-tout-refaire.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `029-ventilateur-climatiseur-mobile-circuit-disjoncte.mdx` → `disjoncteur-qui-saute` (I)
- [x] `030-chauffe-eau-electrique-disjoncte-automne.mdx` → `disjoncteur-qui-saute` (S)

Format : frontmatter complet (`title`, `slug`, `description`, `date` estimée depuis la
section 1 du calendrier, `category`, `cover`, `relatedServices`), corps avec 2 appels
d'image + légende chacun (`/conseils/<slug>-1.jpg` et `-2.jpg`, fichiers à produire par le
Builder, AUCUNE image générée par l'Autoblog), FAQ de 3 questions par article.

Auto-contrôles faits (scripts, pas seulement visuel) :
- `grep "—"` sur les 15 fichiers : aucune occurrence de tiret cadratin.
- `grep -c '!\['` sur les 15 fichiers : exactement 2 images en corps partout (aucun 0,
  leçon du 27/07/2026 sur les pages 100% texte).
- Frontmatter YAML validé par script Node (`gray-matter`) : 8 champs requis présents,
  `slug` cohérent avec le nom de fichier, `relatedServices` vérifiés un par un contre les
  8 slugs réels de `content/services/` (aucun slug inventé).
- FAQ : script de comparaison des 45 nouvelles questions contre les FAQ des 8 pages
  service, les 15 drafts/article déjà écrits (`002-015` + l'article publié) : aucun
  doublon exact détecté. Vérification sémantique manuelle en plus (ex. l'angle de
  `024-reperer-tableau-electrique-vetuste-signes` volontairement différent de la section
  « tableau vétuste » déjà présente dans `010-verifier-tableau-electrique-avant-hiver`).
- Ordre et service lié de chaque draft recoupés un par un avec la section 3 du calendrier :
  conformes, aucun écart.
- Zéro chiffre d'activité inventé, zéro certification. Sujets sensibles (assurance
  habitation art. 27, éclairage de secours ERP art. 20) rédigés en restant volontairement
  générique/conditionnel plutôt que de citer une règle ou un texte réglementaire précis
  non vérifié.

Commit **local sur `main`, SANS push** (le CEO audite puis pousse lui-même).

- [x] Audit CEO du contenu (doctrine + qualité + diff réel du commit)
- [x] Transmis au Builder pour production des visuels (30 images : 15 cover + 2×15 corps)

## Session du 27/07/2026 (Autoblog), VAGUE 3 du blog conseils, TEXTE UNIQUEMENT — TERMINÉE

Décision Rémy : produire d'avance la totalité des 78 articles, vagues enchaînées sans
attendre. 15 drafts écrits dans `content/drafts/` (`031-` à `045-`), sujets n°31 à n°45 de
la section 3 du calendrier, ordre exact respecté :

- [x] `031-fils-electriques-anciens-signes-alerte-avant-travaux.mdx` → `recherche-de-panne-electrique` (I)
- [x] `032-renover-electricite-avant-apres-travaux-ordre.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `033-box-internet-tv-ne-fonctionnent-plus-coupure.mdx` → `recherche-de-panne-electrique` (S)
- [x] `034-tableau-electrique-place-nouveau-circuit.mdx` → `renovation-tableau-electrique` (I)
- [x] `035-eclairage-exterieur-terrasse-regles-securite.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `036-protection-foudre-maison-ce-qui-existe.mdx` → `mise-aux-normes-nfc15100` (S)
- [x] `037-diagnostic-electrique-obligatoire-vendre-bien-dijon.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `038-defaut-isolement-diagnostic-grave-mineur.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `039-couper-courant-soi-meme-avant-arrivee-electricien.mdx` → `urgence-depannage-electricien` (I)
- [x] `040-panne-electrique-enfant-bas-age-precautions.mdx` → `urgence-depannage-electricien` (I)
- [x] `041-compteurs-individuels-copropriete-responsabilite-panne.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `042-rallonge-electrique-jardin-risques-brancher.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `043-chauffage-appoint-puissance-sans-disjoncteur.mdx` → `disjoncteur-qui-saute` (S)
- [x] `044-mise-aux-normes-avant-location-loi-impose.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `045-tableau-electrique-diagnostic-vente-points-bloquent.mdx` → `renovation-tableau-electrique` (I)

Texte uniquement (aucune image générée), même format que les vagues précédentes.

Auto-contrôles scriptés :
- `grep "—"` sur les 15 fichiers : zéro tiret cadratin.
- `grep -c '!\['` : exactement 2 images en corps partout.
- Frontmatter YAML validé par script (`gray-matter`) : 8 champs requis présents, `slug`
  cohérent avec le nom de fichier, `relatedServices` vérifiés contre les 8 slugs réels de
  `content/services/`.
- Ordre et service lié recoupés un par un avec la section 3 du calendrier : conformes.
- FAQ : script de comparaison des 45 nouvelles questions contre les 122 questions
  existantes (30 drafts/articles déjà écrits + 8 pages service) : aucun doublon exact.
  Vérification sémantique manuelle en plus sur les sujets les plus proches entre eux
  (037 diagnostic général de vente / 038 défaut d'isolement précis / 045 tableau
  spécifiquement, trois angles volontairement distincts sur un même thème).
- Sujets sensibles (parafoudre/paratonnerre §36, diagnostic de vente §37, mise aux normes
  avant location §44, lien assurance déjà traité en vague 2) rédigés en restant
  génériques/conditionnels, aucun texte réglementaire précis cité sans certitude qu'il est
  à jour.

Commit **local sur `main`, SANS push** (le CEO audite puis pousse lui-même).

- [x] Audit CEO du contenu (doctrine + qualité + diff réel du commit)
- [x] Transmis au Builder pour production des visuels (30 images : 15 cover + 2×15 corps,
      commit `1469ece`, règles images consolidées ensuite dans `4e7208f`)

## Session du 27/07/2026 (Autoblog), VAGUE 4 du blog conseils, TEXTE UNIQUEMENT — TERMINÉE

15 drafts écrits dans `content/drafts/` (`046-` à `060-`), sujets n°46 à n°60 de la section 3
du calendrier, ordre exact respecté. `git pull` fait en début de session (déjà à jour avec
`origin/main`, HEAD `4e7208f`) :

- [x] `046-tableau-coupe-tout-premiers-froids-diagnostic.mdx` → `recherche-de-panne-electrique` (S)
- [x] `047-locataire-proprietaire-qui-appelle-electricien-panne.mdx` → `urgence-depannage-electricien` (I)
- [x] `048-panne-electrique-personne-agee-ne-pas-attendre.mdx` → `urgence-depannage-electricien` (I)
- [x] `049-seche-serviette-panne-verifier-avant-appeler.mdx` → `recherche-de-panne-electrique` (S)
- [x] `050-difference-electricien-urgence-travaux-planifies.mdx` → `urgence-depannage-electricien` (I)
- [x] `051-bureaux-open-space-multiprises-tension-electrique.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `052-local-technique-chaufferie-immeuble-points-verifier.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `053-tableau-general-immeuble-panne-touche-tout-le-monde.mdx` → `electricien-syndic-copropriete-professionnels` (S)
- [x] `054-prise-ne-tient-plus-fiche-signe-usure.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `055-interrupteur-variateur-lequel-choisir-piece-par-piece.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `056-guirlandes-illuminations-noel-branchements-disjoncter.mdx` → `disjoncteur-qui-saute` (S, Noël assumé)
- [x] `057-prise-qui-chauffe-faut-il-inquieter.mdx` → `recherche-de-panne-electrique` (I)
- [x] `058-odeur-fumee-panne-electrique-pompiers-electricien.mdx` → `urgence-depannage-electricien` (I)
- [x] `059-decorations-lumineuses-exterieures-verifier-avant-brancher.mdx` → `remplacement-prises-interrupteurs-eclairage` (S, Noël assumé)
- [x] `060-panne-electrique-preparation-repas-evenement-reagir.mdx` → `urgence-depannage-electricien` (I)

Texte uniquement, aucune image générée. `git add content/drafts` UNIQUEMENT dans le commit
de contenu (consigne CEO, travail en parallèle avec le Builder dans le même dossier) :
`public/` jamais touché, ce journal committé séparément.

Auto-contrôles scriptés :
- `grep "—"` sur les 15 fichiers : zéro tiret cadratin.
- `grep -c '!\['` : exactement 2 images en corps partout.
- Frontmatter YAML validé par script (`gray-matter`) : 8 champs requis, `slug` cohérent,
  `relatedServices` vérifiés contre les 8 slugs réels.
- Ordre et service lié recoupés un par un avec la section 3 du calendrier : conformes.
- FAQ : 45 nouvelles questions comparées par script à 167 questions existantes (drafts +
  articles publiés + pages service) : aucun doublon exact.
- Point corrigé en cours de rédaction : l'article 048 (personne âgée) mentionnait
  initialement « hiver » alors qu'il est marqué intemporel (I) dans le calendrier ;
  reformulé en « températures extrêmes » (froid et chaleur) pour rester valable toute
  l'année, conformément à la consigne « intemporels sans marqueur de saison ».
- Sujets Noël (056, 059) assument pleinement les fêtes, comme demandé.

Commit **local sur `main`, SANS push** (le CEO audite puis pousse lui-même). Hash exact du
commit de contenu : `55b792d` (`content(autoblog): vague 4 des drafts blog conseils`).

- [x] Audit CEO du contenu (doctrine + qualité + diff réel du commit `55b792d`)
- [x] Transmis au Builder pour production des visuels (30 images : 15 cover + 2×15 corps,
      commit `feeb43b`, règles images enrichies ensuite dans `24f7068`)

## Session du 27/07/2026 (Autoblog), VAGUE 5 du blog conseils, LA DERNIÈRE — TERMINÉE

18 drafts écrits dans `content/drafts/` (`061-` à `078-`), sujets n°61 à n°78 de la section 3
du calendrier, ordre exact respecté. **Les 78 articles du calendrier sont désormais tous
rédigés** (11 publiés + 67 en drafts, préfixes `012-` à `078-`). `git pull` fait en début de
session (déjà à jour, HEAD `24f7068`) :

- [x] `061-eclairage-parties-communes-eteint-marche-suivre-syndic.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `062-restaurant-commerce-alimentaire-obligations-chambres-froides.mdx` → `electricien-syndic-copropriete-professionnels` (I)
- [x] `063-multiprises-fetes-fin-annee-limite-ne-pas-depasser.mdx` → `panne-de-courant-coupure-electricite` (S)
- [x] `064-norme-electrique-achat-maison-ancienne-campagne-dijon.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `065-mise-aux-normes-partielle-totale-quoi-necessaire.mdx` → `mise-aux-normes-nfc15100` (I)
- [x] `066-remplacer-prise-courant-prise-usb-integre.mdx` → `remplacement-prises-interrupteurs-eclairage` (I)
- [x] `067-coupure-courant-repas-fete-marche-suivre-avant-appeler.mdx` → `panne-de-courant-coupure-electricite` (S)
- [x] `068-disjoncteur-saute-demarrage-appareil-identifier-coupable.mdx` → `disjoncteur-qui-saute` (I)
- [x] `069-disjoncteur-saute-allumage-radiateur-electrique.mdx` → `disjoncteur-qui-saute` (S)
- [x] `070-multiprise-surchargee-risque-reel-geste-courant.mdx` → `panne-de-courant-coupure-electricite` (I)
- [x] `071-coupure-courant-voisin-mais-pas-chez-moi.mdx` → `panne-de-courant-coupure-electricite` (I)
- [x] `072-chauffage-appoint-tableau-erreurs-provoquent-coupure.mdx` → `panne-de-courant-coupure-electricite` (S)
- [x] `073-compteur-linky-anomalie-panne-reelle-simple-message.mdx` → `panne-de-courant-coupure-electricite` (I)
- [x] `074-disjoncteur-saute-plusieurs-appareils-meme-temps.mdx` → `disjoncteur-qui-saute` (I)
- [x] `075-convecteur-ne-chauffe-plus-panne-electrique-ou-appareil.mdx` → `recherche-de-panne-electrique` (S)
- [x] `076-tableau-electrique-deux-rangees-pourquoi-necessaire.mdx` → `renovation-tableau-electrique` (I)
- [x] `077-logement-ancien-dijon-plusieurs-radiateurs-electriques.mdx` → `renovation-tableau-electrique` (S)
- [x] `078-renovation-tableau-electrique-etre-present-intervention.mdx` → `renovation-tableau-electrique` (I)

Texte uniquement. `git add content/drafts` UNIQUEMENT dans le commit de contenu (consigne
CEO), `public/` jamais touché, ce journal committé séparément.

Auto-contrôles scriptés :
- Zéro tiret cadratin, 2 images en corps partout, frontmatter YAML complet (8 champs),
  `slug` cohérent, `relatedServices` vérifiés contre les 8 slugs réels.
- Ordre, titre, service et date estimée recoupés un par un avec la section 3 et la
  section 1 (correspondance position → date) du calendrier : conformes. Dates calculées
  sur la cadence réelle lun/mer/ven depuis le 27/07/2026 (position 78 = 22/01/2027,
  coïncide exactement avec la fin de fenêtre indiquée par le calendrier).
- FAQ : 54 nouvelles questions comparées par script à 212 questions existantes (le compte
  exact annoncé par le CEO) : aucun doublon exact.
- Règle formelle du 4bis (aucune légende ne décrit de texte lisible) : script de balayage
  lexical (« affiche », « écran », « étiquette », « marqué »...) sur les 18 fichiers, 1 cas
  trouvé et corrigé (073, légendes reformulées pour ne plus mentionner l'écran du compteur
  communicant, sujet de l'article).
- Sujets sensibles traités en générique/conditionnel, sécurité d'abord : 062 (chambre
  froide, aucune obligation légale précise citée), 058 déjà en référence de ton pour 073
  et 075 (diagnostic calme, pas de dramatisation).

Commit **local sur `main`, SANS push**. Hash exact du commit de contenu : `a8c466d`
(`content(autoblog): vague 5 des drafts blog conseils`).

- [ ] Audit CEO du contenu (doctrine + qualité + diff réel du commit `a8c466d`)
- [ ] Transmettre au Builder pour production des visuels (36 images : 18 cover + 2×18 corps)
- [ ] Portefeuille de contenu du calendrier COMPLET : plus aucune vague de texte à prévoir
      sauf réapprovisionnement futur du calendrier lui-même (au-delà de janvier 2027)

## En attente de Rémy

- Achat du domaine `sos-electricien-dijon.fr` (vérifié disponible le 26/07/2026)
- Numéro 09 dédié (le site affichera un numéro de la plage ARCEP réservée à la fiction
  en attendant, marqué `phoneIsDemo: true`)
- Email de contact réel
- Nom commercial et identité réelle de l'artisan (persona en DEMO)
- Assurance de l'artisan (RC pro / décennale) pour `content/legal.json`
- Rayon d'intervention Dijon (30 km comme Metz ? conditionne une éventuelle vague 2 de
  communes : Gevrey-Chambertin, Genlis, Nuits-Saint-Georges)
