import Head from "next/head";
import styles from "../styles/page.module.css";
import logo from "../public/tensorbeat.svg";
import StandardFooter from "../components/standardFooter";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TensorBeat</title>
                <link rel="icon" href="/tensorbeat.svg" />
            </Head>

            <main className={styles.main}>
                <div className={styles.section}>
                    <img
                        src={logo}
                        alt={"TensorBeat logo"}
                        className={styles.logo}
                    />
                    <h1 className={styles.title}>
                        Tensor<span className={styles.accent}>Beat</span>
                    </h1>

                    <p className={styles.description}>
                        TensorBeat is a procedural music generation framework
                        designed to cater to a user's tastes. At the moment, the
                        app relies on an LSTM to generate midi music. For now,
                        the only way to specify data is by playing a piano song.
                    </p>
                </div>

                <span className={styles.hr} />

                <div className={styles.section}>
                    <h2>Song Recommendations</h2>
                    <p className={styles.description}>
                        The recommender operates with the goal of suggesting
                        other pieces of music in the Datalake based on one or
                        more songs supplied by the user. As such, the
                        recommender only has one function:
                        <ul>
                            <li>
                                Song recommendation: generates a list of song
                                IDs based on the euclidean distance between
                                songs in the datalake and the songs supplied by
                                the user.
                            </li>
                        </ul>
                    </p>
                    <a href={"/recommender"} className={styles.button}>
                        Get Song Recommendations
                    </a>
                </div>

                <div className={styles.section}>
                    <h2>Music Generation</h2>
                    <p className={styles.description}>
                        The Note Generator’s job is to procedurally generate
                        music based on music supplied by a user. The user
                        creates a short melody, which is expanded and lengthened
                        by the generator. The generator uses TensorFlow to
                        generate the music and was trained on a dataset of MIDI
                        files obtained from video games. The training process
                        consisted of feature extraction of the training data,
                        which would then be fed into an LSTM with the goal of
                        producing music based on the input data. The Note
                        Generator can also make music using a pre-trained model
                        but conditioned off of a user’s inputs. User inputs can
                        be specified as either a youtube playlist or a sequence
                        played on the Midi piano.
                    </p>
                    <a href={"/keyboard"} className={styles.button}>
                        Generate Music
                    </a>
                </div>
            </main>

            <StandardFooter />
        </div>
    );
}
