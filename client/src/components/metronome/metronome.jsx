import React, { useState } from "react";
import {
  startMetronome,
  stopMetronome,
  getBPMValue,
  increaseBPMByTen,
  decreaseBPMByTen,
} from "../../services/audioFunctions";

import MetronomeSVG from "../../mediaComponents/metronomeSVG";
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";

const Metronome = ({ bpm }) => {
  const [bpmValue, setBpmValue] = useState(getBPMValue());
  const [isMetronomeOn, setIsMetronomeOn] = useState(false);

  const iconClass = isMetronomeOn ? "icon-on" : "icon-off";

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
    if (iconClass === "icon-on") {
      stopMetronome();
      setIsMetronomeOn(false);
    } else {
      startMetronome();
      setIsMetronomeOn(true);
    }
  };
  return (
    <div>
      <h3>METRONOME</h3>
      <MetronomeSVG
        className={iconClass}
        handleToggleMetronome={handleToggleMetronome}
        id={"metronome-icon"}
      />
      <div>
        <p>BPM: {bpmValue}</p>
        <PlusButton
          handleOnClick={handleIncrementBPM}
          className={"modify-buttons"}
          id={"bpm-increase-button"}
        />
        <MinusButton
          className={"modify-buttons"}
          id={"bpm-decrease-button"}
          handleOnClick={handleDecrementBPM}
        />
      </div>
    </div>
  );
};

export default Metronome;
