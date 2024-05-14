import styles from './postUser.module.css'


const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId} `,{cache:'no-store'});
    if (!res.ok) {
      throw new Error("Something Went Wrong");
    } else {
      return res.json();
    }
  };

const PostUser = async({userId}) => {
    const user = await getData(userId);
  return (
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
  );
};

export default PostUser;
