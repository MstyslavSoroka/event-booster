import { moreModal } from "./moreModal";

export async function modal(posts) {
  const cards = document.querySelectorAll('.event-card');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      const cardId = e.currentTarget.dataset.id;
      const modal = document.querySelector('.modal');

      const event = posts.find(event => event.id === cardId);
      const roundImage = event?.images.find(img => img.width === 205)?.url;
      const bigImage = event?.images.find(img => img.width === 640)?.url;
      const url = event?.url;

      modal.innerHTML = `
        <button class="close-modal">✖</button>
        <img class="round-img" src="${roundImage}" alt="round img of the event" />
        <div class="modal-wrap">
          <div class="big-img-wrap">
            <img class="big-img" src="${bigImage}" alt="big image of the event">
          </div>
          <div class="modal-content-wrap">
            <h2 class="modal-second-heading">INFO</h2>
            <p>${event?.name || 'Event information not available'}</p>
            <h2 class="modal-second-heading">WHEN</h2>
            <p>
              ${event?.dates?.start?.localDate || 'Unknown date'} <br />
              ${event?.dates?.start?.localTime || 'Unknown time'}
            </p>
            <h2 class="modal-second-heading">WHERE</h2>
            <p>
              ${event?._embedded?.venues[0]?.city?.name || 'Unknown city'}, ${
        event?._embedded?.venues[0]?.country?.name || 'Unknown country'
      } <br />
              ${event?._embedded?.venues[0]?.name || 'Unknown venue'}
            </p>
            <h2 class="modal-second-heading">WHO</h2>
            <p>${
              event?._embedded?.attractions
                ?.map(attraction => attraction.name)
                .join(', ') || 'Performers not available'
            }</p>
            <div class="prices">
              <h2 class="modal-second-heading">PRICES</h2>
              <div class="standart-price">
                <p>Standard: 300-500 UAH</p>
                <a href="${url}">
                <button class="buy-btn">BUY TICKETS</button>
                </a>
              </div>
              <div class="vip-price">
                <p>VIP: 1000-1500 UAH</p>
                <a href="${url}">
                <button class="buy-btn">BUY TICKETS</button>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div class="more-wrap">
          <button class="modal-more" id ="moreOpen">More from this author</button>
        </div>
      `;

      modal.querySelector('.close-modal').addEventListener('click', modalClose);
      modal.querySelector('#moreOpen').addEventListener('click', () => {
        moreModal(event?._embedded?.attractions?.[0]?.name);
      });
      modal.querySelector('#moreOpen').addEventListener('click', modalClose);
      modalOpen();
      console.log(`Card ID: ${cardId}`);
    });
  });

  function modalClose() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlay-visible');
    document.body.classList.remove('no-scroll');
    modal.innerHTML = '';
  }

  function modalOpen() {
    const overlay = document.querySelector('.overlay');
    document.body.classList.add('no-scroll');
    overlay.classList.add('overlay-visible');
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modalClose();
    }
  });
}
