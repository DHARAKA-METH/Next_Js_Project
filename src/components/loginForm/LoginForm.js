"use client";
import { loginForm, loginHandle } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";


const LoginForm = () => {
  const [state, formAction] = useFormState(loginForm, undefined);

  return (
    <div className={styles.container}>
      <form action={loginHandle}>
        <button className={styles.GithubBtn}>Login with Github</button>
      </form>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        {/* <input type="email" placeholder="email" name="email" /> */}
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
      <h4 style={{ color: "red", padding: "10px" }}>{state?.error}</h4>
    </div>
  );
};

export default LoginForm;
