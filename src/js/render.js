export async function renderPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>Немає доступних подій.</p>';
        return;
    }

    posts.forEach(post => {
        const imageUrl = post.images?.[0]?.url;
        const eventName = post.name;
        const eventDate = post.dates?.start?.localDate;
        const eventLocation = post._embedded?.venues?.[0]?.name ;

        const postElement = document.createElement('div');
        postElement.classList.add('event-card');
        postElement.innerHTML = `
        <div class="event-image" style="background-image: url('${imageUrl}');"></div>
        <div class="event-info">
            <h2>${eventName}</h2>
            <p>${eventDate}</p>
            <p>
                <svg class="icon">
                    <use href="./img/symbol-defs.svg#icon-place"></use>
                </svg> 
                ${eventLocation}
            </p>
        </div>
    `;
    
        postsContainer.appendChild(postElement);
    });
}
