import { loginHandle } from "@/lib/action";
import styles from "./loginForm.module.css";
const LoginPage = async () => {
  return (
    <div>
      <form action={loginHandle}>
        <button>Login with Github</button>
      </form>


      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} action={loginForm}>
            <input type="text" placeholder="username" name="username" />
            {/* <input type="email" placeholder="email" name="email" /> */}
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
