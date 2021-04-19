import Head from "next/head";
import React, { Component } from "react";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import StandardFooter from "./Components/standardFooter";
import Piano, { KeyboardShortcuts, MidiNumbers } from "react-piano";

import "react-piano/dist/styles.css";

import SoundFontProvider from "./Components/soundFontProvider";
import PianoWithRecording from "./Components/pianoWithRecording";

const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("f4"),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const PIANO_WIDTH = 500;
const NOTE_DURATION = 200; // milliseconds

export default class Keyboard extends Component {
  state = {
    audioContext: null,
    recording: [],
    activeNotes: [],
  };

  componentDidMount = () => {
    this.setState({
      audioContext: new (window.AudioContext || window.webkitAudioContext)(),
    });
  };

  constructor(props) {
    super(props);
    this.scheduledEvents = [];
  }

  appendToRecording = (newItem) => {
    this.setState({
      recording: [...this.state.recording, newItem],
    });
  };

  clearRecording = () => {
    this.setState({ recording: [] });
  };

  playRecording = () => {
    this.state.recording.forEach((notes, index) => {
      setTimeout(() => {
        this.setState({ activeNotes: [] }); // Ensure that repeated notes are played again
        this.setState({ activeNotes: notes.split(".") });
      }, index * NOTE_DURATION);
    });
    setTimeout(
      () => this.setState({ activeNotes: [] }),
      this.state.recording.length * NOTE_DURATION
    );
  };

  render() {
    return (
      <div className={pageStyles.container}>
        <Head>
          <title>Keyboard - TensorBeat</title>
          <link rel="icon" href="/tensorbeat.svg" />
        </Head>

        <main className={pageStyles.main}>
          <div className={pageStyles.section}>
            {
              /*
              Adapted from react-piano docs: https://reactjsexample.com/an-interactive-piano-keyboard-for-react/ 
              This is a poorly written codebase that is tightly coupled, I would like to rewrite it eventually
              */
              this.state.audioContext && (
                <SoundFontProvider
                  audioContext={this.state.audioContext}
                  hostname={soundfontHostname}
                  render={({ isLoading, playNote, stopNote }) => (
                    <PianoWithRecording
                      appendToRecording={this.appendToRecording}
                      noteRange={noteRange}
                      width={PIANO_WIDTH}
                      playNote={playNote}
                      stopNote={stopNote}
                      disabled={isLoading}
                      activeNotes={this.state.activeNotes}
                      keyboardShortcuts={keyboardShortcuts}
                    />
                  )}
                />
              )
            }
            <p className={boxStyles.box} style={{ width: `${PIANO_WIDTH}px` }}>
              Current recording: {this.state.recording.join(", ")}
            </p>
            <div className={pageStyles.row}>
              <button
                className={pageStyles.button}
                onClick={this.playRecording}
              >
                Play
              </button>
              <button
                className={pageStyles.button}
                onClick={this.clearRecording}
              >
                Clear
              </button>
            </div>
          </div>
        </main>
        <StandardFooter />
      </div>
    );
  }
}
