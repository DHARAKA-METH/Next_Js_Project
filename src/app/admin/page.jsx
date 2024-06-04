import AdminPost from "@/components/adminPosts/AdminPosts";
import styles from "./admin.module.css";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Post Section</h2>
        <div>
          <AdminPost/>
        </div>
        <div>Add Post</div>
      </div>
      <div>
        <div>
          <h2>User Section</h2>
          <div>User</div>
          <div>Add Users</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
