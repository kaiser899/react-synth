import React from "react";
import Metronome from "../metronome/metronome";
import OctaveSetter from "../octaveSetter/octaveSetter";
import { startMetronome, stopMetronome } from "../../services/audioFunctions";
import "./screen.css";

const Screen = ({ octave, handleOctaveDecrement, handleOctaveIncrement }) => {
  return (
    <div className="screen">
      <Metronome
        startMetronome={startMetronome}
        stopMetronome={stopMetronome}
      />
      <OctaveSetter
        octave={octave}
        handleOctaveIncrement={handleOctaveIncrement}
        handleOctaveDecrement={handleOctaveDecrement}
      />
    </div>
  );
};

export default Screen;
