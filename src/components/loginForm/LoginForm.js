import { loginForm } from "@/lib/action";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form} action={loginForm}>
      <input type="text" placeholder="username" name="username" />
      {/* <input type="email" placeholder="email" name="email" /> */}
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
