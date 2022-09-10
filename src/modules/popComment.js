import getAPIMovies from './requestAPIMovies.js';
import likeIcon from '../images/red-heart-icon.png';
import postComment from './postComment.js';
import getComments from './getComment.js';
import commentCounter from './commentCounter.js';

const popComment = async (event) => {
  const movies = await getAPIMovies();
  const container = document.querySelector('.popup');
  const overlay = document.createElement('div');
  const span = document.createElement('span');
  span.innerHTML = '<span class="close-icon">&times;</span>';
  const popContent = document.createElement('div');
  movies.forEach((movie) => {
    if (parseInt(event, 10) === movie.id) {
      popContent.innerHTML = `<div class="popContent">
            <div class="col">
                <img class="movie-image" src="${movie.image.original}" alt="Movie Poster">
            </div>
            <div class="wrapper">
                <div class="col movie-summary">
                    <p><b>${movie.name}</b> : ${movie.summary}</p>
                </div>
                    <ul class ="genres">
                        <li class "genre1">${movie.genres[0]}</li>
                        <li class "genre2">${movie.genres[1]}</li>
                        <li class "genre3">${movie.genres[2]}</li>
                    </ul>
                <div class="col movies-likes">
                    <div><img src="${likeIcon}" class="like-icon" alt="Red Heart Icon">
                    <p class="likes-holder">${movie.rating.average}</p></div>
                    <div class ="comment-Section"><p class="add-comments"></p></div>
                </div>
                <form action="#" method="post" id="form">
                <p>Add a comment</p>
                <ul>
                    <li><input class="username" type = "text" id="name"  name="user_name" maxlength = "30" placeholder="Enter Your name"  required></li>
                    <li><textarea name="message" id="msg" cols="30" rows="10" maxlength = "500" placeholder="Write your comment here" required></textarea></li>
                    <button type="button" class="btn btn-secondary comment-btn send"> Send</button>
                </ul>
            </form>
            </div>
        </div>


            `;
      const data = getComments(event);

      data.then((values) => {
        values.forEach((comment) => {
          const comments = document.querySelector('.comment-Section');
          const numberComments = document.querySelector('.add-comments');
          numberComments.innerHTML = `Comments (${commentCounter(values)})`;
          const commentSection = document.createElement('div');
          commentSection.classList.add('commet-field');
          commentSection.innerHTML += `
                  <ul class= "feedback">
                      <li>On ${comment.creation_date}</li>
                      <li>By : ${comment.username}</li>
                      <li> Content : ${comment.comment}</li>

                  </ul>
                `;
          comments.appendChild(commentSection);
        });
      });
    }
  });

  overlay.classList.add('pop');
  overlay.style.display = 'block';
  overlay.appendChild(popContent);
  overlay.appendChild(span);
  container.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  document.querySelector('.movie-section').style.filter = 'blur(3px)';
  document.querySelector('.movie-section').addEventListener('click', () => {
    container.removeChild(overlay);
    document.querySelector('.movie-section').style.filter = 'blur(0px)';
  });
  document.querySelector('.close-icon').addEventListener('click', () => {
    container.removeChild(overlay);
    document.body.style.overflow = 'auto';
    document.querySelector('.movie-section').style.filter = 'blur(0px)';
  });
  const sendBtn = document.querySelector('.send');
  sendBtn.addEventListener('click', () => {
    const userName = document.querySelector('.username');
    const userComment = document.querySelector('#msg');
    postComment(event, userName, userComment);
    const data = getComments(event);
    data.then((values) => {
      values.forEach((comment) => {
        const comments = document.querySelector('.comment-Section');
        const commentSection = document.createElement('div');
        commentSection.classList.add('commet-field');
        const numberComments = document.querySelector('.add-comments');
        numberComments.innerHTML = `Comments (${values.length})`;
        commentSection.innerHTML += `
                  <ul class= "feedback">
                      <li>On ${comment.creation_date}</li>
                      <li>By : ${comment.username}</li>
                      <li>Content : ${comment.comment}</li>

                  </ul>
                `;
        comments.appendChild(commentSection);
      });
    });
  });
};

export default popComment;
