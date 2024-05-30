import { loginHandle } from "@/lib/action";
import styles from "./loginForm.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
const LoginPage = async () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LoginForm />
        <form action={loginHandle}>
          <button className={styles.GithubBtn}>Login with Github</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
