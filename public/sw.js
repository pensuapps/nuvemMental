if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/887-21e8694ca78d12da.js",revision:"21e8694ca78d12da"},{url:"/_next/static/chunks/959-03ad40814d6323d8.js",revision:"03ad40814d6323d8"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-860d4c365e348523.js",revision:"860d4c365e348523"},{url:"/_next/static/chunks/pages/Home-d630f6c84fb70c5e.js",revision:"d630f6c84fb70c5e"},{url:"/_next/static/chunks/pages/Question-77e3b63cb211d9f5.js",revision:"77e3b63cb211d9f5"},{url:"/_next/static/chunks/pages/Result-9207746172ca913a.js",revision:"9207746172ca913a"},{url:"/_next/static/chunks/pages/Tips-2084f141e6006d1f.js",revision:"2084f141e6006d1f"},{url:"/_next/static/chunks/pages/_app-5079811b38cb2744.js",revision:"5079811b38cb2744"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-dbd1d912b277a56d.js",revision:"dbd1d912b277a56d"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/49e3f5a70d23240b.css",revision:"49e3f5a70d23240b"},{url:"/_next/static/css/5711b9d125f38667.css",revision:"5711b9d125f38667"},{url:"/_next/static/css/71dec5078dfd6445.css",revision:"71dec5078dfd6445"},{url:"/_next/static/css/87ee45416f2e5bd3.css",revision:"87ee45416f2e5bd3"},{url:"/_next/static/css/a7f579be3218e474.css",revision:"a7f579be3218e474"},{url:"/_next/static/css/acf5ef4ad2c11150.css",revision:"acf5ef4ad2c11150"},{url:"/_next/static/wCzB-lL0V8-CdBMBle1qA/_buildManifest.js",revision:"2d6cc599aef1fbb4f0fd0a21dfea9b98"},{url:"/_next/static/wCzB-lL0V8-CdBMBle1qA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/acupuncture.svg",revision:"94ebaa0203f55c0c3bc3b2d7f60cbaf8"},{url:"/assets/breathe.svg",revision:"345b8488be88eb06fccf6f127fa22373"},{url:"/assets/cultive.svg",revision:"93e54c3ed33694d59102bca82283a725"},{url:"/assets/distance.svg",revision:"0760e5a7e945e14d293d17c343bbcc5c"},{url:"/assets/fitness.svg",revision:"f1e2e0b09850d8e91841950804acbf1a"},{url:"/assets/friends.svg",revision:"a8aaa44a016aa1edb17c1fa7a82ef351"},{url:"/assets/health.svg",revision:"756eb2b9473b02dfae9afc5f109d99c1"},{url:"/assets/healthy.svg",revision:"25393bcd83cff59104819b82b1f0a857"},{url:"/assets/hug.svg",revision:"10a482a19dc6077eb7dd2cdda69ce26b"},{url:"/assets/landscape.svg",revision:"6b078519db46d74d63dade48e1570741"},{url:"/assets/lavender.svg",revision:"b82fab7c8c2738bce61477e989a52790"},{url:"/assets/leisure.svg",revision:"94857c366ba47d87028c2d2ff42170d2"},{url:"/assets/lifestyle.svg",revision:"865783c81c7d4baee294957692f550e8"},{url:"/assets/massage.svg",revision:"ff66d82f8694523dd400a8854fcb12ee"},{url:"/assets/music.svg",revision:"5a50d3bbe9b84a963152a17e451fd840"},{url:"/assets/nocoffee.svg",revision:"1acecc1ce423cb65e352a3f31e02c8cd"},{url:"/assets/nosmoke.svg",revision:"be9621c2b4fcb7d8eda26bb7cf1191fc"},{url:"/assets/nosugar.svg",revision:"c755e962e50b4ee796bc778f64fd6fcb"},{url:"/assets/party.svg",revision:"bc580f539abd615a433f180953d68715"},{url:"/assets/relax.svg",revision:"2920c35cc8fe2ef729a164753fc016db"},{url:"/assets/sleep.svg",revision:"0362f6b55ce71ae913191d288a397637"},{url:"/assets/stress.svg",revision:"be738270d090d8d8e50afff4463507c4"},{url:"/assets/tea.svg",revision:"40575ecb28276e477701f7bb2cd41a99"},{url:"/assets/tree.svg",revision:"1cac7d50f88080463c0e992c32c7bd73"},{url:"/assets/walk.svg",revision:"2c8c9bf624596237ed123c3d64c5225b"},{url:"/assets/yoga.svg",revision:"ee8b8718ff5fd494f3cc93d31eaedc05"},{url:"/brainfog-logo.png",revision:"45b210fb09838467436259be62d1bd98"},{url:"/brainfog-logo_192x192.png",revision:"10e506336d688ba7d88cb833957133d1"},{url:"/brainfog-logo_256x256.png",revision:"777417ef7b94e415f1d43d41e24585ea"},{url:"/brainfog-logo_384x384.png",revision:"0eb62e97b02afab92a4f27c815ae8a33"},{url:"/brainfog-logo_512x512.png",revision:"477d0e87ae6ae366cc74f62070da2820"},{url:"/manifest.json",revision:"ce75c1ffbe98d97d2a27788a1afb8704"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
