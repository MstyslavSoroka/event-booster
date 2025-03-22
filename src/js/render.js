import symbolDefsUrl from '../img/symbol-defs.svg';

export async function renderPosts(posts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p>Немає доступних подій.</p>';
    return;
  }

  posts.forEach(post => {
    const imageUrl = post.images?.[0]?.url || 'https://via.placeholder.com/300';
    const eventName = post.name || 'Невідома подія';
    const eventDate = post.dates?.start?.localDate || 'Невідома дата';
    const eventLocation = post._embedded?.venues?.[0]?.name || 'Невідоме місце';
    const id = post.id;

    const postElement = document.createElement('div');
    postElement.classList.add('event-card');
    postElement.dataset.id = `${id}`;
    postElement.innerHTML = `
        <div class="event-image" style="background-image: url('${imageUrl}');"></div>
        <div class="post-line"></div>
        <div class="event-info">
            <h2>${eventName}</h2>
            <p>${eventDate}</p>
            <p>
                <svg class="icon">
                    <use href="${symbolDefsUrl}#icon-place"></use>
                </svg> 
                ${eventLocation}
            </p>
        </div>
    `;

    postsContainer.appendChild(postElement);
  });
}
