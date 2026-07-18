# L'Instant Doré — Landing page agence de mariage (Vue.js)

Page unique Vue 3 + Vite + Tailwind, en 4 sections :
`#services`, `#galerie` (avec témoignages et photos), `#envies` (« Que voulez-vous ? »), `#contact`.

Même projet que la version Next.js, reconstruit avec Vue : mêmes sections, même palette,
même signature visuelle (cachets de cire, filet doré animé), animations recréées en CSS +
IntersectionObserver (directive `v-reveal`) à la place de Framer Motion.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrez l'adresse affichée dans le terminal (en général http://localhost:5173)

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
index.html          → polices Google Fonts (Cormorant Garamond + Jost), metadata
src/
  main.js            → crée l'app, enregistre la directive v-reveal globalement
  App.vue            → assemble les sections
  style.css          → styles globaux, cachet de cire, cartes, animations reveal
  composables/
    vReveal.js        → directive maison (IntersectionObserver) remplaçant whileInView
  components/
    Nav.vue           → navigation ancrée aux 4 sections
    Hero.vue          → accroche + photo plein écran, fondu au chargement
    Flourish.vue       → filet doré animé (élément signature du design)
    Services.vue      → grille des 6 prestations
    Gallery.vue       → témoignages appariés à des photos + bandeau photo
    WantSection.vue   → section interactive "Que voulez-vous ?"
    Contact.vue       → formulaire + cachets de cire (appel / e-mail / WhatsApp)
    Footer.vue
```

## À personnaliser avant mise en ligne

- **Photos** : remplacez les URLs Unsplash dans `Hero.vue` et `Gallery.vue` par vos propres
  photos de mariages réels (mêmes couples que les témoignages, pour la crédibilité).
- **Témoignages** : dans `Gallery.vue`, le tableau `stories` — remplacez par de vrais avis clients.
- **Coordonnées** : téléphone, e-mail et lien WhatsApp dans `Contact.vue`.
- **Formulaire** : `handleSubmit` dans `Contact.vue` simule l'envoi. Branchez-le sur une API
  (fetch vers votre backend) ou un service comme Formspree / Resend pour recevoir les demandes.
- **Nom de l'agence** : cherchez « L'Instant Doré » dans `index.html` et `Nav.vue`.

## Palette

| Rôle | Couleur |
|---|---|
| Fond clair | `#F7F1E6` (ivoire) |
| Fond sombre | `#231A1C` (encre) |
| Accent principal | `#5C1A34` (bordeaux) |
| Accent doré | `#C6A15B` (or) |

 da99323dc6434e7614876ddc72402faf9c0852bb
