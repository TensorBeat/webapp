import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import StandardFooter from "../components/standardFooter";
import { SaroshGeneratorClient } from "../grpc-web/tensorbeat/Sarosh_genServiceClientPb";
import { GenerateMusicRequest } from "../grpc-web/tensorbeat/sarosh_gen_pb";

export default function Generator() {
    return (
        <div className={pageStyles.container}>
            <Head>
                <title>Sample Music - TensorBeat</title>
                <link rel="icon" href="/tensorbeat.svg" />
            </Head>

            <main className={pageStyles.main}>
                <div className={pageStyles.section}>
                    <h1 className={pageStyles.title}>Sample Music</h1>

                    <p className={pageStyles.description}>
                        Here are some of our favorite songs that we've generated
                        so far.
                    </p>
                </div>

                <div
                    className={pageStyles.section}
                    style={{ marginTop: "50px" }}
                ></div>
            </main>

            <StandardFooter />
        </div>
    );
}
