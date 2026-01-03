const CACHE_NAME = 'zerolog-cache-v1';
// This helps the app work even if the gym has no signal
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
