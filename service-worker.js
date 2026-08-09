// Minimal service worker — just enough to satisfy PWA installability
// requirements (PWABuilder/Android packaging). Does not cache aggressively,
// so your site always loads fresh content from the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through: always fetch from network, no offline caching.
  // This keeps things simple and avoids serving stale quiz data.
  event.respondWith(fetch(event.request));
});
