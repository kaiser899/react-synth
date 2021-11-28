import React, { useState, useReducer, createContext, useContext } from "react";
import {
  NotesConsumer,
  NotesProvider,
} from "../contexts/notesContext/appContext";

import * as Tone from "tone";
//import Screen from "../components/screen/screen";
import KeyBoard from "../components/keyboard/keyBoard";
import StartButton from "../components/startButton/StartButton";
import changeAudioContext from "../services/audioContext";
import { initialNotes, notesReducer } from "../services/notesActions";

const Home = () => {
  const [octave, setOctave] = useState(4);
  const [started, setStarted] = useState(0);

  //setting the audio context to playback, for prioritizing sustained playback
  changeAudioContext();
  console.log(Tone.getContext());

  const synth = new Tone.PolySynth().toDestination();
  synth.set({
    detune: 0,
    portamento: 0.05,
    volume: 0,
    oscillator: {
      type: "sine",
      //harmonicity: 0.5,
      //modulationType: "sine",
      partialCount: 0,
      phase: 0,
    },
    envelope: {
      attackCurve: "linear",
      attack: 0.005,
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.3,
    },
  });
  console.log(synth);

  const handleButtonStart = () => {
    Tone.Transport.start();
    setStarted(1);
    console.log(Tone.Transport.state);
  };

  const startSound = (note) => {
    synth.triggerAttackRelease(note);
  };
  const stopSound = (note) => {
    synth.triggerRelease(note);
  };

  return (
    <div>
      {!started ? (
        <StartButton handleButtonStart={handleButtonStart} />
      ) : (
        <div>
          {/* <Screen /> */}
          <NotesProvider>
            <div>
              <KeyBoard
                octave={octave}
                startSound={startSound}
                stopSound={stopSound}
              ></KeyBoard>
            </div>
          </NotesProvider>
        </div>
      )}
      {/* <SoundGenerator /> */}
      {/* <VolumeControls />
      <ToneControls octave={octave} changeOctave={changeOctave} /> */}
    </div>
  );
};

export default Home;
