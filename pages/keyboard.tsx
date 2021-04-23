import Head from "next/head";
import React, { Component } from "react";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import StandardFooter from "../components/standardFooter";
import { KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import SoundFontProvider from "../components/soundFontProvider";
import PianoWithRecording from "../components/pianoWithRecording";

import { v4 as uuidv4 } from "uuid";
import { GenerateMusicRequest } from "../grpc-web/tensorbeat/sarosh_gen_pb";

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

interface Frame {
  id: string;
  notes: string;
  start: number;
  duration: number;
}

interface KeyboardState {
  recording: Frame[];
  activeNotes: string[];
  audioContext: any;
  generatedMusic: string[] | undefined;
  musicIsGenerating: boolean;
}

const PIANO_WIDTH = 500;
const NOTE_DURATION = 200; // milliseconds

export default class Keyboard extends Component {
  state: KeyboardState = {
    audioContext: null,
    recording: [],
    activeNotes: [],
    generatedMusic: undefined,
    musicIsGenerating: false,
  };

  scheduledEvents: [];

  componentDidMount = () => {
    this.setState({
      // audioContext: new (window.AudioContext || window.webkitAudioContext)(),
      audioContext: new window.AudioContext(),
    });
  };

  constructor(props) {
    super(props);
    this.scheduledEvents = [];
  }

  appendToRecording = (item: {
    notes: string;
    start: number;
    duration: number;
  }) => {
    const { notes, start, duration } = item;

    const frame: Frame = {
      id: uuidv4(),
      notes: notes,
      start: start,
      duration: duration,
    };

    this.setState({
      recording: [...this.state.recording, frame],
    });
  };

  clearRecording = () => {
    this.setState({ recording: [] });
  };

  playRecording = () => {
    const initialTime = this.state.recording[0].start;
    this.state.recording.forEach(({ id, notes, start, duration }) => {
      let startDelay = start - initialTime;
      setTimeout(() => {
        this.setState({ activeNotes: [] }); // Ensure that repeated notes are played again
        this.setState({ activeNotes: notes.split(".") });
      }, startDelay);
      setTimeout(() => {
        // TODO: make this work with id's. Might not be needed though
        this.setState({
          activeNotes: this.state.activeNotes.filter(
            (an) => !notes.split(".").includes(an)
          ),
        });
      }, startDelay + duration);
    });
  };

  playGeneratedMusic = (notes: string[]) => {
    notes.forEach((note, index) => {
      setTimeout(() => {
        this.setState({ activeNotes: [] });
        this.setState({ activeNotes: note.split(".") });
      }, index * NOTE_DURATION);
    });
  };

  sendRecordingToGenerator = () => {
    const musicRequest = new GenerateMusicRequest();
    console.log(this.state.recording.map((frame) => frame.notes));
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
              Current recording:
              {this.state.recording.map((frame, index) => (
                <span key={index}>{frame.notes} </span>
              ))}
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
              <button
                className={pageStyles.button}
                onClick={this.sendRecordingToGenerator}
                disabled={this.state.musicIsGenerating}
              >
                Generate Music!
              </button>
            </div>
          </div>
        </main>
        <StandardFooter />
      </div>
    );
  }
}
