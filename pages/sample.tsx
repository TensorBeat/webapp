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
        meta: {
            "field 1": "information",
            "field 2": "more information",
        },
    },
    {
        name: "Wenn ich jodle, bin ich glücklich",
        url:
            "https://storage.googleapis.com/sarosh-gen/Wenn%20ich%20jodle%2C%20bin%20ich%20gl%C3%BCcklich%20-%20Franzl%20Lang.mp3",
        meta: {
            info: "My Favorite Franzl Lang song",
        },
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

                    {cloud_bucket_songs.map((song, index) => (
                        <div key={index}>
                            <div className={pageStyles.row}>
                                <h3 style={{ marginRight: "1em" }}>
                                    {song.name}
                                </h3>
                                <audio controls>
                                    <source src={song.url} type="audio/mpeg" />
                                    Your browser does not support the audio
                                    element.
                                </audio>
                            </div>
                            {Object.keys(song.meta).map((name, index) => (
                                <p key={index}>
                                    {name}: {song.meta[name]}
                                </p>
                            ))}
                        </div>
                    ))}
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
