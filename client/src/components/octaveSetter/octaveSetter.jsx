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
      <Row className="justify-content-end">
        <Col xs={5}>
          <h3 className="labels">OCTAVE</h3>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={5}>
          <h3 className="labels">Start: C{octave}</h3>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={5}>
          <h3 className="labels">End: B{octave + 1}</h3>
        </Col>
      </Row>
      <Row className="modifiers-container justify-content-end">
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <MinusButton
                className={"modify-buttons"}
                id={"octave-decrease-button"}
                handleOnClick={handleOctaveDecrement}
              />
            </Col>
            <Col xs={6}>
              <PlusButton
                handleOnClick={handleOctaveIncrement}
                className={"modify-buttons"}
                id={"octave-increase-button"}
              />
            </Col>
            <Col xs={2} />
          </Row>
        </Col>
      </Row>
    </Row>
    /* </Row>
    //   // <Row>
    //   //   <Col></Col>
    //   //   <Col></Col>
    //   //   <Col></Col>
    //   //   <Col></Col>
    //   //   <Col></Col>
    //   //   <Col>
    //   //     <p> {octave}</p>
    //   //   </Col>
    //   // </Row>
    //   // <Row>
    //   //   <Col></Col>
    //   //   <Col></Col>
    //   //   <Col>
    //   //     <PlusButton
    //   //       handleOnClick={handleOctaveIncrement}
    //   //       className={"modify-buttons"} */
    //   //       id={"bpm-increase-button"}
    //   //     />
    //   //   </Col>
    //   //   <Col>
    //   //     <MinusButton
    //   //       className={"modify-buttons"} */}
    /* //   //       id={"bpm-decrease-button"}
    //   //       handleOnClick={handleOctaveDecrement}
    //   //     />
    //   //   </Col>
    //   // </Row> */
    /* // </Row> */
  );
};

export default OctaveSetter;
