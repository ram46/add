self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-add-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/components',
       '/components/add.js',
       '/components/app.js',
       '/components/funcItem.js',
       '/components/slides.js',
       '/components/statsItem.js',
       '/services',
       '/services/items.js',
       '/angular',
       '/angular/angular.js',
       '/templates',
       '/templates/add.html',
       '/templates/app.html',
       '/templates/func-item.html',
       '/templates/slides.html',
       '/templates/stats-item.html',
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