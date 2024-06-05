import AdminPost from "@/components/adminPosts/AdminPosts";
import styles from "./admin.module.css";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import { auth } from "@/lib/auth";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";

const AdminPage = async () => {
  const session = await auth()
  //console.log(session.user.id)
  return (
    <div className={styles.container}>
      <div>
        <h2>Post Section</h2>
        <div>
          <AdminPost />
        </div>
        {/* <div>Add Post</div> */}
        <div>
          <AdminPostForm uderId={session.user.id} />
        </div>
      </div>
      <div>
        <div>
          <h2>User Section</h2>
          <div>
            <AdminUsers />
          </div>
          <div><AdminUserForm/></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
