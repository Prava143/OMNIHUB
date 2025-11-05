// simple theme toggle (call toggleTheme() on click)
(function(){
  const root = document.documentElement;
  const key = 'omnihub-theme';
  // prefer saved, fallback to dark
  const saved = localStorage.getItem(key);
  const init = saved === 'light' ? 'light' : 'dark';
  root.setAttribute('data-theme', init);

  // expose toggle
  window.toggleTheme = function(){
    const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', cur);
    localStorage.setItem(key, cur);
    updateToggleUI(cur);
  }

  function updateToggleUI(mode){
    const btn = document.getElementById('theme-toggle');
    if(!btn) return;
    btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    btn.textContent = mode === 'dark' ? '🌗' : '☀️';
  }

  // init button state after DOM ready
  document.addEventListener('DOMContentLoaded', ()=> updateToggleUI(init));
})();