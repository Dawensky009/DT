// Single source of truth for ALL site copy.
// `en` and `fr` are mirrored objects with identical keys, so the toggle
// switches the entire site. Editorial-minimal layout (no image galleries).

export const profile = {
  name: 'Dawensky Thermildort',
  initials: 'DT',
  email: 'ciatech2019@gmail.com',
  // TODO(Dawensky): replace with your real number / confirm handles
  whatsapp: 'https://wa.me/0000000000',
  linkedin: 'https://www.linkedin.com/in/dawensky-thermildort/',
  facebook: 'https://www.facebook.com/dawensky.thermildort',
  cv: '/cv-dawensky.pdf',
  photo: '/profile.jpg',
  logo: '/logo.png',
}

export const content = {
  en: {
    nav: {
      links: [
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'journey', label: 'Journey' },
        { id: 'work', label: 'Work' },
      ],
      cta: 'Book a call',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langSwitch: 'Switch to French',
    },

    hero: {
      role: 'Risk & Data Analyst',
      stats: [
        { value: '20', label: 'Projects completed' },
        { value: '5', label: 'Years in data & tech' },
      ],
      hello: 'Hello',
      subtitle: '— It’s Dawensky, a risk & data analyst',
      scroll: 'Scroll down',
      photoAlt: 'Portrait of Dawensky Thermildort',
    },

    about: {
      label: 'About me',
      heading: 'Analyst by training, builder by instinct.',
      paragraphs: [
        'I studied Computer Science at the Université de Technologie d’Haïti, and that engineering mindset shapes everything I do. I don’t just report on data — I build the systems that make it useful.',
        'Today I work as a Business Risk & Data Analyst, protecting revenue and guiding decisions. On the side, I bring the same rigor to crafting websites for people and small businesses.',
      ],
      stat: { value: 100, suffix: '%', label: 'Commitment to precise, honest work' },
      credentials: [
        'B.Sc. Computer Science',
        'Career Essentials in Business Analysis — Microsoft & LinkedIn',
        'Excel · Power BI · SQL · Python',
      ],
    },

    services: {
      label: 'What I do',
      heading: 'Services',
      intro: 'Three ways I help businesses and professionals decide with confidence.',
      items: [
        {
          no: '01',
          name: 'Business Risk Analysis',
          desc: 'Identify, measure and mitigate the risks that threaten revenue and compliance — with clear reporting leaders can act on.',
        },
        {
          no: '02',
          name: 'Consulting & Training',
          desc: 'Advisory sessions and hands-on training that level up your team in analytics, data tooling and tech fundamentals.',
        },
        {
          no: '03',
          name: 'Website Creation',
          desc: 'Fast, modern, conversion-focused websites — like this one — designed and built to make your work look as good as it is.',
        },
      ],
    },

    journey: {
      label: 'My path',
      heading: 'Explore my journey',
      items: [
        { year: '2020', title: 'B.Sc. Computer Science', org: 'Université de Technologie d’Haïti', cat: 'Education' },
        { year: '2020', title: 'Web Developer', org: 'Government ministry', cat: 'Development' },
        { year: '2021', title: 'Data Processing & Analysis', org: 'Operations', cat: 'Data' },
        { year: '2022', title: 'Career Essentials in Business Analysis', org: 'Microsoft & LinkedIn', cat: 'Certification' },
        { year: 'Now', title: 'Business Risk & Data Analyst', org: 'Telecom sector', cat: 'Current' },
      ],
    },

    banner: {
      kicker: 'Free 30-minute consultation',
      heading: 'Let’s find the clarity hiding in your numbers.',
      cta: 'Book a call',
    },

    work: {
      label: 'Selected work',
      heading: 'Recent projects',
      intro: 'A selection spanning analytics, risk and the web. Detailed case studies are on the way.',
      soon: 'In progress',
      items: [
        { year: '2020', tag: 'Web Development', title: 'Web Stock Management App', desc: 'A web application to track, organize and report on inventory in real time.', ready: true },
        { year: '2023', tag: 'Data Analysis', title: 'Risk & Revenue Dashboard', desc: 'An interactive dashboard surfacing revenue-assurance risks and KPIs at a glance.', ready: false },
        { year: '2024', tag: 'Analytics', title: 'Demand Forecast Model', desc: 'A forecasting model turning historical data into forward-looking planning.', ready: false },
        { year: '2024', tag: 'Web Creation', title: 'Client Portfolio Website', desc: 'A fast, conversion-focused marketing site built for a service business.', ready: false },
      ],
    },

    footerCta: {
      kicker: "Let's connect",
      heading: ['Got an idea?', 'Let’s bring it to life.'],
      emailCta: 'Email me',
      whatsappCta: 'WhatsApp',
      reply: 'I usually reply within a day.',
    },

    footer: {
      nav: 'Menu',
      social: 'Social',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  fr: {
    nav: {
      links: [
        { id: 'about', label: 'À propos' },
        { id: 'services', label: 'Services' },
        { id: 'journey', label: 'Parcours' },
        { id: 'work', label: 'Projets' },
      ],
      cta: 'Réserver un appel',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      langSwitch: 'Passer en anglais',
    },

    hero: {
      role: 'Analyste risque & data',
      stats: [
        { value: '20', label: 'Projets réalisés' },
        { value: '5', label: 'Ans en data & tech' },
      ],
      hello: 'Bonjour',
      subtitle: '— Dawensky, analyste risque & data',
      scroll: 'Défiler',
      photoAlt: 'Portrait de Dawensky Thermildort',
    },

    about: {
      label: 'À propos',
      heading: 'Analyste de formation, bâtisseur d’instinct.',
      paragraphs: [
        'J’ai étudié l’informatique à l’Université de Technologie d’Haïti, et cet état d’esprit d’ingénieur façonne tout ce que je fais. Je ne me contente pas d’analyser la donnée — je construis les systèmes qui la rendent utile.',
        'Aujourd’hui, je suis analyste des risques et des données : je protège les revenus et guide les décisions. En parallèle, j’apporte la même rigueur à la création de sites web pour particuliers et petites entreprises.',
      ],
      stat: { value: 100, suffix: '%', label: 'Engagé pour un travail précis et honnête' },
      credentials: [
        'Licence en informatique',
        'Career Essentials in Business Analysis — Microsoft & LinkedIn',
        'Excel · Power BI · SQL · Python',
      ],
    },

    services: {
      label: 'Mes services',
      heading: 'Services',
      intro: 'Trois façons d’aider entreprises et professionnels à décider avec assurance.',
      items: [
        {
          no: '01',
          name: 'Analyse des risques',
          desc: 'Identifier, mesurer et atténuer les risques qui menacent le chiffre d’affaires et la conformité — avec des rapports clairs et exploitables.',
        },
        {
          no: '02',
          name: 'Conseil & formation',
          desc: 'Des sessions de conseil et des formations pratiques pour faire monter votre équipe en analytique, outils de données et fondamentaux tech.',
        },
        {
          no: '03',
          name: 'Création de sites web',
          desc: 'Des sites modernes, rapides et orientés conversion — comme celui-ci — conçus pour mettre votre travail en valeur.',
        },
      ],
    },

    journey: {
      label: 'Mon parcours',
      heading: 'Découvrez mon parcours',
      items: [
        { year: '2020', title: 'Licence en informatique', org: 'Université de Technologie d’Haïti', cat: 'Formation' },
        { year: '2020', title: 'Développeur web', org: 'Ministère', cat: 'Développement' },
        { year: '2021', title: 'Traitement & analyse de données', org: 'Opérations', cat: 'Données' },
        { year: '2022', title: 'Career Essentials in Business Analysis', org: 'Microsoft & LinkedIn', cat: 'Certification' },
        { year: "Aujourd'hui", title: 'Analyste des risques & des données', org: 'Secteur télécom', cat: 'Actuel' },
      ],
    },

    banner: {
      kicker: 'Consultation gratuite de 30 minutes',
      heading: 'Révélons la clarté cachée dans vos chiffres.',
      cta: 'Réserver un appel',
    },

    work: {
      label: 'Projets sélectionnés',
      heading: 'Projets récents',
      intro: 'Une sélection entre analytique, risque et web. Les études de cas détaillées arrivent bientôt.',
      soon: 'En cours',
      items: [
        { year: '2020', tag: 'Développement web', title: 'App web de gestion de stock', desc: 'Une application web pour suivre, organiser et reporter l’inventaire en temps réel.', ready: true },
        { year: '2023', tag: 'Analyse de données', title: 'Dashboard risques & revenus', desc: 'Un tableau de bord interactif révélant d’un coup d’œil les risques d’assurance revenus et les KPI.', ready: false },
        { year: '2024', tag: 'Analytique', title: 'Modèle de prévision de la demande', desc: 'Un modèle de prévision transformant l’historique en planification prévisionnelle.', ready: false },
        { year: '2024', tag: 'Création web', title: 'Site portfolio client', desc: 'Un site vitrine rapide et orienté conversion pour une entreprise de services.', ready: false },
      ],
    },

    footerCta: {
      kicker: 'Restons en contact',
      heading: ['Une idée en tête ?', 'Donnons-lui vie.'],
      emailCta: 'M’écrire',
      whatsappCta: 'WhatsApp',
      reply: 'Je réponds généralement sous 24 h.',
    },

    footer: {
      nav: 'Menu',
      social: 'Réseaux',
      rights: 'Tous droits réservés.',
      backToTop: 'Haut de page',
    },
  },
}
