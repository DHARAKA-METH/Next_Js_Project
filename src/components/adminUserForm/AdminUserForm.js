"use client";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction}>
      <h1>ADD New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img"/>
      <select name="isAdmin">
        <option value="false">Is Admin</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add User</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
