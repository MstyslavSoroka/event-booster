async function e(e){let n=document.getElementById("postsContainer");if(n.innerHTML="",0===e.length){n.innerHTML="<p>Немає доступних подій.</p>";return}e.forEach(e=>{var d,o,i,l,t,a,s;let v=null===(o=e.images)||void 0===o?void 0:null===(d=o[0])||void 0===d?void 0:d.url,c=e.name,r=null===(l=e.dates)||void 0===l?void 0:null===(i=l.start)||void 0===i?void 0:i.localDate,u=null===(s=e._embedded)||void 0===s?void 0:null===(a=s.venues)||void 0===a?void 0:null===(t=a[0])||void 0===t?void 0:t.name,m=e.id,p=document.createElement("div");p.classList.add("event-card"),p.dataset.id=`${m}`,p.innerHTML=`
        <div class="event-image" style="background-image: url('${v}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${c}</h2>
            <p>${r}</p>
            <p>
                <svg class="icon">
                    <use href="./img/symbol-defs.svg#icon-place"></use>
                </svg> 
                ${u}
            </p>
        </div>
    `,n.appendChild(p)})}async function n(){async function e(){try{var e;let n=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi"),d=await n.json();return null===(e=d._embedded)||void 0===e?void 0:e.events}catch(e){console.error("Error fetching event data:",e)}}let d=await e();function o(){document.querySelector(".overlay").classList.remove("overlay-visible"),document.body.classList.remove("no-scroll"),n.innerHTML=""}document.querySelectorAll(".event-card").forEach(e=>{e.addEventListener("click",e=>{var n,i,l,t,a,s,v,c,r,u,m,p,h,y,b,g;let f=e.currentTarget.dataset.id,E=document.querySelector(".modal"),$=d.find(e=>e.id===f),k=null==$?void 0:null===(n=$.images.find(e=>205===e.width))||void 0===n?void 0:n.url;null==$||null===(i=$.images.find(e=>205===e.width))||void 0===i||i.url,E.innerHTML=`
      <button class="close-modal">\u{2716}</button>
      <img
        class="round-img"
        src="${k}"
        alt="round img of the event"
      />
      <div class="modal-content-wrap">
        <h2 class="modal-second-heading">INFO</h2>
        <p>${(null==$?void 0:$.name)||"Event information not available"}</p>
        <h2 class="modal-second-heading">WHEN</h2>
        <p>
          ${(null==$?void 0:null===(t=$.dates)||void 0===t?void 0:null===(l=t.start)||void 0===l?void 0:l.localDate)||"Unknown date"} <br />
          ${(null==$?void 0:null===(s=$.dates)||void 0===s?void 0:null===(a=s.start)||void 0===a?void 0:a.localTime)||"Unknown time"}
        </p>
        <h2 class="modal-second-heading">WHERE</h2>
        <p>
          ${(null==$?void 0:null===(r=$._embedded)||void 0===r?void 0:null===(c=r.venues[0])||void 0===c?void 0:null===(v=c.city)||void 0===v?void 0:v.name)||"Unknown city"}, ${(null==$?void 0:null===(p=$._embedded)||void 0===p?void 0:null===(m=p.venues[0])||void 0===m?void 0:null===(u=m.country)||void 0===u?void 0:u.name)||"Unknown country"} <br />
          ${(null==$?void 0:null===(y=$._embedded)||void 0===y?void 0:null===(h=y.venues[0])||void 0===h?void 0:h.name)||"Unknown venue"}
        </p>
        <h2 class="modal-second-heading">WHO</h2>
        <p>${(null==$?void 0:null===(g=$._embedded)||void 0===g?void 0:null===(b=g.attractions)||void 0===b?void 0:b.map(e=>e.name).join(", "))||"Performers not available"}</p>
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
      `,E.querySelector(".close-modal").addEventListener("click",o),function(){let e=document.querySelector(".overlay");document.body.classList.add("no-scroll"),e.classList.add("overlay-visible")}(),console.log(`Card ID: ${f}`)})}),document.addEventListener("keydown",e=>{"Escape"===e.key&&o()})}(async function e(e){var n;let d=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${e}`),o=await d.json();return console.log(o),null===(n=o._embedded)||void 0===n?void 0:n.events})("Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi").then(d=>{e(d),n()});
//# sourceMappingURL=index.dfacc561.js.map
