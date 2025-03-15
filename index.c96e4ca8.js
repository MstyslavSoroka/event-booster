async function e(e){let i=document.getElementById("postsContainer");if(i.innerHTML="",0===e.length){i.innerHTML="<p>Немає доступних подій.</p>";return}e.forEach(e=>{var n,d,t,v,l,s,o;let a=null===(d=e.images)||void 0===d?void 0:null===(n=d[0])||void 0===n?void 0:n.url,c=e.name,u=null===(v=e.dates)||void 0===v?void 0:null===(t=v.start)||void 0===t?void 0:t.localDate,r=null===(o=e._embedded)||void 0===o?void 0:null===(s=o.venues)||void 0===s?void 0:null===(l=s[0])||void 0===l?void 0:l.name,p=document.createElement("div");p.classList.add("event-card"),p.innerHTML=`
        <div class="event-image" style="background-image: url('${a}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${c}</h2>
            <p>${u}</p>
            <p>
                <svg class="icon">
                    <use href="./img/symbol-defs.svg#icon-place"></use>
                </svg> 
                ${r}
            </p>
        </div>
    `,i.appendChild(p)})}(async function e(e){var i;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${e}`);return null===(i=(await n.json())._embedded)||void 0===i?void 0:i.events})("Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi").then(i=>e(i));
//# sourceMappingURL=index.c96e4ca8.js.map
