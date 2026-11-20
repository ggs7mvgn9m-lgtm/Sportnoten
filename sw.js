// Sportnoten – Offline-Speicher. Version ändert sich automatisch mit jedem Update.
const CACHE='sportnoten-79f509c835';
const FILES=['./', 'index.html', 'manifest.webmanifest', 'vendor/pdfjs/pdf.min.js', 'vendor/pdfjs/pdf.worker.min.js', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'fonts/albert-sans-latin-300-normal.woff2', 'fonts/albert-sans-latin-400-normal.woff2', 'fonts/albert-sans-latin-500-normal.woff2', 'fonts/albert-sans-latin-600-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin) return;
  // erst aus dem Speicher (schnell, offline), im Hintergrund aktualisieren
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true})||(r.mode==='navigate'?await c.match('index.html'):null);
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;
  }));
});
