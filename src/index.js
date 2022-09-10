import getAPIMovies from './modules/requestAPIMovies.js';
import { totalMovies, renderMovies } from './modules/renderMovies.js';
import './style.scss';

window.addEventListener('load', async () => {
  const movies = await getAPIMovies();
  renderMovies(movies);
  totalMovies(movies);
});

export default getAPIMovies;