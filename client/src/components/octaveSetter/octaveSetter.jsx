import React from "react";
//COMPONENTS
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";
//BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//CSS
import "../octaveSetter/octaveSetter.css";

const OctaveSetter = ({
  octave,
  handleOctaveIncrement,
  handleOctaveDecrement,
}) => {
  return (
    <Row id="octave">
      <Row>
        <h2 className="labels-gold">OCTAVE</h2>
      </Row>
      <Row>
        <Col md={3} className="modifiers-container">
          <MinusButton
            className={"modify-buttons"}
            id={"octave-decrease-button"}
            handleOnClick={handleOctaveDecrement}
          />
        </Col>
        <Col md={3} className="modifiers-container">
          <PlusButton
            handleOnClick={handleOctaveIncrement}
            className={"modify-buttons"}
            id={"octave-increase-button"}
          />
        </Col>
      </Row>
      <Row className="screen-display">
        <h3 className="labels">Start: C{octave}</h3>
      </Row>
    </Row>
  );
};

export default OctaveSetter;
