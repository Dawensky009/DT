import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

const container = document.getElementById('root')

const app = (
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)

// En production, le HTML est pré-rendu (scripts/prerender.mjs) : on hydrate le
// markup existant. En dev, #root ne contient que le commentaire <!--app-html-->,
// d'où le test sur firstElementChild et non sur hasChildNodes().
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
