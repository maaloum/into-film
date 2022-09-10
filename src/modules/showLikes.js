import likeIcon from '../images/red-heart-icon.png';

const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const postLikes = async (appID, targetMovie) => {
  fetch(`${baseURL}/${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: targetMovie.id,
    }),
  })
    .then((response) => response)
    .catch((error) => {
      throw ('Error while posting likes! ', error);
    });
  targetMovie.src = likeIcon;
};

const getLikes = async (movieID) => {
  const apiLikesData = fetch(`${baseURL}/${movieID}/likes`)
    .then((response) => response.json())
    .then((obj) => Object.entries(obj))
    .catch((error) => {
      throw ('Error while fetching likes! ', error);
    });

  return apiLikesData;
};

const displayLikes = (event) => {
  const iconID = (event.target.id).split('like-movie').slice(1);
  const targetIcon = document.getElementById(`likes-holder${iconID}`);
  targetIcon.innerHTML.split(' ');
  document.getElementById(`likes-holder${iconID}`).innerHTML = `${(parseInt(targetIcon.innerText[0], 10)) + 1} Likes`;
};

const showLikes = async (movieList) => {
  const allMovies = await getLikes('MyuCA54Yzgvtk8JjzlyR');
  allMovies.forEach((movie) => {
    if (movie[1].item_id === movieList.id) {
      movieList.querySelector('.likes-holder').innerText = `${movie[1].likes} likes`;
    }
  });
};

export {
  postLikes, getLikes, displayLikes, showLikes,
};