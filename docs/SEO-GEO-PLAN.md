# SEO-GEO-PLAN.md — SOS Électricien Dijon

> Plan de mots-clés, pages et stratégie SEO/GEO. Rédigé par l'agent SEO le 27/07/2026.
> Périmètre : `docs/` uniquement. Le Builder écrit les fichiers `content/*.json` à partir
> de ce plan, dans le format déjà utilisé par le socle hérité de Metz.

---

## 1. Doctrine (rappel, voir CLAUDE.md)

- Pas de fiche Google Business, pas d'avis clients. Tout repose sur le **SEO organique**
  et le **GEO** (citation par ChatGPT, Perplexity, AI Overviews).
- Interdits absolus : bourrage de mots-clés, chiffres inventés (nb d'interventions, années
  d'expérience...), fausses certifications/labels, phrases creuses de remplissage, tiret
  cadratin « — » dans les textes (utiliser une virgule ou un point).
- Contenu vrai, précis, local. Une donnée non confirmée par Rémy → on ne l'affiche pas
  (cf. `phoneIsDemo`, persona `DEMO`, `legal.showAddress=false` dans `config/site.config.ts`).
- Structure imposée : 1 accueil, 1 page par service, 1 page par commune, 1 blog conseils,
  mentions légales. FAQ sur chaque page (utilité + données structurées + citabilité IA).

## 2. Méthode de vérification des codes postaux

Leçon retenue du site de Metz : ne jamais indiquer un code postal de mémoire. Chaque
commune ci-dessous a été vérifiée le 27/07/2026 via l'API officielle de l'État
`geo.api.gouv.fr` (endpoint `/communes?nom=...&codeDepartement=21`). Résultat brut conservé
ci-dessous pour audit.

**Point d'attention pour le Builder** : plusieurs petites communes partagent le code postal
du bureau distributeur d'une commune voisine plus grande (ex. 21800 dessert Quetigny,
Chevigny-Saint-Sauveur, Sennecey-lès-Dijon ET Neuilly-Crimolois ; 21121 dessert
Fontaine-lès-Dijon, Ahuy, Daix ET Hauteville-lès-Dijon). Ce n'est pas une erreur : ne pas
« corriger » ces doublons apparents.

**Cas particulier Neuilly-Crimolois** : Neuilly-lès-Dijon et Crimolois ont fusionné en une
commune nouvelle unique, « Neuilly-Crimolois » (code Insee 21452, code postal 21800). Il
n'existe administrativement plus qu'UNE commune. Recommandation : une seule page zone,
nommée « Neuilly-lès-Dijon et Crimolois » dans le `h1`/`intro` pour capter les deux
recherches locales, `name` = « Neuilly-Crimolois » dans les métadonnées techniques.

---

## 3. Carte des mots-clés par intention

Regroupement par intention de recherche, pas par simple liste de mots. Chaque cluster
correspond à une page SERVICE (section 4). Aucun volume de recherche ni CPC par mot-clé
n'est avancé ici : ce sont des estimations non vérifiées et la doctrine interdit d'afficher
des chiffres non confirmés. Le CPC/volume globaux du métier ont déjà été estimés au niveau
du benchmark portefeuille (voir `RENT & RANK/docs/BENCHMARK.md`), pas repris ici.

### Cluster 1, Urgence générique (page pilier)
dépannage électrique urgence, électricien urgence Dijon, électricien de garde, panne
électrique la nuit, électricien disponible weekend, électricien pas cher urgence (à traiter
avec prudence, cf. doctrine anti-remplissage : ne pas promettre de prix bas non tenable).

### Cluster 2, Panne de courant / coupure
panne de courant maison, coupure électrique partielle, plus de courant dans une pièce,
coupure de courant après orage, plus d'électricité que faire, courant coupé disjoncteur EDF.

### Cluster 3, Disjoncteur qui saute
disjoncteur qui saute sans arrêt, disjoncteur qui disjoncte, différentiel qui saute,
disjoncteur qui saute quand j'allume la lumière, fusible qui saute, tableau électrique
qui disjoncte au branchement d'un appareil.

### Cluster 4, Recherche de panne / court-circuit
recherche de panne électrique, court-circuit maison, odeur de brûlé prise électrique,
prise qui grésille, fil électrique qui chauffe, panne électrique intermittente.

### Cluster 5, Tableau électrique
rénovation tableau électrique, remplacement tableau électrique vétuste, tableau électrique
ancien fusible porcelaine, changer disjoncteur différentiel, tableau électrique qui ne
suffit plus (extension logement).

### Cluster 6, Mise aux normes (NF C 15-100)
mise aux normes électriques, diagnostic électricité obligatoire vente, état de
l'installation intérieure d'électricité, norme électrique salle de bain volumes, mise en
conformité installation électrique location.

### Cluster 7, Petites réparations / éclairage
remplacement prise électrique, changer un interrupteur, prise qui ne fonctionne plus,
installation applique ou spot, ajout prise électrique, va-et-vient qui ne fonctionne plus.

### Cluster 8, Professionnels / copropriété
électricien copropriété, électricien tertiaire, mise aux normes parties communes immeuble,
tableau électrique général immeuble, éclairage de secours obligatoire commerce, électricien
syndic Dijon.

### Cluster GEO transverse (toutes pages)
Formulations conversationnelles pour la citabilité IA : « qui appeler quand le disjoncteur
saute à Dijon », « comment savoir si mon tableau électrique est aux normes », « faut-il
couper le courant avant d'appeler un électricien ». Ces formulations alimentent les FAQ.

---

## 4. Pages SERVICES (liste exacte, 8 pages)

Même structure JSON que Metz (`content/services/*.json`) : `slug`, `order`, `icon`,
`navTitle`, `h1`, `metaTitle`, `metaDescription`, `intro`, `bullets`, `blocks`,
`relatedServices`, `faq`, `image`.

| # | slug | Page (h1 type) | Cluster mots-clés | Rôle |
|---|------|-----------------|--------------------|------|
| 1 | `urgence-depannage-electricien` | Électricien d'urgence à Dijon | Cluster 1 | Page pilier, équivalent de « urgence-debouchage » à Metz, la plus liée depuis l'accueil |
| 2 | `panne-de-courant-coupure-electricite` | Panne de courant et coupure d'électricité à Dijon | Cluster 2 | Symptôme le plus fréquent, forte intention urgence |
| 3 | `disjoncteur-qui-saute` | Disjoncteur qui saute à répétition à Dijon | Cluster 3 | Symptôme n°1 recherché en langage courant |
| 4 | `recherche-de-panne-electrique` | Recherche de panne électrique et court-circuit à Dijon | Cluster 4 | Diagnostic, valorise l'expertise technique |
| 5 | `renovation-tableau-electrique` | Rénovation et remplacement de tableau électrique à Dijon | Cluster 5 | Panier moyen plus élevé, moins urgent |
| 6 | `mise-aux-normes-nfc15100` | Mise aux normes électriques (NF C 15-100) à Dijon | Cluster 6 | Cible vendeurs/bailleurs, complète le diagnostic immobilier |
| 7 | `remplacement-prises-interrupteurs-eclairage` | Remplacement de prises, interrupteurs et éclairage à Dijon | Cluster 7 | Petites interventions, volume de recherche large |
| 8 | `electricien-syndic-copropriete-professionnels` | Électricien pour copropriétés et professionnels à Dijon | Cluster 8 | Équivalent du « bac à graisse » de Metz, cible B2B/syndics |

Maillage `relatedServices` recommandé :
- 1 (pilier) ↔ 2, 3, 4 (toutes les urgences renvoient vers/depuis la pilier)
- 3 ↔ 4 (disjoncteur qui saute mène souvent à une recherche de panne)
- 5 ↔ 6 (tableau vétuste et mise aux normes vont ensemble)
- 8 en lien avec 5 et 6 (un syndic fait aussi remplacer des tableaux et mettre aux normes)

---

## 5. Pages COMMUNES (liste exacte, 15 pages)

Dijon Métropole compte 23 communes. Dijon elle-même porte l'accueil, pas de page zone.
Sélection de 15 communes prioritaires par population/proximité, sur le même principe que
Metz (les communes les plus petites sont citées comme `neighbours` sur les pages voisines,
sans page dédiée, cf. section 5bis).

Toutes les données ci-dessous sont vérifiées le 27/07/2026 sur `geo.api.gouv.fr`.

| # | slug | Commune (nom officiel) | Code postal | Population | Contexte pour `context`/`intro` |
|---|------|--------------------------|--------------|-------------|----------------------------------|
| 1 | `chenove` | Chenôve | 21300 | 14 244 | Ville la plus peuplée de la 1ère couronne sud, quartiers d'habitat collectif et pavillonnaire |
| 2 | `talant` | Talant | 21240 | 11 896 | Plateau ouest de Dijon, mix pavillonnaire ancien et collectif |
| 3 | `chevigny-saint-sauveur` | Chevigny-Saint-Sauveur | 21800 | 11 108 | Est de l'agglomération, pavillonnaire récent |
| 4 | `fontaine-les-dijon` | Fontaine-lès-Dijon | 21121 | 9 252 | Nord de Dijon, coteau et bâti resserré |
| 5 | `longvic` | Longvic | 21600 | 8 896 | Sud, proximité aéroport et zones d'activité, mix résidentiel/pro |
| 6 | `quetigny` | Quetigny | 21800 | 8 971 | Est, ville nouvelle des années 70, beaucoup de collectif |
| 7 | `saint-apollinaire` | Saint-Apollinaire | 21850 | 7 544 | Nord-est, pavillonnaire résidentiel |
| 8 | `marsannay-la-cote` | Marsannay-la-Côte | 21160 | 5 433 | Sud, entrée de la route des grands crus, bâti ancien et pavillonnaire |
| 9 | `neuilly-crimolois` | Neuilly-Crimolois (ex Neuilly-lès-Dijon et Crimolois) | 21800 | 3 588 | Sud-est, commune nouvelle, pavillonnaire |
| 10 | `plombieres-les-dijon` | Plombières-lès-Dijon | 21370 | 2 497 | Nord-ouest, vallée encaissée, bâti ancien |
| 11 | `perrigny-les-dijon` | Perrigny-lès-Dijon | 21160 | 2 385 | Sud, résidentiel proche Marsannay |
| 12 | `sennecey-les-dijon` | Sennecey-lès-Dijon | 21800 | 2 151 | Est, pavillonnaire résidentiel |
| 13 | `ahuy` | Ahuy | 21121 | 1 718 | Nord, pavillonnaire résidentiel calme |
| 14 | `fenay` | Fénay | 21600 | 1 708 | Sud, proche Longvic, résidentiel |
| 15 | `daix` | Daix | 21121 | 1 515 | Nord-ouest, coteau résidentiel |

### 5bis. Communes citées en `neighbours` uniquement (pas de page dédiée)

Ouges (21600, 1 402 hab.), Hauteville-lès-Dijon (21121, 1 195 hab.), Bressey-sur-Tille
(21560, 1 096 hab.), Bretenière (21110, 959 hab.), Magny-sur-Tille (21110, 874 hab.),
Corcelles-les-Monts (21160, 684 hab.), Flavignerot (21160, 232 hab.). Si le volume de leads
justifie une extension plus tard, ces communes sont les candidates naturelles pour une
vague 2 de pages zones (population encore vérifiée à cette date, revérifier si réutilisé
dans plus de 6 mois).

---

## 6. Stratégie GEO (citabilité par les IA)

- **FAQ structurée sur chaque page** (service, commune, accueil) au format question directe
  en langage courant, réponse factuelle et complète en 2-4 phrases. C'est le format que les
  IA génératives reprennent le plus facilement en citation.
- **Contenu procédural et vérifiable** : décrire concrètement CE QUI SE PASSE (ex. « un
  différentiel qui saute au branchement d'un appareil précis indique un défaut d'isolement
  sur cet appareil, pas sur l'installation ») plutôt que des formules commerciales vagues.
  C'est ce qui rend un passage citable par une IA en réponse à une question d'utilisateur.
- **Pas de doublon inter-pages** : chaque page commune doit avoir une intro et des blocs
  reformulés avec un vrai contexte local (bâti, quartier, spécificité), jamais un gabarit
  recopié avec juste le nom de la ville changé, à l'image de ce qui a été fait à Metz.
- **`app/llms.txt` déjà présent dans le socle** : le Builder doit le mettre à jour avec
  l'identité Dijon (métier, zone, structure des pages) une fois `site.config.ts` réécrit.
- **Données structurées** : `LocalBusiness`/`Electrician` schema.org avec `areaServed`
  listant les 15 communes de la section 5, `FAQPage` schema sur les pages qui portent une
  FAQ. Pas de champ `review`/`aggregateRating` (doctrine zéro avis).
- **Cohérence NAP-like sans adresse physique** : tant que `legal.showAddress=false`, la
  cohérence GEO repose sur le nom du site, le téléphone et la zone `areaServed`, pas sur une
  adresse. Ne pas inventer d'adresse pour « faire local ».

## 7. Maillage interne

- Accueil → les 8 pages services (nav principale) → page commune si le visiteur précise sa
  ville (formulaire de contact avec champ commune).
- Chaque page commune renvoie vers 2-3 services les plus pertinents pour son profil de bâti
  (ex. Plombières-lès-Dijon, bâti ancien : mise en avant de « rénovation tableau électrique »
  et « mise aux normes » plutôt que « petites réparations »).
- Chaque page commune liste ses `neighbours` (communes limitrophes, page dédiée ou non) avec
  un lien si la page existe, sinon simple mention textuelle (cf. modèle Metz).
- Le blog conseils (section suivante) relie systématiquement vers 1 page service et,
  quand pertinent, vers 1 page commune.

## 8. Prochaines étapes (Builder)

- Écrire `config/site.config.ts` : identité Dijon (`businessName`, `trade`, palette propre à
  l'électricité, `serviceArea` avec les 15 communes + quartiers de Dijon en `districts`).
- Écrire les 8 fichiers `content/services/*.json` à partir de la section 4.
- Écrire les 15 fichiers `content/zones/*.json` à partir de la section 5, `postalCode` copié
  tel quel depuis le tableau (ne pas re-vérifier, déjà fait).
- Réécrire `content/legal.json` (éditeur, contact) une fois les infos fournies par Rémy.
- Voir `docs/CALENDRIER-EDITORIAL.md` pour la file d'attente d'articles du blog conseils.
