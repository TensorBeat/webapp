import Head from "next/head";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import logo from "../public/tensorbeat-muted.svg";
import StandardFooter from "./Components/standardFooter";

export default function Recommender() {
  return (
    <div className={pageStyles.container}>
      <Head>
        <title>Recommender - TensorBeat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={pageStyles.main}>
        <div className={pageStyles.section}>
          <h1 className={pageStyles.title}>Song Recommender</h1>

          <p className={pageStyles.description}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>

        <div className={pageStyles.section}>
          <div className={pageStyles.row}>
            <div
              className={boxStyles.box}
              style={{ width: "60%", marginRight: "30px", flexShrink: 0 }}
            >
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <div className={boxStyles.box} style={{ flexGrow: 1 }}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <a
            href={"#"}
            className={pageStyles.button}
            style={{ marginTop: "40px", width: "300px" }}
          >
            Get Recommendations
          </a>
        </div>

        <div className={pageStyles.section} style={{ marginTop: "50px" }}>
          <div className={boxStyles.box}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
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
