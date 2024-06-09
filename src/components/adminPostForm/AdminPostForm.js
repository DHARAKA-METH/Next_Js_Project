"use client";
import { newPost } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(newPost, undefined);
  //console.log(userId)
  return (
    <div className={styles.container}>
      <h2>ADD New Post...</h2>
      <form className={styles.form} action={formAction}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="slug" placeholder="Slug" />
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="img" placeholder="img" />
        <textarea type="text" name="desc" placeholder="desc" rows={10} />
        <button>Add</button>
        <h4 style={{ color: "red" }}>{state && state.error}</h4>
      </form>
    </div>
  );
};

export default AdminPostForm;
