# INFRA-PORTEFEUILLE.md — Recettes standard pour tout site N+1

> Ce repo est le TEMPLATE des prochains sites : ce fichier voyage avec la duplication.
> Règles validées par Rémy le 27/07/2026 sur le site n°4 (Dijon). À appliquer telles
> quelles à chaque nouveau site, sauf décision contraire de Rémy.

## 1. Zone DNS OVH (mode textuel), gabarit complet

Remplacer `<domaine>` et le TXT Google. Conserver les lignes SOA/NS que OVH affiche
(le serial change à chaque import, reprendre celui affiché).

```
$TTL 3600
@	IN SOA dns10.ovh.ca. tech.ovh.net. (XXXXXXXXXX 86400 3600 3600000 60)
	IN NS      dns10.ovh.ca.
	IN NS      ns10.ovh.ca.
	IN A       76.76.21.21
	IN MX      10 mx1.forwardemail.net.
	IN MX      10 mx2.forwardemail.net.
	IN TXT     "forward-email=contact:remy@remyzaoui.com"
	IN TXT     "v=spf1 include:spf.forwardemail.net ~all"
	IN TXT     "google-site-verification=<code fourni par Search Console>"
www	IN CNAME   cname.vercel-dns.com.
```

- Site → Vercel : `A @ 76.76.21.21` + `CNAME www cname.vercel-dns.com.`
  (côté Vercel, le CEO rattache d'abord les 2 domaines au projet : www en principal,
  apex en redirection 308).
- Email → ForwardEmail (gratuit, AUCUN compte à créer, tout est dans le DNS) :
  MX + TXT `forward-email=contact:remy@remyzaoui.com`. PAS de redirection OVH
  (l'offre gratuite n'existe plus pour les nouveaux domaines).
- Google Search Console : propriété type **Domaine** (pas Préfixe d'URL), vérification
  par le TXT ci-dessus. Le CEO peut vérifier la propagation : `dig TXT <domaine>`.

## 2. Google Search Console

1. Créer la propriété type « Domaine » dès que le domaine est acheté (indépendant du
   contenu du site, le noindex ne gêne pas).
2. NE PAS soumettre le sitemap tant que `SEO_NOINDEX=1` est en place (sinon rapport
   pollué d'erreurs « bloquée par robots.txt »).
3. Le jour de l'Étape 6 (retrait du noindex + redéploiement + robots vérifié en
   `Allow`) : Search Console → Sitemaps → saisir `sitemap.xml` → Envoyer.

## 3. Numéro de téléphone dédié (un par site, preuve d'appels pour la location)

- Compte Twilio de Rémy. Identifiants + SIDs dans
  `APPLICATIONS/RépondeurIA/leadcatch/.env.local` (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,
  TWILIO_FR_BUNDLE_SID, TWILIO_FR_ADDRESS_SID).
- **Type de numéro : 09 (national).** C'est le SEUL type compatible avec le dossier
  réglementaire approuvé du compte (« France: National - Individual »). Les numéros
  géographiques 01-05 exigent un dossier « Local » avec justificatif d'adresse en zone
  (le compte n'en a pas), les mobiles ne sont pas vendus par Twilio FR.
- Recherche : `GET /2010-04-01/Accounts/<SID>/AvailablePhoneNumbers/FR/Local.json`
  puis filtrer les `+339...` (l'endpoint « National » n'existe pas ; le stock 09 est
  intermittent, poser une surveillance si vide).
- Achat : `POST /IncomingPhoneNumbers.json` avec `PhoneNumber`, `BundleSid`, `AddressSid`
  et `FriendlyName` = `<Nom du site> - NE PAS REATTRIBUER (rank&rent)`.
- Tant que le numéro n'est pas injecté par le Builder, le site garde le numéro fiction
  ARCEP (`03 53 01 XX XX`) avec `phoneIsDemo: true`, et le noindex reste en place.

## 4. Mentions légales / assurance

Décision Rémy (27/07/2026, définitive pour le portefeuille) : **pas d'assurance affichée**
(pas de RC pro / décennale dans `content/legal.json`). Doctrine inchangée : on n'affiche
jamais une donnée non confirmée ; l'artisan locataire affichera la sienne s'il le veut.

## 4bis. Blog / autoblog, règles de production (décisions du 27/07/2026)

- **Circuit des rôles, strict** : texte des articles = agent Autoblog (Sonnet) ; images
  (covers + corps) = Builder ; sujets et ordre de la file = agent SEO ; audit avant toute
  publication = CEO. Une demande hors rôle se remonte au CEO, elle ne s'exécute pas.
- Chaque article : 1 cover + au moins 2 images légendées en corps
  (`/conseils/<slug>.jpg`, `/conseils/<slug>-N.jpg`). Contrôle :
  `grep -c '![' content/conseils/*.mdx content/drafts/*.mdx` ne doit renvoyer aucun 0.
- **Poids des images (à partir de la vague 2 et pour tout site N+1)** : 1200 px de large,
  JPEG qualité 75. Les images déjà produites ne sont pas retraitées.
- Cadence type validée sur Dijon : 3 publications/semaine (lun/mer/ven, cron GitHub),
  production par vagues de 15 articles auditées par le CEO entre chaque.
- File d'attente : alterner 1 sujet saisonnier / 2 sujets intemporels pour que la
  saisonnalité tienne à ce rythme (un calendrier « 4 sujets/mois » se consomme 3x trop vite).

## 5. Étape 6 (mise en ligne réelle), déroulé CEO

1. Prérequis : numéro réel injecté, validation finale Rémy, DNS propagé.
2. `vercel env rm SEO_NOINDEX production` + redéploiement.
3. Vérifier : robots.txt passe en `Allow` avec la ligne `Sitemap:`, homepage 200,
   canonical www, sitemap 200.
4. Rémy soumet le sitemap dans Search Console (section 2).
