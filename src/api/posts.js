import Axios from 'axios';
export const getPosts = async () => {
  const response = await Axios.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await Axios.get(`/posts/${id}`);
  return response.data;
};
