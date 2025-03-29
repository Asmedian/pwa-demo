const CACHE_NAME = 'pwa-demo-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Получение ресурсов из кэша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
