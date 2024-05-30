import { loginHandle } from "@/lib/action";
import styles from "./loginForm.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";
const LoginPage = async () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LoginForm />
          <form action={loginHandle}>
            <button className={styles.GithubBtn}>Login with Github</button>
          </form>
          <div>
            <Link href="/register">{"Don't have an account ? "}<b>Register </b></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
