var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},d=e.parcelRequire94c2;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in o){var d=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,d.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequire94c2=d),(0,d.register)("kyEFX",function(e,n){Object.defineProperty(e.exports,"register",{get:function(){return o},set:function(e){return o=e},enumerable:!0,configurable:!0});var o,d=new Map;o=function(e,n){for(var o=0;o<n.length-1;o+=2)d.set(n[o],{baseUrl:e,path:n[o+1]})}}),d("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.91fbcb85.js","6RkRa","symbol-defs.c5b0f01c.svg"]'));var i={};async function l(e){let n=document.getElementById("postsContainer");n.innerHTML="",e.forEach(e=>{var o,d,l,t,a,s,r,c;let v=(null===(d=e.images)||void 0===d?void 0:null===(o=d[0])||void 0===o?void 0:o.url)||"https://via.placeholder.com/300",u=e.name||"Невідома подія",m=(null===(t=e.dates)||void 0===t?void 0:null===(l=t.start)||void 0===l?void 0:l.localDate)||"Невідома дата",p=(null===(r=e._embedded)||void 0===r?void 0:null===(s=r.venues)||void 0===s?void 0:null===(a=s[0])||void 0===a?void 0:a.name)||"Невідоме місце",f=e.id,g=document.createElement("div");g.classList.add("event-card"),g.dataset.id=`${f}`,g.innerHTML=`
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
    `,n.appendChild(g)})}async function t(e){var n;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${e}`),d=await o.json();return console.log(d),(null===(n=d._embedded)||void 0===n?void 0:n.events)||[]}async function a(){async function e(){try{var e;let n=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi"),o=await n.json();return null===(e=o._embedded)||void 0===e?void 0:e.events}catch(e){console.error("Error fetching event data:",e)}}let n=await e();function o(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),a.innerHTML=""}document.querySelectorAll(".event-card").forEach(e=>{e.addEventListener("click",e=>{var d,i,l,t,a,s,r,c,v,u,m,p,f,g,h,b;let y=e.currentTarget.dataset.id,w=document.querySelector(".modal"),E=n.find(e=>e.id===y),$=null==E?void 0:null===(d=E.images.find(e=>205===e.width))||void 0===d?void 0:d.url,k=null==E?void 0:null===(i=E.images.find(e=>640===e.width))||void 0===i?void 0:i.url,L=null==E?void 0:E.url;w.innerHTML=`
      <button class="close-modal">\u{2716}</button>
      <img
        class="round-img"
        src="${$}"
        alt="round img of the event"
      />
      <div class="modal-wrap">
      <div class="big-img-wrap">
        <img class="big-img" src="${k}" alt="big image of the event">
      </div>
      <div class="modal-content-wrap">
        <h2 class="modal-second-heading">INFO</h2>
        <p>${(null==E?void 0:E.name)||"Event information not available"}</p>
        <h2 class="modal-second-heading">WHEN</h2>
        <p>
          ${(null==E?void 0:null===(t=E.dates)||void 0===t?void 0:null===(l=t.start)||void 0===l?void 0:l.localDate)||"Unknown date"} <br />
          ${(null==E?void 0:null===(s=E.dates)||void 0===s?void 0:null===(a=s.start)||void 0===a?void 0:a.localTime)||"Unknown time"}
        </p>
        <h2 class="modal-second-heading">WHERE</h2>
        <p>
          ${(null==E?void 0:null===(v=E._embedded)||void 0===v?void 0:null===(c=v.venues[0])||void 0===c?void 0:null===(r=c.city)||void 0===r?void 0:r.name)||"Unknown city"}, ${(null==E?void 0:null===(p=E._embedded)||void 0===p?void 0:null===(m=p.venues[0])||void 0===m?void 0:null===(u=m.country)||void 0===u?void 0:u.name)||"Unknown country"} <br />
          ${(null==E?void 0:null===(g=E._embedded)||void 0===g?void 0:null===(f=g.venues[0])||void 0===f?void 0:f.name)||"Unknown venue"}
        </p>
        <h2 class="modal-second-heading">WHO</h2>
        <p>${(null==E?void 0:null===(b=E._embedded)||void 0===b?void 0:null===(h=b.attractions)||void 0===h?void 0:h.map(e=>e.name).join(", "))||"Performers not available"}</p>
        <div class="prices">
          <h2 class="modal-second-heading">PRICES</h2>
          <div class="standart-price">
            <p>Standard: 300-500 UAH</p>
            <a href="${L}">
            <button class="buy-btn">BUY TICKETS</button>
            </a>
          </div>
          <div class="vip-price">
            <p>VIP: 1000-1500 UAH</p>
            <a href="${L}">
            <button class="buy-btn">BUY TICKETS</button>
             </a>
          </div>
        </div>
        </div>
       
        
      </div>
       <div class="more-wrap">
          <button class="modal-more">More from this author</button>
        </div>
      `,w.querySelector(".close-modal").addEventListener("click",o),function(){let e=document.querySelector(".overlay");document.body.classList.add("no-scroll"),e.classList.add("overlay-visible")}(),console.log(`Card ID: ${y}`)})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&o()})}i=new URL("symbol-defs.c5b0f01c.svg",import.meta.url).toString();const s="Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi";t(s).then(e=>{async function n(e){let o=await t(s),d=Math.ceil(o.length/5);l(o.slice((e-1)*5,5*e)),function(e,n,o){let d=document.getElementById("pags");d.innerHTML="";for(let i=1;i<=e;i++){let e=document.createElement("span");e.innerText=i,e.classList.add("page"),i===n&&e.classList.add("active"),e.onclick=()=>{o(n=i)},d.appendChild(e)}}(d,e,n),a()}n(1)});
//# sourceMappingURL=index.91fbcb85.js.map
