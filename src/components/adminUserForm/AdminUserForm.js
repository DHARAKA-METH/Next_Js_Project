"use client";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div className={styles.container}>
      <h2>ADD New User</h2>
      <form className={styles.form} action={formAction}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="img" placeholder="img" />
        <select name="isAdmin">
          <option value="false">Is Admin</option>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <button>Add User</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default AdminUserForm;
