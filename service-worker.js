"use strict";var precacheConfig=[["./index.html","6c30bb908961222b3c43c7adc5c017f8"],["./static/css/main.eca21f41.css","c1f2d8612859fae384bc5d485d9df4d7"],["./static/js/main.3eb7b593.js","65c42939ecf7390be8f6ddb917f81cd5"],["./static/media/edmonton-commercial-window-cleaning-01.8c1b78b7.jpg","8c1b78b7091f9a259fc352e8e1a73251"],["./static/media/edmonton-gutter-cleaning-01.6dae2788.jpg","6dae27885adb12f04eaf8474b5f1b69c"],["./static/media/edmonton-pressure-washing-01.0778fa19.jpg","0778fa1934efc4249f30ec11e1a41fb6"],["./static/media/edmonton-pressure-washing-02.421a9b2e.jpg","421a9b2e207180c2fdc6223a8969a5af"],["./static/media/edmonton-pressure-washing-03.d3900ea6.jpg","d3900ea6fef8bebe568db4af05f06ab4"],["./static/media/edmonton-window-cleaning-01.bfaf2557.jpg","bfaf25578aaecd09fccde5eee15212dd"],["./static/media/edmonton-window-cleaning-02.797aad76.jpg","797aad766702dd32559e44c8473865b4"],["./static/media/edmonton-window-cleaning-03.3ef72239.jpg","3ef7223920ba4394eac4b2f9574a08df"],["./static/media/edmonton-window-cleaning-04.7921b235.jpg","7921b235a692672ae9d93b0dc5d0fbd5"],["./static/media/edmonton-winter-window-cleaning-01.5c5462bc.jpg","5c5462bc96e225f51d1b4040ff17f618"],["./static/media/hero-homepage.ccf3f192.jpg","ccf3f1924b4cd2103dc04715b9385479"],["./static/media/logo-color.fcbaca76.svg","fcbaca765975ed242c01c53f8acf0e7d"],["./static/media/logo.7a831db2.svg","7a831db29c31163bd2abc4df184d0e3e"],["./static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["./static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["./static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["./static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var c="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});