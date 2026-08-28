// Point d'entrée du prérendu. Compilé par `vite build --ssr` puis exécuté par
// scripts/prerender.mjs pour produire le HTML de chaque langue.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

export function render(lang) {
  return renderToString(
    <LanguageProvider lang={lang}>
      <App />
    </LanguageProvider>,
  )
}
