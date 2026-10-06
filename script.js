"use strict";
const gallery = document.querySelector('#gallery');
const player = document.querySelector('#player');
const video = document.querySelector('#video');
const retry = document.querySelector('#retry');
const status = document.querySelector('#portfolio-status');
let loading = false;
let trigger = null;
function safeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Missing URL');
  const url = new URL(value, document.baseURI);
  if (url.protocol !== 'https:' && url.origin !== location.origin) throw new Error('Invalid URL');
  return url.href;
}
document.querySelector('#close').addEventListener('click', () => player.close());
player.addEventListener('close', () => { video.pause(); video.removeAttribute('src'); video.load(); trigger?.focus(); });
retry.addEventListener('click', loadPortfolio);
async function loadPortfolio() {
  if (loading) return;
  const restoreRetryFocus = document.activeElement === retry;
  loading = true;
  retry.disabled = true;
  status.textContent = 'Refreshing portfolio…';
  try {
    const response = await fetch('portfolio.json', {signal: AbortSignal.timeout(10000)});
    if (!response.ok) throw new Error('Load failed');
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error('Invalid collection');
    const fragment = document.createDocumentFragment();
    for (const item of items) {
      if (!item || typeof item.title !== 'string' || !item.title.trim() || !['video', 'link', 'pending'].includes(item.type)) throw new Error('Invalid project');
      const pending = item.type === 'pending';
      const url = pending ? null : safeUrl(item.url);
      const card = document.createElement('article'); card.className = 'card';
      const media = document.createElement(pending ? 'div' : item.type === 'video' ? 'button' : 'a'); media.className = 'card-media';
      if (!pending) media.setAttribute('aria-label', 'Watch ' + item.title);
      if (item.type === 'video') {
        media.type = 'button';
        media.addEventListener('click', () => { trigger = media; document.querySelector('#player-title').textContent = item.title; video.src = url; player.showModal(); });
      } else if (!pending) { media.href = url; }
      if (item.poster) { const img = document.createElement('img'); img.src = safeUrl(item.poster); img.alt = ''; img.loading = 'lazy'; img.width = 480; img.height = 360; media.append(img); }
      else if (pending) { media.textContent = 'Playback coming soon'; media.classList.add('pending'); }
      const watch = document.createElement('span'); watch.className = 'watch-label'; watch.textContent = item.type === 'video' ? 'Play film' : 'Watch film ↗'; if (!pending) media.append(watch);
      const copy = document.createElement('div'); copy.className = 'card-copy';
      const client = document.createElement('p'); client.className = 'project-client'; client.textContent = item.url?.includes('McXHqq8upTw') ? 'LoCo Pro Wrestling' : 'Primos Pro Wrestling';
      const title = document.createElement('h3');
      if (item.type === 'link') { const link = document.createElement('a'); link.href = url; link.textContent = item.title; title.append(link); } else { title.textContent = item.title; }
      const description = document.createElement('p'); description.className = 'description'; description.textContent = item.description || '';
      copy.append(client, title, description); card.append(media, copy); fragment.append(card);
    }
    const focusedLink = gallery.contains(document.activeElement) ? document.activeElement.getAttribute('href') : null;
    gallery.replaceChildren(fragment);
    document.querySelector('#empty').hidden = items.length !== 0;
    document.querySelector('#error').hidden = true;
    status.textContent = items.length ? `${items.length} reels available.` : 'No reels in this collection yet.';
    if (restoreRetryFocus) (gallery.querySelector('a,button') || document.querySelector('#empty a')).focus();
    else if (focusedLink) [...gallery.querySelectorAll('a')].find(link => link.getAttribute('href') === focusedLink)?.focus();
  } catch (error) { document.querySelector('#error').hidden = false; status.textContent = 'Portfolio refresh failed. The existing selection is still available.'; }
  finally { loading = false; retry.disabled = false; }
}
loadPortfolio();
