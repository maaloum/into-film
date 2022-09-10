const getComments = async (MovieID) => {
  const urlApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SHdzjiubUIYkWLB3XIfC/comments?item_id=${MovieID}`;
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

export default getComments;
