
import { getPosts } from "@/lib/data";
import styles from "./adminPostForm.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPostForm = async () => {
  const posts = await getPosts();


  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Image alt={post.id} src={post.img} height={50} width={50} />
          <p>{post.desc}</p>
          <div>
            <form action={deletePost}>
              <input type="hidden" name="userId" value={post.id}/>
              <button>Delete</button>

            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPostForm;
