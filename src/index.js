import getAPIMovies from './modules/requestAPIMovies.js';
import renderMovies from './modules/renderMovies.js';
import {
  postLikes, getLikes, displayLikes, showLikes,
} from './modules/showLikes.js';
import './style.scss';
import totalMovies from './modules/totalItems.js';

window.addEventListener('load', async () => {
  const movies = await getAPIMovies();
  renderMovies(movies);
  totalMovies();

  const movieContainer = document.querySelectorAll('.movie-details');
  movieContainer.forEach((movie) => {
    showLikes(movie);
  });
});

document.body.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'like-icon') {
    postLikes('MyuCA54Yzgvtk8JjzlyR', e.target);
    getLikes('MyuCA54Yzgvtk8JjzlyR');
    displayLikes(e);
  }
});

export default getAPIMovies;