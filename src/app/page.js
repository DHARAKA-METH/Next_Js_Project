import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brandsImg" fill className={styles.branImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="heroImg" width={500} height={500} className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
