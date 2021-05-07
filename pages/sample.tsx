import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import StandardFooter from "../components/standardFooter";
import { SaroshGeneratorClient } from "../grpc-web/tensorbeat/Sarosh_genServiceClientPb";
import { GenerateMusicRequest } from "../grpc-web/tensorbeat/sarosh_gen_pb";

const cloud_bucket_songs = [
    {
        url:
            "https://storage.googleapis.com/sarosh-gen/Get%20Up%20Offa%20That%20Thing-255779303.mp3",
        name: "Get Up Offa That Thing",
        details: "A song by James Brown that I think is pretty funny",
    },
];

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

                {cloud_bucket_songs.map((song, index) => (
                    <div key={index}>
                        {song.name}:
                        <audio controls>
                            <source src={song.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <p>{song.details}</p>
                    </div>
                ))}

                <div
                    className={pageStyles.section}
                    style={{ marginTop: "50px" }}
                ></div>
            </main>

            <StandardFooter />
        </div>
    );
}
