// Otkupni blokovi: aplikacija radi i bez interneta.
// Uvijek prvo pokušava najnoviju verziju s mreže; bez mreže koristi spremljenu.
// Podaci se NIKAD ne spremaju ovdje, nego u mapu koju odaberete na računalu.
const CACHE = 'otkupni-blokovi';
const FILES = ['./', './index.html', './manifest.webmanifest', './ikona-192.png', './ikona-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
