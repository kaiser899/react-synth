import React from "react";
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";

//import settings
import { synthNames } from "../../settings/settings";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OscillatorTypeSetter = ({
  currentOscillatorIndex,
  handleOscillatorIncrement,
  handleOscillatorDecrement,
}) => {
  <Row>
    <Row>
      <Col xs={5}>
        <h3 className="labels">OSCILLATOR</h3>
      </Col>
    </Row>
    <Row>
      <Col xs={5}>
        <h3 className="labels">{synthNames[currentOscillatorIndex]}</h3>
      </Col>
    </Row>
    <Row className="modifiers-container">
      <Col xs={6}>
        <MinusButton
          className={"modify-buttons"}
          id={"oscillator-index-decrease"}
          handleOnClick={handleOscillatorDecrement}
        />
      </Col>
      <Col xs={6}>
        <PlusButton
          className={"modify-buttons"}
          id={"oscillator-index-increase"}
          handleOnClick={handleOscillatorIncrement}
        />
      </Col>
    </Row>
  </Row>;
};
export default OscillatorTypeSetter;
