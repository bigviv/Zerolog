const CACHE_NAME = 'zerolog-v53-cache';
const ASSETS = [
  '/zerolog/',
  '/zerolog/index.html',
  '/zerolog/manifest.json',
  '/zerolog/logo512.png',
  '/zerolog/screenshot.png'
];

// Install: Standard requirement to save files for offline use
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: This listener is MANDATORY to pass the PWABuilder performance check
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached file if found, otherwise fetch from network
      return response || fetch(event.request);
    })
  );
});
