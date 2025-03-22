export async function modal() {
  const apiKey = 'Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi';
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`;

  async function fetchEventData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data._embedded?.events;
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  }

  const events = await fetchEventData();

  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => {
    card.addEventListener('click', e => {
      const cardId = e.currentTarget.dataset.id;
      const modal = document.querySelector('.modal');

      const event = events.find(event => event.id === cardId);
      const roundImage = event?.images.find(img => img.width === 205)?.url;
      const bigImage = event?.images.find(img => img.width === 205)?.url;
      modal.innerHTML = `
      <button class="close-modal">✖</button>
      <img
        class="round-img"
        src="${roundImage}"
        alt="round img of the event"
      />
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
            <button class="buy-btn">BUY TICKETS</button>
          </div>
          <div class="vip-price">
            <p>VIP: 1000-1500 UAH</p>
            <button class="buy-btn">BUY TICKETS</button>
          </div>
        </div>
        <button class="modal-more">More from this author</button>
      </div>
      `;
      modal.querySelector('.close-modal').addEventListener('click', modalClose);
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
