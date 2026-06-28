<template>
  <footer class="footer">
    <div class="inner">
      <div class="brand">
        <svg width="16" height="22" viewBox="0 0 52 62" fill="none">
          <path
            d="M 2 60 L 2 2 L 50 2 L 50 60"
            stroke="var(--footer-logo)"
            stroke-width="3.5"
            stroke-linecap="square"
          />
          <path
            d="M 2 2 L 30 6 L 30 60"
            stroke="var(--accent)"
            stroke-width="2.8"
            stroke-linecap="round"
          />
          <circle cx="27" cy="33" r="3" fill="var(--accent)" />
        </svg>
        <div>
          <span class="brand-name">le seuil</span>
          <span class="brand-sub">visites accompagnées</span>
        </div>
      </div>

      <div class="links">
        <div class="link-col">
          <a href="#parcours" class="link">Le parcours</a>
          <a href="#pourqui" class="link">Pour qui</a>
        </div>
        <div class="link-col">
          <span class="link">contact@le-seuil.fr</span>
          <span class="link">01 84 00 00 00</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer-bg);
  padding: 52px 32px;
  border-top: 1px solid var(--border);
}
.inner {
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  flex-wrap: wrap;
}
.brand {
  display: flex;
  align-items: center;
  gap: 13px;
}
.brand-name {
  display: block;
  font:
    italic 600 22px/1 'Spectral',
    serif;
  color: var(--footer-text);
}
.brand-sub {
  display: block;
  margin-top: 5px;
  font:
    300 11px/1 'Work Sans',
    sans-serif;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--footer-sub);
}
.links {
  display: flex;
  gap: 36px;
}
.link-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.link {
  font:
    300 13px/1 'Work Sans',
    sans-serif;
  color: var(--footer-sub);
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer { padding: 40px 20px; }
  .inner { flex-direction: column; align-items: flex-start; gap: 28px; }
}
</style>
