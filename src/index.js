import { renderPosts } from './js/render.js';
import { findPosts } from './js/findPosts.js';
import { pagination } from './js/pagination.js';

const apikey = 'Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi';
const elementsPerPage = 5;
let currentPage = 1;

async function loadPosts(currentPage) {
  const posts = await findPosts(apikey);
  const totalPages = Math.ceil(posts.length / elementsPerPage);
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = currentPage * elementsPerPage;

  renderPosts(posts.slice(startIndex, endIndex));
  pagination(totalPages, currentPage, loadPosts);
}

loadPosts(currentPage);
