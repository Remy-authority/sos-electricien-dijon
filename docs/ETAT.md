# ETAT.md — Journal de bord SOS Électricien Dijon

> Mémoire du projet. Chaque session lit ce fichier en arrivant et le met à jour avant de finir.
> Dernière mise à jour : 2026-07-26 (création du dossier, session CEO-portefeuille).

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
- `config/site.config.ts`, `content/services/*.json`, `content/zones/*.json`,
  `content/legal.json`, `public/logo.svg` : encore ceux de Metz (débouchage), servent de MODÈLES
  de structure, à réécrire intégralement pour électricien/Dijon.
- Les images services/zones/conseils ont été vidées ; les drafts autoblog de Metz supprimés.

## 2. RESTE À FAIRE (checklist playbook)

- [ ] Rémy : valider le domaine (8 candidats libres, voir conversation CEO-portefeuille), l'acheter, fournir le numéro 09 dédié + email + nom commercial
- [ ] CEO : créer le repo GitHub + le projet Vercel + poser `SEO_NOINDEX=1` en env Production AVANT tout déploiement (procédé validé sur Metz)
- [ ] SEO : carte mots-clés électricien Dijon + `docs/SEO-GEO-PLAN.md` + `docs/CALENDRIER-EDITORIAL.md` (codes postaux des communes à vérifier sur geo.api.gouv.fr, leçon de Metz)
- [ ] Builder : `config/site.config.ts` (identité, palette électricien propre, persona DEMO) + `content/legal.json`
- [ ] Builder : réécrire `content/services/*.json` et `content/zones/*.json` (communes agglo Dijon) selon le plan SEO
- [ ] Builder sur Opus : identité visuelle Dijon (ADN PROTEC-DARD conservé, rendu distinct de Metz)
- [ ] Builder : logo, portrait persona, images (hero + 2-3 par page, 1 image UNIQUE par commune, aucun texte/logo/visage flou, décors bourguignons)
- [ ] Autoblog : drafts T1 (préfixes 001-…)
- [ ] Contrôle visuel CEO (comparer aussi côte à côte avec Metz : assez distinct ?) → validation Rémy → mise en ligne (Étape 6)

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
