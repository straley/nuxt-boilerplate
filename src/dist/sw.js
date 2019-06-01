importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6b9ee44129faa4cd7823.js",
    "revision": "1d40848e32cbed438284119275e5a252"
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
    "url": "/_nuxt/8bd2f79a887efc55d47e.js",
    "revision": "bc59c614a2b1514f4fcd20d61b3193df"
  },
  {
    "url": "/_nuxt/ac18c4e73836821d9ade.js",
    "revision": "188665601673b01113fed39c35b2de22"
  },
  {
    "url": "/_nuxt/df9aba333667c7e988d7.js",
    "revision": "ab3d28a41cae668ff4232790aeb108fe"
  },
  {
    "url": "/_nuxt/e98da984ac39c79990ba.css",
    "revision": "286e212600783d83b3ab916e1a9e85ec"
  },
  {
    "url": "/_nuxt/fc1f1f28974e3bed6408.js",
    "revision": "99d6a2cd72cae35a29d401871048d572"
  }
], {
  "cacheId": "hoo-store",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
