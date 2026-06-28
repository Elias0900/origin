# Le Seuil — Export Vue 3

## Structure

```
src/
  assets/
    le-seuil.css          ← styles globaux + keyframes d'animation
  composables/
    useTheme.js           ← gestion du thème clair/sombre (CSS custom properties)
  components/
    AppHeader.vue
    ArchAnimation.vue     ← animation autonome, cliquable pour relancer
    HeroSection.vue
    PrincipeSection.vue
    ParcoursSection.vue
    PourQuiSection.vue
    DemandeForm.vue       ← formulaire multi-étapes
    AppFooter.vue
  views/
    LeSeuil.vue           ← page principale
  router/
    index.js
```

## Installation

```bash
npm install
```

## Intégration

Dans `main.js`, importer le CSS global et le router :

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/le-seuil.css'   // ← keyframes + reset

const app = createApp(App)
app.use(router)
app.mount('#app')
```

## Thème

Le composable `useTheme` écrit toutes les couleurs comme CSS custom properties
sur `:root`. Toutes les valeurs de couleur dans les composants utilisent `var(--...)`.
Le thème est instantané, sans Flash of Unstyled Content.

## Police

Les polices sont chargées via Google Fonts dans `le-seuil.css`.
Pour un contexte sans accès internet, téléchargez les fontes et adaptez
les déclarations `@font-face`.
