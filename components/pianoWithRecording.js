// ORIGINAL SOURCE: https://reactjsexample.com/an-interactive-piano-keyboard-for-react/
// ORIGINAL CODE SANDBOX: https://codesandbox.io/s/l4jjvzmp47?file=/src/PianoWithRecording.js:0-1832

import React from "react";
import { Piano } from "react-piano";

const DURATION_UNIT = 0.2;
const DEFAULT_NOTE_DURATION = DURATION_UNIT;



class PianoWithRecording extends React.Component {
    static defaultProps = {
        notesRecorded: false,
    };

    state = {
        noteDuration: DEFAULT_NOTE_DURATION,
    };

    initialTime;
    notesBeingRecorded = {};

    onPlayNoteInput = (midiNumber) => {
        this.setState({
            notesRecorded: false,
        });
        const currentTime = new Date().getTime();
        if (this.initialTime === undefined) {
            this.initialTime = currentTime;
        }
        this.notesBeingRecorded[midiNumber] = currentTime - this.initialTime;
    };

    onStopNoteInput = (midiNumber, { prevActiveNotes }) => {
        if (this.state.notesRecorded === false) {
            const currentTime = new Date().getTime() - this.initialTime;
            let key = prevActiveNotes[0] ?? prevActiveNotes
            const start = this.notesBeingRecorded[key];
            this.recordNotes(prevActiveNotes, start, currentTime - start);
            this.setState({
                notesRecorded: true,
                noteDuration: DEFAULT_NOTE_DURATION,
            });
        }
    };

    recordNotes = (midiNumbers, start, duration) => {
        this.props.appendToRecording({
            notes: midiNumbers.join("."),
            start: start,
            duration: duration,
        });
    };

    render() {
        const {
            playNote,
            stopNote,
            recording,
            appendToRecording,
            ...pianoProps
        } = this.props;

        return (
            <div>
                <Piano
                    playNote={this.props.playNote}
                    stopNote={this.props.stopNote}
                    onPlayNoteInput={this.onPlayNoteInput}
                    onStopNoteInput={this.onStopNoteInput}
                    activeNotes={this.props.activeNotes}
                    {...pianoProps}
                />
            </div>
        );
    }
}

export default PianoWithRecording;
