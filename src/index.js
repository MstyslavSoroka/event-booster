import { renderPosts } from './js/render.js';
import { findPosts } from './js/findPosts.js';
import { modal } from './js/modal.js';

const apikey = 'Z0jpFmdgR3VO2MAgupFCQ1c6yNovbVdi';

findPosts(apikey).then(posts => {
  renderPosts(posts);
  modal();
});
