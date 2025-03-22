export function pagination(totalPages, currentPage, loadPosts) {
  const pags = document.getElementById('pags');
  pags.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement('span');
    page.innerText = i;
    page.classList.add('page');
    if (i === currentPage) {
      page.classList.add('active');
    }
    page.onclick = () => {
      currentPage = i;
      loadPosts(currentPage);
    };
    pags.appendChild(page);
  }
}
