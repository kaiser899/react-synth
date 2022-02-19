import React from "react";
//COMPONENTS
import Metronome from "../metronome/metronome";
import OctaveSetter from "../octaveSetter/octaveSetter";
import OscillatorTypeSetter from "../oscillatorTypeSetter/oscillatorTypeSetter";
//BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//FUNCTIONS
import { startMetronome, stopMetronome } from "../../services/audioFunctions";
//CSS
import "./screen.css";

const Screen = ({
  octave,
  handleOctaveDecrement,
  handleOctaveIncrement,
  handleOscillatorIncrement,
  handleOscillatorDecrement,
  currentOscillatorIndex,
}) => {
  return (
    <Row>
      <Col id="metronome-container" md={3}>
        <Metronome
          startMetronome={startMetronome}
          stopMetronome={stopMetronome}
        />
      </Col>
      <Col md={1} />
      <Col md={3} id="synth-settings-container">
        <OscillatorTypeSetter
          currentOscillatorIndex={currentOscillatorIndex}
          handleOscillatorIncrement={handleOscillatorIncrement}
          handleOscillatorDecrement={handleOscillatorDecrement}
        />
      </Col>
      <Col md={1} />
      <Col id="octave-container" md={3}>
        <OctaveSetter
          octave={octave}
          handleOctaveIncrement={handleOctaveIncrement}
          handleOctaveDecrement={handleOctaveDecrement}
        />
      </Col>
    </Row>
  );
};

export default Screen;
