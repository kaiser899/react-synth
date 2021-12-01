import React from "react";
import Metronome from "../metronome/metronome";
import OctaveSetter from "../octaveSetter/octaveSetter";
import { startMetronome, stopMetronome } from "../../services/audioFunctions";

const Screen = (
  bpmValue,
  octave,
  handleOctaveDecrement,
  handleOctaveIncrement
) => {
  return (
    <div>
      <Metronome
        bpmValue={bpmValue}
        startMetronome={startMetronome}
        stopMetronome={stopMetronome}
      />
      ;
      <OctaveSetter
        octave={octave}
        handleOctaveIncrement={handleOctaveIncrement}
        handleOctaveDecrement={handleOctaveDecrement}
      />
    </div>
  );
};

export default Screen;
