"use client";
import { registerForm } from "@/lib/action";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={registerForm}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
