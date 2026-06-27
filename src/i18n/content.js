// Single source of truth for ALL site copy.
// `en` and `fr` are mirrored objects with identical keys, so the toggle
// switches the entire site. Content reflects Dawensky's real CV.

export const profile = {
  name: 'Dawensky Thermildort',
  initials: 'DT',
  email: 'dawenskydaky98@gmail.com',
  phone: '+50937007978',
  phoneDisplay: '+509 3700 7978',
  whatsapp: 'https://wa.me/50939306285',
  linkedin: 'https://www.linkedin.com/in/dawenskythermildort',
  facebook: 'https://www.facebook.com/dawensky.thermildort',
  cv: '/cv-dawensky.pdf',
  photo: '/profile.jpg',
  photoWebp: '/profile.webp',
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
      cta: 'Send email',
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
      subtitle: '— It’s Dawensky Thermildort, a risk & data analyst',
      scroll: 'Scroll down',
      photoAlt: 'Portrait of Dawensky Thermildort',
    },

    about: {
      label: 'About me',
      heading: 'I build what works.',
      intro:
        'I am a Data & Risk Analyst who likes to build, not only to advise. I take complex, messy operations and turn them into solutions a business can rely on every day. What matters most to a company is simple. I help it protect its revenue and avoid losing money, by catching risk early and acting before small problems become expensive ones.',
      values: [
        {
          title: 'A solid technical base',
          text: 'My foundation is a degree in Computer Science from UNITECH, where I graduated at the top of my class. That background gave me real technical depth. I understand how systems work underneath, so I can see what is truly happening and fix the root cause, not only the symptom.',
        },
        {
          title: 'From idea to production',
          text: 'I do not stop at analysis. I also build the tools and platforms that carry the data, from a management interface to a full website or a custom web solution. I can take a project from a rough idea all the way to production. Technology does not limit me. I shape it to fit what the business truly needs.',
        },
        {
          title: 'Detail and quality',
          text: 'I am meticulous by nature, and I have little patience for repetitive tasks that eat up time without adding value, so I automate them. Removing that noise lets people focus on thinking and on the work that truly matters. I never settle for mediocre. Every solution I build is meant to be reliable, consistent, and ready to grow.',
        },
        {
          title: 'Leadership that grows people',
          text: 'Outside of the technical side, what I enjoy most is helping other people grow. I see leadership as a way to lift a team, not to give orders from above. I like helping colleagues build their skills, get past their own blockers, and reach the next level. A good leader leaves the team stronger, more independent, and more capable than before.',
        },
      ],
      highlights: [
        { k: 'valedictorian', label: 'Valedictorian', detail: 'Computer Science, UNITECH' },
        { k: 'dess', label: 'DESS in progress', detail: 'Database Administration' },
        { k: 'detail', label: 'Attention to detail', detail: 'Reliable, consistent quality' },
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
          image: '/services/risk.svg',
          name: 'Business Risk Analysis',
          desc: 'Identify, measure and mitigate the risks that threaten revenue and compliance — with clear reporting leaders can act on.',
        },
        {
          no: '02',
          image: '/services/consulting.svg',
          name: 'Consulting & Training',
          desc: 'Advisory sessions and hands-on training that level up your team in analytics, data tooling and tech fundamentals.',
        },
        {
          no: '03',
          image: '/services/web.svg',
          name: 'Website Creation',
          desc: 'Fast, modern, conversion-focused websites — like this one — designed and built to make your work look as good as it is.',
        },
      ],
    },

    expertise: {
      label: 'Expertise',
      heading: 'Skills & capabilities',
      intro: 'A broad toolkit across risk, data, AI, cloud and the web. I work end to end, from the raw data to the system in production.',
      groups: [
        { name: 'Risk & Compliance', desc: 'Protecting revenue and keeping operations compliant.', items: ['Revenue assurance', 'Fraud investigation', 'Mobile money (MonCash)', 'UAT', 'Product validation', 'Compliance', 'Reconciliation'] },
        { name: 'Business Intelligence', desc: 'Turning raw data into clear, decision-ready dashboards.', items: ['Power BI', 'Excel dashboards', 'KPI tracking', 'Data visualization', 'Reporting'] },
        { name: 'Data & Databases', desc: 'Cleaning, modeling and querying data at scale.', items: ['Data cleansing', 'PL/SQL', 'Python (Pandas)', 'Oracle', 'MySQL', 'SQL Server', 'Data modeling'] },
        { name: 'AI & LLMs', desc: 'Putting large language models and generative AI to practical use.', items: ['Large Language Models', 'Generative AI', 'Prompt engineering', 'Microsoft Copilot', 'Machine learning', 'Responsible AI'] },
        { name: 'Cloud', desc: 'Running and shipping data and apps in the cloud.', items: ['Microsoft Azure', 'Azure Databricks', 'Azure AI', 'Cloud databases', 'Deployment (Vercel)'] },
        { name: 'Web Development', desc: 'Building fast, modern apps and sites end to end.', items: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'PHP', 'Responsive design'] },
      ],
      topLabel: 'Top skills',
      topSkills: ['Leadership', 'Financial Analysis', 'Business Requirements', 'Attention to detail'],
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
            'Act as the final gatekeeper for direct revenue operations, auditing the billing lifecycle end to end across local and international voice, SMS and data to guarantee accuracy and prevent revenue leakage.',
            'Lead thorough fraud investigations across the MonCash mobile money ecosystem and validate critical B2B corporate payroll disbursements.',
            'Reconcile complex data between local servers and cloud infrastructure, running rigorous completeness checks to guarantee zero data loss.',
            'Lead User Acceptance Testing (UAT) from a risk perspective during major system deployments, catching logic flaws and vulnerabilities before commercial launch.',
            'Drive strategic alignment and ongoing coordination across technical and business units, including Mediation, Network, Database, Commercial, Marketing and Customer Care.',
            'Build interactive Power BI dashboards and robust SQL queries to monitor high volume transactions and give executive leadership real time visibility on risk.',
            'Mentor and grow a team of 4 risk analysts, and engineer automated data workflows that replace manual checks with proactive detection.',
          ],
        },
        {
          org: 'Digicel Group',
          role: 'Business Risk Analyst',
          period: 'Dec 2022 — Apr 2026',
          location: 'Ouest, Haiti',
          bullets: [
            'Designed dashboards (Power BI, Excel) for strategic risk and revenue monitoring.',
            'Established and oversaw daily and monthly reconciliation processes for transaction accuracy.',
            'Guaranteed data availability for critical reporting.',
            'Wrote PL/SQL scripts to automate recurring tasks.',
            'Documented new procedures to ease team onboarding.',
            'Trained new team members.',
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
      honor: 'Valedictorian',
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
        { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Jan 2024', skills: ['Microsoft Copilot', 'Generative AI', 'Responsible AI'], file: '/certificates/generative-ai-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/2f0d358c7e7ad1b9d284334f4038b675747b6cadaaf48c3b477a7cdd559fc8c5?trk=share_certificate' },
        { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft & LinkedIn', date: 'Feb 2024', skills: ['Data Analysis', 'Data Visualization', 'Data Analytics'], file: '/certificates/data-analysis-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/d1fa535e16c9f28a925a3cd68e30634d179c0a9ed3608c2fae07c6cae193b19f?trk=share_certificate' },
        { name: 'Career Essentials in Business Analysis', issuer: 'Microsoft & LinkedIn', date: 'Feb 2023', skills: ['Requirements Gathering', 'Project Management', 'Business Analysis'], file: '/certificates/business-analysis-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/b1d001ae524ac46e8069d1e40d57c8fb89a7db2e39d7f637af01a74c29e05250?trk=share_certificate' },
        { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google · Coursera', date: 'Sep 2023', skills: ['Data', 'Analytics'], file: '/certificates/google-data-foundations-coursera.pdf', verify: 'https://coursera.org/verify/YG668EZWKYBU' },
        { name: 'Oracle Database Foundations', issuer: 'Oracle', date: '', skills: ['SQL', 'Databases'] },
        { name: 'Microsoft Azure AI Essentials', issuer: 'Microsoft & LinkedIn', date: 'Dec 2025', skills: ['Machine Learning', 'Azure AI Studio', 'Generative AI'], file: '/certificates/azure-ai-essentials-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/08bb3661c37c90ad850a2f26572437740b2eaaa687dffed8f5dcf9c107c33a2b?trk=share_certificate' },
      ],
    },

    work: {
      label: 'Selected work',
      heading: 'Recent projects',
      intro: 'A selection spanning web creation, analytics and risk. Click a project to see more.',
      soon: 'In progress',
      visitLabel: 'Visit site',
      viewLabel: 'View project',
      closeLabel: 'Close',
      soonGallery: 'Screenshots coming soon.',
      groups: { web: 'Web', data: 'Data & Analytics' },
      items: [
        {
          category: 'web',
          year: '2026',
          tag: 'Web App',
          title: 'Herecheck — University Management',
          desc: 'An academic management & attendance platform for a Haitian university — track student attendance and assiduity rates, and manage students, professors, courses, grades and reports.',
          images: [{ src: '/projects/herecheck-1.jpg', webp: '/projects/herecheck-1.webp' }],
          ready: true,
        },
        {
          category: 'web',
          year: '2026',
          tag: 'E-commerce',
          title: 'AlphaOmega — Premium Store',
          desc: 'A bold e-commerce storefront for a premium fashion collective — catalog, product pages and direct WhatsApp ordering, with a modern conversion-focused design.',
          url: 'https://alphaomegashopllc.com/',
          images: [
            { src: '/projects/alphaomega-1.jpg', webp: '/projects/alphaomega-1.webp' },
            { src: '/projects/alphaomega-2.jpg', webp: '/projects/alphaomega-2.webp' },
            { src: '/projects/alphaomega-3.jpg', webp: '/projects/alphaomega-3.webp' },
          ],
          ready: true,
        },
        { category: 'data', year: '2021', tag: 'Database Design', title: 'Ministry Database System', desc: 'Designed and maintained databases supporting information management and decision-making.', ready: true },
        { category: 'data', year: '2024', tag: 'Business Intelligence', title: 'Risk & Revenue Dashboard', desc: 'Interactive Power BI dashboard surfacing revenue-assurance risks and KPIs at a glance.', ready: false },
        { category: 'data', year: '2024', tag: 'Data Engineering', title: 'PL/SQL Automation Scripts', desc: 'Automated data cleansing and consolidation pipelines with PL/SQL and Python (Pandas).', ready: false },
      ],
    },

    banner: {
      kicker: 'Website creation',
      heading: 'Need a website that turns visitors into clients?',
      text: 'This very site is the proof — let’s build yours.',
      cta: 'Start your website',
      emailSubject: 'Website project — from your portfolio',
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
      cta: 'Envoyer un email',
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
      subtitle: '— Dawensky Thermildort, analyste risque & data',
      scroll: 'Défiler',
      photoAlt: 'Portrait de Dawensky Thermildort',
    },

    about: {
      label: 'À propos',
      heading: 'Le concret avant tout.',
      intro:
        'Je suis un Data & Risk Analyst qui aime construire, pas seulement conseiller. Je prends des opérations complexes et désordonnées et j’en fais des solutions sur lesquelles une entreprise peut compter au quotidien. Ce qui compte le plus pour une entreprise est simple. Je l’aide à protéger ses revenus et à éviter de perdre de l’argent, en repérant le risque tôt et en agissant avant que de petits problèmes ne deviennent coûteux.',
      values: [
        {
          title: 'Une base technique solide',
          text: 'Ma base, c’est une formation en sciences informatiques à l’UNITECH, où j’ai terminé lauréat de ma promotion. Ce parcours m’a donné une vraie profondeur technique. Je comprends comment fonctionnent les systèmes en dessous, ce qui me permet de voir ce qui se passe vraiment et de corriger la cause profonde, pas seulement le symptôme.',
        },
        {
          title: 'De l’idée à la production',
          text: 'Je ne m’arrête pas à l’analyse. Je construis aussi les outils et les plateformes qui portent la donnée, d’une interface de gestion à un site complet ou une solution web sur mesure. Je peux mener un projet d’une simple idée jusqu’à la mise en production. La technique ne me limite pas. Je la façonne pour répondre au vrai besoin du métier.',
        },
        {
          title: 'Le détail et la qualité',
          text: 'Je suis quelqu’un de minutieux, et j’ai peu de patience pour les tâches répétitives qui consomment du temps sans rien apporter, alors je les automatise. Retirer ce bruit permet aux gens de se concentrer sur la réflexion et sur ce qui compte vraiment. Je ne me contente jamais du médiocre. Chaque solution que je construis se veut fiable, constante et prête à évoluer.',
        },
        {
          title: 'Un leadership qui fait grandir',
          text: 'Outre la technique, ce que je préfère, c’est aider les autres à grandir. Je vois le leadership comme une façon de tirer une équipe vers le haut, pas de donner des ordres d’en haut. J’aime aider mes collègues à monter en compétence, à lever leurs propres blocages et à passer au niveau suivant. Un bon leader laisse son équipe plus forte, plus autonome et plus capable qu’avant.',
        },
      ],
      highlights: [
        { k: 'valedictorian', label: 'Lauréat de promotion', detail: 'Sciences informatiques, UNITECH' },
        { k: 'dess', label: 'DESS en cours', detail: 'Administration de bases de données' },
        { k: 'detail', label: 'Sens du détail', detail: 'Qualité fiable et constante' },
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
          image: '/services/risk.svg',
          name: 'Analyse des risques',
          desc: 'Identifier, mesurer et atténuer les risques qui menacent le chiffre d’affaires et la conformité — avec des rapports clairs et exploitables.',
        },
        {
          no: '02',
          image: '/services/consulting.svg',
          name: 'Conseil & formation',
          desc: 'Des sessions de conseil et des formations pratiques pour faire monter votre équipe en analytique, outils de données et fondamentaux tech.',
        },
        {
          no: '03',
          image: '/services/web.svg',
          name: 'Création de sites web',
          desc: 'Des sites modernes, rapides et orientés conversion — comme celui-ci — conçus pour mettre votre travail en valeur.',
        },
      ],
    },

    expertise: {
      label: 'Expertise',
      heading: 'Compétences & savoir-faire',
      intro: 'Une palette large qui couvre le risque, la donnée, l’IA, le cloud et le web. Je travaille de bout en bout, de la donnée brute au système en production.',
      groups: [
        { name: 'Risque & conformité', desc: 'Protéger les revenus et garder des opérations conformes.', items: ['Assurance revenus', 'Enquête de fraude', 'Mobile money (MonCash)', 'UAT', 'Validation produit', 'Conformité', 'Rapprochements'] },
        { name: 'Business Intelligence', desc: 'Transformer la donnée brute en tableaux de bord prêts à décider.', items: ['Power BI', 'Tableaux de bord Excel', 'Suivi des KPI', 'Visualisation', 'Reporting'] },
        { name: 'Données & bases de données', desc: 'Nettoyer, modéliser et interroger la donnée à grande échelle.', items: ['Nettoyage de données', 'PL/SQL', 'Python (Pandas)', 'Oracle', 'MySQL', 'SQL Server', 'Modélisation de données'] },
        { name: 'IA & LLM', desc: 'Mettre les grands modèles de langage et l’IA générative au service du concret.', items: ['Grands modèles de langage', 'IA générative', 'Prompt engineering', 'Microsoft Copilot', 'Machine learning', 'IA responsable'] },
        { name: 'Cloud', desc: 'Exécuter et déployer données et applications dans le cloud.', items: ['Microsoft Azure', 'Azure Databricks', 'Azure AI', 'Bases de données cloud', 'Déploiement (Vercel)'] },
        { name: 'Développement web', desc: 'Construire des applications et sites modernes, de bout en bout.', items: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'PHP', 'Design responsive'] },
      ],
      topLabel: 'Compétences clés',
      topSkills: ['Leadership', 'Analyse financière', 'Expression des besoins', 'Sens du détail'],
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
            'Agir comme dernier rempart des opérations à revenu direct, en auditant tout le cycle de facturation, de la voix locale et internationale au SMS et à la data, pour garantir l’exactitude et éviter les pertes de revenus.',
            'Mener des enquêtes de fraude approfondies dans l’écosystème de mobile money MonCash et valider des décaissements de paie B2B critiques.',
            'Réconcilier des données complexes entre les serveurs locaux et l’infrastructure cloud, avec des contrôles d’exhaustivité rigoureux pour garantir zéro perte de donnée.',
            'Piloter les tests d’acceptation (UAT) sous l’angle du risque lors des déploiements majeurs, en détectant les anomalies de logique et les vulnérabilités avant la mise en production.',
            'Assurer l’alignement stratégique et la coordination continue entre les équipes techniques et métier, dont Médiation, Réseau, Base de données, Commercial, Marketing et Service client.',
            'Concevoir des tableaux de bord Power BI interactifs et des requêtes SQL robustes pour suivre des transactions à fort volume et donner à la direction une visibilité du risque en temps réel.',
            'Encadrer et faire grandir une équipe de 4 analystes risque, et concevoir des workflows de données automatisés qui remplacent les contrôles manuels par une détection proactive.',
          ],
        },
        {
          org: 'Digicel Group',
          role: 'Analyste des risques',
          period: 'Déc. 2022 — Avr. 2026',
          location: 'Ouest, Haïti',
          bullets: [
            'Concevoir des tableaux de bord (Power BI, Excel) pour le suivi stratégique des risques et des revenus.',
            'Établir et superviser les rapprochements quotidiens et mensuels pour l’exactitude des transactions financières.',
            'Garantir la disponibilité des données pour la génération de rapports critiques.',
            'Créer des scripts PL/SQL pour automatiser les tâches récurrentes.',
            'Documenter les nouvelles procédures pour faciliter la prise en main.',
            'Former les nouveaux employés de l’équipe.',
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
      honor: 'Major de promotion',
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
        { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Janv. 2024', skills: ['Microsoft Copilot', 'IA générative', 'IA responsable'], file: '/certificates/generative-ai-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/2f0d358c7e7ad1b9d284334f4038b675747b6cadaaf48c3b477a7cdd559fc8c5?trk=share_certificate' },
        { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft & LinkedIn', date: 'Févr. 2024', skills: ['Analyse de données', 'Visualisation', 'Data Analytics'], file: '/certificates/data-analysis-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/d1fa535e16c9f28a925a3cd68e30634d179c0a9ed3608c2fae07c6cae193b19f?trk=share_certificate' },
        { name: 'Career Essentials in Business Analysis', issuer: 'Microsoft & LinkedIn', date: 'Févr. 2023', skills: ['Expression des besoins', 'Gestion de projet', 'Analyse business'], file: '/certificates/business-analysis-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/b1d001ae524ac46e8069d1e40d57c8fb89a7db2e39d7f637af01a74c29e05250?trk=share_certificate' },
        { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google · Coursera', date: 'Sept. 2023', skills: ['Données', 'Analytique'], file: '/certificates/google-data-foundations-coursera.pdf', verify: 'https://coursera.org/verify/YG668EZWKYBU' },
        { name: 'Oracle Database Foundations', issuer: 'Oracle', date: '', skills: ['SQL', 'Bases de données'] },
        { name: 'Microsoft Azure AI Essentials', issuer: 'Microsoft & LinkedIn', date: 'Déc. 2025', skills: ['Machine Learning', 'Azure AI Studio', 'IA générative'], file: '/certificates/azure-ai-essentials-ms-linkedin.pdf', verify: 'https://www.linkedin.com/learning/certificates/08bb3661c37c90ad850a2f26572437740b2eaaa687dffed8f5dcf9c107c33a2b?trk=share_certificate' },
      ],
    },

    work: {
      label: 'Projets sélectionnés',
      heading: 'Projets récents',
      intro: 'Une sélection entre création web, analytique et risque. Cliquez sur un projet pour en voir plus.',
      soon: 'En cours',
      visitLabel: 'Voir le site',
      viewLabel: 'Voir le projet',
      closeLabel: 'Fermer',
      soonGallery: 'Captures bientôt disponibles.',
      groups: { web: 'Web', data: 'Data & Analytique' },
      items: [
        {
          category: 'web',
          year: '2026',
          tag: 'Application web',
          title: 'Herecheck — Gestion universitaire',
          desc: 'Une plateforme de gestion académique et de présences pour une université haïtienne — suivi des présences et du taux d’assiduité des étudiants, et gestion des étudiants, professeurs, cours, notes et rapports.',
          images: [{ src: '/projects/herecheck-1.jpg', webp: '/projects/herecheck-1.webp' }],
          ready: true,
        },
        {
          category: 'web',
          year: '2026',
          tag: 'E-commerce',
          title: 'AlphaOmega — Boutique premium',
          desc: 'Une boutique e-commerce audacieuse pour un collectif de mode premium — catalogue, fiches produits et commande directe via WhatsApp, avec un design moderne orienté conversion.',
          url: 'https://alphaomegashopllc.com/',
          images: [
            { src: '/projects/alphaomega-1.jpg', webp: '/projects/alphaomega-1.webp' },
            { src: '/projects/alphaomega-2.jpg', webp: '/projects/alphaomega-2.webp' },
            { src: '/projects/alphaomega-3.jpg', webp: '/projects/alphaomega-3.webp' },
          ],
          ready: true,
        },
        { category: 'data', year: '2021', tag: 'Conception BD', title: 'Système de bases de données ministériel', desc: 'Conception et maintenance de bases de données au service de la gestion de l’information et de la décision.', ready: true },
        { category: 'data', year: '2024', tag: 'Business Intelligence', title: 'Dashboard risques & revenus', desc: 'Tableau de bord Power BI interactif révélant d’un coup d’œil les risques d’assurance revenus et les KPI.', ready: false },
        { category: 'data', year: '2024', tag: 'Ingénierie data', title: 'Scripts d’automatisation PL/SQL', desc: 'Pipelines automatisés de nettoyage et consolidation de données en PL/SQL et Python (Pandas).', ready: false },
      ],
    },

    banner: {
      kicker: 'Création de site web',
      heading: 'Besoin d’un site qui transforme vos visiteurs en clients ?',
      text: 'Ce site en est la preuve — construisons le vôtre.',
      cta: 'Lancer mon site',
      emailSubject: 'Projet de site web — via votre portfolio',
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
