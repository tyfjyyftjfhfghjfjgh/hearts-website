# Audit SEO et visibilité — 28 novembre 2026

## Vérifié dans le projet

- Les 26 pages françaises, dont la fiche de l’audio « Asseoir son identité », ont un HTML rendu lors de la compilation, un titre, une description, un H1 et une URL canonique propres.
- Les liens internes des pages générées existent. La page `/tarifs/` conserve son adresse.
- `robots.txt` autorise l'exploration et indique l’adresse du sitemap. Celui-ci contient les 26 adresses françaises.
- Aucune balise `noindex` n'est présente dans les pages générées.
- Les données structurées `WebSite` et `ProfessionalService` figurent sur l'accueil.
- La prévisualisation espagnole est désactivée dans la compilation publique avant relecture.
- La détection automatique FR/ES suit la préférence du navigateur sur les liens directs ; le choix explicite FR | ES est mémorisé et prioritaire. Elle ne s'active qu'avec la version espagnole validée.

## Vérifié sur le site actuellement en ligne

- Le 28 novembre, chaque adresse du sitemap a renvoyé HTTP 200 avec sa propre URL canonique HTTPS. Les 26 pages étaient accessibles depuis l’accueil en suivant les liens HTML, JavaScript désactivé.
- [Le fichier robots.txt](https://heart-resonance.com/robots.txt) et [le sitemap](https://heart-resonance.com/sitemap.xml) répondaient tous deux avec HTTP 200. Une adresse inexistante renvoyait HTTP 404.
- Le domaine publie un enregistrement DNS de vérification Google. Le rapport d’indexation se consulte avec un compte autorisé dans [Google Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Aheart-resonance.com).

## À vérifier avec accès au compte ou après publication

- Statut de propriété, couverture d'indexation et soumission du sitemap dans Google Search Console.
- Champs, catégorie, langues et lieux réels de Google Business Profile.
- Liens de retour vers le site dans Instagram et les autres profils professionnels.
- Les rubriques livres et ateliers contiennent encore des textes provisoires. Renseigner les titres, descriptions et dates réels lorsqu’ils seront disponibles.
- Rendu visuel sur téléphone et ordinateur et langue des formulaires Brevo.

Documentation : [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [robots OpenAI](https://developers.openai.com/api/docs/bots).
