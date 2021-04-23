import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import logo from "../public/tensorbeat-muted.svg";
import StandardFooter from "../components/standardFooter";

export default function Recommender() {
    return (
        <div className={pageStyles.container}>
            <Head>
                <title>Recommender - TensorBeat</title>
                <link rel="icon" href="/tensorbeat.svg" />
            </Head>

            <main className={pageStyles.main}>
                <div className={pageStyles.section}>
                    <h1 className={pageStyles.title}>Song Recommender</h1>

                    <p className={pageStyles.description}>
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
                </div>

                <div className={pageStyles.section}>
                    <a
                        href={"#"}
                        className={pageStyles.button}
                        style={{ marginTop: "40px", width: "300px" }}
                    >
                        Get Recommendations
                    </a>
                </div>
            </main>

            <img
                src={logo}
                alt={"TensorBeat logo"}
                className={pageStyles.mutedLogo}
            />

            <StandardFooter />
        </div>
    );
}
