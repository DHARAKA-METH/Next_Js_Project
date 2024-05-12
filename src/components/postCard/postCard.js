"use client"
import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";


const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.png" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>that father outside principle perhaps automobile situation possibly bring enter stretch far strong bear poetry tall should pet breeze appearance task barn ten writing</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
