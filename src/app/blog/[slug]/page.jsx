import Image from "next/image";
import styles from "./singlePost.module.css";



const SinglePostPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/post.png" width={400} height={700} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} width={50} height={50} src="/post.png"  alt="" />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          burn piece fat by charge date love experiment move beneath teeth seed compound valley clear organization dream bell mouse breathe frog heavy tax highest
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
