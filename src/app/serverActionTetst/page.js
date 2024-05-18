import { deletePost, newPost } from "@/lib/action";
import React from "react";

const ServerActionTest = () => {
  return (
    <>
      <div>
        <form action={newPost}>
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="desc" name="desc" />
          <input type="text" placeholder="img url" name="img" />
          <input type="text" placeholder="userId" name="userId" />
          <input type="text" placeholder="slug" name="slug" />
          <button> Create Post</button>
        </form>
      </div>
      <div>
        <form action={deletePost}>
          <input type="text" placeholder="userId" name="userId" />
          <button> delete Post</button>
        </form>
      </div>
    </>
  );
};

export default ServerActionTest;
