import React from "react";
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OctaveSetter = ({
  octave,
  handleOctaveIncrement,
  handleOctaveDecrement,
}) => {
  return (
    <Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
          <h3>OCTAVE</h3>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <p> {octave}</p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
          <PlusButton
            handleOnClick={handleOctaveIncrement}
            className={"modify-buttons"}
            id={"bpm-increase-button"}
          />
        </Col>
        <Col>
          <MinusButton
            className={"modify-buttons"}
            id={"bpm-decrease-button"}
            handleOnClick={handleOctaveDecrement}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default OctaveSetter;
