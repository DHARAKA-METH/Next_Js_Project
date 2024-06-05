import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPost = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id}>
          <Image alt={post.id} src={post.img} height={50} width={50} />
          <p>{post.desc}</p>
          <div>
            <form className={styles.form} action={deletePost}>
              <input type="hidden" name="userId" value={post.id} />
              <button>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPost;
