"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const newPost = async (prevState, formData) => {
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
    revalidatePath("/admin");
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
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "somthing error" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin"); // for refresh page
  } catch (err) {
    console.log(err);
    return { error: "somthing error" };
  }
};

export const deleteUser = async (formData) => {
  const { userId } = Object.fromEntries(formData);
  console.log(userId)

  try {
    connectToDb();
    await Post.deleteMany({ userId }); //when use delete posts are aumaticaly delete
    await User.findByIdAndDelete(userId);
    console.log("deleted from db");
    revalidatePath("/admin"); // for refresh page
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

export const registerForm = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  // console.log({username})
  if (password !== passwordRepeat) {
    return { error: "password do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      //console.log("user Alredy Exists")
      return { error: "user Alredy Exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPaassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      img,
      password: hashedPaassword,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};
export const loginForm = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid Username or Password" };
    }
    throw err;
  }
};
