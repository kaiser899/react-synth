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
          <Col>
            <h3 class="labels">METRONOME</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <MetronomeToggle
              handleToggleMetronome={handleToggleMetronome}
              isMetronomeOn={isMetronomeOn}
              id={"metronome-toggle"}
            />
            {/* // <MetronomeSVG */}
            {/* //   className={iconClass}
            //   handleToggleMetronome={handleToggleMetronome}
            //   id={"metronome-icon"}
            // /> */}
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <p class="labels">{"BPM" + bpmValue}</p>
          </Col>

          <Col>
            <PlusButton
              handleOnClick={handleIncrementBPM}
              className={"modify-buttons"}
              id={"bpm-increase-button"}
            />
          </Col>
          <Col>
            <MinusButton
              className={"modify-buttons"}
              id={"bpm-decrease-button"}
              handleOnClick={handleDecrementBPM}
            />
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Metronome;
