import Head from "next/head";
import React, {Component} from "react";
import pageStyles from "../styles/page.module.css";
import boxStyles from "../styles/box.module.css";
import StandardFooter from "../components/standardFooter";
// @ts-ignore
import {KeyboardShortcuts, MidiNumbers} from "react-piano";
import "react-piano/dist/styles.css";
import SoundFontProvider from "../components/soundFontProvider";
import PianoWithRecording from "../components/pianoWithRecording";

import {v4 as uuidv4} from "uuid";
import {GenerateMusicRequest} from "../grpc-web/tensorbeat/sarosh_gen_pb";
import {SaroshGeneratorClient} from "../grpc-web/tensorbeat/Sarosh_genServiceClientPb";

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

interface KeyboardProps {
}

const PIANO_WIDTH = 500;
const NOTE_DURATION = 200; // milliseconds
const SORTED_PITCHES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
];

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

    constructor(props: KeyboardProps) {
        super(props);
        this.scheduledEvents = [];
    }

    appendToRecording = (item: {
        notes: string;
        start: number;
        duration: number;
    }) => {
        const {notes, start, duration} = item;

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
        this.setState({recording: []});
    };

    playRecording = () => {
        const initialTime = this.state.recording[0].start;
        this.state.recording.forEach(({id, notes, start, duration}) => {
            let startDelay = start - initialTime;
            setTimeout(() => {
                this.setState({activeNotes: []}); // Ensure that repeated notes are played again
                this.setState({activeNotes: notes.split(".")});
            }, startDelay);
            setTimeout(() => {
                // TODO: make this work with id's. Might not be needed though
                this.setState({
                    activeNotes: this.state.activeNotes.filter(
                        (an) => !notes.split(".").includes(an)
                    ),
                });
            }, startDelay + duration - 1); // minus one just in case there's overlap with the next note
        });
    };

    playGeneratedMusic = () => {

        const song = ['D4', 'F4', 'F5', 'A3', 'F5', 'C4', 'D4', 'E5', 'D4', 'F4', 'G5', 'A5', 'F5', 'D4', 'F4', 'B-3', 'D4', 'C4', 'E4', 'E4', 'B-3', 'F4', 'D4', 'F5', 'A3', 'E5', 'D4', 'B-3', 'E4', 'D5', 'E4', 'B-3', 'D5', 'E4', 'A3', 'F5', 'C4', 'D4', 'A3', 'D5', 'E5', 'A3', 'F5', 'D3', 'D5', 'F4', 'F5', 'C4', 'F#3', 'G#2', 'E5', 'F5', 'E-3', 'G4', 'E-5', 'B-2', 'A2', 'D5', 'D3', 'A4', 'A4', 'A2', 'E5', 'A4', 'A4', 'F#3', 'A3', 'B2', 'F4', 'A3', 'E-3', 'D3', 'D5', 'A3', 'D3', 'E-4', 'A3', 'F4', 'D4', 'E-4', 'B3', 'F#3', 'A3', 'D4', 'C4', 'F#4', 'G#4', 'B3', 'E4', 'E-5', 'E5', 'E-4', 'C#4', 'E3', 'B3', 'E4', 'A1', 'E4', 'C4', 'E4', 'C#5', 'C#4', 'C#5', 'F3', 'E4', 'C#4', 'A3', 'F4', 'E4', 'E2', 'E2', 'C#4', 'D4', 'E4', 'E2', 'C#4', 'G#2', 'E4', 'E2', 'E2', 'G#2', 'E2', 'G#2', 'C#5', 'G#2', 'B3', 'E2', 'E-5', 'G#2', 'C#5', 'G2', 'E3', 'C3', 'D5', 'G#2', 'E4', 'B-2', 'B-3', 'C5', 'C3', 'B-2', 'C3', 'F#2', 'F3', 'B-2', 'B2', 'E-5', 'E-5', 'B-2', 'C3', 'E-5', 'D5', 'A4', 'E5', 'G5', 'D4', 'G5', 'G4', 'G5', 'F#3', 'A5', 'G5', 'E-5', 'F#2', 'A4', 'C#6', 'D5', 'E-3', 'A4', 'E4', 'C#5', 'D5', 'A5', 'G2', 'D5', 'G3', 'G#4', 'G#5', 'F#5', 'F#5', 'E5', 'E-5', 'F5', 'E4', 'F4', 'E-5', 'F5', 'E5', 'E-4', 'A4', 'E2', 'B3', 'E3', 'E5', 'E4', 'F5', 'A5', 'F#5', 'C#5', 'E-5', 'C#5', 'F5', 'C#5', 'D3', 'G5', 'F5', 'C3', 'A4', 'F5', 'E5', 'E2', 'E5', 'F#2', 'A3', 'G5', 'B-4', 'E2', 'E5', 'B2', 'B-4', 'C#3', 'E-5', 'E2', 'E-5', 'D5', 'F#3', 'F4', 'G4', 'E3', 'A4', 'G5', 'G#2', 'F3', 'F5', 'G4', 'F#4', 'F#3', 'E4', 'E-5', 'A2', 'D4', 'G5', 'E-5', 'D5', 'A5', 'D5', 'F5', 'C3', 'F5', 'C#5', 'G3', 'F5', 'A4', 'F4', 'F2', 'C#3', 'F6', 'F5', 'C#3', 'C#5', 'G5', 'B-4', 'B3', 'G5', 'A3', 'B3', 'G5', 'D3', 'B3', 'B3', 'B-4', 'B2', 'B-4', 'A4', 'E5', 'C#4', 'D4.G4', 'E4', 'E-4', 'E-3', 'D4.F4', 'D2', 'G5', 'E4', 'E4', 'B4', 'C4', 'A4', 'E4.G4', 'B3', 'G4.B4', 'D4.F4.A4', 'D4.F4.A4', 'D4.F4.A4', 'A4', 'E4', 'E4', 'E4', 'D4.F4.A4', 'D4', 'D3', 'E4', 'F4', 'E4', 'C3', 'F4', 'G4', 'A4', 'F3', 'B-4', 'A4', 'G4', 'C3', 'D3', 'E3', 'A4', 'F3', 'G4', 'F4', 'E4', 'C3', 'F4', 'D3', 'E4', 'C4', 'C4', 'A2', 'D4', 'D3', 'E4', 'F4', 'E4', 'C3', 'F4', 'G4', 'A4', 'F3', 'B-4', 'A4', 'G4', 'C3', 'D3', 'E3', 'A4', 'B-2', 'E5', 'F4', 'E4', 'C3', 'C4', 'C4', 'E4', 'A4', 'D4', 'C4', 'F4', 'A1', 'A4', 'A3', 'D4', 'E4', 'F4', 'G3', 'B-2', 'F4', 'B-4', 'A4', 'E5', 'C3', 'A3', 'F4', 'A4', 'A3', 'F4', 'A4', 'A3', 'F#3', 'G4', 'D3', 'D4', 'F4', 'C4', 'F5', 'D4', 'F4', 'E4', 'A4', 'F5', 'D4', 'D4', 'G4', 'F4', 'D4', 'G4', 'A5', 'B-3', 'F4', 'D4', 'C4', 'F4', 'F4', 'A3', 'F4', 'B-4', 'D4', 'B-3', 'F4', 'E5', 'A3', 'G4', 'D4', 'A3', 'F4', 'D4', 'A3', 'F4', 'D4', 'A3', 'F#3', 'D4', 'A3', 'F#3', 'A4', 'A3', 'F#3', 'A4', 'A3', 'F#3', 'G4', 'D3', 'D4', 'B-3', 'G4', 'D4', 'B-3', 'G4', 'D4', 'B-3', 'B-4', 'A2', 'E4', 'D4', 'A4', 'E4', 'D4', 'G4', 'E4', 'D4', 'F4', 'D3', 'F4', 'A3', 'F4', 'D4', 'F#4', 'F4', 'A3', 'F4', 'D4', 'D3', 'A3', 'D4', 'D4', 'C#4', 'F4', 'F4', 'C#4', 'F4', 'C#4', 'C#4', 'F#3', 'A4', 'C4', 'B3', 'F4', 'C4', 'B3', 'A3', 'F4', 'A3', 'C#4', 'E4', 'A3', 'F4', 'D3', 'A3', 'E-4', 'D4', 'A3', 'A3', 'D4', 'C4', 'C#4', 'A4', 'E4', 'C4', 'A4', 'E4', 'A4', 'A3']
        // this.state.generatedMusic?.forEach((note, index) => {
        song.forEach((note, index) => {
            note = note.replace("-", "b");
            if (note.includes(".")) {
                // chords start at 0, so transpose them up to c4
                note = note.split(".").map(n => MidiNumbers.fromNote(n)).join(".");
            }
            // generator outputs flats as "-"
            setTimeout(() => {
                this.setState({ activeNotes: [] });
                this.setState({ activeNotes: note.split(".") });
            }, index * NOTE_DURATION);
        });
    };

    sendRecordingToGenerator = () => {
        const client = new SaroshGeneratorClient("http://grpc-web.tensorbeat.com");
        const musicRequest = new GenerateMusicRequest();
        musicRequest.setNotesList(
            this.state.recording.map((frame) => {
                // must convert numerical notes to MIDI for Sarosh's library
                const notes = frame.notes;
                return notes.includes(".")
                    ? notes
                    : SORTED_PITCHES[+notes % 12] + Math.floor(+notes / 12);
            })
        );

        this.setState({musicIsGenerating: false});
        client.generateMusic(musicRequest, null).then((res) => {
            this.setState({
                generatedMusic: res.getNotesList(),
                musicIsGenerating: false,
            });
        });
    };

    render() {
        return (
            <div className={pageStyles.container}>
                <Head>
                    <title>Keyboard - TensorBeat</title>
                    <link rel="icon" href="/tensorbeat.svg"/>
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
                                    render={({isLoading, playNote, stopNote}: any) => (
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
                        <p className={boxStyles.box} style={{width: `${PIANO_WIDTH}px`}}>
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
                            <button
                                className={pageStyles.button}
                                onClick={this.playGeneratedMusic}
                                // hidden={!this.state.generatedMusic}
                            >
                                Play Generated Music
                            </button>
                        </div>
                    </div>
                </main>
                <StandardFooter/>
            </div>
        );
    }
}
