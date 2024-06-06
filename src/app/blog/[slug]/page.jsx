import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost, getUser } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  // console.log(slug);
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  } else {
    return res.json();
  }
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // console.log({ slug });
  // const post = await getData(slug);

  // get by tempory data without API
  // console.log(slug);
  const post = await getPost(slug);

  const user = await getUser(post.userId);
  //console.log(user.username);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={post.img}
          width={400}
          height={700}
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src={user.img}
            alt=""
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
