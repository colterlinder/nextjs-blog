import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import GitHub from '../components/GitHub';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colter Linder - Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Colter Linder Welcomes, <a href="https://nextjs.org">Next.js!</a>
      </h1>

      {/* Counter components with different props */}
      <Counter name={"Pablo"} mult={1} size={2} />
      <Counter name={"Pedro"} mult={2} size={0.5} />

      <hr style={{ width: "80%", marginTop: "1cm" }} />

      {/* GitHub Component */}
      <GitHub />

      <hr style={{ width: "80%", marginTop: "1cm" }} />

      {/* Link to the Store page */}
      <p>
        Check out my <Link href="/store">Fake Store</Link>.
      </p>
    </div>
  );
}
