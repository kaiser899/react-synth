import React, { useState } from "react";
//COMPONENTS
import MetronomeToggle from "./metronomeToggle";
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";

//BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//FUNCTIONS
import {
  startMetronome,
  stopMetronome,
  getBPMValue,
  increaseBPMByTen,
  decreaseBPMByTen,
} from "../../services/audioFunctions";

const Metronome = ({ bpm }) => {
  const [bpmValue, setBpmValue] = useState(getBPMValue());
  const [isMetronomeOn, setIsMetronomeOn] = useState(false);

  // const iconClass = isMetronomeOn ? "icon-on" : "icon-off";

  const handleIncrementBPM = () => {
    if (bpmValue + 10 > 220) {
      return;
    }
    increaseBPMByTen(bpmValue, isMetronomeOn);
    setBpmValue((prev) => prev + 10);
  };

  const handleDecrementBPM = () => {
    if (bpmValue - 10 === 0) {
      return;
    }
    decreaseBPMByTen(bpmValue, isMetronomeOn);
    setBpmValue((prev) => prev - 10);
  };

  const handleToggleMetronome = () => {
    if (isMetronomeOn) {
      stopMetronome();
      setIsMetronomeOn(false);
    } else {
      startMetronome();
      setIsMetronomeOn(true);
    }
  };
  return (
    <Row>
      <Col>
        <Row>
          <h3 class="labels">METRONOME</h3>
        </Row>
        <Row>
          <Col xs={3}>
            <MetronomeToggle
              handleToggleMetronome={handleToggleMetronome}
              isMetronomeOn={isMetronomeOn}
              id={"metronome-toggle"}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <p class="labels">{"BPM " + bpmValue}</p>
          </Col>
        </Row>
        <Row className="modifiers-container">
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <MinusButton
                  className={"modify-buttons"}
                  id={"bpm-decrease-button"}
                  handleOnClick={handleDecrementBPM}
                />
              </Col>
              <Col xs={6}>
                <PlusButton
                  handleOnClick={handleIncrementBPM}
                  className={"modify-buttons"}
                  id={"bpm-increase-button"}
                />
              </Col>
              <Col xs={2} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Metronome;
