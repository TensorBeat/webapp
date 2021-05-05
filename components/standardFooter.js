import styles from "../styles/page.module.css";
import logo from "../public/tensorbeat-muted.svg";

export default function StandardFooter() {
    return (
        <>
            <img
                src={logo}
                alt={"TensorBeat logo"}
                className={styles.mutedLogo}
            />
            <footer className={styles.footer}>
                <a href={"/"}>Home</a>
                <span>|</span>
                <a href={"/recommender"}>Song Recommendations</a>
                <span>|</span>
                <a href={"/generator"}>Music Generator</a>
                <span>|</span>
                <a href={"/keyboard"}>MIDI Keyboard</a>
            </footer>
        </>
    );
}
