"use client";
import { newPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(newPost, undefined);
    return (
        <form action={formAction}>
            <h1>ADD New Post</h1>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="slug" placeholder="Slug" />
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="img" placeholder="img" />
            <textarea type="text" name="desc" placeholder="desc" rows={10} />
            <button>Add</button>
            {state && state.error}
        </form>
    );
};

export default AdminPostForm;
