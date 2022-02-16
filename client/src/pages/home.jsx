import React, { useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import * as Tone from "tone";
import { startAudioContext } from "../services/audioFunctions";
import Screen from "../components/screen/screen";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import SplashScreen from "../components/splashScreen/splashScreen";
import { synthSettings } from "../settings/settings";

const Home = () => {
  //checking if there are octave user settings in session storage
  let savedStartOctave = sessionStorage.getItem("octave");
  if (savedStartOctave !== null) {
    savedStartOctave = Number(savedStartOctave);
  } else {
    savedStartOctave = 4;
    sessionStorage.setItem("octave", savedStartOctave);
  }

  //checking if there are any synth settings saved in session storage
  let savedSynthSetting = sessionStorage.getItem("synthVersion");
  if (savedSynthSetting !== null) {
    savedSynthSetting = Number(savedSynthSetting);
  } else {
    savedSynthSetting = 0;
    sessionStorage.setItem("synthIndex", savedSynthSetting);
  }

  //declaring states
  const [started, setStarted] = useState(0);
  const [octave, setOctave] = useState(savedStartOctave);
  const [synthSetting, setSynthSettings] = useState(savedSynthSetting);

  let audioContext = "";

  // useEffect(() => {
  //   console.log("Start Octave", octave);
  // }, [octave]);

  //handler for Start button

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
    keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
  });
  const synth = new Tone.PolySynth().toDestination();
  synth.set(synthSettings[synthSetting]);
  console.log(synth);

  //handlers for Octave Increment / Decrement
  // TO-DO: Fix issue for note hang during octave change
  const handleOctaveIncrement = () => {
    if (octave === 7) return;
    synth.releaseAll();
    setOctave((prev) => prev + 1);
    sessionStorage.setItem("octave", octave + 1);
  };
  const handleOctaveDecrement = () => {
    if (octave === 0) return;
    synth.releaseAll();
    setOctave((prev) => prev - 1);
    sessionStorage.setItem("octave", octave - 1);
  };

  const handleOscillatorIncrement = () => {
    if (synthSetting === 2) return;
    setSynthSettings((prev) => prev + 1);
    sessionStorage.setItem("synthIndex", synthSetting);
  };

  const handleOscillatorDecrement = () => {
    if (synthSetting === 0) return;
    setSynthSettings((prev) => prev - 1);
    sessionStorage.setItem("synthIndex", synthSetting);
  };

  return (
    <Container fluid id="background-main">
      {!started ? (
        <Row>
          <SplashScreen handleButtonStart={handleButtonStart} />
        </Row>
      ) : (
        <Container id="backdrop">
          <Row id="app-row">
            <Col className="wood-case" id="left-case"></Col>
            <Col id="center-row">
              <Row className="justify-content-md-center" id="screen-row">
                <Screen
                  octave={octave}
                  handleOctaveIncrement={handleOctaveIncrement}
                  handleOctaveDecrement={handleOctaveDecrement}
                  handleOscillatorDecrement={handleOscillatorDecrement}
                  handleOscillatorIncrement={handleOscillatorIncrement}
                  currentOscillatorIndex={synthSetting}
                />
              </Row>
              <Row>
                <Col id="keyboard">
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
                </Col>
              </Row>
            </Col>
            <Col className="wood-case" id="right-case"></Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Home;
