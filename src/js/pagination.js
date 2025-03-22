function pagination(totalPages, currentPage) {
  const pags = document.getElementById('pags');
  pags.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    if (i > 5 && i < totalPages) {
      if (i === 6) {
      }
      continue;
    }
    const page = document.createElement('span');
    page.innerText = i;
    page.classList.add('page');
    if (i === currentPage) {
      page.classList.add('active');
    }
    page.onclick = () => pagination(totalPages, i);
    pags.appendChild(page);
  }
}

pagination(5, 1);
