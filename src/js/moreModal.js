export async function moreModal(author) {
    if (!author) return;

    let url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(author)}&page=1&size=3&apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const events = data._embedded?.events || [];

        console.log(events);

        let attractionsUrl = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${encodeURIComponent(author)}&apikey=Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi`;
        const attractionsResponse = await fetch(attractionsUrl);
        const attractionsData = await attractionsResponse.json();
        const attraction = attractionsData._embedded?.attractions?.[0];

        if (attraction?.description) {
            bio = attraction.description;
        }

        const moreModal = document.querySelector('.moreModal');
        const moreOverlay = document.querySelector('.moreOverlay');
        moreModal.innerHTML = '';

        let moreEventsList = '';
        if (events.length === 0) {
            moreEventsList = `<p class="no-events">No more events found for this author.</p>`;
        } else {
            events.forEach(event => {
                moreEventsList += `
                <div class="moreEvent">
                    <img src="${event.images?.[0]?.url || 'https://www.ticketmaster.com.au/assets/placeholder-300x300.png'}" 
                         alt="Event image" class="moreEventsImg">
                    <div class="moreEventsItem">
                        <h3>${event.name}</h3>
                        <p>${event._embedded?.venues?.[0]?.name || 'Venue information not available'}</p>
                        <p>${event.dates?.start?.localDate || 'Unknown date'}</p>
                    </div>
                </div>`;
            });
        }

        moreModal.innerHTML = `
            <div class="moreModal-content">
                <button class="close-moreModal">✖</button>
                <h2>${author}</h2>
                <h3>Upcoming Events</h3>
                <div class="moreEventsList">${moreEventsList}</div>
            </div>
        `;

        moreOverlay.classList.add("moreOverlay-visible");
        document.body.classList.add("no-scroll");

        document.querySelector('.close-moreModal').addEventListener('click', closeMoreModal);
        moreOverlay.addEventListener('click', (e) => {
            if (e.target === moreOverlay) closeMoreModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMoreModal();
        });

    } catch (error) {
        console.error('Error fetching more events:', error);
    }
}

function closeMoreModal() {
    document.querySelector('.moreOverlay').classList.remove('moreOverlay-visible');
    document.body.classList.remove("no-scroll");
}
