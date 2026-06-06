// Single source of truth for ALL site copy.
// `en` and `fr` are mirrored objects with identical keys, so the toggle
// switches the entire site. Content reflects Dawensky's real CV.

export const profile = {
  name: 'Dawensky Thermildort',
  initials: 'DT',
  email: 'dawenskydaky98@gmail.com',
  phone: '+50937007978',
  phoneDisplay: '+509 3700 7978',
  whatsapp: 'https://wa.me/50937007978',
  linkedin: 'https://www.linkedin.com/in/dawenskythermildort',
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
        { id: 'expertise', label: 'Expertise' },
        { id: 'experience', label: 'Experience' },
        { id: 'certifications', label: 'Certifications' },
      ],
      cta: 'Book a call',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langSwitch: 'Switch to French',
    },

    hero: {
      role: 'Risk & Data Analyst',
      stats: [
        { value: 5, suffix: '', label: 'Years in data & tech' },
        { value: 6, suffix: '', label: 'Certifications earned' },
      ],
      hello: 'Hello',
      subtitle: '— It’s Dawensky, a risk & data analyst',
      badge: 'Valedictorian · Class of 2020',
      scroll: 'Scroll down',
      photoAlt: 'Portrait of Dawensky Thermildort',
    },

    about: {
      label: 'About me',
      heading: 'Analyst by training, builder by instinct.',
      paragraphs: [
        'I’m an experienced Business Risk Analyst with a strong technical foundation in database management. At Digicel Group, I help secure revenue and sharpen decision-making through data — fraud prevention, revenue assurance and pre-launch product validation.',
        'I graduated top of my class — Valedictorian in Computer Science (2016–2020) — and I’m currently pursuing a Specialized Graduate Diploma (DESS) in Database Administration. I also take part in AI workshops to stay at the edge of data and risk.',
        'Beyond analytics, I design and build websites — bringing the same rigor and clarity to every project I take on.',
      ],
      highlights: [
        { k: 'valedictorian', label: 'Valedictorian', detail: 'Computer Science, 2016–2020' },
        { k: 'dess', label: 'DESS in progress', detail: 'Database Administration' },
        { k: 'ai', label: 'AI workshops', detail: 'Generative AI & risk' },
      ],
      languagesLabel: 'Languages',
      languages: [
        { name: 'French', level: 'Native' },
        { name: 'Haitian Creole', level: 'Native' },
        { name: 'English', level: 'Professional' },
      ],
      cvCta: 'Download my CV',
      photoAlt: 'Dawensky Thermildort',
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

    expertise: {
      label: 'Expertise',
      heading: 'Skills & capabilities',
      intro: 'A toolkit spanning risk, business intelligence and data engineering.',
      groups: [
        { name: 'Risk & Compliance', items: ['Fraud prevention', 'Revenue assurance', 'Product validation', 'Compliance'] },
        { name: 'Business Intelligence', items: ['Power BI', 'Excel dashboards', 'Strategic monitoring', 'Reporting'] },
        { name: 'Data Management', items: ['Data cleansing', 'Consolidation', 'PL/SQL', 'Python (Pandas)', 'Automation'] },
        { name: 'Tools & Tech', items: ['Oracle', 'MySQL', 'SQL Server', 'Azure Databricks'] },
      ],
      topLabel: 'Top skills',
      topSkills: ['Leadership', 'Financial Analysis', 'Business Requirements'],
    },

    experience: {
      label: 'Experience',
      heading: 'Where I’ve made an impact',
      items: [
        {
          org: 'Digicel Group',
          role: 'Senior Business Risk Analyst',
          period: 'Apr 2026 — Present',
          location: 'Port-au-Prince',
          bullets: [
            'Drive business growth while implementing robust fraud-prevention measures across products.',
            'Monitor all revenue aspects to ensure financial integrity and compliance.',
            'Lead and mentor team members, fostering a culture of continuous improvement.',
            'Conduct thorough pre- and post-launch product validations to raise quality.',
          ],
        },
        {
          org: 'Digicel Group',
          role: 'Business Risk Analyst',
          period: 'Dec 2022 — Apr 2026',
          location: 'Ouest, Haiti',
          bullets: [
            'Performed risk analysis, revenue assurance and compliance monitoring across the product portfolio.',
            'Built interactive dashboards (Power BI, Excel) for strategic decision-making.',
          ],
        },
        {
          org: 'Ministère des Affaires Étrangères',
          role: 'Database Designer',
          period: 'Sep — Nov 2021',
          location: 'Haiti',
          bullets: [
            'Collaborated with senior designers to design, implement and maintain databases.',
            'Performed data entry and cleansing to ensure accuracy and completeness.',
          ],
        },
        {
          org: 'CECACHE',
          role: 'Data Entry Specialist',
          period: 'Jan — Mar 2021',
          location: 'Haiti',
          bullets: [
            'Entered large volumes of paper data into Excel with high accuracy.',
            'Identified and corrected entry errors quickly to maintain data integrity.',
          ],
        },
      ],
    },

    education: {
      label: 'Education',
      heading: 'Academic background',
      items: [
        {
          school: 'UNITECH | Banque de la République d’Haïti',
          degree: 'DESS — Database Administration',
          detail: 'Data Modeling, Warehousing & Database Administration',
          period: '2024 — 2025',
          status: 'In progress',
        },
        {
          school: 'Université de Technologie d’Haïti',
          degree: 'B.Sc. Computer Science',
          detail: 'Valedictorian — graduated top of class',
          period: '2016 — 2020',
          highlight: true,
        },
        {
          school: 'Caribbean English School',
          degree: 'Second Language Learning',
          detail: 'English',
          period: '2021 — 2022',
        },
      ],
    },

    certifications: {
      label: 'Certifications',
      heading: 'Credentials & continuous learning',
      intro: 'Industry certifications from Microsoft, LinkedIn, Google and Oracle.',
      viewLabel: 'View certificate',
      verifyLabel: 'Verify',
      skillsLabel: 'Skills',
      items: [
        { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Jan 2024', skills: ['Microsoft Copilot', 'Generative AI', 'Responsible AI'], file: '/certificates/generative-ai-ms-linkedin.pdf' },
        { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft & LinkedIn', date: 'Feb 2024', skills: ['Data Analysis', 'Data Visualization', 'Data Analytics'], file: '/certificates/data-analysis-ms-linkedin.pdf' },
        { name: 'Career Essentials in Business Analysis', issuer: 'Microsoft & LinkedIn', date: 'Feb 2023', skills: ['Requirements Gathering', 'Project Management', 'Business Analysis'], file: '/certificates/business-analysis-ms-linkedin.pdf' },
        { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google · Coursera', date: 'Sep 2023', skills: ['Data', 'Analytics'], file: '/certificates/google-data-foundations-coursera.pdf', verify: 'https://coursera.org/verify/YG668EZWKYBU' },
        { name: 'Oracle Database Foundations', issuer: 'Oracle', date: '', skills: ['SQL', 'Databases'] },
        { name: 'AI in Risk Management & Fraud Detection', issuer: 'Professional training', date: '', skills: ['AI', 'Risk', 'Fraud Detection'] },
      ],
    },

    work: {
      label: 'Selected work',
      heading: 'Recent projects',
      intro: 'A selection spanning analytics, risk and the web. Detailed case studies are on the way.',
      soon: 'In progress',
      items: [
        { year: '2021', tag: 'Database Design', title: 'Ministry Database System', desc: 'Designed and maintained databases supporting information management and decision-making.', ready: true },
        { year: '2024', tag: 'Business Intelligence', title: 'Risk & Revenue Dashboard', desc: 'Interactive Power BI dashboard surfacing revenue-assurance risks and KPIs at a glance.', ready: false },
        { year: '2024', tag: 'Data Engineering', title: 'PL/SQL Automation Scripts', desc: 'Automated data cleansing and consolidation pipelines with PL/SQL and Python (Pandas).', ready: false },
        { year: '2025', tag: 'Web Creation', title: 'Client Portfolio Website', desc: 'A fast, conversion-focused marketing site built for a service business.', ready: false },
      ],
    },

    banner: {
      kicker: 'Free 30-minute consultation',
      heading: 'Let’s find the clarity hiding in your numbers.',
      cta: 'Book a call',
    },

    footerCta: {
      kicker: "Let's connect",
      heading: ['Got a project?', 'Let’s bring it to life.'],
      emailCta: 'Email me',
      whatsappCta: 'WhatsApp',
      reply: 'I usually reply within a day.',
      directLabel: 'Direct line',
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
        { id: 'expertise', label: 'Expertise' },
        { id: 'experience', label: 'Expérience' },
        { id: 'certifications', label: 'Certifications' },
      ],
      cta: 'Réserver un appel',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      langSwitch: 'Passer en anglais',
    },

    hero: {
      role: 'Analyste risque & data',
      stats: [
        { value: 5, suffix: '', label: 'Ans en data & tech' },
        { value: 6, suffix: '', label: 'Certifications obtenues' },
      ],
      hello: 'Bonjour',
      subtitle: '— Dawensky, analyste risque & data',
      badge: 'Major de promotion · 2020',
      scroll: 'Défiler',
      photoAlt: 'Portrait de Dawensky Thermildort',
    },

    about: {
      label: 'À propos',
      heading: 'Analyste de formation, bâtisseur d’instinct.',
      paragraphs: [
        'Je suis un analyste des risques expérimenté, doté d’un solide socle technique en gestion de bases de données. Chez Digicel Group, j’aide à sécuriser les revenus et à affiner la prise de décision grâce à la donnée — prévention de la fraude, assurance revenus et validation produit avant lancement.',
        'J’ai été major de ma promotion en informatique (2016–2020) et je prépare actuellement un DESS en administration de bases de données. Je participe aussi à des workshops en intelligence artificielle pour rester à la pointe de la data et du risque.',
        'Au-delà de l’analytique, je conçois et développe des sites web — avec la même rigueur et la même clarté sur chaque projet.',
      ],
      highlights: [
        { k: 'valedictorian', label: 'Major de promotion', detail: 'Informatique, 2016–2020' },
        { k: 'dess', label: 'DESS en cours', detail: 'Administration de bases de données' },
        { k: 'ai', label: 'Workshops IA', detail: 'IA générative & risque' },
      ],
      languagesLabel: 'Langues',
      languages: [
        { name: 'Français', level: 'Natif' },
        { name: 'Créole haïtien', level: 'Natif' },
        { name: 'Anglais', level: 'Professionnel' },
      ],
      cvCta: 'Télécharger mon CV',
      photoAlt: 'Dawensky Thermildort',
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

    expertise: {
      label: 'Expertise',
      heading: 'Compétences & savoir-faire',
      intro: 'Une palette à cheval entre risque, business intelligence et ingénierie de la donnée.',
      groups: [
        { name: 'Risque & conformité', items: ['Prévention de la fraude', 'Assurance revenus', 'Validation produit', 'Conformité'] },
        { name: 'Business Intelligence', items: ['Power BI', 'Tableaux de bord Excel', 'Suivi stratégique', 'Reporting'] },
        { name: 'Gestion de données', items: ['Nettoyage de données', 'Consolidation', 'PL/SQL', 'Python (Pandas)', 'Automatisation'] },
        { name: 'Outils & tech', items: ['Oracle', 'MySQL', 'SQL Server', 'Azure Databricks'] },
      ],
      topLabel: 'Compétences clés',
      topSkills: ['Leadership', 'Analyse financière', 'Expression des besoins'],
    },

    experience: {
      label: 'Expérience',
      heading: 'Là où j’ai eu de l’impact',
      items: [
        {
          org: 'Digicel Group',
          role: 'Analyste senior des risques',
          period: 'Avr. 2026 — Présent',
          location: 'Port-au-Prince',
          bullets: [
            'Soutenir la croissance tout en déployant des mesures robustes de prévention de la fraude sur les produits.',
            'Surveiller l’ensemble des revenus pour garantir l’intégrité financière et la conformité.',
            'Encadrer et accompagner l’équipe, dans une culture d’amélioration continue.',
            'Mener des validations produit avant et après lancement pour rehausser la qualité.',
          ],
        },
        {
          org: 'Digicel Group',
          role: 'Analyste des risques',
          period: 'Déc. 2022 — Avr. 2026',
          location: 'Ouest, Haïti',
          bullets: [
            'Analyse des risques, assurance revenus et suivi de la conformité sur le portefeuille de produits.',
            'Conception de tableaux de bord interactifs (Power BI, Excel) pour la décision stratégique.',
          ],
        },
        {
          org: 'Ministère des Affaires Étrangères',
          role: 'Concepteur de bases de données',
          period: 'Sept. — Nov. 2021',
          location: 'Haïti',
          bullets: [
            'Collaboration avec des concepteurs seniors pour concevoir, déployer et maintenir des bases de données.',
            'Saisie et nettoyage de données pour en garantir l’exactitude et l’exhaustivité.',
          ],
        },
        {
          org: 'CECACHE',
          role: 'Spécialiste en saisie de données',
          period: 'Janv. — Mars 2021',
          location: 'Haïti',
          bullets: [
            'Saisie de grands volumes de données papier dans Excel avec une grande précision.',
            'Identification et correction rapides des erreurs pour préserver l’intégrité des données.',
          ],
        },
      ],
    },

    education: {
      label: 'Formation',
      heading: 'Parcours académique',
      items: [
        {
          school: 'UNITECH | Banque de la République d’Haïti',
          degree: 'DESS — Administration de bases de données',
          detail: 'Modélisation, entreposage & administration de données',
          period: '2024 — 2025',
          status: 'En cours',
        },
        {
          school: 'Université de Technologie d’Haïti',
          degree: 'Licence en informatique',
          detail: 'Major de promotion — sorti·e premier de sa classe',
          period: '2016 — 2020',
          highlight: true,
        },
        {
          school: 'Caribbean English School',
          degree: 'Apprentissage d’une langue seconde',
          detail: 'Anglais',
          period: '2021 — 2022',
        },
      ],
    },

    certifications: {
      label: 'Certifications',
      heading: 'Diplômes & formation continue',
      intro: 'Certifications professionnelles de Microsoft, LinkedIn, Google et Oracle.',
      viewLabel: 'Voir le certificat',
      verifyLabel: 'Vérifier',
      skillsLabel: 'Compétences',
      items: [
        { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Janv. 2024', skills: ['Microsoft Copilot', 'IA générative', 'IA responsable'], file: '/certificates/generative-ai-ms-linkedin.pdf' },
        { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft & LinkedIn', date: 'Févr. 2024', skills: ['Analyse de données', 'Visualisation', 'Data Analytics'], file: '/certificates/data-analysis-ms-linkedin.pdf' },
        { name: 'Career Essentials in Business Analysis', issuer: 'Microsoft & LinkedIn', date: 'Févr. 2023', skills: ['Expression des besoins', 'Gestion de projet', 'Analyse business'], file: '/certificates/business-analysis-ms-linkedin.pdf' },
        { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google · Coursera', date: 'Sept. 2023', skills: ['Données', 'Analytique'], file: '/certificates/google-data-foundations-coursera.pdf', verify: 'https://coursera.org/verify/YG668EZWKYBU' },
        { name: 'Oracle Database Foundations', issuer: 'Oracle', date: '', skills: ['SQL', 'Bases de données'] },
        { name: 'AI in Risk Management & Fraud Detection', issuer: 'Formation professionnelle', date: '', skills: ['IA', 'Risque', 'Détection de fraude'] },
      ],
    },

    work: {
      label: 'Projets sélectionnés',
      heading: 'Projets récents',
      intro: 'Une sélection entre analytique, risque et web. Les études de cas détaillées arrivent bientôt.',
      soon: 'En cours',
      items: [
        { year: '2021', tag: 'Conception BD', title: 'Système de bases de données ministériel', desc: 'Conception et maintenance de bases de données au service de la gestion de l’information et de la décision.', ready: true },
        { year: '2024', tag: 'Business Intelligence', title: 'Dashboard risques & revenus', desc: 'Tableau de bord Power BI interactif révélant d’un coup d’œil les risques d’assurance revenus et les KPI.', ready: false },
        { year: '2024', tag: 'Ingénierie data', title: 'Scripts d’automatisation PL/SQL', desc: 'Pipelines automatisés de nettoyage et consolidation de données en PL/SQL et Python (Pandas).', ready: false },
        { year: '2025', tag: 'Création web', title: 'Site portfolio client', desc: 'Un site vitrine rapide et orienté conversion pour une entreprise de services.', ready: false },
      ],
    },

    banner: {
      kicker: 'Consultation gratuite de 30 minutes',
      heading: 'Révélons la clarté cachée dans vos chiffres.',
      cta: 'Réserver un appel',
    },

    footerCta: {
      kicker: 'Restons en contact',
      heading: ['Un projet ?', 'Donnons-lui vie.'],
      emailCta: 'M’écrire',
      whatsappCta: 'WhatsApp',
      reply: 'Je réponds généralement sous 24 h.',
      directLabel: 'Ligne directe',
    },

    footer: {
      nav: 'Menu',
      social: 'Réseaux',
      rights: 'Tous droits réservés.',
      backToTop: 'Haut de page',
    },
  },
}
