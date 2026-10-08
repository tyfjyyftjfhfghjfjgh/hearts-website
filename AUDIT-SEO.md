# Audit SEO et visibilité — 8 octobre 2026

## Vérifié dans le projet

- Les 25 pages françaises ont un HTML rendu lors de la compilation, un titre, une description, un H1 et une URL canonique propres.
- Les liens internes des pages générées existent. La page `/tarifs/` conserve son adresse.
- `robots.txt` autorise l'exploration ; `sitemap.xml` contient les 25 adresses françaises.
- Aucune balise `noindex` n'est présente dans les pages générées.
- Les données structurées `WebSite` et `ProfessionalService` figurent sur l'accueil.
- La prévisualisation espagnole comprend les 25 équivalents, avec titres, descriptions, liens FR/ES, `hreflang` et sitemap bilingue. Elle est désactivée dans la compilation publique avant relecture.
- La détection automatique FR/ES suit la préférence du navigateur sur les liens directs ; le choix explicite FR | ES est mémorisé et prioritaire. Elle ne s'active qu'avec la version espagnole validée.

## Vérifié sur le site actuellement en ligne

- `https://heart-resonance.com/` et `/reserver/` répondaient avec HTTP 200 avant publication de ces changements.
- `https://heart-resonance.com/robots.txt` et `/sitemap.xml` répondaient avec HTTP 404. Les nouveaux fichiers corrigeront cela après publication.
- L'API PageSpeed Insights a répondu HTTP 429 ; aucun score mobile fiable n'a pu être obtenu.

## À vérifier avec accès au compte ou après publication

- Statut de propriété, couverture d'indexation et soumission du sitemap dans Google Search Console.
- Champs, catégorie, langues et lieux réels de Google Business Profile.
- Liens de retour vers le site dans Instagram et les autres profils professionnels.
- Réponse HTTP publique des nouveaux fichiers après publication, puis inspection d'URL dans Search Console.
- Rendu visuel sur téléphone et ordinateur et langue des formulaires Brevo.

Documentation : [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [robots OpenAI](https://developers.openai.com/api/docs/bots).
