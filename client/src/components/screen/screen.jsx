import React from "react";
import Metronome from "../metronome/metronome";
import OctaveSetter from "../octaveSetter/octaveSetter";
import { startMetronome, stopMetronome } from "../../services/audioFunctions";
import "./screen.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Screen = ({ octave, handleOctaveDecrement, handleOctaveIncrement }) => {
  return (
    <Row>
      <Col>
        <Metronome
          startMetronome={startMetronome}
          stopMetronome={stopMetronome}
        />
      </Col>

      <Col></Col>
      <Col>
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
