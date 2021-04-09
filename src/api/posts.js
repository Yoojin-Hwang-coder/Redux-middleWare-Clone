const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: 'sports',
    body: 'football',
  },
  {
    id: 2,
    title: 'forward',
    body: 'Ronaldo',
  },
  {
    id: 3,
    title: 'midfilder',
    body: 'Modric',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
