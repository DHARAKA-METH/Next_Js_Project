"use server";
export const formData = async (formData) => {
  const { title, desc, img, userId, slug } = Object.fromEntries(formData);
  console.log(title, desc, img, userId, slug);
};
