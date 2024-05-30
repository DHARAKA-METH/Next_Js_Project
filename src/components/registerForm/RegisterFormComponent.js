import { registerForm } from '@/lib/action';
import styles from './registerForm.module.css'

const RegisterFormComponent = () => {
  return (
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
  );
};

export default RegisterFormComponent;
