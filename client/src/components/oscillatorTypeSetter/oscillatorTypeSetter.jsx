import React from "react";
//COMPONENTS
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";
//import settings
import { synthNames } from "../../settings/settings";
//BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OscillatorTypeSetter = ({
  currentOscillatorIndex,
  handleOscillatorIncrement,
  handleOscillatorDecrement,
}) => {
  return (
    <Row id="oscillator">
      <Row>
        <h2 className="labels-gold">OSCILLATOR</h2>
      </Row>
      <Row>
        <Col md={3} className="modifiers-container">
          <MinusButton
            className={"modify-buttons"}
            id={"oscillator-index-decrease"}
            handleOnClick={handleOscillatorDecrement}
          />
        </Col>
        <Col md={3} className="modifiers-container">
          <PlusButton
            className={"modify-buttons"}
            id={"oscillator-index-increase"}
            handleOnClick={handleOscillatorIncrement}
          />
        </Col>
      </Row>
      <Row className="screen-display">
        <Col md={5}>
          <h3 className="labels">{synthNames[currentOscillatorIndex]}</h3>
        </Col>
        <Col md={7} />
      </Row>
    </Row>
  );
};
export default OscillatorTypeSetter;
