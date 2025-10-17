// theme.js
const THEME_KEY = 'theme';
const body   = document.body;
const select = document.getElementById('themeSelect');

function applyTheme(theme) {
  if (theme === 'system') {
    body.removeAttribute('data-theme');
  } else {
    body.setAttribute('data-theme', theme);
  }
}

// ---- first load -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    select.value = saved;
    applyTheme(saved);
  }
});

// ---- user changes ---------------------------------------------------------
select.addEventListener('change', e => {
  const chosen = e.target.value;
  localStorage.setItem(THEME_KEY, chosen);
  applyTheme(chosen);
});