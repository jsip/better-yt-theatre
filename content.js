const root = document.documentElement;

function update() {
  const watch = document.querySelector('ytd-watch-flexy');
  const active = Boolean(watch && !watch.hidden && watch.hasAttribute('theater'));
  if (root.classList.contains('byt-theatre') === active) return;
  root.classList.toggle('byt-theatre', active);
  dispatchEvent(new Event('resize'));
}

new MutationObserver(update).observe(document, {
  subtree: true,
  attributeFilter: ['theater', 'hidden'],
});

document.addEventListener('yt-navigate-finish', update);

addEventListener('scroll', () => root.classList.toggle('byt-scrolled', scrollY > 0), { passive: true });
