# Relecture de la version espagnole

La version espagnole est préparée mais désactivée dans la compilation publique. Les traductions automatiques et les corrections de terminologie sont dans `src/es-translations.json` et `src/es-overrides.json`.

Pour voir le brouillon local sauvegardé dans `.spanish-preview`, lancer `npm run preview:es`, puis ouvrir l'adresse locale indiquée par Vite et aller sur `/es/`. Le bouton FR | ES est masqué pour le moment ; les pages françaises et espagnoles restent accessibles par leurs adresses directes.

Quand la version espagnole sera activée, le site utilisera la première langue française ou espagnole annoncée par le navigateur. Une personne qui ouvre un lien français avec un navigateur réglé sur l'espagnol sera dirigée vers la même rubrique en espagnol. Un choix explicite par FR | ES est mémorisé dans ce navigateur et prime ensuite sur la détection automatique. Un lien direct `/es/` reste toujours en espagnol. Cette détection est désactivée dans la compilation publique tant que la version espagnole attend votre validation.

Le choix explicite est conservé localement pendant 180 jours, puis la langue du navigateur est de nouveau utilisée. Une mention correspondante figure dans la politique de confidentialité lorsque la version bilingue est activée.

Les pages à relire en priorité sont l'accueil, les séances, les formations, la réservation et les textes juridiques. Les formulaires Brevo sont hébergés par Brevo ; leur langue d'affichage doit être vérifiée séparément.

Après validation des traductions, définir `VITE_ENABLE_ES=true` et `VITE_SHOW_LANGUAGE_SWITCH=true` dans l'environnement de compilation, puis exécuter `npm run build`. Cela inclura `/es/` et les équivalents de chaque page dans le site public, ainsi que le bouton FR | ES, les balises `hreflang` et le sitemap bilingue.
