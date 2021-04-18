import Head from "next/head";
import React, { Component } from "react";
import pageStyles from "../styles/page.module.css";
import StandardFooter from "./Components/standardFooter";

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      recordedNotes: [],
      audioContext: new AudioContext(),
      audioBuffer: null,
    };
  }

  render() {
    return (
      <div className={pageStyles.container}>
        <Head>
          <title>Keyboard - TensorBeat</title>
          <link rel="icon" href="/tensorbeat.svg" />
        </Head>
        <button onClick={this.playSound(800)}></button>
        <StandardFooter />
      </div>
    );
  }
}
