
### Agile, HTML, CSS, JavaScript, typeScript, JSON, React / Angular, Testing, Nodejs, ExpressJS ,MongoDB, Docker, Jenkins, Git, Cloud






NODE
NPM
NPX
NVM 









VM ?
DOCKER ?





TypeScript 


NODE
NPM 
NPX
NVM

--------
{
  "name": "Training Feedback",
  "short_name": "Feedback",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d6efd",
  "description": "Training Feedback App",
  "icons": [
    {
      "src": "https://cdn-icons-png.flaticon.com/512/892/892781.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://cdn-icons-png.flaticon.com/512/892/892781.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}


------------
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('feedback-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/sw.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
---------
{
  "name": "Training Feedback",
  "short_name": "Feedback",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d6efd",
  "description": "Training Feedback App",
  "icons": [
    {
      "src": "https://cdn-icons-png.flaticon.com/512/892/892781.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://cdn-icons-png.flaticon.com/512/892/892781.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
