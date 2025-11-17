'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2c3fda5690ad2a4e2af2cb7d2ba6d27",
"assets/AssetManifest.bin.json": "de9066fccbecfcf15ba6503ccf516729",
"assets/AssetManifest.json": "8d9a3385fdd64d093d62f312e663e4ec",
"assets/assets/images/app-icon.png": "624dc3d4d7100dbde850641b895ed34c",
"assets/assets/images/fb.png": "1c3d0fafc0ca90e93cfbf4417d0bc7f4",
"assets/assets/images/google_logo.png": "3e10a7cd949665ab0e160b815dd3c0a8",
"assets/assets/images/insta.png": "c4655433898c2471d2075797773283d7",
"assets/assets/images/placeholder.png": "f3e35e7753d19d340589dadccb9e7c96",
"assets/assets/images/tweeer.png": "f984e2cb4018a9fd6d07797a1acd5fdc",
"assets/assets/images/whatsapp.png": "5551df60177415e87b19758fbbd6bdcb",
"assets/assets/symbols/aimim.png": "f11f7815fd816e3e98589f3c0132d048",
"assets/assets/symbols/bjp.png": "f3d934c6f1b33dea6e9d431bbf9a7462",
"assets/assets/symbols/bsp.png": "296dc3e811e7845457e1fe64938b62aa",
"assets/assets/symbols/cpi.png": "01eea4b44dd656b557fb6a7fffe5d37e",
"assets/assets/symbols/cpi_m.png": "bb683423acb47eab148835d62aa1a683",
"assets/assets/symbols/default.png": "350c92beceaf2651491d67bd85df5926",
"assets/assets/symbols/inc.png": "db3a443bd08d5d3f15c4badc15d4e9e9",
"assets/assets/symbols/independent.png": "bc3e1b0fd95ce7202424dda4806aafbd",
"assets/assets/symbols/mns.png": "62e71bbf841c77fd36fe1e21393f8fad",
"assets/assets/symbols/ncp_ajit.png": "bc1a38dc82351f3a364dccf6e8ab04ee",
"assets/assets/symbols/ncp_sp.png": "8fd08fe261d56fbd51f72c1288ea6270",
"assets/assets/symbols/npp.png": "4e9f9c5ee35dc0d48b491da9c579542d",
"assets/assets/symbols/pwp.jpg": "30292d1f0570537fa85dc738170ec0f7",
"assets/assets/symbols/Pwpisymbol.jpg": "f0af83b9f242c81db67e43245914de82",
"assets/assets/symbols/rsp.jpg": "2aa6858afeba282d141dc44d068d5ac9",
"assets/assets/symbols/shiv_sena_shinde.png": "045d162e99c77b919969a296c7ebc43b",
"assets/assets/symbols/shiv_sena_ubt.jpeg": "5e89b369b2d1c0089c1c17135e4f818c",
"assets/assets/symbols/sp.png": "3c6f4c1cf9ed0d8d1c2da808245e1441",
"assets/assets/symbols/vba.png": "0c86842e5a144a2bbec001f2862227f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7eccb938a968c075d5ddc2b8c78d9d8d",
"assets/lib/l10n/features/auth/auth_en.arb": "f6b7d567f2f97a7bd1621812f88467cc",
"assets/lib/l10n/features/auth/auth_localizations.dart": "f6cec108ca1e5e72647750cd934741d0",
"assets/lib/l10n/features/auth/auth_mr.arb": "629bec2b9fc08b10f42223bc9111a87e",
"assets/lib/l10n/features/candidate/candidate_en.arb": "f903e74a619989314936edd20f43c4df",
"assets/lib/l10n/features/candidate/candidate_localizations.dart": "47acfba2f7dae72c689518a5567f6a17",
"assets/lib/l10n/features/candidate/candidate_mr.arb": "bb3372eac28c5f2a2cd09bbaeb83d431",
"assets/lib/l10n/features/notifications/notifications_en.arb": "b2730c6e8c243198435ce49059e39a7c",
"assets/lib/l10n/features/notifications/notifications_localizations.dart": "faf129313f30c1cce2b0deb0da90d8c3",
"assets/lib/l10n/features/notifications/notifications_mr.arb": "03011fa08e7e34069b80b2e5eeb040d8",
"assets/lib/l10n/features/profile/profile_completion_en.arb": "8c4e7cebc694e3a45ec122c2988dec3a",
"assets/lib/l10n/features/profile/profile_completion_mr.arb": "447c2cf6666350ddc2003185cbc43bd1",
"assets/lib/l10n/features/profile/profile_en.arb": "d77a5bef1c1491ea63396dd50c697b03",
"assets/lib/l10n/features/profile/profile_localizations.dart": "9afca1dfcbfb77fad7f3b1b2a42e0870",
"assets/lib/l10n/features/profile/profile_mr.arb": "9bc689b7107765bc0b595eb0effb8cd2",
"assets/lib/l10n/features/settings/settings_en.arb": "e7b38b234369661491cc239d7ab8b804",
"assets/lib/l10n/features/settings/settings_localizations.dart": "ea3dca9c9bc1cea5a3ba14fc1948482a",
"assets/lib/l10n/features/settings/settings_mr.arb": "4735afbccc898fbe94a96720a25798e5",
"assets/NOTICES": "5bdb68b641c36364970c250e50ab2939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b444f7466c25c68be64c3132878da648",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "499c47372bb2b8dd7b7fc190e91a7d42",
"/": "499c47372bb2b8dd7b7fc190e91a7d42",
"main.dart.js": "c24278d868480bdfda67bb14f3e26d85",
"manifest.json": "72df954cfac601c6be9dc034b4e65f36",
"version.json": "1cf9f2022be087cad325e967b3e1be54"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
