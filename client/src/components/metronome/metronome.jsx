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
  getBPMValue,
  increaseBPMByTen,
  decreaseBPMByTen,
} from "../../services/audioFunctions";

//CSS
import "../metronome/metronome.css";

const Metronome = ({ startMetronome, stopMetronome }) => {
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
    <Row id="metronome">
      <Row>
        <h2 className="labels-gold">METRONOME</h2>
      </Row>
      <Row>
        <Col md={6}>
          <MetronomeToggle
            handleToggleMetronome={handleToggleMetronome}
            isMetronomeOn={isMetronomeOn}
            id={"metronome-toggle"}
          />
        </Col>
        <Col md={3} className="modifiers-container">
          <MinusButton
            className={"modify-buttons"}
            id={"bpm-decrease-button"}
            handleOnClick={handleDecrementBPM}
          />
        </Col>
        <Col md={3} className="modifiers-container">
          <PlusButton
            handleOnClick={handleIncrementBPM}
            className={"modify-buttons"}
            id={"bpm-increase-button"}
          />
        </Col>
      </Row>
      <Row className="screen-display">
        <h3 className="labels">{"BPM " + bpmValue}</h3>
      </Row>
    </Row>
  );
};

export default Metronome;
