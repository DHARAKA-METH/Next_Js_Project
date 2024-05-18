"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

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
