// Single source of truth for ALL site copy.
// Every visible string lives here so the EN/FR toggle switches the whole site.
// `en` and `fr` are mirrored objects with identical keys.

// Shared, language-agnostic data (links, icon keys, etc.)
export const profile = {
  name: 'Dawensky Thermildort',
  email: 'ciatech2019@gmail.com',
  // TODO(Dawensky): replace with your real numbers / handles
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
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'journey', label: 'Journey' },
        { id: 'work', label: 'Work' },
        { id: 'about', label: 'About' },
      ],
      cta: "Let's talk",
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langSwitch: 'Switch to French',
    },

    hero: {
      greeting: "Hi, I'm Dawensky.",
      title: ['Turning data & risk into', 'clear business decisions.'],
      role: 'Business Risk Analyst · Data Analyst',
      blurb:
        'I help organizations see what the numbers are really saying — assessing risk, uncovering insight, and building the tools that put it to work. With a Computer Science background, I also craft websites that convert.',
      primaryCta: 'Start a project',
      secondaryCta: 'View my work',
      photoAlt: 'Portrait of Dawensky Thermildort',
      available: 'Available for new projects',
    },

    trust: {
      label: 'Credentials & toolkit',
      items: [
        { kind: 'cert', text: 'Career Essentials in Business Analysis — Microsoft & LinkedIn' },
        { kind: 'edu', text: 'B.Sc. Computer Science — Université de Technologie d’Haïti' },
        { kind: 'tool', text: 'Excel · Power BI · SQL' },
        { kind: 'tool', text: 'Python · MySQL · PHP' },
      ],
    },

    services: {
      label: 'What I do',
      heading: 'Services built to move you forward',
      intro:
        'Three ways I help businesses and professionals make sharper, more confident decisions.',
      items: [
        {
          icon: 'shield',
          name: 'Business Risk Analysis',
          desc: 'Identify, measure and mitigate the risks that threaten revenue and compliance — with clear reporting leaders can act on.',
          points: ['Risk assessment & scoring', 'Mitigation strategy', 'Revenue assurance & compliance'],
        },
        {
          icon: 'graduation',
          name: 'Consulting & Training',
          desc: 'Advisory sessions and hands-on training that level up your team in analytics, data tooling, and tech fundamentals.',
          points: ['Analytics & data workshops', 'One-on-one coaching', 'Process & tooling audits'],
        },
        {
          icon: 'code',
          name: 'Website Creation',
          desc: 'Fast, modern, conversion-focused websites — like this one — designed and built to make your work look as good as it is.',
          points: ['Custom design & build', 'Responsive & accessible', 'Performance-first'],
        },
      ],
    },

    skills: {
      label: 'Skills & expertise',
      heading: 'A toolkit that spans data and the web',
      intro:
        'From spreadsheets to dashboards to production code — the technical range to take a problem end to end.',
      groups: [
        {
          name: 'Data & Analytics',
          items: ['Excel (advanced)', 'Power BI', 'SQL', 'Data cleaning', 'Dashboards', 'Reporting'],
        },
        {
          name: 'Risk & Business',
          items: ['Business analysis', 'Risk assessment', 'Revenue assurance', 'Compliance', 'Process design'],
        },
        {
          name: 'Development',
          items: ['HTML & CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Python'],
        },
      ],
    },

    timeline: {
      label: 'My journey',
      heading: 'A path from code to risk, data & beyond',
      intro: 'How a Computer Science foundation grew into a career across analytics, risk and the web.',
      items: [
        {
          year: '2020',
          type: 'education',
          title: 'B.Sc. in Computer Science',
          org: 'Université de Technologie d’Haïti',
          desc: 'Graduated with a strong foundation in programming, databases and systems thinking.',
        },
        {
          year: '2020',
          type: 'role',
          title: 'Web Developer',
          org: 'Government ministry',
          desc: 'Designed and built a web-based stock management application used to track and organize inventory.',
        },
        {
          year: '2021',
          type: 'role',
          title: 'Data Processing & Analysis',
          org: 'Data operations',
          desc: 'Structured, cleaned and analyzed operational data in Excel to support reliable reporting.',
        },
        {
          year: '2022',
          type: 'cert',
          title: 'Career Essentials in Business Analysis',
          org: 'Microsoft & LinkedIn',
          desc: 'Formalized business-analysis expertise: requirements, stakeholder analysis and decision support.',
        },
        {
          year: 'Now',
          type: 'milestone',
          title: 'Business Risk & Data Analyst',
          org: 'Telecom sector',
          desc: 'Analyzing data and risk to protect revenue and guide decisions — while building websites for clients on the side.',
        },
      ],
    },

    projects: {
      label: 'Selected work',
      heading: 'Projects & case studies',
      intro:
        'A selection of work spanning analytics, risk and the web. Detailed case studies are on the way.',
      soon: 'Case study coming soon',
      viewLabel: 'View',
      items: [
        {
          title: 'Web Stock Management App',
          tag: 'Web Development',
          summary: 'A web application to track, organize and report on inventory in real time.',
          ready: true,
        },
        {
          title: 'Risk & Revenue Dashboard',
          tag: 'Data Analysis',
          summary: 'Interactive dashboard surfacing revenue-assurance risks and KPIs at a glance.',
          ready: false,
        },
        {
          title: 'Demand Forecast Model',
          tag: 'Analytics',
          summary: 'Forecasting model turning historical data into forward-looking business planning.',
          ready: false,
        },
        {
          title: 'Client Portfolio Website',
          tag: 'Web Creation',
          summary: 'A fast, conversion-focused marketing site built for a service business.',
          ready: false,
        },
      ],
    },

    metrics: {
      label: 'By the numbers',
      items: [
        { value: 5, suffix: '+', label: 'Years in data & tech' },
        { value: 20, suffix: '+', label: 'Projects delivered' },
        { value: 3, suffix: '', label: 'Core service areas' },
        { value: 100, suffix: '%', label: 'Commitment to quality' },
      ],
    },

    about: {
      label: 'About me',
      heading: 'Analyst by training, builder by instinct',
      paragraphs: [
        'I’m Dawensky Thermildort, a Business Risk Analyst and Data Analyst based in Haiti. I studied Computer Science, and that engineering mindset shapes everything I do — I don’t just report on data, I build the systems that make it useful.',
        'My day-to-day is about clarity: turning messy numbers and tangled risk into decisions a business can actually make. On the side, I bring that same rigor to website creation — helping people and small businesses show up online with confidence.',
        'Whether it’s a risk model, a dashboard, or a website, my goal is the same: work that’s precise, honest, and genuinely useful.',
      ],
      cvCta: 'Download my CV',
      photoAlt: 'Dawensky Thermildort',
    },

    contact: {
      label: "Let's connect",
      heading: 'Have a project in mind?',
      intro:
        'Tell me about your challenge — risk, data, or a website — and let’s turn it into something that works. I usually reply within a day.',
      emailCta: 'Email me',
      whatsappCta: 'WhatsApp',
      emailSubject: 'Project inquiry — from your portfolio',
      emailBody: 'Hi Dawensky,\n\nI’d like to talk about a project:\n\n',
      directLabel: 'Or reach me directly',
    },

    footer: {
      tagline: 'Turning data & risk into clear business decisions.',
      rights: 'All rights reserved.',
      nav: 'Navigation',
      social: 'Elsewhere',
      backToTop: 'Back to top',
    },
  },

  fr: {
    nav: {
      links: [
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Compétences' },
        { id: 'journey', label: 'Parcours' },
        { id: 'work', label: 'Projets' },
        { id: 'about', label: 'À propos' },
      ],
      cta: 'Discutons',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      langSwitch: 'Passer en anglais',
    },

    hero: {
      greeting: 'Bonjour, je suis Dawensky.',
      title: ['Transformer données et risques en', 'décisions claires.'],
      role: 'Analyste des risques · Analyste de données',
      blurb:
        'J’aide les organisations à comprendre ce que les chiffres disent vraiment — évaluer les risques, révéler les tendances et créer les outils pour passer à l’action. Formé en informatique, je conçois aussi des sites web qui convertissent.',
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Voir mes projets',
      photoAlt: 'Portrait de Dawensky Thermildort',
      available: 'Disponible pour de nouveaux projets',
    },

    trust: {
      label: 'Diplômes & outils',
      items: [
        { kind: 'cert', text: 'Career Essentials in Business Analysis — Microsoft & LinkedIn' },
        { kind: 'edu', text: 'Licence en informatique — Université de Technologie d’Haïti' },
        { kind: 'tool', text: 'Excel · Power BI · SQL' },
        { kind: 'tool', text: 'Python · MySQL · PHP' },
      ],
    },

    services: {
      label: 'Mes services',
      heading: 'Des services pensés pour vous faire avancer',
      intro:
        'Trois façons d’aider entreprises et professionnels à prendre des décisions plus justes et plus sûres.',
      items: [
        {
          icon: 'shield',
          name: 'Analyse des risques',
          desc: 'Identifier, mesurer et atténuer les risques qui menacent le chiffre d’affaires et la conformité — avec des rapports clairs et exploitables.',
          points: ['Évaluation & notation des risques', 'Stratégie d’atténuation', 'Assurance revenus & conformité'],
        },
        {
          icon: 'graduation',
          name: 'Conseil & formation',
          desc: 'Des sessions de conseil et des formations pratiques pour faire monter votre équipe en compétences : analytique, outils de données et fondamentaux tech.',
          points: ['Ateliers data & analytique', 'Accompagnement individuel', 'Audit des processus & outils'],
        },
        {
          icon: 'code',
          name: 'Création de sites web',
          desc: 'Des sites modernes, rapides et orientés conversion — comme celui-ci — conçus pour mettre votre travail en valeur.',
          points: ['Design & développement sur mesure', 'Responsive & accessible', 'Axé performance'],
        },
      ],
    },

    skills: {
      label: 'Compétences & expertise',
      heading: 'Une palette à cheval entre la donnée et le web',
      intro:
        'Du tableur au dashboard jusqu’au code en production — la polyvalence technique pour traiter un problème de bout en bout.',
      groups: [
        {
          name: 'Données & analytique',
          items: ['Excel (avancé)', 'Power BI', 'SQL', 'Nettoyage de données', 'Tableaux de bord', 'Reporting'],
        },
        {
          name: 'Risque & business',
          items: ['Analyse business', 'Évaluation des risques', 'Assurance revenus', 'Conformité', 'Conception de processus'],
        },
        {
          name: 'Développement',
          items: ['HTML & CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Python'],
        },
      ],
    },

    timeline: {
      label: 'Mon parcours',
      heading: 'Du code aux risques, à la donnée et au-delà',
      intro: 'Comment une base en informatique s’est muée en une carrière entre analytique, risque et web.',
      items: [
        {
          year: '2020',
          type: 'education',
          title: 'Licence en informatique',
          org: 'Université de Technologie d’Haïti',
          desc: 'Diplômé avec de solides bases en programmation, bases de données et pensée systémique.',
        },
        {
          year: '2020',
          type: 'role',
          title: 'Développeur web',
          org: 'Ministère',
          desc: 'Conception et développement d’une application web de gestion de stock pour suivre et organiser l’inventaire.',
        },
        {
          year: '2021',
          type: 'role',
          title: 'Traitement & analyse de données',
          org: 'Opérations data',
          desc: 'Structuration, nettoyage et analyse de données opérationnelles sous Excel pour un reporting fiable.',
        },
        {
          year: '2022',
          type: 'cert',
          title: 'Career Essentials in Business Analysis',
          org: 'Microsoft & LinkedIn',
          desc: 'Formalisation de l’expertise en analyse business : besoins, parties prenantes et aide à la décision.',
        },
        {
          year: "Aujourd'hui",
          type: 'milestone',
          title: 'Analyste des risques & des données',
          org: 'Secteur télécom',
          desc: 'Analyser données et risques pour protéger les revenus et guider les décisions — tout en créant des sites web pour mes clients.',
        },
      ],
    },

    projects: {
      label: 'Projets sélectionnés',
      heading: 'Projets & études de cas',
      intro:
        'Une sélection de travaux entre analytique, risque et web. Les études de cas détaillées arrivent bientôt.',
      soon: 'Étude de cas à venir',
      viewLabel: 'Voir',
      items: [
        {
          title: 'App web de gestion de stock',
          tag: 'Développement web',
          summary: 'Une application web pour suivre, organiser et reporter l’inventaire en temps réel.',
          ready: true,
        },
        {
          title: 'Dashboard risques & revenus',
          tag: 'Analyse de données',
          summary: 'Tableau de bord interactif révélant d’un coup d’œil les risques d’assurance revenus et les KPI.',
          ready: false,
        },
        {
          title: 'Modèle de prévision de la demande',
          tag: 'Analytique',
          summary: 'Modèle de prévision transformant l’historique de données en planification prévisionnelle.',
          ready: false,
        },
        {
          title: 'Site portfolio client',
          tag: 'Création web',
          summary: 'Un site vitrine rapide et orienté conversion pour une entreprise de services.',
          ready: false,
        },
      ],
    },

    metrics: {
      label: 'En chiffres',
      items: [
        { value: 5, suffix: '+', label: 'Ans en data & tech' },
        { value: 20, suffix: '+', label: 'Projets livrés' },
        { value: 3, suffix: '', label: 'Domaines de service' },
        { value: 100, suffix: '%', label: 'Exigence de qualité' },
      ],
    },

    about: {
      label: 'À propos',
      heading: 'Analyste de formation, bâtisseur d’instinct',
      paragraphs: [
        'Je suis Dawensky Thermildort, analyste des risques et analyste de données, basé en Haïti. J’ai étudié l’informatique, et cet état d’esprit d’ingénieur façonne tout ce que je fais — je ne me contente pas d’analyser la donnée, je construis les systèmes qui la rendent utile.',
        'Mon quotidien, c’est la clarté : transformer des chiffres bruts et des risques complexes en décisions concrètes. En parallèle, j’apporte la même rigueur à la création de sites web — pour aider particuliers et petites entreprises à exister en ligne avec assurance.',
        'Qu’il s’agisse d’un modèle de risque, d’un tableau de bord ou d’un site web, mon objectif reste le même : un travail précis, honnête et réellement utile.',
      ],
      cvCta: 'Télécharger mon CV',
      photoAlt: 'Dawensky Thermildort',
    },

    contact: {
      label: 'Restons en contact',
      heading: 'Un projet en tête ?',
      intro:
        'Parlez-moi de votre besoin — risque, données ou site web — et transformons-le en quelque chose qui fonctionne. Je réponds généralement sous 24 h.',
      emailCta: 'M’écrire',
      whatsappCta: 'WhatsApp',
      emailSubject: 'Demande de projet — via votre portfolio',
      emailBody: 'Bonjour Dawensky,\n\nJ’aimerais échanger au sujet d’un projet :\n\n',
      directLabel: 'Ou contactez-moi directement',
    },

    footer: {
      tagline: 'Transformer données et risques en décisions claires.',
      rights: 'Tous droits réservés.',
      nav: 'Navigation',
      social: 'Ailleurs',
      backToTop: 'Haut de page',
    },
  },
}
