var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},d={},o=e.parcelRequire94c2;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in d){var o=d[e];delete d[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){d[e]=n},e.parcelRequire94c2=o),(0,o.register)("kyEFX",function(e,n){Object.defineProperty(e.exports,"register",{get:function(){return d},set:function(e){return d=e},enumerable:!0,configurable:!0});var d,o=new Map;d=function(e,n){for(var d=0;d<n.length-1;d+=2)o.set(n[d],{baseUrl:e,path:n[d+1]})}}),o("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.9cc1fefb.js","6RkRa","symbol-defs.c5b0f01c.svg"]'));var i={};async function l(e){let n=document.getElementById("postsContainer");n.innerHTML="",e.forEach(e=>{var d,o,l,t,a,s,r,c;let v=(null===(o=e.images)||void 0===o?void 0:null===(d=o[0])||void 0===d?void 0:d.url)||"https://via.placeholder.com/300",u=e.name||"Невідома подія",m=(null===(t=e.dates)||void 0===t?void 0:null===(l=t.start)||void 0===l?void 0:l.localDate)||"Невідома дата",p=(null===(r=e._embedded)||void 0===r?void 0:null===(s=r.venues)||void 0===s?void 0:null===(a=s[0])||void 0===a?void 0:a.name)||"Невідоме місце",f=e.id,g=document.createElement("div");g.classList.add("event-card"),g.dataset.id=`${f}`,g.innerHTML=`
        <div class="event-image" style="background-image: url('${v}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${u}</h2>
            <p>${m}</p>
            <p>  
                <svg class="icon">
                    <use href="${(c=i)&&c.__esModule?c.default:c}#icon-place"></use>
                </svg> 
                ${p}
            </p>
        </div>
    `,n.appendChild(g)})}async function t(e,n="",d=""){var o;let i=`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${e}`;n&&(i+=`&keyword=${encodeURIComponent(n)}`),d&&(i+=`&countryCode=${d}`);let l=await fetch(i);return(null===(o=(await l.json())._embedded)||void 0===o?void 0:o.events)||[]}async function a(e){function n(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),a.innerHTML=""}document.querySelectorAll(".event-card").forEach(d=>{d.addEventListener("click",d=>{var o,i,l,t,a,s,r,c,v,u,m,p,f,g,h,y;let b=d.currentTarget.dataset.id,E=document.querySelector(".modal"),w=e.find(e=>e.id===b),$=null==w?void 0:null===(o=w.images.find(e=>205===e.width))||void 0===o?void 0:o.url,L=null==w?void 0:null===(i=w.images.find(e=>640===e.width))||void 0===i?void 0:i.url,k=null==w?void 0:w.url;E.innerHTML=`
        <button class="close-modal">\u{2716}</button>
        <img class="round-img" src="${$}" alt="round img of the event" />
        <div class="modal-wrap">
          <div class="big-img-wrap">
            <img class="big-img" src="${L}" alt="big image of the event">
          </div>
          <div class="modal-content-wrap">
            <h2 class="modal-second-heading">INFO</h2>
            <p>${(null==w?void 0:w.name)||"Event information not available"}</p>
            <h2 class="modal-second-heading">WHEN</h2>
            <p>
              ${(null==w?void 0:null===(t=w.dates)||void 0===t?void 0:null===(l=t.start)||void 0===l?void 0:l.localDate)||"Unknown date"} <br />
              ${(null==w?void 0:null===(s=w.dates)||void 0===s?void 0:null===(a=s.start)||void 0===a?void 0:a.localTime)||"Unknown time"}
            </p>
            <h2 class="modal-second-heading">WHERE</h2>
            <p>
              ${(null==w?void 0:null===(v=w._embedded)||void 0===v?void 0:null===(c=v.venues[0])||void 0===c?void 0:null===(r=c.city)||void 0===r?void 0:r.name)||"Unknown city"}, ${(null==w?void 0:null===(p=w._embedded)||void 0===p?void 0:null===(m=p.venues[0])||void 0===m?void 0:null===(u=m.country)||void 0===u?void 0:u.name)||"Unknown country"} <br />
              ${(null==w?void 0:null===(g=w._embedded)||void 0===g?void 0:null===(f=g.venues[0])||void 0===f?void 0:f.name)||"Unknown venue"}
            </p>
            <h2 class="modal-second-heading">WHO</h2>
            <p>${(null==w?void 0:null===(y=w._embedded)||void 0===y?void 0:null===(h=y.attractions)||void 0===h?void 0:h.map(e=>e.name).join(", "))||"Performers not available"}</p>
            <div class="prices">
              <h2 class="modal-second-heading">PRICES</h2>
              <div class="standart-price">
                <p>Standard: 300-500 UAH</p>
                <a href="${k}">
                <button class="buy-btn">BUY TICKETS</button>
                </a>
              </div>
              <div class="vip-price">
                <p>VIP: 1000-1500 UAH</p>
                <a href="${k}">
                <button class="buy-btn">BUY TICKETS</button>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div class="more-wrap">
          <button class="modal-more">More from this author</button>
        </div>
      `,E.querySelector(".close-modal").addEventListener("click",n),function(){let e=document.querySelector(".overlay");document.body.classList.add("no-scroll"),e.classList.add("overlay-visible")}(),console.log(`Card ID: ${b}`)})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&n()})}i=new URL("symbol-defs.c5b0f01c.svg",import.meta.url).toString();const s="Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi",r=document.getElementById("key-word"),c=document.getElementById("countries");t(s).then(e=>{async function n(e){let d=r.value,o=c.value,i=await t(s,d,o),v=Math.ceil(i.length/10);l(i.slice((e-1)*10,10*e)),function(e,n,d){let o=document.getElementById("pags");o.innerHTML="";for(let i=1;i<=e;i++){let e=document.createElement("span");e.innerText=i,e.classList.add("page"),i===n&&e.classList.add("active"),e.onclick=()=>{d(n=i)},o.appendChild(e)}}(v,e,n),a(i)}n(1),r.addEventListener("input",()=>{n(1)}),c.addEventListener("change",()=>{n(1)})});
//# sourceMappingURL=index.9cc1fefb.js.map
