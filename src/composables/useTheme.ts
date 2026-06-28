import { ref, watchEffect } from 'vue'

export function useTheme() {
  const dark = ref(true)

  watchEffect(() => {
    const d = dark.value
    const s = document.documentElement.style

    s.setProperty('--accent', d ? 'oklch(0.66 0.075 235)' : 'oklch(0.44 0.07 235)')
    s.setProperty('--bg', d ? 'oklch(0.12 0.016 238)' : '#fff')
    s.setProperty('--section-bg', d ? 'oklch(0.16 0.016 238)' : 'oklch(0.975 0.010 230)')
    s.setProperty('--card-bg', d ? 'oklch(0.18 0.016 238)' : '#fff')
    s.setProperty('--border', d ? 'oklch(0.27 0.016 238)' : 'oklch(0.91 0.009 230)')
    s.setProperty('--text-primary', d ? 'oklch(0.94 0.006 230)' : 'oklch(0.20 0.020 235)')
    s.setProperty('--text-secondary', d ? 'oklch(0.68 0.013 232)' : 'oklch(0.44 0.020 232)')
    s.setProperty('--text-tertiary', d ? 'oklch(0.48 0.010 232)' : 'oklch(0.62 0.015 230)')
    s.setProperty('--logo-stroke', d ? 'oklch(0.86 0.007 230)' : 'oklch(0.25 0.022 235)')
    s.setProperty('--logo-text', d ? 'oklch(0.94 0.006 230)' : 'oklch(0.22 0.020 235)')
    s.setProperty('--quote-color', d ? 'oklch(0.60 0.055 235)' : 'oklch(0.38 0.055 235)')
    s.setProperty('--header-bg', d ? 'oklch(0.12 0.016 238 / .88)' : 'rgba(255,255,255,.84)')
    s.setProperty('--toggle-bg', d ? 'oklch(0.18 0.016 238)' : 'oklch(0.97 0.007 230)')
    s.setProperty('--input-bg', d ? 'oklch(0.15 0.016 238)' : '#fff')
    s.setProperty('--footer-bg', d ? 'oklch(0.09 0.016 238)' : 'oklch(0.20 0.020 235)')
    s.setProperty('--footer-text', d ? 'oklch(0.90 0.007 230)' : '#fff')
    s.setProperty('--footer-sub', d ? 'oklch(0.56 0.025 232)' : 'oklch(0.70 0.014 230)')
    s.setProperty('--footer-logo', d ? 'oklch(0.84 0.007 230)' : 'rgba(255,255,255,.88)')
    s.setProperty(
      '--accent-shadow',
      d ? 'oklch(0.44 0.07 235 / .40)' : 'oklch(0.44 0.07 235 / .25)',
    )
    s.setProperty('--accent-text', d ? 'oklch(0.75 0.06 235)' : 'oklch(0.38 0.065 235)')
    s.setProperty(
      '--form-shadow',
      d ? '0 18px 50px oklch(0.09 0.02 238 / .5)' : '0 18px 50px oklch(0.44 0.04 235 / .07)',
    )
    s.setProperty('--arch-bg', d ? 'oklch(0.075 0.016 232)' : 'oklch(0.10 0.016 232)')
    s.setProperty('--sel-bg', d ? 'oklch(0.20 0.018 238)' : 'oklch(0.965 0.012 230)')
  })

  return {
    dark,
    toggleTheme: () => {
      dark.value = !dark.value
    },
  }
}
