import Head from 'next/head'
import styles from '../styles/page.module.css'
import logo from "../public/tensorbeat.svg"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TensorBeat</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.section}>
                    <img src={logo} alt={"TensorBeat logo"} className={styles.logo}/>
                    <h1 className={styles.title}>Tensor<span className={styles.accent}>Beat</span></h1>

                    <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <span className={styles.hr}/>

                <div className={styles.section}>
                    <h2>Song Recommendations</h2>
                    <p className={styles.description}>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a href={"/recommender"} className={styles.button}>Get Song Recommendations</a>
                </div>

                <div className={styles.section}>
                    <h2>Music Generation</h2>
                    <p className={styles.description}>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a href={"/generator"} className={styles.button}>Generate Music</a>
                </div>

            </main>

            <footer className={styles.footer}>
                <a href={"/"}>Home</a><span>|</span>
                <a href={"/recommender"}>Song Recommendations</a><span>|</span>
                <a href={"/generator"}>Music Generator</a>
            </footer>
        </div>
    )
}
