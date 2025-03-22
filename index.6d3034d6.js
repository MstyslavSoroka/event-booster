var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},d=e.parcelRequire94c2;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in o){var d=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,d.call(i.exports,i,i.exports),i.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){o[e]=n},e.parcelRequire94c2=d),(0,d.register)("kyEFX",function(e,n){Object.defineProperty(e.exports,"register",{get:function(){return o},set:function(e){return o=e},enumerable:!0,configurable:!0});var o,d=new Map;o=function(e,n){for(var o=0;o<n.length-1;o+=2)d.set(n[o],{baseUrl:e,path:n[o+1]})}}),d("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.6d3034d6.js","6RkRa","symbol-defs.c5b0f01c.svg"]'));var i={};async function t(e){let n=document.getElementById("postsContainer");if(n.innerHTML="",0===e.length){n.innerHTML="<p>Немає доступних подій.</p>";return}e.forEach(e=>{var o,d,t,l,a,s,r,v;let c=(null===(d=e.images)||void 0===d?void 0:null===(o=d[0])||void 0===o?void 0:o.url)||"https://via.placeholder.com/300",u=e.name||"Невідома подія",m=(null===(l=e.dates)||void 0===l?void 0:null===(t=l.start)||void 0===t?void 0:t.localDate)||"Невідома дата",p=(null===(r=e._embedded)||void 0===r?void 0:null===(s=r.venues)||void 0===s?void 0:null===(a=s[0])||void 0===a?void 0:a.name)||"Невідоме місце",f=e.id,b=document.createElement("div");b.classList.add("event-card"),b.dataset.id=`${f}`,b.innerHTML=`
        <div class="event-image" style="background-image: url('${c}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${u}</h2>
            <p>${m}</p>
            <p>
                <svg class="icon">
                    <use href="${(v=i)&&v.__esModule?v.default:v}#icon-place"></use>
                </svg> 
                ${p}
            </p>
        </div>
    `,n.appendChild(b)})}async function l(e){var n;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${e}`);return(null===(n=(await o.json())._embedded)||void 0===n?void 0:n.events)||[]}async function a(){async function e(){try{var e;let n=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi"),o=await n.json();return null===(e=o._embedded)||void 0===e?void 0:e.events}catch(e){console.error("Error fetching event data:",e)}}let n=await e();function o(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),a.innerHTML=""}document.querySelectorAll(".event-card").forEach(e=>{e.addEventListener("click",e=>{var d,i,t,l,a,s,r,v,c,u,m,p,f,b,h,y;let g=e.currentTarget.dataset.id,E=document.querySelector(".modal"),w=n.find(e=>e.id===g),k=null==w?void 0:null===(d=w.images.find(e=>205===e.width))||void 0===d?void 0:d.url;null==w||null===(i=w.images.find(e=>205===e.width))||void 0===i||i.url,E.innerHTML=`
      <button class="close-modal">\u{2716}</button>
      <img
        class="round-img"
        src="${k}"
        alt="round img of the event"
      />
      <div class="modal-content-wrap">
        <h2 class="modal-second-heading">INFO</h2>
        <p>${(null==w?void 0:w.name)||"Event information not available"}</p>
        <h2 class="modal-second-heading">WHEN</h2>
        <p>
          ${(null==w?void 0:null===(l=w.dates)||void 0===l?void 0:null===(t=l.start)||void 0===t?void 0:t.localDate)||"Unknown date"} <br />
          ${(null==w?void 0:null===(s=w.dates)||void 0===s?void 0:null===(a=s.start)||void 0===a?void 0:a.localTime)||"Unknown time"}
        </p>
        <h2 class="modal-second-heading">WHERE</h2>
        <p>
          ${(null==w?void 0:null===(c=w._embedded)||void 0===c?void 0:null===(v=c.venues[0])||void 0===v?void 0:null===(r=v.city)||void 0===r?void 0:r.name)||"Unknown city"}, ${(null==w?void 0:null===(p=w._embedded)||void 0===p?void 0:null===(m=p.venues[0])||void 0===m?void 0:null===(u=m.country)||void 0===u?void 0:u.name)||"Unknown country"} <br />
          ${(null==w?void 0:null===(b=w._embedded)||void 0===b?void 0:null===(f=b.venues[0])||void 0===f?void 0:f.name)||"Unknown venue"}
        </p>
        <h2 class="modal-second-heading">WHO</h2>
        <p>${(null==w?void 0:null===(y=w._embedded)||void 0===y?void 0:null===(h=y.attractions)||void 0===h?void 0:h.map(e=>e.name).join(", "))||"Performers not available"}</p>
        <div class="prices">
          <h2 class="modal-second-heading">PRICES</h2>
          <div class="standart-price">
            <p>Standard: 300-500 UAH</p>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="vip-price">
            <p>VIP: 1000-1500 UAH</p>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
        </div>
        <button class="modal-more">More from this author</button>
      </div>
      `,E.querySelector(".close-modal").addEventListener("click",o),function(){let e=document.querySelector(".overlay");document.body.classList.add("no-scroll"),e.classList.add("overlay-visible")}(),console.log(`Card ID: ${g}`)})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&o()})}i=new URL("symbol-defs.c5b0f01c.svg",import.meta.url).toString(),l("Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi").then(e=>{t(e),a()});
//# sourceMappingURL=index.6d3034d6.js.map
