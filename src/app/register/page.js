"use client";
import RegisterFormComponent from "@/components/registerForm/RegisterFormComponent";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
<RegisterFormComponent/>
      </div>
    </div>
  );
};

export default RegisterForm;
