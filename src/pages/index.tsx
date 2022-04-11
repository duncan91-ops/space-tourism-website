import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name="description" content="Space Tourism Homepage" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.top}>So, you want to travel to</span>
            <span className={styles.bottom}>Space</span>
          </h1>
          <p className={styles.text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.explore}>Explore</div>
      </section>
    </main>
  );
};

export default Home;
