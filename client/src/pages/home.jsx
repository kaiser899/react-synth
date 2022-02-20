import React, { useState, useEffect } from "react";
//services
import * as Tone from "tone";
import { startAudioContext } from "../services/audioFunctions";
import { synthSettings } from "../settings/settings";
//elements
import SplashScreen from "../components/splashScreen/splashScreen";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
//MEDIA COMPONENTS
import ksrLogo from "../mediaComponents/images/logo.png";
import tagLine from "../mediaComponents/images/tag.png";
//Bootstrap
import Screen from "../components/screen/screen";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//css
import "react-piano/dist/styles.css";
import "./home.css";

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
  let savedSynthSetting = sessionStorage.getItem("synthIndex");

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

  //handler for Start button

  const handleButtonStart = async () => {
    await Tone.start();

    //setting the audio context to playback, for prioritizing sustained playback
    audioContext = new Tone.Context({ latencyHint: "playback" });
    //starting the audio context
    startAudioContext(audioContext);
    setStarted(1);
  };

  //piano constants
  const firstNote = MidiNumbers.fromNote("c" + octave);
  const octaveStop = octave + 2;
  const lastNote = MidiNumbers.fromNote("f" + octaveStop);
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
  });
  let pianoSize;
  const getSize = () => {
    if (window.innerWidth > 1400) {
      pianoSize = 0.67 * window.innerWidth;
    } else {
      pianoSize = 0.83 * window.innerWidth;
    }
    return {
      width: window.innerWidth,
    };
  };
  // eslint-disable-next-line no-unused-vars
  const [windowSize, setWindowSize] = useState(getSize());

  //getting the window size for piano keyboard resize
  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //synth
  const synth = new Tone.PolySynth().toDestination();
  synth.set(synthSettings[synthSetting]);

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
  //handlers for Oscillator settings increment/decrement
  const handleOscillatorIncrement = () => {
    if (synthSetting === 2) return;
    //TO DO - change above to length instead of hardcoded
    setSynthSettings((prev) => prev + 1);
    sessionStorage.setItem("synthIndex", synthSetting + 1);
  };
  const handleOscillatorDecrement = () => {
    console.log(synthSetting);
    if (synthSetting === 0) return;
    setSynthSettings((prev) => prev - 1);
    sessionStorage.setItem("synthIndex", synthSetting - 1);
  };

  return (
    <Container fluid id="background-main">
      {!started ? (
        <Row>
          <SplashScreen handleButtonStart={handleButtonStart} />
        </Row>
      ) : (
        <Container>
          <Container id="backdrop">
            <Row id="app-row">
              <Col className="wood-case" id="left-case" md={1}></Col>
              <Col id="center-row" md={10}>
                {/* screen row */}
                <Row id="logo-row">
                  <Col md={4}></Col>
                  <Col md={4}>
                    <Row>
                      <img src={ksrLogo} alt="ksr-logo" id="ksr-logo" />;
                    </Row>
                    <Row>
                      <img src={tagLine} alt="tagline" id="tag-line" />;
                    </Row>
                  </Col>
                  <Col md={4}></Col>
                </Row>

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
                <Row id="bottom-row"></Row>
              </Col>
              <Col className="wood-case" id="right-case" md={1}></Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
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
                width={pianoSize}
                keyboardShortcuts={keyboardShortcuts}
              />
            </Row>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Home;
