import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// const users = [
//   { id: 1, username: "john" },
//   { id: 2, username: "jane" },
// ];

// const posts = [
//   { id: 1, title: "post 1", body: "body desc.....", userId: 1 },
//   { id: 2, title: "post 1", body: "body desc.....", userId: 1 },
//   { id: 3, title: "post 1", body: "body desc.....", userId: 2 },
//   { id: 4, title: "post 1", body: "body desc.....", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    //console.log(err);
    throw new Error("Failded to fetch posts");
  }
};

export const getPost = async (slug) => {
  console.log(slug)
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    //console.log(err);
    throw new Error("Failded to fetch post");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    //console.log(err);
    throw new Error("Failded to fetch user");
  }
};

export const getUsers = async () => {
  noStore()
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    //console.log(err);
    throw new Error("Failded to fetch users");
  }
};
