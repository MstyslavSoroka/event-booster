import { renderPosts } from './js/render.js';
import { findPosts } from './js/findPosts.js';
import { modal } from './js/modal.js';
import { pagination } from './js/pagination.js';

const apikey = 'Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi';
const elementsPerPage = 10;
let currentPage = 1;

const searchInput = document.getElementById('key-word');
const countrySelect = document.getElementById('countries');

findPosts(apikey).then(posts => {
  async function loadPosts(currentPage) {
    const keyword = searchInput.value;
    const country = countrySelect.value;
    const posts = await findPosts(apikey, keyword, country);

    const totalPages = Math.ceil(posts.length / elementsPerPage);
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = currentPage * elementsPerPage;

    renderPosts(posts.slice(startIndex, endIndex));
    pagination(totalPages, currentPage, loadPosts);

    modal(posts);
  }

  loadPosts(currentPage);

  searchInput.addEventListener('input', () => {
    loadPosts(currentPage);
  });

  countrySelect.addEventListener('change', () => {
    loadPosts(currentPage);
  });
});
