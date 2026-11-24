import config from './audio-config.json'
import './audio-page.css'

const productMatch = /^https:\/\/(?:www\.)?payhip\.com\/b\/([a-zA-Z0-9]+)\/?$/.exec(config.checkoutUrl)
const checkoutUrl = productMatch ? config.checkoutUrl : ''
const paymentUrl = productMatch ? `https://payhip.com/buy?link=${productMatch[1]}` : ''
const escapeAttribute = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const arrow = '<span aria-hidden="true">↗</span>'
const portrait = (file: string, className: string) => `<div class="audio-portrait ${className}"><img src="/audio/asseoir-son-identite/${file}" alt="Maria Huizar, souriante dans un jardin lumineux, en chemise rouge et jean" width="591" height="1280" decoding="async" ${className === 'audio-hero-portrait' ? 'fetchpriority="high"' : 'loading="lazy"'} /></div>`

function purchaseAction(): string {
  return checkoutUrl
    ? '<button type="button" class="discover-button audio-button" data-payhip-product aria-haspopup="dialog" aria-controls="payhip-product-dialog">Acheter l’audio — 19 €</button>'
    : '<span class="audio-availability"><span aria-hidden="true"></span>Bientôt disponible</span>'
}

export function getAudioPageHtml(): string {
  return `<main class="audio-page" id="audio-contenu">
      <div class="audio-back audio-wrap"><button class="btn-back-home" data-page="home">← Retour à l’accueil</button></div>
      <section class="audio-hero audio-wrap" aria-labelledby="audio-title">
        <div class="audio-hero-copy">
          <p class="audio-eyebrow"><span class="audio-small-line" aria-hidden="true"></span>PORTE 01 · AUDIO CANALISÉ</p>
          <h1 id="audio-title">ASSEOIR SON IDENTITÉ</h1>
          <p class="audio-hero-lead">Quand tu vas dormir et que ça tourne en rond.<br>Quand tu te réveilles et que tu es déjà épuisée.</p>
          <p class="audio-hero-intention">Cet audio a été créé pour ces heures-là.</p>
          <p class="audio-hero-description">Tu traverses une épreuve et tu as peu d’énergie pour continuer ? Ou tu l’as traversée, mais tu te sens encore épuisée ? Ma voix peut t’accompagner, partout où tu te trouves, au moment où tu en as besoin.</p>
          <div class="audio-meta"><span>14 minutes</span><span>MP3 à garder</span><span>19 €</span></div>
          <a class="discover-button audio-button" href="#bande-annonce">Découvrir l’audio <span aria-hidden="true">↓</span></a>
          <p class="audio-series">Le premier audio d’une série.<br>Chaque porte ouvre un passage vers toi.</p>
        </div>
        <div class="audio-hero-visual">${portrait('maria-jardin-1.webp', 'audio-hero-portrait')}<span class="audio-photo-caption">UNE VOIX. UN APPUI. UN RETOUR À TOI.</span></div>
      </section>

      <section id="bande-annonce" class="audio-trailer-section audio-wrap" aria-labelledby="audio-trailer-heading">
        <div class="audio-section-heading"><div><p class="audio-eyebrow">UNE PREMIÈRE RENCONTRE</p><h2 id="audio-trailer-heading">Découvrir la bande-annonce</h2></div><p>40 secondes pour découvrir<br>l’univers de cet audio.</p></div>
        <div class="audio-trailer" data-audio-trailer data-horizontal="${escapeAttribute(config.trailerHorizontal)}" data-vertical="${escapeAttribute(config.trailerVertical)}">
          <picture class="audio-video-poster"><source media="(max-width: 768px)" srcset="/audio/asseoir-son-identite/bande-annonce-vertical.webp"><img src="/audio/asseoir-son-identite/bande-annonce-horizontal.webp" alt="Asseoir son identité — Porte 1, audio canalisé" width="1920" height="1080" loading="lazy" decoding="async"></picture>
          <video controls playsinline preload="none" tabindex="0" aria-label="Bande-annonce de l’audio Asseoir son identité"></video>
          <button class="audio-play" type="button" aria-label="Lire la bande-annonce"><span class="audio-play-icon" aria-hidden="true">▶</span><span class="audio-play-label">Voir la bande-annonce<small>40 secondes · Le son de ma voix</small></span></button>
          <div class="audio-video-error" hidden><p>La bande-annonce n’est pas disponible pour le moment.</p><p>Tu peux poursuivre la découverte de l’audio ci-dessous.</p></div>
        </div>
      </section>

      <figure class="audio-quote audio-wrap"><blockquote>« Asseoir son identité, c’est s’autoriser à être soi. Ne pas s’oublier. Se donner l’autorisation d’être à sa place, sans avoir à la mendier. »</blockquote><figcaption>MARIA</figcaption></figure>

      <section class="audio-editorial audio-wrap" aria-labelledby="audio-for-you">
        <div><p class="audio-eyebrow">PENDANT OU APRÈS UNE ÉPREUVE</p><h2 id="audio-for-you">À qui s’adresse cet audio ?</h2></div>
        <div class="audio-prose"><p class="audio-large">À toi, si tu traverses une situation qui ne te convient plus. Ou si tu en sors et que tu te sens encore épuisée.</p>
          <ul class="audio-situations"><li>Tu envisages de quitter un emploi parce que tu ne t’y retrouves plus.</li><li>Tu vis une relation qui t’épuise, une relation toxique ou une dépendance affective.</li><li>Tu sens qu’une situation ou une relation ne te convient plus, mais tu n’arrives pas à la quitter.</li><li>Tu commences à sortir d’une période difficile et tu as besoin de retrouver tes repères, de revenir à toi.</li></ul>
          <p>J’ai créé cet audio pour ces moments-là. Pour que tu penses à toi, que tu retrouves un appui intérieur, et que tu mobilises ton intuition autant que ton côté terre à terre.</p><p>Mon intention : t’accompagner pour que tu ne t’oublies pas dans ce que tu traverses, et que tu retrouves ta place dans tes propres choix.</p>
        </div>
      </section>

      <section id="voix-de-maria" class="audio-story audio-wrap" aria-labelledby="audio-why">
        <div class="audio-story-visual">${portrait('maria-jardin-2.webp', 'audio-story-portrait')}<span class="audio-story-signature">Maria</span></div>
        <div class="audio-prose"><p class="audio-eyebrow">L’INTENTION DERRIÈRE L’AUDIO</p><h2 id="audio-why">Pourquoi je l’ai créé</h2><p>Quand je traverse une épreuve, j’ai remarqué une chose. Malgré toute la bonne volonté des personnes que j’ai rencontrées ou consultées, il y a des heures où le coach, le thérapeute ou la personne spécialisée n’est pas disponible.</p><p class="audio-large">La nuit, quand ça tourne en rond.<br>Le matin, quand je suis déjà épuisée avant d’avoir commencé.</p><p>C’est là que j’ai pensé que ma voix pouvait t’accompagner, partout où tu te trouves, sans que je sois en face de toi.</p><a class="audio-text-link" href="/maria/">En savoir plus sur mon parcours ${arrow}</a></div>
      </section>

      <section class="audio-benefits-band" aria-labelledby="audio-benefits-title"><div class="audio-editorial audio-wrap">
        <div><p class="audio-eyebrow">UN APPUI POUR TA TRAVERSÉE</p><h2 id="audio-benefits-title">Ce que cet audio peut t’apporter</h2>${purchaseAction()}</div>
        <div><ol class="audio-benefits"><li><span>01</span><p>Retrouver une autre issue quand tu sens que tout est fermé. Parfois, on ne voit que deux portes alors qu’il en existe trois, ou plus.</p></li><li><span>02</span><p>Observer les moments où tu n’es plus présente à toi dans ce que tu traverses.</p></li><li><span>03</span><p>Réunir ton mental et ton intuition.</p></li><li><span>04</span><p>Te retrouver dans un espace intérieur où tu as ta place.</p></li><li><span>05</span><p>T’autoriser à avoir peur, sans faire de la peur ton ennemie.</p></li></ol><p class="audio-fine-print">Chaque personne peut vivre cette écoute différemment.</p></div>
      </div></section>

      <section class="audio-editorial audio-wrap" aria-labelledby="audio-after"><div><p class="audio-eyebrow">APRÈS L’ÉCOUTE</p><h2 id="audio-after">Du repos. Un retour à toi. De l’élan.</h2></div><div class="audio-prose"><p>Ce que tu peux retrouver après l’écoute : te sentir plus reposée, plus en accord avec toi-même, et retrouver de l’énergie pour la suite.</p><p>Un appui pour revenir à ce qui compte pour toi et te sentir plus disponible pour ton prochain pas.</p><p>Et bien plus encore ! Tu découvriras comment tenir debout face à ta propre expérience.</p><details class="audio-experience"><summary>Ce que j’ai vécu en l’écoutant <span aria-hidden="true">+</span></summary><div><blockquote>« Un jour, j’étais au bout du rouleau. Fatiguée, crevée. J’ai lancé mon audio et, au bout de deux minutes, je me suis endormie.<br><br>À la fin, je me suis réveillée en pleine forme. Je me sentais plus alignée, plus en accord avec moi-même… et prête à conquérir le monde. Oui, rien que ça ! »</blockquote><p>— Maria</p><p class="audio-fine-print">C’est mon expérience personnelle. Tu peux vivre cette écoute autrement : les ressentis et les effets varient d’une personne à l’autre et d’une écoute à l’autre.</p></div></details></div></section>

      <section class="audio-practice audio-wrap" aria-labelledby="audio-practice-title"><div class="audio-prose"><p class="audio-eyebrow">CODES ET SYMBOLES GÉOMÉTRIQUES</p><h2 id="audio-practice-title">Ma façon de travailler</h2><p>Dans ma pratique spirituelle, je travaille avec l’activation des codes et des symboles géométriques.</p><p>Ma voix te guide dans un voyage consacré à cette activation, pour mobiliser ton féminin et ton masculin, ton intuition et ton côté terre à terre.</p><p>Même si je ne suis pas en face de toi, en direct, tu peux revivre ce moment à chaque écoute.</p><p class="audio-large">Il n’est pas nécessaire d’y croire.<br>Juste de te laisser porter par ma voix.</p></div><div class="audio-listening"><p class="audio-eyebrow">TON MOMENT D’ÉCOUTE</p><h3>14 minutes pour revenir à toi</h3><ol><li>Prévois 14 minutes pendant lesquelles personne ne te dérange.</li><li>Installe-toi allongée, dans un endroit calme, sans croiser les bras ni les jambes.</li><li>Ferme les yeux et laisse-toi guider par ma voix.</li></ol><p>Tu peux l’écouter pendant ou après une épreuve, et y revenir chaque fois que tu en ressens le besoin.</p><p>Après l’écoute, tu peux revenir aux codes de cette activation dans ton quotidien, avec l’intention d’incarner ta puissance personnelle.</p></div></section>

      <section id="commander" class="audio-offer audio-wrap" aria-labelledby="audio-offer-title"><div class="audio-offer-inner"><p class="audio-eyebrow">AUDIO CANALISÉ · PORTE 01</p><h2 id="audio-offer-title">Asseoir son identité</h2><p>Pour t’accompagner pendant ou après une épreuve,<br>dans les moments où tu as besoin de revenir à toi.</p><div class="audio-price">19 <span>€</span></div><p class="audio-offer-format">14 minutes · Fichier MP3 à télécharger et à garder</p>${purchaseAction()}<div class="audio-after-purchase"><h3>${checkoutUrl ? 'Après ton achat' : 'À l’ouverture des ventes'}</h3><p>${checkoutUrl ? 'Après le paiement, tu accèdes à ton téléchargement et reçois un e-mail avec le lien pour récupérer ton audio.' : 'Tu pourras acheter ton audio ici. Après le paiement, tu recevras un e-mail avec le lien pour télécharger ton MP3.'} Il sera à toi, à écouter quand tu veux.</p></div><a class="audio-text-link" href="mailto:heart.resonance.mariahuizar@gmail.com?subject=Question%20sur%20l%E2%80%99audio%20Asseoir%20son%20identit%C3%A9">Une question ? Écris-moi ${arrow}</a></div></section>

      <aside class="audio-notice audio-wrap"><p>Ne l’écoute pas en conduisant ou pendant une activité qui demande ton attention. Cet audio est un accompagnement spirituel. Il ne remplace pas un suivi médical ou psychologique.</p></aside>
      <p class="audio-copyright audio-wrap">© 2026 Heart Resonance Maria · Tous droits réservés.<br>Audio réservé à un usage personnel. Toute reproduction, diffusion ou revente, même partielle, est interdite.</p>
      ${checkoutUrl ? `<div class="audio-product-overlay" id="payhip-product-overlay" hidden><section id="payhip-product-dialog" class="audio-product-dialog" role="dialog" aria-modal="true" aria-labelledby="payhip-product-title" tabindex="-1">
        <div class="audio-product-header"><div><p>AUDIO CANALISÉ · PORTE 01</p><h2 id="payhip-product-title">Asseoir son identité</h2></div><button type="button" data-product-close>Fermer <span aria-hidden="true">×</span></button></div>
        <div class="audio-product-body">
          <div class="audio-product-summary" data-product-summary>
            <img src="/audio/asseoir-son-identite/bande-annonce-horizontal.webp" alt="" width="1920" height="1080" loading="lazy">
            <p>Un audio de Maria Huizar pour retrouver tes repères pendant ou après une épreuve.</p>
            <p class="audio-offer-format">14 minutes · MP3 à télécharger et à garder</p>
            <button type="button" class="discover-button audio-button" data-checkout-start>Passer au paiement — 19 €</button>
          </div>
          <p data-checkout-loading role="status" hidden>Ouverture du paiement sécurisé…</p>
          <p data-checkout-error role="status" hidden>Le formulaire Payhip ne répond pas. Tu peux réessayer ou ouvrir le paiement sur Payhip.</p>
          <div class="audio-checkout" data-checkout-container hidden></div>
        </div>
        <div class="audio-product-footer" hidden><a href="${escapeAttribute(paymentUrl)}" target="_blank" rel="noopener noreferrer">Ouvrir le paiement sur Payhip ↗</a></div>
      </section></div>` : ''}
    </main>`
}

let cleanupAudioPlayer: (() => void) | undefined

export function attachAudioPlayer(): void {
  cleanupAudioPlayer?.()
  cleanupAudioPlayer = undefined
  const container = document.querySelector<HTMLElement>('[data-audio-trailer]')
  if (!container) return
  const player = container.querySelector('video')!
  const playButton = container.querySelector<HTMLButtonElement>('.audio-play')!
  const error = container.querySelector<HTMLElement>('.audio-video-error')!
  const mobile = window.matchMedia('(max-width: 768px)')
  const resetPlayer = () => {
    player.pause()
    player.removeAttribute('src')
    player.load()
    container.classList.remove('is-playing')
    container.classList.toggle('is-vertical', mobile.matches)
    playButton.hidden = false
    error.hidden = true
  }
  resetPlayer()
  const onResize = () => resetPlayer()
  mobile.addEventListener('change', onResize)
  cleanupAudioPlayer = () => {
    player.pause()
    player.removeAttribute('src')
    player.load()
    mobile.removeEventListener('change', onResize)
  }
  playButton.addEventListener('click', () => {
    player.src = (mobile.matches ? container.dataset.vertical : container.dataset.horizontal) ?? ''
    playButton.hidden = true
    container.classList.add('is-playing')
    player.focus()
    void player.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ })
  })
  player.addEventListener('error', () => {
    if (!player.getAttribute('src')) return
    container.classList.remove('is-playing')
    playButton.hidden = true
    error.hidden = false
  })
}
