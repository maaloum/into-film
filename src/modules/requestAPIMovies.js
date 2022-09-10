const getAPIMovies = async () => {
  const apiURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(apiURL);
  const movies = await response.json();
  const movieListSize = 25;
  const movieArr = [];
  for (let i = 0; i < movies.length; i += movieListSize) {
    const moviesList = movies.slice(i, i + movieListSize);
    movieArr.push(moviesList);
  }
  return movieArr[0];
};

export default getAPIMovies;
