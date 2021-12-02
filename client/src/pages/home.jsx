import React, { useEffect, useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import * as Tone from "tone";
import { startAudioContext } from "../services/audioFunctions";
import StartButton from "../components/startButton/startButton";
import Screen from "../components/screen/screen";

const Home = () => {
  //checking if there are octave user settings in session storage
  let savedStartOctave = sessionStorage.getItem("octave");
  if (savedStartOctave !== null) {
    savedStartOctave = Number(savedStartOctave);
  } else {
    savedStartOctave = 4;
  }

  const [started, setStarted] = useState(0);
  const [octave, setOctave] = useState(savedStartOctave);

  let audioContext = "";
  

  useEffect(() => {
    console.log("Start Octave", octave);
  }, [octave]);

  const handleButtonStart = async () => {
    await Tone.start();

    //setting the audio context to playback, for prioritizing sustained playback
    audioContext = new Tone.Context({ latencyHint: "playback" });
    //starting the audio context
    startAudioContext(audioContext);
    setStarted(1);
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
          <Screen
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
