"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const newPost = async (formData) => {
  const { title, desc, img, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      img,
      userId,
      slug,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog"); // for refresh page
  } catch (err) {
    console.log(err);
    return { error: "somthing error" };
  }
};

export const deletePost = async (formData) => {
  const { title, desc, img, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(userId);
    console.log("deleted from db");
    revalidatePath("/blog"); // for refresh page
  } catch (err) {
    console.log(err);
    return { error: "somthing error" };
  }
};

export const loginHandle = async () => {
  await signIn("github");
};
export const logoutHandle = async () => {
  await signOut();
};

export const registerForm = async (formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  // console.log({username})
  if (password !== passwordRepeat) {
    return "password do not match";
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      //console.log("user Alredy Exists")
      return "user Alredy Exists";
    }
    const newUser = new User({
      username,
      email,
      img,
      password,
    });
    await newUser.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};
