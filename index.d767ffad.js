!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire94c2;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequire94c2=r);var i=r.register;function a(n,e,t,o,r,i,a){try{var c=n[i](a),l=c.value}catch(n){t(n);return}c.done?e(l):Promise.resolve(l).then(o,r)}function c(n){return function(){var e=this,t=arguments;return new Promise(function(o,r){var i=n.apply(e,t);function c(n){a(i,o,r,c,l,"next",n)}function l(n){a(i,o,r,c,l,"throw",n)}c(void 0)})}}function l(n,e){var t,o,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(n,i)}catch(n){c=[6,n],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}i("iE7OH",function(e,t){n(e.exports,"register",function(){return o},function(n){return o=n});var o,r=new Map;o=function(n,e){for(var t=0;t<e.length-1;t+=2)r.set(e[t],{baseUrl:n,path:e[t+1]})}}),i("aNJCr",function(e,t){n(e.exports,"getBundleURL",function(){return o},function(n){return o=n});var o,r={};o=function(n){var e=r[n];return e||(e=function(){try{throw Error()}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(n)return(""+n[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[n]=e),e}}),r("iE7OH").register(r("aNJCr").getBundleURL("EVgbq"),JSON.parse('["EVgbq","index.d767ffad.js","4BzQQ","symbol-defs.c5b0f01c.svg"]')),"function"==typeof SuppressedError&&SuppressedError;var s={};function d(){return(d=c(function(n){var e;return l(this,function(t){return(e=document.getElementById("postsContainer")).innerHTML="",n.forEach(function(n){var t,o,r,i,a,c,l,d,u=(null===(r=n.images)||void 0===r?void 0:null===(o=r[0])||void 0===o?void 0:o.url)||"https://via.placeholder.com/300",v=n.name||"Невідома подія",f=(null===(a=n.dates)||void 0===a?void 0:null===(i=a.start)||void 0===i?void 0:i.localDate)||"Невідома дата",p=(null===(d=n._embedded)||void 0===d?void 0:null===(l=d.venues)||void 0===l?void 0:null===(c=l[0])||void 0===c?void 0:c.name)||"Невідоме місце",h=n.id,m=document.createElement("div");m.classList.add("event-card"),m.dataset.id="".concat(h),m.innerHTML='\n        <div class="event-image" style="background-image: url(\''.concat(u,'\');"></div>\n        <div class="post-line"></div>\n        <div class="event-info">\n            <h2>').concat(v,"</h2>\n            <p>").concat(f,'</p>\n            <p>\n                <svg class="icon">\n                    <use href="').concat((t=s)&&t.__esModule?t.default:t,'#icon-place"></use>\n                </svg> \n                ').concat(p,"\n            </p>\n        </div>\n    "),e.appendChild(m)}),[2]})})).apply(this,arguments)}function u(n){return v.apply(this,arguments)}function v(){return(v=c(function(n){var e,t;return l(this,function(o){switch(o.label){case 0:return[4,fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=".concat(n))];case 1:return[4,o.sent().json()];case 2:return console.log(t=o.sent()),[2,(null===(e=t._embedded)||void 0===e?void 0:e.events)||[]]}})})).apply(this,arguments)}function f(){return p.apply(this,arguments)}function p(){return(p=c(function(){var n,e;function t(){return(t=c(function(){var e;return l(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(n)];case 1:return[4,t.sent().json()];case 2:return[2,null===(e=t.sent()._embedded)||void 0===e?void 0:e.events];case 3:return console.error("Error fetching event data:",t.sent()),[3,4];case 4:return[2]}})})).apply(this,arguments)}function o(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),f.innerHTML=""}return l(this,function(r){switch(r.label){case 0:return n="https://app.ticketmaster.com/discovery/v2/events.json?apikey=".concat("Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi"),[4,function(){return t.apply(this,arguments)}()];case 1:return e=r.sent(),document.querySelectorAll(".event-card").forEach(function(n){n.addEventListener("click",function(n){var t,r,i,a,c,l,s,d,u,v,f,p,h,m,b,y,g,w=n.currentTarget.dataset.id,E=document.querySelector(".modal"),k=e.find(function(n){return n.id===w}),L=null==k?void 0:null===(r=k.images.find(function(n){return 205===n.width}))||void 0===r?void 0:r.url,H=null==k?void 0:null===(i=k.images.find(function(n){return 640===n.width}))||void 0===i?void 0:i.url,S=null==k?void 0:k.url;E.innerHTML='\n      <button class="close-modal">✖</button>\n      <img\n        class="round-img"\n        src="'.concat(L,'"\n        alt="round img of the event"\n      />\n      <div class="modal-wrap">\n      <div class="big-img-wrap">\n        <img class="big-img" src="').concat(H,'" alt="big image of the event">\n      </div>\n      <div class="modal-content-wrap">\n        <h2 class="modal-second-heading">INFO</h2>\n        <p>').concat((null==k?void 0:k.name)||"Event information not available",'</p>\n        <h2 class="modal-second-heading">WHEN</h2>\n        <p>\n          ').concat((null==k?void 0:null===(c=k.dates)||void 0===c?void 0:null===(a=c.start)||void 0===a?void 0:a.localDate)||"Unknown date"," <br />\n          ").concat((null==k?void 0:null===(s=k.dates)||void 0===s?void 0:null===(l=s.start)||void 0===l?void 0:l.localTime)||"Unknown time",'\n        </p>\n        <h2 class="modal-second-heading">WHERE</h2>\n        <p>\n          ').concat((null==k?void 0:null===(v=k._embedded)||void 0===v?void 0:null===(u=v.venues[0])||void 0===u?void 0:null===(d=u.city)||void 0===d?void 0:d.name)||"Unknown city",", ").concat((null==k?void 0:null===(h=k._embedded)||void 0===h?void 0:null===(p=h.venues[0])||void 0===p?void 0:null===(f=p.country)||void 0===f?void 0:f.name)||"Unknown country"," <br />\n          ").concat((null==k?void 0:null===(b=k._embedded)||void 0===b?void 0:null===(m=b.venues[0])||void 0===m?void 0:m.name)||"Unknown venue",'\n        </p>\n        <h2 class="modal-second-heading">WHO</h2>\n        <p>').concat((null==k?void 0:null===(g=k._embedded)||void 0===g?void 0:null===(y=g.attractions)||void 0===y?void 0:y.map(function(n){return n.name}).join(", "))||"Performers not available",'</p>\n        <div class="prices">\n          <h2 class="modal-second-heading">PRICES</h2>\n          <div class="standart-price">\n            <p>Standard: 300-500 UAH</p>\n            <a href="').concat(S,'">\n            <button class="buy-btn">BUY TICKETS</button>\n            </a>\n          </div>\n          <div class="vip-price">\n            <p>VIP: 1000-1500 UAH</p>\n            <a href="').concat(S,'">\n            <button class="buy-btn">BUY TICKETS</button>\n             </a>\n          </div>\n        </div>\n        </div>\n       \n        \n      </div>\n       <div class="more-wrap">\n          <button class="modal-more">More from this author</button>\n        </div>\n      '),E.querySelector(".close-modal").addEventListener("click",o),t=document.querySelector(".overlay"),document.body.classList.add("no-scroll"),t.classList.add("overlay-visible"),console.log("Card ID: ".concat(w))})}),document.addEventListener("keydown",function(n){"Escape"===n.key&&o()}),[2]}})})).apply(this,arguments)}s=r("aNJCr").getBundleURL("EVgbq")+"symbol-defs.c5b0f01c.svg";var h="Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi";u(h).then(function(n){function e(n){return t.apply(this,arguments)}function t(){return(t=c(function(n){var t,o,r,i;return l(this,function(a){switch(a.label){case 0:return[4,u(h)];case 1:return o=Math.ceil((t=a.sent()).length/5),r=(n-1)*5,i=5*n,!function(n){d.apply(this,arguments)}(t.slice(r,i)),!function(n,e,t){var o=function(n){var o=document.createElement("span");o.innerText=n,o.classList.add("page"),n===e&&o.classList.add("active"),o.onclick=function(){t(e=n)},r.appendChild(o)},r=document.getElementById("pags");r.innerHTML="";for(var i=1;i<=n;i++)o(i)}(o,n,e),f(),[2]}})})).apply(this,arguments)}e(1)})}();
//# sourceMappingURL=index.d767ffad.js.map
