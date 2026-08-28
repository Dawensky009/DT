// ---------------------------------------------------------------------------
// Données structurées schema.org. Tout est dérivé de src/i18n/content.js :
// aucune information n'est inventée ici, on ne fait que reformater le CV réel
// dans le vocabulaire que Google comprend.
// ---------------------------------------------------------------------------
import { content, profile } from '../i18n/content.js'
import { SITE_URL, localeUrl, OG_IMAGE } from './site.js'

export function buildJsonLd(lang) {
  const t = content[lang]
  const url = localeUrl(lang)
  const personId = `${SITE_URL}/#person`

  // Les compétences listées dans la section Expertise, à plat.
  const knowsAbout = [
    ...new Set([...t.expertise.groups.flatMap((g) => g.items), ...t.expertise.topSkills]),
  ]

  // Les écoles réellement listées dans la section Formation.
  const alumniOf = t.education.items.map((edu) => ({
    '@type': 'EducationalOrganization',
    name: edu.school,
  }))

  // Les certifications réellement listées, avec leur lien de vérification.
  const hasCredential = t.certifications.items.map((cert) => {
    const credential = {
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: cert.issuer },
    }
    if (cert.verify) credential.url = cert.verify
    return credential
  })

  // content.experience.items est ordonné du plus récent au plus ancien.
  const current = t.experience.items[0]

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    jobTitle: t.seo.jobTitle,
    description: t.seo.description,
    url,
    image: `${SITE_URL}${profile.photo}`,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    sameAs: [profile.linkedin, profile.facebook],
    knowsLanguage: t.about.languages.map((l) => ({
      '@type': 'Language',
      name: l.name,
      alternateName: l.code,
    })),
    knowsAbout,
    alumniOf,
    hasCredential,
    worksFor: { '@type': 'Organization', name: current.org },
    hasOccupation: {
      '@type': 'Occupation',
      name: current.role,
      occupationLocation: { '@type': 'Place', name: current.location },
    },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: profile.name,
        inLanguage: lang,
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE },
        mainEntity: { '@id': personId },
        about: { '@id': personId },
      },
      person,
    ],
  }
}
