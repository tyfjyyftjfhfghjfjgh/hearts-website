(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))v(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const b of o.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&v(b)}).observe(document,{childList:!0,subtree:!0});function d(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function v(r){if(r.ep)return;r.ep=!0;const o=d(r);fetch(r.href,o)}})();const R=["maria","voir-clair","memoires-akashiques","reiki","reprogrammation","tarifs","reiki-usui","memoires-akashiques-formations","canalisation","ateliers","atelier-1","atelier-2","livres","livre-1","livre-2","podcast","reserver","cgv","privacy","mentions","positionnement"],a=document.querySelector("#app"),n=`
  <header class="header">
    <div class="logo-container" data-page="home">
      <img src="/1-removebg-preview.png" alt="Heart Resonance Logo" class="logo-image" style="height: 8rem;" />
    </div>
    <button class="mobile-menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul class="nav-menu">
        <li class="nav-item" data-page="maria">Maria HUIZAR</li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Séances</span>
          <div class="dropdown-content">
            <a href="#" data-page="voir-clair">Voir clair en soi</a>
            <a href="#" data-page="memoires-akashiques">Lectures Akashiques</a>
            <a href="#" data-page="reiki">Séances de Reiki</a>
            <a href="#" data-page="reprogrammation">Reprogrammation des Mémoires Cellulaires</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Formations</span>
          <div class="dropdown-content">
            <a href="#" data-page="tarifs">Toutes les formations</a>
            <a href="#" data-page="reiki-usui">Reiki Usui</a>
            <a href="#" data-page="memoires-akashiques-formations">Annales Akashiques</a>
            <a href="#" data-page="canalisation">Canalisation</a>
          </div>
        </li>
        <li class="nav-item" data-page="positionnement">Positionnement</li>
        <li class="nav-item" data-page="podcast">Podcast</li>
        <li class="nav-item nav-booking" data-page="reserver">Réserver une séance</li>
      </ul>
    </nav>
    <div class="mobile-menu-overlay"></div>
  </header>
`,t=`
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Heart Resonance – Maria Huizar</h3>
        <p class="footer-tagline">Clairvoyance consciente • Accompagnement • Transmission</p>
      </div>
      
      <div class="footer-links">
        <a href="#" data-page="cgv" class="footer-link">CGV</a>
        <span class="footer-separator">/</span>
        <a href="#" data-page="privacy" class="footer-link">Politique de confidentialité</a>
        <span class="footer-separator">/</span>
        <a href="#" data-page="mentions" class="footer-link">Mentions légales</a>
      </div>
      
      <div class="footer-social">
        <a href="https://www.instagram.com/heart.resonance.maria" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/HeartResonanceMaria/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://open.spotify.com/show/5I6swJXizcNQGlT66vDVIS" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Spotify">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12c2.5 1 5.5 1 8 0M8 16c3 1 6 1 9 0M8 8c4 1 7 1 10 0"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@heartresonance-maria" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </a>
        <a href="https://wa.me/33634651762" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a href="mailto:heart.resonance.mariahuizar@gmail.com" class="social-icon" aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
`,C=`
  ${n}

  <div class="banner">
    <div class="banner-overlay"></div>
    <div class="banner-text">
      <h1>HEART RESONANCE</h1>
      <p class="subtitle">
        Un accompagnement pour se reconnecter à soi, écouter ce qui vibre juste et avancer avec plus de clarté et de présence.
      </p>
      <p class="quote">
        « Il ne s'agit pas de devenir quelqu'un d'autre. Il s'agit de se souvenir de qui vous êtes. »
      </p>
    </div>
  </div>

  <section class="home-content">
    <div class="home-intro">
      <p>J'accompagne des personnes qui sentent que quelque chose se joue pour elles, mais qui n'y voient pas toujours clair.</p>
      <p>Mon travail consiste à mettre de la clarté là où tout est confus, à éclairer une situation précise, et à développer une clairvoyance consciente, pour que les choix puissent se faire avec plus de justesse.</p>
    </div>

    <div class="home-divider">---</div>

    <section class="home-approach">
      <h2>MON APPROCHE</h2>
      <p>Mon accompagnement s'appuie principalement sur la clairvoyance consciente et le travail avec les mémoires akashiques.</p>
      <p>Il s'agit d'un espace d'écoute et de lecture subtile, où ce qui était confus, diffus ou resté en arrière-plan peut être vu, nommé et accueilli. Lorsque ce qui était inconscient devient conscient, les choix s'éclairent, l'action devient plus simple, et l'on peut avancer avec plus de cohérence intérieure.</p>
      <p>J'accompagne en séance individuelle, ainsi qu'en ateliers en présentiel ou à distance.</p>
      <p>Si vous ressentez le besoin d'y voir plus clair dans une situation, vous pouvez me contacter.</p>
    </section>

    <section class="home-podcast">
      <h2>PODCAST</h2>
      <p>Des conversations et des réflexions à écouter pour nourrir votre cheminement.</p>
      <div class="podcast-embed">
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/show/5I6swJXizcNQGlT66vDVIS?utm_source=generator&t=0"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <button class="btn-podcast" data-page="podcast">Voir plus d'épisodes</button>
    </section>
  </section>

  ${t}
`,y=`
  ${n}

  <main class="maria-page">
    <div class="maria-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="maria-hero">
      <div class="maria-image-wrapper">
        <img src="/HUIZAR-Maria.png" alt="Maria HUIZAR" class="maria-image" />
      </div>
      <div class="maria-intro">
        <h2>Maria HUIZAR</h2>
        <p class="maria-intro-text">
          Quand tout devient confus, ce n'est pas que vous ne voyez pas clair.<br />
          C'est que vous percevez beaucoup de choses en même temps.<br />
          Mon accompagnement commence là.
        </p>
      </div>
    </section>

    <section class="maria-body">
      <div class="maria-content">
        <h3>Mon parcours</h3>
        <p>Je m'appelle Maria.</p>
        <p>
          Depuis longtemps, j'accompagne des personnes dans des moments où tout se mélange à l'intérieur. Des moments où l'on ressent beaucoup, où l'on comprend beaucoup, mais où il devient difficile de faire la différence entre intuition, émotion, fatigue intérieure et histoire personnelle.
        </p>
        <p>
          Mon parcours s'est construit au contact direct de l'humain, dans des contextes très différents, souvent exigeants. J'ai été animatrice de radio, où j'ai créé et animé des émissions de radio, des espaces de parole et d'écoute. J'y ai appris à accueillir ce qui se dit, mais aussi ce qui ne se dit pas, à écouter au-delà des mots et à laisser une place aux émotions sans chercher à les contrôler.
        </p>
        <p>
          J'ai ensuite travaillé comme professeure puis conseillère principale d'éducation pendant plus de quinze ans. J'ai accompagné des milliers d'adolescents, dans des périodes de construction, de débordement émotionnel, de silence, parfois de colère. Être là au quotidien, tenir une présence quand tout vacille, accompagner sans savoir à l'avance quoi répondre : ces années ont profondément forgé ma posture.
        </p>
        <p>
          En parallèle, j'ai formé et accompagné des publics très variés : des jeunes, des militaires, des agents de service hôtelier, mais aussi des professionnels engagés dans des métiers à forte responsabilité ou à forte charge émotionnelle. Mon travail portait sur le développement des compétences psychosociales, et en particulier sur la gestion des émotions, la posture relationnelle et la capacité à rester stable dans des contextes exigeants.
        </p>

        <h3>Aujourd'hui</h3>
        <p>
          Très tôt, en dehors de tout cadre institutionnel, des personnes sont venues me voir pour comprendre ce qu'elles vivaient, mettre de la clarté sur leurs ressentis, sortir de la confusion intérieure. Dès 2014, l'accompagnement faisait déjà partie de ma vie. En 2016, j'ai donné un cadre professionnel à ce qui existait déjà naturellement.
        </p>
        <p>
          Aujourd'hui, je suis coach de vie, thérapeute (au sens non médical du terme), lectrice des mémoires akashiques et praticienne en clairvoyance consciente. J'aide à voir clair, non pas pour dire quoi faire ou prédire l'avenir, mais pour éclairer ce qui se joue ici et maintenant : les schémas, les dynamiques, les zones de tension ou de bascule. J'ai notamment accompagné depuis 2016 des médecins, des thérapeutes, des praticiens des médecines douces, des sportifs de haut niveau, ainsi que des entrepreneurs et chefs d'entreprise.
        </p>
        <p>
          Mon accompagnement est un espace où l'on peut ralentir, déposer ce qui est trop lourd, et retrouver un lien plus juste avec soi-même. J'accompagne des adultes, des particuliers, ainsi que des praticiens du bien-être et des professionnels qui ressentent le besoin d'affiner leur perception et de se faire confiance dans ce qu'ils perçoivent.
        </p>
        <p>
          Ce que je propose est avant tout une rencontre. Un temps pour se retrouver. Et laisser émerger une clarté plus juste.
        </p>

        <hr class="maria-separator" />

        <p class="maria-disclaimer">
          Le terme « thérapeute » est ici entendu comme un accompagnement de la personne dans une démarche de conscience, de discernement et de développement personnel.
          Il ne désigne pas un professionnel de santé et ne se substitue en aucun cas à un suivi médical, psychologique ou psychothérapeutique.
        </p>
      </div>

      <aside class="maria-aside">
        <div class="maria-card">
          <h4>Qui je suis</h4>
          <p>Praticienne en clairvoyance consciente, lectrice des mémoires akashiques et thérapeute au sens non médical.</p>
        </div>

        <div class="maria-card">
          <h4>Qui j'accompagne</h4>
          <p>J'accompagne les adultes qui ressentent le besoin de voir plus clair en eux, d'affiner leur perception et de développer leur clairvoyance consciente.</p>
        </div>

        <div class="maria-card">
          <h4>Ce que cela leur permet</h4>
          <p>Retrouver de la clarté, du discernement et une lecture plus juste de ce qu'ils traversent.</p>
        </div>
      </aside>
    </section>
  </main>

  ${t}
`,N=`
    <section class="tarifs-seances">
      <div class="tarifs-seances-content">
        <h2>Tarifs séances</h2>
        <div class="seances-grid">
          <div class="seance-tarif">
            <h3>Séance voir clair en soi</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
          <div class="seance-tarif">
            <h3>Séance de Reiki</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
          <div class="seance-tarif">
            <h3>Lecture des mémoires akashiques</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
          <div class="seance-tarif">
            <h3>Reprogrammation des mémoires cellulaires</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
        </div>
      </div>
    </section>
`;function E(s,u="80 €",d="1 h 15",v,r){const o=v&&r?`<button class="seance-booking-button" type="button" data-brevo-meeting="${r}">${v}</button>`:"";return`
    <section class="tarifs-seances">
      <div class="tarifs-seances-content">
        <h2>TARIF DE LA SÉANCE</h2>
        <div class="seance-tarif-single">
          <div class="seance-tarif">
            <h3>${s}</h3>
            <p class="tarif-price">${u}</p>
            <p class="tarif-duration">${d}</p>
            ${o}
          </div>
        </div>
      </div>
    </section>
  `}const M=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>SÉANCES – VOIR CLAIR EN SOI</h1>
      <p class="seances-intro">
        Les séances sont des temps d'écoute et de lecture intérieure. Elles s'adressent aux
        personnes qui sentent que quelque chose se joue, sans toujours parvenir à le comprendre
        clairement.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          On commence par voir. Puis, à partir de ce qui a émergé, les ajustements se font
          naturellement.
        </p>
        <p>
          Je propose des séances individuelles d'accompagnement, appuyées sur la clairvoyance
          consciente, la canalisation et la lecture des mémoires akashiques.
        </p>
        <h2>Ce que permettent ces séances :</h2>
        <ul>
          <li>d'éclairer une situation confuse ou bloquée</li>
          <li>de mieux comprendre ce qui se joue en profondeur</li>
          <li>d'ajuster sa posture face à ce qui est vécu</li>
        </ul>
        <p>Chaque séance s'adapte à la personne et au moment.</p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séance individuelle</li>
          <li>En visioconférence</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>

    ${E("Séance Voir clair en soi","80 € TTC","1 h 15","RÉSERVER MA SÉANCE","voir-clair")}
  </main>

  ${t}
`,O=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>MÉMOIRES AKASHIQUES</h1>
      <p class="seances-intro">
        Le travail avec les mémoires akashiques permet d'accéder à une autre forme de
        compréhension, plus intuitive et plus globale.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Il est particulièrement aidant lorsque l'analyse mentale tourne en boucle ou ne permet plus
          d'avancer.
        </p>
        <p>
          En posant un autre regard sur une situation, il devient possible de sortir de certaines
          impasses intérieures avec plus de clarté.
        </p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séance individuelle</li>
          <li>En visioconférence</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>

    ${E("Lecture Akashique","80 € TTC","1 h 15","RÉSERVER MA LECTURE","akashiques")}
  </main>

  ${t}
`,w=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>SÉANCES DE REIKI</h1>
      <p class="seances-intro">
        Le Reiki que je pratique soutient les processus de prise de conscience et d'intégration.
        Il permet parfois à ce qui était resté en arrière-plan de remonter à la surface, dans un cadre
        sécurisant et respectueux du rythme de la personne.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Les séances de Reiki sont des temps d'accompagnement énergétique réalisés par apposition
          des mains. Elles soutiennent l'équilibre global de la personne, en agissant sur les plans
          physique, émotionnel, énergétique et intérieur.
        </p>
        <p>
          Le Reiki agit sans intention mentale ni contrôle, là où l'énergie en a besoin.
        </p>
        
        <h2>Déroulement d'une séance :</h2>
        <p>
          La séance se déroule dans un cadre calme et sécurisant.
          La personne est allongée et reste habillée.
          Le travail se fait par un contact doux ou à proximité du corps, selon les zones et les besoins.
        </p>
        
        <h2>Une séance de Reiki peut favoriser :</h2>
        <ul>
          <li>une détente profonde</li>
          <li>un apaisement émotionnel</li>
          <li>un relâchement des tensions</li>
          <li>un recentrage intérieur</li>
          <li>une meilleure circulation de l'énergie</li>
        </ul>
        
        <p>
          Ces séances ne sont pas uniquement proposées dans une recherche de détente ou de bien-être.
          Le travail énergétique peut permettre de mettre en lumière certains liens entre ce que la
          personne vit dans son corps, son histoire et ses dynamiques intérieures.
        </p>
        
        <h2>POUR QUOI RECEVOIR UNE SÉANCE DE REIKI</h2>
        <ul>
          <li>une période de fatigue, de stress ou de surcharge</li>
          <li>un état émotionnel intense</li>
          <li>une phase de transition ou de transformation</li>
          <li>un besoin de soutien énergétique</li>
          <li>un travail personnel ou thérapeutique en cours</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>

    ${E("Séance de Reiki")}
  </main>

  ${t}
`,D=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>REPROGRAMMATION DES MÉMOIRES CELLULAIRES</h1>
      <p class="seances-intro">
        La reprogrammation des mémoires cellulaires intervient lorsqu'un réajustement en
        profondeur est nécessaire.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Elle accompagne les changements intérieurs lorsque la personne sent que le moment est
          juste pour elle.
        </p>
        <p>
          Ce travail se fait sans forcer, dans le respect de ce qui est prêt à évoluer.
        </p>
        <p>
          La reprogrammation des mémoires cellulaires est un travail énergétique et conscient qui
          vise à libérer certaines empreintes inscrites dans le corps.
        </p>
        
        <h2>Ces mémoires peuvent être liées à :</h2>
        <ul>
          <li>des expériences passées</li>
          <li>des chocs émotionnels</li>
          <li>des héritages transgénérationnels</li>
          <li>des schémas répétitifs profondément ancrés</li>
        </ul>
        
        <p>
          Le travail se fait par l'écoute, la présence et l'accompagnement énergétique, afin de
          permettre au corps de relâcher ce qui n'a plus lieu d'être et de retrouver un fonctionnement
          plus juste.
        </p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>

    ${E("Reprogrammation des mémoires cellulaires")}
  </main>

  ${t}
`,x=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>REIKI USUI</h1>
      <p class="seances-intro">
        Le Reiki est une pratique énergétique d'origine japonaise qui permet de canaliser l'énergie
        de vie universelle par imposition des mains. Il soutient l'équilibre global de la personne —
        physique, émotionnel, mental et énergétique — et favorise un état de détente, de présence
        et d'écoute plus consciente.
      </p>
      <p class="seances-intro">
        Au-delà de l'aspect énergétique, le Reiki développe une posture intérieure stable, une
        écoute fine et une relation plus claire à ce qui se joue dans l'instant.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Reiki — Niveau 1 | Ouverture et bases de la pratique</h2>
        <p>
          Initiation au Reiki et apprentissage des bases énergétiques. Ce premier niveau permet de se
          reconnecter à l'énergie Reiki, de pratiquer l'auto-traitement et de découvrir les premiers
          protocoles.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 420 €</strong></li>
          <li>Pré requis : avoir réalisé 4 séances de Reiki</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Reiki — Niveau 2 | Approfondissement et élargissement</h2>
        <p>
          Approfondissement de la pratique Reiki, travail avec les symboles, pratique à distance et
          élargissement du champ d'action. Ce niveau permet d'affiner la perception, le discernement
          et la posture d'accompagnement.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 620 €</strong></li>
          <li>Pré requis : avoir validé le Reiki niveau 1</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Reiki — Niveau 3 | Maîtrise personnelle et intégration</h2>
        <p>
          Travail de maîtrise personnelle et d'intégration profonde du Reiki dans la posture et la
          pratique. Ce niveau marque un engagement plus conscient et plus aligné.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 750 €</strong></li>
          <li>Pré requis : avoir validé les Reiki niveaux 1 et 2</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Maîtrise Reiki | Transmission</h2>
        <p>
          Transmission de la lignée Reiki, posture de maître et capacité à initier à son tour.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 1 200 €</strong></li>
          <li>Pré requis : avoir validé les Reiki niveaux 1, 2 et 3</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En individuel ou en petit groupe</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>

  ${t}
`,P=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LECTURES DES MÉMOIRES AKASHIQUES</h1>
      <p class="seances-intro">
        Les mémoires akashiques sont un espace de conscience où sont inscrites les expériences, les
        schémas et les dynamiques de l'âme. Y accéder permet de mettre en lumière ce qui est à
        l'œuvre, de voir clair dans des situations complexes et de développer une clairvoyance
        consciente.
      </p>
      <p class="seances-intro">
        L'ouverture des registres offre un éclairage profond, dans le respect du rythme et du
        chemin de chacun.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Niveau 1 | Accès et bases de la lecture</h2>
        <p>
          Initiation aux lectures akashiques. Apprentissage de l'ouverture de ses propres registres et
          des bases de la lecture consciente.
        </p>
        <ul>
          <li>Durée : 12 heures</li>
          <li><strong>Tarif : 450 €</strong></li>
          <li>Pré requis : avoir réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Niveau 2 | Pratique approfondie et professionnalisation</h2>
        <p>
          Niveau destiné aux personnes souhaitant devenir lectrices ou lecteurs des mémoires
          akashiques et en faire leur activité, ainsi qu'aux thérapeutes et accompagnants désirant
          consolider leur posture.
        </p>
        <p>
          Ce niveau permet d'approfondir la pratique, d'affiner le discernement et d'accompagner
          avec clarté et responsabilité.
        </p>
        <ul>
          <li>Durée : 18 heures</li>
          <li><strong>Tarif : 1 050 €</strong></li>
          <li>Pré requis : avoir validé le niveau 1 et réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Niveau 3 | Maîtrise et approche thérapeutique</h2>
        <p>
          Niveau avancé destiné aux praticiens et thérapeutes expérimentés. Il aborde
          l'accompagnement lorsque la compréhension seule ne suffit plus : sanation lorsque cela est
          juste, registres de la thérapie, registres du patient (avec permission), et approche de
          l'Hôpital de Lumière.
        </p>
        <p>
          Ce niveau demande une grande stabilité intérieure, une posture éthique claire et une
          responsabilité accrue.
        </p>
        <ul>
          <li>Durée : définie selon le profil du participant</li>
          <li><strong>Tarif : 1 750 €</strong></li>
          <li>Pré requis : avoir validé les niveaux 1 et 2 et réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En individuel ou en petit groupe</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>

  ${t}
`,U=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>CANALISATION ET DIALOGUE INTÉRIEUR</h1>
      <p class="seances-intro">
        Apprendre à canaliser et dialoguer avec son Soi
      </p>
      <p class="seances-intro">
        Formation destinée aux personnes souhaitant développer leur capacité de canalisation,
        apprendre à dialoguer avec leur Soi et affiner leur écoute intérieure.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Détails de la formation</h2>
        <ul>
          <li>Formation en groupe</li>
          <li>Groupe minimum : 5 personnes</li>
          <li>Durée : 3 heures par séance</li>
          <li>Plusieurs séances possibles selon l'avancement du groupe</li>
          <li><strong>Tarif : 100 € / 3 heures / personne</strong></li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En groupe (minimum 3 personnes)</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>

  ${t}
`,$=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIERS</h1>
      <p class="seances-intro">
        Des moments de partage et d'exploration en groupe pour avancer ensemble.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Atelier 1</h2>
        <p>Contenu du premier atelier à détailler...</p>
      </div>
      <div class="seance-card">
        <h2>Atelier 2</h2>
        <p>Contenu du deuxième atelier à détailler...</p>
      </div>
    </section>
  </main>

  ${t}
`,j=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIER 1</h1>
      <p class="seances-intro">
        Découvrez les détails de cet atelier.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de l'atelier 1...</p>
      </div>
    </section>
  </main>

  ${t}
`,H=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIER 2</h1>
      <p class="seances-intro">
        Découvrez les détails de cet atelier.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de l'atelier 2...</p>
      </div>
    </section>
  </main>

  ${t}
`,z=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRES</h1>
      <p class="seances-intro">
        Des ressources écrites pour approfondir votre réflexion et votre pratique.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Livre 1</h2>
        <p>Contenu du premier livre à détailler...</p>
      </div>
      <div class="seance-card">
        <h2>Livre 2</h2>
        <p>Contenu du deuxième livre à détailler...</p>
      </div>
    </section>
  </main>

  ${t}
`,V=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRE 1</h1>
      <p class="seances-intro">
        Découvrez les détails de ce livre.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé du livre 1...</p>
      </div>
    </section>
  </main>

  ${t}
`,B=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRE 2</h1>
      <p class="seances-intro">
        Découvrez les détails de ce livre.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé du livre 2...</p>
      </div>
    </section>
  </main>

  ${t}
`,F=`
  ${n}

  <main class="tarifs-page">
    <div class="tarifs-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="tarifs-hero">
      <h1>FORMATIONS – HEART RESONANCE</h1>
      <p class="tarifs-intro">
        Les formations proposées s'adressent aux personnes qui souhaitent voir clair dans des
        situations complexes, développer leur clairvoyance consciente et affiner leur posture
        intérieure, pour elles-mêmes ou dans une pratique d'accompagnement.
      </p>
      <p class="tarifs-intro">
        Elles sont conçues comme des chemins progressifs, alliant compréhension, pratique et
        intégration. Elles peuvent se dérouler en présentiel ou à distance, en individuel ou en petit
        groupe, selon la formation concernée.
      </p>
    </section>

    <section class="tarifs-content">
      <div class="tarifs-grid">
        <div class="tarif-card">
          <h2>REIKI USUI</h2>
          <p>
            Le Reiki est une pratique énergétique d'origine japonaise qui permet de canaliser l'énergie
            de vie universelle par imposition des mains. Il soutient l'équilibre global de la personne —
            physique, émotionnel, mental et énergétique — et favorise un état de détente, de présence
            et d'écoute plus consciente.
          </p>
          <p>
            Au-delà de l'aspect énergétique, le Reiki développe une posture intérieure stable, une
            écoute fine et une relation plus claire à ce qui se joue dans l'instant.
          </p>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 1 | Ouverture et bases de la pratique</h3>
            <p>
              Initiation au Reiki et apprentissage des bases énergétiques. Ce premier niveau permet de se
              reconnecter à l'énergie Reiki, de pratiquer l'auto-traitement et de découvrir les premiers
              protocoles.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 420 €</strong></li>
              <li>Pré requis : avoir réalisé 4 séances de Reiki</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 2 | Approfondissement et élargissement</h3>
            <p>
              Approfondissement de la pratique Reiki, travail avec les symboles, pratique à distance et
              élargissement du champ d'action. Ce niveau permet d'affiner la perception, le discernement
              et la posture d'accompagnement.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 620 €</strong></li>
              <li>Pré requis : avoir validé le Reiki niveau 1</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 3 | Maîtrise personnelle et intégration</h3>
            <p>
              Travail de maîtrise personnelle et d'intégration profonde du Reiki dans la posture et la
              pratique. Ce niveau marque un engagement plus conscient et plus aligné.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 750 €</strong></li>
              <li>Pré requis : avoir validé les Reiki niveaux 1 et 2</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Maîtrise Reiki | Transmission</h3>
            <p>
              Transmission de la lignée Reiki, posture de maître et capacité à initier à son tour.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 1 200 €</strong></li>
              <li>Pré requis : avoir validé les Reiki niveaux 1, 2 et 3</li>
            </ul>
          </div>
        </div>

        <div class="tarif-card">
          <h2>LECTURES DES MÉMOIRES AKASHIQUES</h2>
          <p>
            Les mémoires akashiques sont un espace de conscience où sont inscrites les expériences, les
            schémas et les dynamiques de l'âme. Y accéder permet de mettre en lumière ce qui est à
            l'œuvre, de voir clair dans des situations complexes et de développer une clairvoyance
            consciente.
          </p>
          <p>
            L'ouverture des registres offre un éclairage profond, dans le respect du rythme et du
            chemin de chacun.
          </p>
          
          <div class="formation-item">
            <h3>Niveau 1 | Accès et bases de la lecture</h3>
            <p>
              Initiation aux lectures akashiques. Apprentissage de l'ouverture de ses propres registres et
              des bases de la lecture consciente.
            </p>
            <ul class="formation-details">
              <li>Durée : 12 heures</li>
              <li><strong>Tarif : 450 €</strong></li>
              <li>Pré requis : avoir réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Niveau 2 | Pratique approfondie et professionnalisation</h3>
            <p>
              Niveau destiné aux personnes souhaitant devenir lectrices ou lecteurs des mémoires
              akashiques et en faire leur activité, ainsi qu'aux thérapeutes et accompagnants désirant
              consolider leur posture.
            </p>
            <p>
              Ce niveau permet d'approfondir la pratique, d'affiner le discernement et d'accompagner
              avec clarté et responsabilité.
            </p>
            <ul class="formation-details">
              <li>Durée : 18 heures</li>
              <li><strong>Tarif : 1 050 €</strong></li>
              <li>Pré requis : avoir validé le niveau 1 et réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Niveau 3 | Maîtrise et approche thérapeutique</h3>
            <p>
              Niveau avancé destiné aux praticiens et thérapeutes expérimentés. Il aborde
              l'accompagnement lorsque la compréhension seule ne suffit plus : sanation lorsque cela est
              juste, registres de la thérapie, registres du patient (avec permission), et approche de
              l'Hôpital de Lumière.
            </p>
            <p>
              Ce niveau demande une grande stabilité intérieure, une posture éthique claire et une
              responsabilité accrue.
            </p>
            <ul class="formation-details">
              <li>Durée : définie selon le profil du participant</li>
              <li><strong>Tarif : 1 750 €</strong></li>
              <li>Pré requis : avoir validé les niveaux 1 et 2 et réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
        </div>

        <div class="tarif-card">
          <h2>CANALISATION ET DIALOGUE INTÉRIEUR</h2>
          <p>
            Apprendre à canaliser et dialoguer avec son Soi
          </p>
          <p>
            Formation destinée aux personnes souhaitant développer leur capacité de canalisation,
            apprendre à dialoguer avec leur Soi et affiner leur écoute intérieure.
          </p>
          <ul class="formation-details">
            <li>Formation en groupe</li>
            <li>Groupe minimum : 5 personnes</li>
            <li>Durée : 3 heures par séance</li>
            <li>Plusieurs séances possibles selon l'avancement du groupe</li>
            <li><strong>Tarif : 100 € / 3 heures / personne</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="tarifs-fil-conducteur">
      <div class="fil-content">
        <h2>FIL CONDUCTEUR DES FORMATIONS</h2>
        <ul>
          <li>Voir clair dans des situations complexes</li>
          <li>Développer une clairvoyance consciente</li>
          <li>Affiner la perception sans surinterprétation</li>
          <li>Accompagner avec justesse, présence et discernement</li>
        </ul>
      </div>
    </section>

    ${N}
  </main>

  ${t}
`,G={voirClair:"https://meet.brevo.com/heart-resonance-mariahuizar/borderless?l=seance-voir-clair",akashiques:"https://meet.brevo.com/heart-resonance-mariahuizar/borderless?l=lecture-akashique-en-visioconference"};function L(s,u){return`<button class="booking-button" type="button" data-brevo-meeting="${u}">${s}</button>`}const J=`
  ${n}

  <main class="booking-page">
    <div class="booking-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="booking-hero">
      <p class="booking-eyebrow">PRISE DE RENDEZ-VOUS</p>
      <h1>RÉSERVER UNE SÉANCE</h1>
      <p>Choisissez votre séance, votre créneau, puis réglez directement en ligne.</p>
    </section>

    <section class="booking-grid" aria-label="Prestations à réserver">
      <article class="booking-card booking-card-featured">
        <span class="booking-format">EN VISIOCONFÉRENCE</span>
        <h2>Séance Voir clair en soi</h2>
        <div class="booking-details">
          <p class="booking-price">80 € <span>TTC</span></p>
          <p class="booking-duration">1 h 15</p>
        </div>
        <p class="booking-description">Un temps pour éclairer ce qui se joue et retrouver une lecture plus juste de votre situation.</p>
        ${L("Choisir mon créneau","voirClair")}
      </article>

      <article class="booking-card booking-card-featured">
        <span class="booking-format">EN VISIOCONFÉRENCE</span>
        <h2>Lecture des annales akashiques</h2>
        <div class="booking-details">
          <p class="booking-price">80 € <span>TTC</span></p>
          <p class="booking-duration">1 h 15</p>
        </div>
        <p class="booking-description">Une lecture pour poser un autre regard sur ce qui demande à être compris avec plus de clarté.</p>
        ${L("Choisir mon créneau","akashiques")}
      </article>

      <article class="booking-card">
        <span class="booking-format">SUR RENDEZ-VOUS</span>
        <h2>Séance de Reiki</h2>
        <div class="booking-details">
          <p class="booking-price">80 € <span>TTC</span></p>
          <p class="booking-duration">1 h 15</p>
        </div>
        <p class="booking-description">Une séance énergétique réalisée dans un cadre attentif, respectueux de votre rythme.</p>
        <a class="booking-button booking-button-secondary" href="mailto:heart.resonance.mariahuizar@gmail.com?subject=Demande%20de%20r%C3%A9servation%20%E2%80%93%20S%C3%A9ance%20de%20Reiki">Demander un rendez-vous</a>
      </article>

      <article class="booking-card">
        <span class="booking-format">SUR RENDEZ-VOUS</span>
        <h2>Séance de reprogrammation des mémoires cellulaires</h2>
        <div class="booking-details">
          <p class="booking-price">80 € <span>TTC</span></p>
          <p class="booking-duration">1 h 15</p>
        </div>
        <p class="booking-description">Un travail énergétique et conscient pour libérer certaines empreintes inscrites dans le corps.</p>
        <a class="booking-button booking-button-secondary" href="mailto:heart.resonance.mariahuizar@gmail.com?subject=Demande%20de%20r%C3%A9servation%20%E2%80%93%20S%C3%A9ance%20de%20reprogrammation%20des%20m%C3%A9moires%20cellulaires">Demander un rendez-vous</a>
      </article>
    </section>

    <p class="booking-note">Pour les séances en visioconférence, la réservation et le règlement sont réalisés sur la page sécurisée Brevo.</p>
  </main>

  ${t}
`,K=`
  ${n}

  <main class="podcast-page">
    <div class="podcast-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="podcast-layout">
      <div class="podcast-main">
        <h1>Heart Resonance, le podcast</h1>
        <p class="podcast-intro">
          Heart Resonance, le podcast est un espace de transmission et de présence.
          Un endroit où l’on peut s’arrêter un instant, quand le mental fatigue, quand quelque
          chose en soi demande à être entendu autrement.
        </p>
        <div class="podcast-content">
          <p>
            Ce podcast explore le passage du contrôle vers une conscience plus large, plus vivante,
            et la manière dont ce mouvement peut s’inscrire, simplement, dans le quotidien.
          </p>
          <p>
            L’intention n’est pas d’expliquer. Encore moins de convaincre. Chaque épisode ouvre un espace.
            On écoute, on ressent, on observe ce qui bouge — parfois subtilement, parfois plus franchement.
            Rien à croire. Juste laisser faire l’expérience.
          </p>
          <p>
            Ce qui se transforme ne vient pas d’une volonté. Cela arrive quand on cesse de diriger.
          </p>
          <p>
            Heart Resonance prolonge la posture de mon accompagnement et de mes transmissions.
            Même présence. Même attention.
            Une voix, un rythme, une invitation à revenir à soi, sans effort.
          </p>
        </div>
      </div>

      <aside class="podcast-aside">
        <div class="podcast-card">
          <h2>Écouter le podcast</h2>
          <p>
            Retrouvez Heart Resonance sur vos plateformes préférées.
          </p>
          <div class="podcast-embed">
            <iframe
              data-testid="embed-iframe"
              style="border-radius:12px"
              src="https://open.spotify.com/embed/show/5I6swJXizcNQGlT66vDVIS?utm_source=generator&t=0"
              width="100%"
              height="352"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div class="podcast-platforms">
            <a href="https://open.spotify.com/show/5I6swJXizcNQGlT66vDVIS?si=86cb604c725c43e9" target="_blank" rel="noopener noreferrer" class="platform-link">Spotify</a>
            <a href="https://link.deezer.com/s/32Ryv4hvy29Z4ykVKjIdO" target="_blank" rel="noopener noreferrer" class="platform-link">Deezer</a>
            <a href="https://music.amazon.fr/podcasts/4e0edc4e-ee10-4f12-88a1-51f6239677e5/le-podcast" target="_blank" rel="noopener noreferrer" class="platform-link">Amazon Music</a>
          </div>
        </div>
      </aside>
    </section>
  </main>

  ${t}
`,Q=`
  ${n}

  <main class="mentions-page">
    <div class="mentions-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="mentions-content">
      <h1>MENTIONS LÉGALES – HEART RESONANCE MARIA</h1>
      
      <div class="mentions-section">
        <h2>Éditeur du site :</h2>
        <p>Maria Huizar</p>
        <p>Activité exercée au sein de la coopérative REGATE</p>
        <p>15 rue des Métiers – 81100 Castres</p>
        <p>SIRET : 42376651800074</p>
      </div>

      <div class="mentions-section">
        <h2>Site internet :</h2>
        <p>heart-resonance.com</p>
      </div>

      <div class="mentions-section">
        <h2>Responsable de publication :</h2>
        <p>Maria Huizar</p>
      </div>

      <div class="mentions-section">
        <h2>Propriété intellectuelle :</h2>
        <p>L'ensemble des contenus présents sur ce site (textes, images, audios, vidéos, logos) est protégé.</p>
        <p>Toute reproduction ou utilisation sans autorisation est interdite.</p>
      </div>

      <div class="mentions-section">
        <h2>Responsabilité :</h2>
        <p>Les informations diffusées sur ce site sont fournies à titre informatif.</p>
        <p>Maria Huizar ne peut être tenue responsable de l'utilisation faite des contenus.</p>
      </div>

      <div class="mentions-section">
        <h2>Données personnelles :</h2>
        <p>Les données collectées sont traitées conformément à la politique de confidentialité disponible sur le site.</p>
      </div>

      <div class="mentions-section">
        <h2>Contact :</h2>
        <p>heart.resonance.mariahuizar@gmail.com</p>
      </div>
    </section>
  </main>

  ${t}
`,_=`
  ${n}

  <main class="positionnement-page">
    <div class="positionnement-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="positionnement-content">
      <h1>Mon positionnement : une clairvoyance au service de la conscience</h1>
      
      <div class="positionnement-intro">
        <p>J'ai fait le choix de me consacrer à la clairvoyance consciente.</p>
      </div>

      <div class="positionnement-section">
        <p>J'ai la capacité de percevoir des informations liées à l'avenir, mais j'ai choisi de ne pas utiliser la clairvoyance dans une logique prédictive.</p>
        
        <p>Avec l'expérience, j'ai compris que rien n'est jamais écrit à l'avance. Les lectures tournées vers le futur peuvent parfois enfermer : donner de faux espoirs, nourrir l'attente, ou pousser à agir à contre-courant de soi, dans l'espoir de faire advenir un résultat.</p>
        
        <p>Peu à peu, j'ai réalisé que cette manière de faire n'aidait pas réellement à évoluer. Elle pouvait même éloigner la personne de sa propre capacité d'action, de son discernement et de sa responsabilité intérieure.</p>
      </div>

      <div class="positionnement-section highlight">
        <h2>Aujourd'hui, j'utilise la clairvoyance comme un outil de conscience.</h2>
        <p>Non pas pour dire ce qui va arriver, mais pour éclairer ce qui se joue ici et maintenant.</p>
        <p>Observer les dynamiques à l'œuvre, les schémas répétitifs, les zones de tension ou de bascule, afin que chacun puisse avancer en conscience, à partir de lui-même.</p>
      </div>

      <div class="positionnement-section">
        <p>Les mémoires akashiques, sont le dialogue avec le Soi sont pour moi des supports de lecture et de compréhension, au service de l'évolution individuelle. Ils n'imposent rien, ne tranchent pas, ne décident pas à la place de la personne.</p>
        
        <p>Je n'indique pas un chemin à suivre. Je mets en lumière ce qui peut être vu, pour que chacun puisse faire ses propres choix, librement et en responsabilité.</p>
      </div>
    </section>
  </main>

  ${t}
`;function k(s){if(!window.BrevoBookingPage){window.alert("Le module de réservation est en cours de chargement. Veuillez réessayer dans un instant.");return}window.BrevoBookingPage.initStaticButton({url:G[s]})}const W=`
  ${n}

  <main class="cgv-page">
    <div class="cgv-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="cgv-content">
      <h1>CONDITIONS GÉNÉRALES DE VENTE ET D'UTILISATION</h1>
      <h2>Heart Resonance – Maria</h2>
      
      <div class="cgv-download">
        <a href="/CGV_Heart_Resonance_Maria_MAJ 18-03-25.pdf" download class="download-btn">
          <span class="download-icon">📄</span>
          Télécharger les CGV en PDF
        </a>
      </div>
      
      <div class="cgv-section">
        <h3>ARTICLE 1 – IDENTIFICATION ET CADRE GÉNÉRAL</h3>
        <p>Les présentes Conditions Générales de Vente et d'Utilisation (CGVU) définissent le cadre dans lequel sont proposés les accompagnements, ateliers, formations, lectures akashiques, séances de Reiki, reprogrammations des mémoires cellulaires, apprentissages de la canalisation, contenus numériques, podcasts, publications, ouvrages et outils symboliques développés sous la marque Heart Resonance – Maria Huizar.</p>
        <p>L'activité est exercée par Maria Huizar, dans le cadre de la coopérative d'activité et d'emploi REGATE, qui assure notamment la gestion administrative, contractuelle et la facturation.</p>
        <p>Les présentes CGVU s'appliquent à toute commande, réservation, inscription ou utilisation des services proposés, via le site internet ou tout autre canal.</p>
        <p>Toute validation implique l'acceptation pleine, entière et sans réserve des présentes CGVU.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 2 – NATURE DES PRESTATIONS</h3>
        <p>Les prestations proposées incluent notamment :</p>
        <ul>
          <li>les accompagnements individuels,</li>
          <li>les lectures des mémoires akashiques,</li>
          <li>les séances de Reiki,</li>
          <li>les reprogrammations des mémoires cellulaires,</li>
          <li>les ateliers et formations d'apprentissage de la canalisation et de la connexion intuitive,</li>
          <li>les contenus éditoriaux et outils symboliques.</li>
        </ul>
        <p>Elles s'inscrivent dans une démarche de développement personnel, de clarification consciente et d'exploration énergétique.</p>
        <p>Elles ne constituent pas un acte médical, une psychothérapie, un diagnostic, un traitement thérapeutique ni une pratique divinatoire au sens juridique du terme.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 3 – LECTURES ET CANALISATION</h3>
        <p>Les lectures akashiques et pratiques de canalisation proposées reflètent des dynamiques et potentiels observés à l'instant présent. Leur évolution dépend des choix et actions de la personne.</p>
        <p>Les indications temporelles éventuellement évoquées constituent des estimations liées aux dynamiques actuelles et ne représentent ni une prédiction certaine ni un engagement de résultat.</p>
        <p>Les apprentissages proposés visent à développer la présence à soi, l'écoute intuitive et le discernement personnel. Ils ne garantissent pas l'acquisition d'une capacité spécifique ni d'un résultat déterminé.</p>
        <p>Ces pratiques ne remplacent en aucun cas un avis médical, psychologique ou thérapeutique.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 4 – RESPONSABILITÉ</h3>
        <p>Chaque participant demeure pleinement responsable de ses décisions, interprétations et engagements personnels.</p>
        <p>La responsabilité de Maria Huizar ne peut être engagée pour les conséquences directes ou indirectes résultant des choix effectués à la suite d'un accompagnement, d'une formation ou de l'utilisation d'un contenu proposé.</p>
        <p>Aucune prestation n'emporte obligation de résultat.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 5 – MANIFESTATIONS ÉMOTIONNELLES ET ÉNERGÉTIQUES</h3>
        <p>Les accompagnements, séances énergétiques et pratiques proposées peuvent susciter des réactions émotionnelles ou physiques passagères.</p>
        <p>En cas de fragilité psychologique ou de situation nécessitant un suivi médical ou thérapeutique, il appartient à la personne de consulter un professionnel de santé compétent.</p>
        <p>Maria Huizar se réserve le droit d'interrompre, d'ajuster ou de refuser une séance si la situation dépasse son champ de compétence.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 6 – CONTENUS ÉDITORIAUX ET OUTILS SYMBOLIQUES</h3>
        <p>Les ouvrages, podcasts, publications et outils symboliques ont pour finalité de soutenir une réflexion personnelle et une présence consciente à soi.</p>
        <p>Ils ne constituent ni une prédiction, ni une annonce d'événement futur, ni une garantie de transformation.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE</h3>
        <p>L'ensemble des contenus, textes, audios, visuels, supports pédagogiques, outils, méthodes et créations éditoriales est protégé par le droit d'auteur.</p>
        <p>Toute reproduction, diffusion ou exploitation sans autorisation écrite préalable est interdite.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 8 – COMMANDE ET VALIDATION</h3>
        <p>La commande peut s'effectuer via le site internet, par devis, par échange écrit ou par tout autre moyen proposé.</p>
        <p>La commande est considérée comme ferme et définitive à compter :</p>
        <ul>
          <li>du paiement total ou partiel,</li>
          <li>ou de l'acceptation du devis.</li>
        </ul>
        <p>Heart Resonance se réserve le droit de refuser une demande si elle ne relève pas de son champ d'intervention.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 9 – CONDITIONS FINANCIÈRES</h3>
        <p>Les tarifs sont indiqués en euros et précisés sur les supports de vente ou devis.</p>
        <p>Le règlement valide l'inscription ou l'accès aux prestations.</p>
        <p>Le paiement peut être effectué par paiement en ligne, virement bancaire, chèque ou espèces.</p>
        <p>Sauf accord particulier, les prestations sont dues avant leur réalisation.</p>
        <p><strong>Conformément aux obligations légales :</strong></p>
        <p>En cas de retard de paiement, des pénalités pourront être appliquées.</p>
        <p>Une indemnité forfaitaire de 40 € pour frais de recouvrement pourra être exigée (article D.441-5 du Code de commerce).</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 10 – ANNULATION, REPORT ET ABSENCE</h3>
        <p>Toute annulation est possible jusqu'à 72 heures avant la prestation.</p>
        <p><strong>Passé ce délai :</strong></p>
        <ul>
          <li>la prestation est due</li>
          <li>aucun remboursement ne sera effectué</li>
        </ul>
        <p>Un report peut être proposé à titre exceptionnel, sans obligation.</p>
        <p><strong>En cas d'absence sans prévenir :</strong></p>
        <ul>
          <li>la séance est due intégralement</li>
        </ul>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 11 – PRESTATIONS SUR PLUSIEURS SÉANCES / PROGRAMMES</h3>
        <p>Les accompagnements, formations, ateliers ou programmes impliquent :</p>
        <ul>
          <li>une réservation de créneaux</li>
          <li>une organisation spécifique</li>
        </ul>
        <p><strong>En conséquence :</strong></p>
        <p>L'engagement est ferme.</p>
        <p>Aucun remboursement ne pourra être exigé en cas :</p>
        <ul>
          <li>d'arrêt anticipé</li>
          <li>de non-utilisation</li>
          <li>de changement de situation</li>
        </ul>
        <p>(Sauf dispositions légales obligatoires contraires)</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 12 – DROIT DE RÉTRACTATION</h3>
        <p>Conformément au droit de la consommation :</p>
        <p>Le client dispose d'un délai de 14 jours pour exercer son droit de rétractation.</p>
        <p><strong>Toutefois, ce droit ne s'applique plus lorsque :</strong></p>
        <ul>
          <li>la prestation a été réalisée avant la fin du délai</li>
          <li>ou l'accès à un contenu numérique a été fourni immédiatement</li>
        </ul>
        <p>En validant sa commande, le client accepte :</p>
        <ul>
          <li>l'exécution immédiate</li>
          <li>la renonciation à son droit de rétractation dans ces cas</li>
        </ul>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 13 – CONTENUS NUMÉRIQUES</h3>
        <p>Les contenus numériques sont strictement personnels.</p>
        <p>Toute reproduction, partage ou diffusion est interdite.</p>
        <p><strong>En cas d'accès immédiat :</strong></p>
        <ul>
          <li>aucun remboursement ne pourra être exigé</li>
        </ul>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 14 – RESPONSABILITÉ LIMITÉE</h3>
        <p>La responsabilité de Maria Huizar est strictement limitée au montant de la prestation réglée.</p>
        <p>L'activité est couverte par une assurance Responsabilité Civile Professionnelle via REGATE.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 15 – DONNÉES PERSONNELLES</h3>
        <p>Les données collectées sont utilisées uniquement pour :</p>
        <ul>
          <li>la gestion client</li>
          <li>la relation commerciale</li>
          <li>l'organisation des prestations</li>
        </ul>
        <p>Conformément au RGPD.</p>
        <p>La politique de confidentialité est disponible sur le site.</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 16 – MÉDIATION DE LA CONSOMMATION</h3>
        <p>En cas de litige, une solution amiable sera recherchée en priorité.</p>
        <p>Conformément au Code de la consommation, le client peut recourir gratuitement à un médiateur :</p>
        <p>CM2C – Centre de la Médiation de la Consommation de Conciliateurs de Justice<br>
        39 rue Emile Zola – 81100 Castres</p>
      </div>

      <div class="cgv-section">
        <h3>ARTICLE 17 – DROIT APPLICABLE</h3>
        <p>Les présentes CGVU sont soumises au droit français.</p>
        <p>À défaut d'accord amiable, le litige pourra être porté devant les juridictions compétentes du ressort du Tribunal de commerce de Castres.</p>
      </div>
    </section>
  </main>

  ${t}
`,Z=`
  ${n}

  <main class="privacy-page">
    <div class="privacy-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="privacy-content">
      <h1>POLITIQUE DE CONFIDENTIALITÉ – HEART RESONANCE MARIA</h1>
      
      <div class="privacy-section">
        <h2>1. QUI SUIS-JE ?</h2>
        <p>Maria Huizar – Activité au sein de la coopérative REGATE</p>
        <p>Site : heart-resonance.com</p>
      </div>

      <div class="privacy-section">
        <h2>2. POURQUOI TES DONNÉES SONT COLLECTÉES</h2>
        <p>Répondre aux demandes, organiser les séances, gérer les paiements, suivi client.</p>
      </div>

      <div class="privacy-section">
        <h2>3. DONNÉES COLLECTÉES</h2>
        <p>Nom, prénom, email, téléphone, informations nécessaires à l'accompagnement.</p>
      </div>

      <div class="privacy-section">
        <h2>4. DONNÉES SENSIBLES</h2>
        <p>Données personnelles partagées dans le cadre des séances restent strictement confidentielles.</p>
      </div>

      <div class="privacy-section">
        <h2>5. UTILISATION</h2>
        <p>Aucune revente ni partage des données sauf obligation légale.</p>
      </div>

      <div class="privacy-section">
        <h2>6. DURÉE DE CONSERVATION</h2>
        <p>Durée nécessaire à la relation client.</p>
      </div>

      <div class="privacy-section">
        <h2>7. SÉCURITÉ</h2>
        <p>Accès limité et outils sécurisés.</p>
      </div>

      <div class="privacy-section">
        <h2>8. TES DROITS</h2>
        <p>Accès, rectification, suppression, opposition, portabilité.</p>
      </div>

      <div class="privacy-section">
        <h2>9. CONTACT</h2>
        <p>heart.resonance.mariahuizar@gmail.com</p>
      </div>

      <div class="privacy-section">
        <h2>10. ÉVOLUTION</h2>
        <p>Politique modifiable à tout moment.</p>
      </div>
    </section>
  </main>

  ${t}
`;function T(){const s=window.location.pathname.replace(/^\/+|\/+$/g,"");return R.includes(s)?s:"home"}function l(s,u=!0){if(u){const d=s==="home"?"/":`/${s}/`;window.location.pathname!==d&&window.history.pushState(null,"",d)}a.classList.remove("page-fade"),a.offsetWidth,s==="home"?a.innerHTML=C:s==="maria"?a.innerHTML=y:s==="voir-clair"?a.innerHTML=M:s==="memoires-akashiques"?a.innerHTML=O:s==="reiki"?a.innerHTML=w:s==="reprogrammation"?a.innerHTML=D:s==="tarifs"?a.innerHTML=F:s==="reiki-usui"?a.innerHTML=x:s==="memoires-akashiques-formations"?a.innerHTML=P:s==="canalisation"?a.innerHTML=U:s==="ateliers"?a.innerHTML=$:s==="atelier-1"?a.innerHTML=j:s==="atelier-2"?a.innerHTML=H:s==="livres"?a.innerHTML=z:s==="livre-1"?a.innerHTML=V:s==="livre-2"?a.innerHTML=B:s==="privacy"?a.innerHTML=Z:s==="cgv"?a.innerHTML=W:s==="mentions"?a.innerHTML=Q:s==="positionnement"?a.innerHTML=_:s==="reserver"?a.innerHTML=J:a.innerHTML=K,X(),window.scrollTo({top:0,behavior:"instant"}),a.classList.add("page-fade")}function X(){document.querySelectorAll("a[data-page]").forEach(e=>{const i=e.dataset.page;(i==="home"||R.includes(i??""))&&(e.href=i==="home"?"/":`/${i}/`)}),document.querySelector('.logo-container[data-page="home"]')?.addEventListener("click",e=>{e.preventDefault(),l("home")}),document.querySelector('.nav-item[data-page="maria"]')?.addEventListener("click",e=>{e.preventDefault(),l("maria")}),document.querySelector(".btn-back-home")?.addEventListener("click",e=>{e.preventDefault(),l("home")}),document.querySelector('.nav-item[data-page="podcast"]')?.addEventListener("click",e=>{e.preventDefault(),l("podcast")}),document.querySelector(".btn-podcast")?.addEventListener("click",e=>{e.preventDefault(),l("podcast")}),document.querySelector('.nav-item[data-page="tarifs"]')?.addEventListener("click",e=>{e.preventDefault(),l("tarifs")}),document.querySelector('.nav-item[data-page="positionnement"]')?.addEventListener("click",e=>{e.preventDefault(),l("positionnement")}),document.querySelector('.nav-item[data-page="reserver"]')?.addEventListener("click",e=>{e.preventDefault(),l("reserver")}),document.querySelectorAll("[data-brevo-meeting]").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.brevoMeeting;(i==="voir-clair"||i==="voirClair")&&k("voirClair"),i==="akashiques"&&k("akashiques")})});const p=document.querySelector(".mobile-menu-btn"),h=document.querySelector(".nav-menu"),m=document.querySelector(".mobile-menu-overlay");function S(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const i=document.createElement("div");e.appendChild(i);const c=e.offsetWidth-i.offsetWidth;return e.parentNode?.removeChild(e),c}const A=S();document.documentElement.style.setProperty("--scrollbar-width",`${A}px`),p&&h&&m&&(p.addEventListener("click",()=>{p.classList.contains("open")?(p.classList.remove("open"),h.classList.remove("mobile-open"),m.classList.remove("show"),document.body.classList.remove("menu-open")):(p.classList.add("open"),h.classList.add("mobile-open"),m.classList.add("show"),document.body.classList.add("menu-open"))}),m.addEventListener("click",()=>{p.classList.remove("open"),h.classList.remove("mobile-open"),m.classList.remove("show"),document.body.classList.remove("menu-open")})),document.querySelectorAll(".dropdown").forEach(e=>{const i=e.querySelector(".dropdown-content");let c;window.innerWidth>600&&(e.addEventListener("mouseenter",()=>{clearTimeout(c),i?.classList.add("show")}),e.addEventListener("mouseleave",()=>{c=setTimeout(()=>{i?.classList.remove("show")},300)}),i?.addEventListener("mouseenter",()=>{clearTimeout(c)}),i?.addEventListener("mouseleave",()=>{c=setTimeout(()=>{i?.classList.remove("show")},300)}));const g=e.querySelector(".dropdown-trigger");g?.addEventListener("click",q=>{if(window.innerWidth<=600){q.preventDefault(),q.stopPropagation();const I=i?.classList.contains("show");document.querySelectorAll(".dropdown-content").forEach(f=>{f!==i&&f.classList.remove("show")}),document.querySelectorAll(".dropdown-trigger").forEach(f=>{f!==g&&f.classList.remove("open")}),I?(i?.classList.remove("show"),g?.classList.remove("open")):(i?.classList.add("show"),g?.classList.add("open"))}})}),document.querySelectorAll(".dropdown-content a").forEach(e=>{e.addEventListener("click",i=>{if(i.ctrlKey||i.metaKey||i.shiftKey||i.altKey)return;i.preventDefault(),i.stopPropagation();const c=e.getAttribute("data-page");c&&(document.querySelectorAll(".dropdown-content").forEach(g=>{g.classList.remove("show")}),window.innerWidth<=600&&(p?.classList.remove("open"),h?.classList.remove("mobile-open"),m?.classList.remove("show"),document.body.classList.remove("menu-open")),l(c))})}),document.querySelectorAll(".nav-item:not(.dropdown)").forEach(e=>{e.addEventListener("click",()=>{window.innerWidth<=600&&(p?.classList.remove("open"),h?.classList.remove("mobile-open"),m?.classList.remove("show"),document.body.classList.remove("menu-open"))})}),document.querySelectorAll(".footer-link[data-page]").forEach(e=>{e.addEventListener("click",i=>{if(i.ctrlKey||i.metaKey||i.shiftKey||i.altKey)return;i.preventDefault();const c=e.getAttribute("data-page");c&&l(c)})})}window.addEventListener("popstate",()=>l(T(),!1));l(T(),!1);
