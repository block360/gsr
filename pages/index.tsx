import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GSR</title>
        <meta name="description" content="gsu save rate" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to GSU Save Rate</h1>
        <p className={styles.description}>inprogress</p>
      </main>
      <footer className={styles.footer}>GSU SAVE RATE</footer>
    </div>
  );
}
