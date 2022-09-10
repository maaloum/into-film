const totalMovies = () => {
  const tvShows = document.querySelectorAll('.movie-details');
  const displayTotalMovies = document.getElementById('total-movies');
  let count = 0;
  for (let i = 0; i < tvShows.length; i += 1) {
    count += 1;
  }
  const showCount = `(${count})`;

  displayTotalMovies.innerText = `Movies ${showCount}`;
};

export default totalMovies;