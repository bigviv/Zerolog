const CACHE_NAME = 'zerolog-v1';
const ASSETS = [
  '/zerolog/index.html',
  '/zerolog/manifest.json',
  '/zerolog/logo512.png',
  '/zerolog/screenshot.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
