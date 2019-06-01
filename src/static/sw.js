importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/287551b293fed390a01e.js",
    "revision": "ad82c09531e8a24108b8bfb82b94e484"
  },
  {
    "url": "/_nuxt/869de799c3ade7ef5bcc.css",
    "revision": "10221ac64716834047847c0aca234535"
  },
  {
    "url": "/_nuxt/88d7eaddda54c164969c.css",
    "revision": "65eaff95e8926cfd96546315cefb69d7"
  },
  {
    "url": "/_nuxt/c0dbfd5548d1996cc4c4.js",
    "revision": "5bfcc5a3a1eb02831e3ba4c20f3cf3d2"
  },
  {
    "url": "/_nuxt/c972788581310d12b203.js",
    "revision": "1af3a3d7a998fc62da7597840f6aff9d"
  },
  {
    "url": "/_nuxt/c9a632842715d5a4f9cd.js",
    "revision": "71da9f93f290d3177ef5c5ae02b9cd41"
  },
  {
    "url": "/_nuxt/df9aba333667c7e988d7.js",
    "revision": "ab3d28a41cae668ff4232790aeb108fe"
  },
  {
    "url": "/_nuxt/e98da984ac39c79990ba.css",
    "revision": "286e212600783d83b3ab916e1a9e85ec"
  }
], {
  "cacheId": "nuxt-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
