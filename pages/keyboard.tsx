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
    loading: boolean,
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
        loading: false,
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

        this.state.generatedMusic?.forEach((note, index) => {
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

        this.setState({musicIsGenerating: false, loading: true});
        client.generateMusic(musicRequest, null).then((res) => {
            this.setState({
                generatedMusic: res.getNotesList(),
                musicIsGenerating: false,
                loading: false,
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
                            {
                                this.state.loading ? <div>Loading...</div> :
                                    (
                                        <div>
                                            Current recording:
                                            {this.state.recording.map((frame, index) => (
                                                <span key={index}>{frame.notes} </span>
                                            ))}
                                        </div>
                                    )
                            }
                        </p>
                        <div className={pageStyles.row} style={{alignContent: "center !important"}}>
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
                                disabled={!this.state.generatedMusic}
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
