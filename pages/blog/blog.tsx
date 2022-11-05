import React from "react";
import styles from "../../styles/Home.module.css"
import Link from "next/link";
import jsn from "../../blogdata/how-to-learn-java.json";
export default function blog() {
  return (
    <div>
      <div className={styles.grid} style={{margin:"auto"}}>
        <Link href="/blog/blogpost/hello" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <Link href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Link>

        <Link
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </Link>
      </div>
    </div>
  );
}
