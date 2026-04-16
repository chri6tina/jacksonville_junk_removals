const CACHE_NAME = 'jjr-junk-removal-v1'
const urlsToCache = [
  '/',
  '/estimation',
  '/services',
  '/contact',
  '/99-junk-removal',
  '/locations',
  '/post',
  '/mattress-removal',
  '/commercial-junk-removal',
  '/hazardous-waste-removal',
  '/construction-debris-removal',
  '/appliance-removal',
  '/yard-waste-removal',
  '/hot-tub-removal',
  '/furniture-removal',
  '/garage-cleanout',
  '/office-furniture-removal',
  '/retail-store-cleanout',
  '/estate-cleanout',
  '/junk-removal-downtown-jacksonville',
  '/junk-removal-jacksonville-beach',
  '/junk-removal-riverside',
  '/junk-removal-southside',
  '/junk-removal-mandarin',
  '/junk-removal-arlington',
  '/junk-removal-orange-park',
  '/junk-removal-san-marco',
  '/mattress-removal-riverside-jacksonville',
  '/mattress-removal-southside-jacksonville',
  '/mattress-removal-san-marco-jacksonville',
  '/mattress-removal-mandarin-jacksonville',
  '/mattress-removal-jacksonville-beach',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
]

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

function doBackgroundSync() {
  // Handle offline form submissions
  return new Promise((resolve) => {
    // Check for stored offline data
    // This would integrate with your form handling
    resolve()
  })
}

// Push notifications (if implemented)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Services',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Jacksonville Junk Removals', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/services')
    )
  } else if (event.action === 'close') {
    event.notification.close()
  } else {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})
