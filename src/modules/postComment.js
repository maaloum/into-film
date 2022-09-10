const postComment = async (movieID, userName, userComment) => {
  // const ID = 'SHdzjiubUIYkWLB3XIfC'
  const urlApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SHdzjiubUIYkWLB3XIfC/comments';
  await fetch(urlApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieID,
      username: userName.value,
      comment: userComment.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postComment;
