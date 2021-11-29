import React, { useEffect, useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import * as Tone from "tone";
import changeAudioContext from "../services/audioContext";
import StartButton from "../components/startButton/startButton";
import OctaveSetter from "../components/octaveSetter/octaveSetter";

const Home = () => {
  //checking if there are octave user settings in session storage
  let savedStartOctave = sessionStorage.getItem("octave");
  if (savedStartOctave !== null) savedStartOctave = Number(savedStartOctave);

  const [started, setStarted] = useState(0);
  const [octave, setOctave] = useState(savedStartOctave || 4); // TO-DO: fix savedStartOctave = 0 not shown

  useEffect(() => {
    console.log("Start Octave", octave);
  }, [octave]);

  const handleButtonStart = () => {
    Tone.Transport.start();
    setStarted(1);
    console.log(Tone.Transport.state);
    //setting the audio context to playback, for prioritizing sustained playback
    changeAudioContext();
    console.log(Tone.getContext());
  };

  const firstNote = MidiNumbers.fromNote("c" + octave);
  const octaveStop = octave + 2;
  const lastNote = MidiNumbers.fromNote("f" + octaveStop);
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const synth = new Tone.PolySynth().toDestination();

  const handleOctaveIncrement = () => {
    if (octave === 7) return;
    setOctave((prev) => prev + 1);
    sessionStorage.setItem("octave", octave + 1);
  };
  const handleOctaveDecrement = () => {
    if (octave === 0) return;
    setOctave((prev) => prev - 1);
    sessionStorage.setItem("octave", octave - 1);
  };

  return (
    <div>
      {!started ? (
        <StartButton handleButtonStart={handleButtonStart} />
      ) : (
        <div>
          <OctaveSetter
            octave={octave}
            handleOctaveIncrement={handleOctaveIncrement}
            handleOctaveDecrement={handleOctaveDecrement}
          />
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
