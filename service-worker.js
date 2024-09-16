self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          'https://script.google.com/a/macros/g.educaand.es/s/AKfycbzATIVH2Enw4z7UCDupTYRQ6kdcatrf3sbDXVdGq4MhhyIGH6aIyJg-R9I_pbaTDAuf/exec',
          'https://blogsaverroes.juntadeandalucia.es/iesantonioalvarezlopez/files/2024/09/ubi-192.png',
          'https://blogsaverroes.juntadeandalucia.es/iesantonioalvarezlopez/files/2024/09/ubi-512.png',
          // Añade otros archivos que quieras almacenar en caché
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });