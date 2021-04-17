import Head from 'next/head'
import pageStyles from '../styles/page.module.css'
import boxStyles from "../styles/box.module.css";
import logo from "../public/tensorbeat-muted.svg"

export default function Generator() {

    function handleSubmit(e) {

        e.preventDefault();
        return false;
    }

    return (
        <div className={pageStyles.container}>
            <Head>
                <title>Generator - TensorBeat</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={pageStyles.main}>
                <div className={pageStyles.section}>
                    <h1 className={pageStyles.title}>Music Generator</h1>

                    <p className={pageStyles.description}>
                        Enter a YouTube playlist URL containing several songs and TensorBeat will generate a new song.
                    </p>
                </div>

                <form className={pageStyles.section} onSubmit={handleSubmit}>
                    <div className={pageStyles.row}>
                        <input type={"text"} className={boxStyles.inputBox} style={{width: "600px", fontSize: "1.5rem", textAlign: "center"}} name={"playlist"} placeholder={"Playlist URL"}/>
                    </div>
                    <button type={"submit"} className={pageStyles.button} style={{marginTop: "40px", width: "300px"}}>Generate</button>
                </form>

                <div className={pageStyles.section} style={{marginTop: "50px"}}>

                </div>

            </main>

            <img src={logo} alt={"TensorBeat logo"} className={pageStyles.mutedLogo}/>

            <footer className={pageStyles.footer}>
                <a href={"/"}>Home</a><span>|</span>
                <a href={"/recommender"}>Song Recommendations</a><span>|</span>
                <a href={"/generator"}>Music Generator</a>
            </footer>
        </div>
    )
}
