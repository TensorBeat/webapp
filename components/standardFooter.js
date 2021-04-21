import styles from "../styles/page.module.css";

export default function StandardFooter() {
  return (
    <footer className={styles.footer}>
      <a href={"/"}>Home</a>
      <span>|</span>
      <a href={"/recommender"}>Song Recommendations</a>
      <span>|</span>
      <a href={"/generator"}>Music Generator</a>
      <span>|</span>
      <a href={"/keyboard"}>MIDI Keyboard</a>
    </footer>
  );
}
