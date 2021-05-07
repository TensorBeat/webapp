import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import StandardFooter from "../components/standardFooter";

const cloud_bucket_songs = [
	
   {
        name: "Recomposed",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Recomposed.mp3",
    },
   {
        name: "Jazz Conditioned",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/jazz_v2.mp3",
    },
   {
        name: "Ominous Overfitting",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Ominous_still_overfits.mp3",
    },
   {
        name: "Boss Music",
	url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Boss%20Music.mp3",
    },
   {
        name: "GSU Theme",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/GSU_Theme.mp3",
    },
   {
        name: "Recomposed 2",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Recomposed%202.mp3",
    },
   {
        name: "Pop Conditioned 2",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Happier.mp3",
    },
    {
        name: "Luke's Piano",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Luke%20Faceroll.mp3",
    },
    {
        name: "Pop Conditioned",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/Pop%20Conditioned.mp3",
    },
    {
        name: "Test Output 3",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/test_output_3.mp3",
    },
   {
        name: "Test Output 5",
        url:
            "https://storage.googleapis.com/sarosh-gen/mp3s/test_output%20_5_condensed.mp3",
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
