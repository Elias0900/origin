import { onMounted } from 'vue'

export function useTheme() {
  onMounted(() => {
    const s = document.documentElement.style
    s.setProperty('--accent', 'oklch(0.60 0.12 78)')
    s.setProperty('--bg', 'oklch(0.97 0.008 82)')
    s.setProperty('--section-bg', 'oklch(0.94 0.010 80)')
    s.setProperty('--card-bg', 'oklch(0.99 0.004 78)')
    s.setProperty('--border', 'oklch(0.87 0.014 80)')
    s.setProperty('--text-primary', 'oklch(0.25 0.022 75)')
    s.setProperty('--text-secondary', 'oklch(0.46 0.018 72)')
    s.setProperty('--text-tertiary', 'oklch(0.63 0.012 74)')
    s.setProperty('--logo-stroke', 'oklch(0.40 0.025 72)')
    s.setProperty('--logo-text', 'oklch(0.25 0.022 75)')
    s.setProperty('--quote-color', 'oklch(0.50 0.09 72)')
    s.setProperty('--header-bg', 'oklch(0.97 0.008 82 / .92)')
    s.setProperty('--toggle-bg', 'oklch(0.94 0.010 80)')
    s.setProperty('--input-bg', 'oklch(0.98 0.005 80)')
    s.setProperty('--footer-bg', 'oklch(0.22 0.022 72)')
    s.setProperty('--footer-text', 'oklch(0.96 0.008 80)')
    s.setProperty('--footer-sub', 'oklch(0.65 0.015 76)')
    s.setProperty('--footer-logo', 'oklch(0.88 0.010 78)')
    s.setProperty('--accent-shadow', 'oklch(0.60 0.12 78 / .22)')
    s.setProperty('--accent-text', 'oklch(0.48 0.10 72)')
    s.setProperty('--form-shadow', '0 18px 50px oklch(0.60 0.06 78 / .10)')
    s.setProperty('--arch-bg', 'oklch(0.93 0.012 80)')
    s.setProperty('--sel-bg', 'oklch(0.91 0.018 78)')
  })
}
