const CACHE_NAME = 'chat-gpt-cache-v1';
const urlsToCache = [
    '/',
    'index.html', // Certifique-se de que o nome do seu arquivo HTML está correto
    'style.css',   // Se você tiver um arquivo CSS separado
    'manifest.json',
    'service-worker.js',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.css',
    // Adicione outros arquivos que você deseja armazenar em cache
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
