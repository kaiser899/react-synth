import React from "react";
import Metronome from "../metronome/metronome";
import OctaveSetter from "../octaveSetter/octaveSetter";
import { startMetronome, stopMetronome } from "../../services/audioFunctions";
import "./screen.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OscillatorTypeSetter from "../oscillatorTypeSetter/oscillatorTypeSetter";

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
      <Col id="metronome-container">
        <Metronome
          startMetronome={startMetronome}
          stopMetronome={stopMetronome}
        />
      </Col>
      <Col>
        <OscillatorTypeSetter
          currentOscillatorIndex={currentOscillatorIndex}
          handleOscillatorIncrement={handleOscillatorIncrement}
          handleOscillatorDecrement={handleOscillatorDecrement}
        />
      </Col>
      <Col id="octave-container">
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
