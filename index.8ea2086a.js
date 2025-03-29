var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},d=e.parcelRequire94c2;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in n){var d=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,d.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequire94c2=d),(0,d.register)("kyEFX",function(e,o){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,d=new Map;n=function(e,o){for(var n=0;n<o.length-1;n+=2)d.set(o[n],{baseUrl:e,path:o[n+1]})}}),d("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.8ea2086a.js","6RkRa","symbol-defs.c5b0f01c.svg"]'));var t={};async function i(e){let o=document.getElementById("postsContainer");o.innerHTML="",e.forEach(e=>{var n,d,i,l,a,s,r,c;let v=(null===(d=e.images)||void 0===d?void 0:null===(n=d[0])||void 0===n?void 0:n.url)||"https://via.placeholder.com/300",u=e.name||"Невідома подія",m=(null===(l=e.dates)||void 0===l?void 0:null===(i=l.start)||void 0===i?void 0:i.localDate)||"Невідома дата",p=(null===(r=e._embedded)||void 0===r?void 0:null===(s=r.venues)||void 0===s?void 0:null===(a=s[0])||void 0===a?void 0:a.name)||"Невідоме місце",y=e.id,f=document.createElement("div");f.classList.add("event-card"),f.dataset.id=`${y}`,f.innerHTML=`
        <div class="event-image" style="background-image: url('${v}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${u}</h2>
            <p>${m}</p>
            <p>  
                <svg class="icon">
                    <use href="${(c=t)&&c.__esModule?c.default:c}#icon-place"></use>
                </svg> 
                ${p}
            </p>
        </div>
    `,o.appendChild(f)})}async function l(e,o="",n=""){var d;let t=`https://app.ticketmaster.com/discovery/v2/events.json?page=1&size=20&apikey=${e}`;o&&(t+=`&keyword=${encodeURIComponent(o)}`),n&&(t+=`&countryCode=${n}`);let i=await fetch(t);return(null===(d=(await i.json())._embedded)||void 0===d?void 0:d.events)||[]}async function a(e){if(!e)return;let o=`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(e)}&page=1&size=3&apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi`;try{var n,d,t;let i=await fetch(o),l=await i.json(),a=(null===(n=l._embedded)||void 0===n?void 0:n.events)||[];console.log(a);let r=`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${encodeURIComponent(e)}&apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi`,c=await fetch(r),v=await c.json(),u=null===(t=v._embedded)||void 0===t?void 0:null===(d=t.attractions)||void 0===d?void 0:d[0];(null==u?void 0:u.description)&&(bio=u.description);let m=document.querySelector(".moreModal"),p=document.querySelector(".moreOverlay");m.innerHTML="";let y="";0===a.length?y='<p class="no-events">No more events found for this author.</p>':a.forEach(e=>{var o,n,d,t,i,l,a;y+=`
                <div class="moreEvent">
                    <img src="${(null===(n=e.images)||void 0===n?void 0:null===(o=n[0])||void 0===o?void 0:o.url)||"https://www.ticketmaster.com.au/assets/placeholder-300x300.png"}" 
                         alt="Event image" class="moreEventsImg">
                    <div class="moreEventsItem">
                        <h3>${e.name}</h3>
                        <p>${(null===(i=e._embedded)||void 0===i?void 0:null===(t=i.venues)||void 0===t?void 0:null===(d=t[0])||void 0===d?void 0:d.name)||"Venue information not available"}</p>
                        <p>${(null===(a=e.dates)||void 0===a?void 0:null===(l=a.start)||void 0===l?void 0:l.localDate)||"Unknown date"}</p>
                    </div>
                </div>`}),m.innerHTML=`
            <div class="moreModal-content">
                <button class="close-moreModal">\u{2716}</button>
                <h2>${e}</h2>
                <h3>Upcoming Events</h3>
                <div class="moreEventsList">${y}</div>
            </div>
        `,p.classList.add("moreOverlay-visible"),document.body.classList.add("no-scroll"),document.querySelector(".close-moreModal").addEventListener("click",s),p.addEventListener("click",e=>{e.target===p&&s()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&s()})}catch(e){console.error("Error fetching more events:",e)}}function s(){document.querySelector(".moreOverlay").classList.remove("moreOverlay-visible"),document.body.classList.remove("no-scroll")}async function r(e){function o(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),r.innerHTML=""}document.querySelectorAll(".event-card").forEach(n=>{n.addEventListener("click",n=>{var d,t,i,l,s,r,c,v,u,m,p,y,f,g,h,b;let E=n.currentTarget.dataset.id,w=document.querySelector(".modal"),k=e.find(e=>e.id===E),L=null==k?void 0:null===(d=k.images.find(e=>205===e.width))||void 0===d?void 0:d.url,$=null==k?void 0:null===(t=k.images.find(e=>640===e.width))||void 0===t?void 0:t.url,S=null==k?void 0:k.url;w.innerHTML=`
        <button class="close-modal">\u{2716}</button>
        <img class="round-img" src="${L}" alt="round img of the event" />
        <div class="modal-wrap">
          <div class="big-img-wrap">
            <img class="big-img" src="${$}" alt="big image of the event">
          </div>
          <div class="modal-content-wrap">
            <h2 class="modal-second-heading">INFO</h2>
            <p>${(null==k?void 0:k.name)||"Event information not available"}</p>
            <h2 class="modal-second-heading">WHEN</h2>
            <p>
              ${(null==k?void 0:null===(l=k.dates)||void 0===l?void 0:null===(i=l.start)||void 0===i?void 0:i.localDate)||"Unknown date"} <br />
              ${(null==k?void 0:null===(r=k.dates)||void 0===r?void 0:null===(s=r.start)||void 0===s?void 0:s.localTime)||"Unknown time"}
            </p>
            <h2 class="modal-second-heading">WHERE</h2>
            <p>
              ${(null==k?void 0:null===(u=k._embedded)||void 0===u?void 0:null===(v=u.venues[0])||void 0===v?void 0:null===(c=v.city)||void 0===c?void 0:c.name)||"Unknown city"}, ${(null==k?void 0:null===(y=k._embedded)||void 0===y?void 0:null===(p=y.venues[0])||void 0===p?void 0:null===(m=p.country)||void 0===m?void 0:m.name)||"Unknown country"} <br />
              ${(null==k?void 0:null===(g=k._embedded)||void 0===g?void 0:null===(f=g.venues[0])||void 0===f?void 0:f.name)||"Unknown venue"}
            </p>
            <h2 class="modal-second-heading">WHO</h2>
            <p>${(null==k?void 0:null===(b=k._embedded)||void 0===b?void 0:null===(h=b.attractions)||void 0===h?void 0:h.map(e=>e.name).join(", "))||"Performers not available"}</p>
            <div class="prices">
              <h2 class="modal-second-heading">PRICES</h2>
              <div class="standart-price">
                <p>Standard: 300-500 UAH</p>
                <a href="${S}">
                <button class="buy-btn">BUY TICKETS</button>
                </a>
              </div>
              <div class="vip-price">
                <p>VIP: 1000-1500 UAH</p>
                <a href="${S}">
                <button class="buy-btn">BUY TICKETS</button>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div class="more-wrap">
          <button class="modal-more" id ="moreOpen">More from this author</button>
        </div>
      `,w.querySelector(".close-modal").addEventListener("click",o),w.querySelector("#moreOpen").addEventListener("click",()=>{var e,o,n;a(null==k?void 0:null===(n=k._embedded)||void 0===n?void 0:null===(o=n.attractions)||void 0===o?void 0:null===(e=o[0])||void 0===e?void 0:e.name)}),w.querySelector("#moreOpen").addEventListener("click",o),function(){let e=document.querySelector(".overlay");document.body.classList.add("no-scroll"),e.classList.add("overlay-visible")}(),console.log(`Card ID: ${E}`)})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&o()})}t=new URL("symbol-defs.c5b0f01c.svg",import.meta.url).toString();const c="Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi",v=document.getElementById("key-word"),u=document.getElementById("countries");l(c).then(e=>{async function o(e){let n=v.value,d=u.value,t=await l(c,n,d),a=Math.ceil(t.length/10);i(t.slice((e-1)*10,10*e)),function(e,o,n){let d=document.getElementById("pags");d.innerHTML="";for(let t=1;t<=e;t++){let e=document.createElement("span");e.innerText=t,e.classList.add("page"),t===o&&e.classList.add("active"),e.onclick=()=>{n(o=t)},d.appendChild(e)}}(a,e,o),r(t)}o(1),v.addEventListener("input",()=>{o(1)}),u.addEventListener("change",()=>{o(1)})});
//# sourceMappingURL=index.8ea2086a.js.map
