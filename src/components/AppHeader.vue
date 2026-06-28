<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ dark: boolean }>()
defineEmits(['toggle-theme'])

const menuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="inner">
      <a href="#top" class="logo" @click="menuOpen = false">
        <svg width="20" height="28" viewBox="0 0 100 132" fill="none">
          <path
            d="M 14 120 L 14 44 A 36 36 0 0 1 86 44 L 86 120"
            stroke="var(--logo-stroke)"
            stroke-width="4"
            stroke-linecap="round"
            fill="none"
          />
          <line x1="4" y1="127" x2="96" y2="127" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" />
          <circle cx="50" cy="82" r="4" fill="var(--accent)" opacity="0.7" />
        </svg>
        <span class="logo-name">le seuil</span>
      </a>

      <nav :class="['nav', { 'nav--open': menuOpen }]">
        <a href="#principe" class="nav-link" @click="menuOpen = false">Le principe</a>
        <a href="#parcours" class="nav-link" @click="menuOpen = false">Le parcours</a>
        <a href="#pourqui" class="nav-link" @click="menuOpen = false">Pour qui</a>
        <button class="theme-btn" @click="$emit('toggle-theme')">
          {{ dark ? '☀ Clair' : '◑ Sombre' }}
        </button>
        <a href="#demande" class="cta" @click="menuOpen = false">Commencer</a>
      </nav>

      <button class="burger" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        <span :class="['burger-line', { 'burger-line--open': menuOpen }]" />
        <span :class="['burger-line', { 'burger-line--open': menuOpen }]" />
        <span :class="['burger-line', { 'burger-line--open': menuOpen }]" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 60;
  background: var(--header-bg);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition: background 0.4s, border-color 0.4s;
}
.inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
}
.logo-name {
  font: italic 500 22px/1 'Spectral', serif;
  color: var(--text-primary);
  transition: color 0.4s;
}
.nav {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-link {
  font: 400 15px/1 'Work Sans', sans-serif;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover { color: var(--accent); }

.theme-btn {
  background: none;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 7px 14px;
  font: 400 13px/1 'Work Sans', sans-serif;
  color: var(--text-secondary);
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
}
.theme-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.cta {
  padding: 10px 18px;
  background: var(--accent);
  border: 1.5px solid var(--accent);
  color: #fff;
  font: 500 14px/1 'Work Sans', sans-serif;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.6s ease, border-color 0.6s ease, color 0.6s ease;
}
.cta:hover {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.burger-line--open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger-line--open:nth-child(2) { opacity: 0; }
.burger-line--open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .inner {
    padding: 16px 20px;
  }
  .burger {
    display: flex;
  }
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--header-bg);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
    padding: 12px 20px 20px;
  }
  .nav--open {
    display: flex;
  }
  .nav-link {
    width: 100%;
    padding: 14px 0;
    font-size: 16px;
    border-bottom: 1px solid var(--border);
  }
  .theme-btn {
    margin-top: 14px;
  }
  .cta {
    margin-top: 14px;
    width: 100%;
    text-align: center;
  }
}
</style>
