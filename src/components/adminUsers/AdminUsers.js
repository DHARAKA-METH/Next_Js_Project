import { getUsers } from "@/lib/data";
import Image from "next/image";
import styles from "./adminUsers.module.css";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  // users.map((user) => console.log(user.id));

  return (
    <div>
      {users.map((user) => (
        <div className={styles.mapContainer} key={user.id}>
          <div>
            <Image
              width={50}
              height={50}
              src={user.img || "/noavatar.png"}
              alt={user.id}
            />
          </div>
          <div>
            <h4>{user.username}</h4>
            {user.isAdmin && (
              <h5 style={{ color: "red" }}>
                <i>Admin</i>
              </h5>
            )}
            {!user.isAdmin && (
              <form action={deleteUser}>
                <input type="hidden" value={user.id} name="userId" />
                <button>Remove.</button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
