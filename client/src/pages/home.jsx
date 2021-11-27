import React, { useState } from "react";

import * as Tone from "tone";
//import Screen from "../components/screen/screen";
import KeyBoard from "../components/keyboard/keyBoard";
import StartButton from "../components/startButton/StartButton";
import changeAudioContext from "../services/audioContext";

const Home = () => {
  const [octave, setOctave] = useState(4);
  const [started, setStarted] = useState(0);

  //setting the audio context to playback, for prioritizing sustained playback
  changeAudioContext();
  console.log(Tone.getContext());

  const synth = new Tone.PolySynth({
    oscillator: {
      type: "amtriangle",
      harmonicity: 0.5,
      modulationType: "sawtooth",
    },
    envelope: {
      attackCurve: "exponential",
      attack: 0.05,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
    },
    portamento: 0.05,
  }).toDestination();

  const handleButtonStart = () => {
    Tone.Transport.start();
    setStarted(1);
    console.log(Tone.Transport.state);
  };

  const startSound = (note) => {
    synth.triggerAttackRelease(note, "2n");
  };
  const stopSound = (note) => {
    synth.triggerRelease();
  };

  return (
    <div>
      {!started ? (
        <StartButton handleButtonStart={handleButtonStart} />
      ) : (
        <div>
          {/* <Screen /> */}
          <KeyBoard
            octave={octave}
            startSound={startSound}
            stopSound={stopSound}
          ></KeyBoard>
        </div>
      )}
      {/* <SoundGenerator /> */}
      {/* <VolumeControls />
      <ToneControls octave={octave} changeOctave={changeOctave} /> */}
    </div>
  );
};

export default Home;
