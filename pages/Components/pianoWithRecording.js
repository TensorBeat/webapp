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

  onPlayNoteInput = (midiNumber) => {
    this.setState({
      notesRecorded: false,
    });
  };

  onStopNoteInput = (midiNumber, { prevActiveNotes }) => {
    if (this.state.notesRecorded === false) {
      this.recordNotes(prevActiveNotes, this.state.noteDuration);
      this.setState({
        notesRecorded: true,
        noteDuration: DEFAULT_NOTE_DURATION,
      });
    }
  };

  recordNotes = (midiNumbers) => {
    this.props.appendToRecording(midiNumbers.join("."));
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
