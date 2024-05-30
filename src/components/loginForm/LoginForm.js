"use client";
import { loginForm } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
const [state,formAction]=useFormState(loginForm,undefined)

  return (
    <div>
     <h4 style={{color:'red', padding:'10px'}}>{state?.error}</h4>
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      {/* <input type="email" placeholder="email" name="email" /> */}
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
