# Asseoir son identité — mise en vente

Page : `/asseoir-son-identite/`.

La page propose deux boutons **Acheter l’audio — 19 €**, au milieu et en bas, reliés au produit [dOrxa sur Payhip](https://payhip.com/b/dOrxa).

Les deux boutons ouvrent une fenêtre superposée avec la **fiche produit Payhip**, avant le paiement. La fenêtre utilise l’intégration officielle de page : `payhip-embed-page`, `data-key="dOrxa"` et `https://payhip.com/embed-page.js`. Le script est chargé au premier clic uniquement. La navigation interne et le retour par l’historique sont pris en charge.

La fenêtre se ferme avec le bouton « Fermer », la touche Échap ou un clic sur le fond. Un lien permet d’ouvrir Payhip dans un autre onglet si la fiche ne s’affiche pas, en conservant le site ouvert.

Les deux commandes d’achat sont de vrais boutons, sans `href` ni `target`. Leur clic est géré au niveau du document pour fonctionner après un remplacement du contenu. La fenêtre ne dépend pas de `showModal`. Seul le lien explicite « Ouvrir sur Payhip » permet d’ouvrir un autre onglet.

Les contrôles techniques vérifient les deux emplacements, le lien du produit, la fenêtre et son chargement à la demande. L’affichage réel de la fiche, le parcours d’achat et le fonctionnement sur téléphone doivent être vérifiés dans un navigateur avant publication. Payhip bloque actuellement les lectures automatiques depuis cet environnement.

## Parcours conseillé

1. Dans Payhip, créer un **produit numérique** nommé « Asseoir son identité ».
2. Téléverser le MP3 complet de 14 minutes et fixer son prix à **19 €**.
3. Relier le compte **Stripe à Payhip**, dans les paramètres de paiement de Payhip. Le produit et son tarif se gèrent dans Payhip ; il n’est pas nécessaire de créer une deuxième fiche produit dans Stripe ou Brevo.
4. Vérifier les réglages de vente, de taxes et de livraison du produit dans Payhip. Vérifier le montant affiché au client avant l’ouverture.
5. Copier le lien public du produit, de la forme `https://payhip.com/b/…`, dans `checkoutUrl` du fichier `src/audio-config.json`.
6. Recompiler avec `npm run build`, puis vérifier avec `npm run check:build` et publier le dossier `docs` par le circuit de déploiement habituel du site.
7. Vérifier un achat et l’e-mail de téléchargement avant d’annoncer l’ouverture des ventes.

Le champ `checkoutUrl` contient actuellement `https://payhip.com/b/dOrxa`. S’il est vidé, les deux emplacements affichent de nouveau **Bientôt disponible**. L’e-mail de téléchargement est envoyé par Payhip. Brevo peut servir aux newsletters et aux annonces, selon les consentements recueillis.

## Médias

Les deux portraits et les vidéos sont dans `public/audio/asseoir-son-identite/`. Les photos originales sont conservées ; le recadrage et les fondus se font en CSS.

- `bande-annonce-horizontal.mp4` : 1920 × 1080, environ 39 secondes.
- `bande-annonce-vertical.mp4` : 1080 × 1920, environ 39 secondes.
- Le lecteur ne charge qu’une vidéo, au clic, selon la largeur de l’écran : verticale jusqu’à 768 px, horizontale au-delà.
- Les images JPG sont les premières images des deux bandes-annonces.

Le MP3 complet reste dans Payhip et ne doit pas être ajouté au dossier public du site.

## Documentation des services

- [Parcours d’achat et livraison Payhip](https://help.payhip.com/article/132-how-payhip-works)
- [Relier Stripe à Payhip](https://help.payhip.com/article/65-connecting-your-stripe-account)
- [Liens de paiement Brevo](https://help.brevo.com/hc/en-us/articles/9084716955026-What-is-Payments)
