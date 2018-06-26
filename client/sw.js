self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-add-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/sw.js',
       '/styles.css',
       '/index.js',
       '/index.html',
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