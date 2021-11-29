import React, { useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import * as Tone from "tone";
import changeAudioContext from "../services/audioContext";
import StartButton from "../components/startButton/startButton";

const Home = () => {
  const [started, setStarted] = useState(0);

  const handleButtonStart = () => {
    Tone.Transport.start();
    setStarted(1);
    console.log(Tone.Transport.state);
    //setting the audio context to playback, for prioritizing sustained playback
    changeAudioContext();
    console.log(Tone.getContext());
  };

  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const synth = new Tone.PolySynth().toDestination();

  return (
    <div>
      {!started ? (
        <StartButton handleButtonStart={handleButtonStart} />
      ) : (
        <div>
          <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {
              let note = Tone.Frequency(midiNumber, "midi").toNote();
              synth.triggerAttack(note);
              // Play a given note - see notes below
            }}
            stopNote={(midiNumber) => {
              // Stop playing a given note - see notes below
              let note = Tone.Frequency(midiNumber, "midi").toNote();
              synth.triggerRelease(note);
            }}
            width={1000}
            keyboardShortcuts={keyboardShortcuts}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
