//TEMPARY DATA

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "jane" },
];

const posts = [
  { id: 1, title: "post 1", body: "body desc.....", userId: 1 },
  { id: 2, title: "post 1", body: "body desc.....", userId: 1 },
  { id: 3, title: "post 1", body: "body desc.....", userId: 2 },
  { id: 4, title: "post 1", body: "body desc.....", userId: 2 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  posts.find((user) => user.id === parseInt(id));
};
