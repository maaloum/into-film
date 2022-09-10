import likeIcon from '../images/red-heart-icon.png';
import popup from './popComment.js';
import getComments from './getComment.js';

const renderMovies = (movies) => {
  movies.forEach((movie) => {
    const movieDetails = document.querySelector('.row');
    movieDetails.innerHTML += `<div id="like-movie${movie.id}" class="movie-details">
                                        <div class="col">
                                            <img class="movie-poster" src="${movie.image.original}" alt="Movie Poster">
                                        </div>
                                        <div class="row">
                                            <div class="col movie-title">
                                                <p>${movie.name}</p>
                                            </div>
                                            <div class="col movies-likes">
                                                <img src="${likeIcon}" id="like-movie${movie.id}" class="like-icon" alt="Red Heart Icon">
                                                <p class="likes-holder" id="likes-holder${movie.id}">0 likes</p>
                                            </div> 
                                        </div>
                                        <div class="comments">
                                            <button type="button" class="btn btn-secondary comment-btn" id = "${movie.id}"> Comments</button>
                                        </div>
                                    </div>`;
  });
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popup(e.target.id);
      getComments(e.target.id);
    });
  });
};

export default renderMovies;
