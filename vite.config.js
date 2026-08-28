import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Chaque langue a sa propre URL en production (dist/en/ et dist/fr/, écrits par
// scripts/prerender.mjs). Le serveur de dev, lui, n'a qu'un index.html : ce
// plugin fait pointer /en/ et /fr/ dessus pour que les deux routes existent
// aussi pendant le développement.
function langRoutesDev() {
  return {
    name: 'lang-routes-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = (req.url || '').split('?')[0]
        const wantsHtml = (req.headers.accept || '').includes('text/html')
        if (wantsHtml && /^\/(en|fr)(\/)?$/.test(path)) req.url = '/index.html'
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), langRoutesDev()],
})
