import { ref, watchEffect } from 'vue'

const dark = ref(false)

const light = {
  '--accent': 'oklch(0.58 0.08 80)',
  '--bg': 'oklch(0.978 0.005 85)',
  '--section-bg': 'oklch(0.958 0.006 82)',
  '--card-bg': 'oklch(0.992 0.003 82)',
  '--border': 'oklch(0.91 0.006 82)',
  '--text-primary': 'oklch(0.28 0.016 76)',
  '--text-secondary': 'oklch(0.50 0.012 76)',
  '--text-tertiary': 'oklch(0.65 0.008 78)',
  '--logo-stroke': 'oklch(0.44 0.018 76)',
  '--logo-text': 'oklch(0.28 0.016 76)',
  '--quote-color': 'oklch(0.52 0.065 78)',
  '--header-bg': 'oklch(0.978 0.005 85 / .92)',
  '--toggle-bg': 'oklch(0.958 0.006 82)',
  '--input-bg': 'oklch(0.985 0.004 82)',
  '--footer-bg': 'oklch(0.26 0.014 76)',
  '--footer-text': 'oklch(0.96 0.005 82)',
  '--footer-sub': 'oklch(0.66 0.010 78)',
  '--footer-logo': 'oklch(0.88 0.008 80)',
  '--accent-shadow': 'oklch(0.58 0.08 80 / .16)',
  '--accent-text': 'oklch(0.50 0.07 78)',
  '--form-shadow': '0 18px 50px oklch(0.58 0.04 80 / .08)',
  '--arch-bg': 'oklch(0.952 0.008 82)',
  '--sel-bg': 'oklch(0.94 0.010 80)',
}

const darkTheme = {
  '--accent': 'oklch(0.70 0.09 82)',
  '--bg': 'oklch(0.14 0.012 60)',
  '--section-bg': 'oklch(0.18 0.012 62)',
  '--card-bg': 'oklch(0.20 0.010 64)',
  '--border': 'oklch(0.30 0.010 68)',
  '--text-primary': 'oklch(0.92 0.008 82)',
  '--text-secondary': 'oklch(0.68 0.010 78)',
  '--text-tertiary': 'oklch(0.48 0.008 76)',
  '--logo-stroke': 'oklch(0.78 0.010 80)',
  '--logo-text': 'oklch(0.92 0.008 82)',
  '--quote-color': 'oklch(0.64 0.07 80)',
  '--header-bg': 'oklch(0.14 0.012 60 / .90)',
  '--toggle-bg': 'oklch(0.20 0.010 64)',
  '--input-bg': 'oklch(0.17 0.010 62)',
  '--footer-bg': 'oklch(0.10 0.010 58)',
  '--footer-text': 'oklch(0.90 0.008 80)',
  '--footer-sub': 'oklch(0.58 0.010 76)',
  '--footer-logo': 'oklch(0.82 0.008 78)',
  '--accent-shadow': 'oklch(0.70 0.09 82 / .35)',
  '--accent-text': 'oklch(0.76 0.08 82)',
  '--form-shadow': '0 18px 50px oklch(0.10 0.008 60 / .50)',
  '--arch-bg': 'oklch(0.16 0.010 62)',
  '--sel-bg': 'oklch(0.22 0.012 66)',
}

export function useTheme() {
  watchEffect(() => {
    const theme = dark.value ? darkTheme : light
    const s = document.documentElement.style
    for (const [key, val] of Object.entries(theme)) {
      s.setProperty(key, val)
    }
  })

  return {
    dark,
    toggleTheme: () => { dark.value = !dark.value },
  }
}
