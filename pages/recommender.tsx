import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import recommenderStyles from "../styles/recommender.module.css";
import StandardFooter from "../components/standardFooter";
import {useEffect, useState} from "react";
import {RecommenderServiceClient} from "../grpc-web/tensorbeat/RecommenderServiceClientPb";
import {GetSongsRequest, RecommenderRequest} from "../grpc-web/tensorbeat/recommender_pb";

interface Song {
    name: string,
}

export default function Recommender() {

    const [songList, setSongList] = useState<Song[]>([]);

    useEffect(() => {

        const client = new RecommenderServiceClient("http://grpc-web.tensorbeat.com");
        const getSongsRequest = new GetSongsRequest();

        client.getSongs(getSongsRequest, null).then(res => {
            setSongList(res.getSongNameList().map(song => ({name: song})))
        });

    });

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
                    </p>

                </div>

                <select className={recommenderStyles.songSelector}>
                    <option disabled={true} selected={true}>Select a song</option>
                    {
                        songList.map((song, n) => (
                            <option value={song.name} key={n}>{song.name}</option>
                        ))
                    }
                </select>

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

            <StandardFooter />
        </div>
    );
}
