import { auth, signIn } from "@/lib/auth";
import React from "react";

const LoginPage = async () => {
  const sesssion = await auth();
  console.log(sesssion);
  const loginHandle = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={loginHandle}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
