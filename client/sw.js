self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-add-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.js',
       '/index.html',
       '/styles.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});