import styles from "./loginForm.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";
const LoginPage = async () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LoginForm />
          <div>
            <Link href="/register">{"Don't have an account ? "}<b>Register </b></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
