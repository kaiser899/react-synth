import React from "react";
import { startMetronome } from "../../services/audioFunctions";

const Metronome = () => {
  return <button onClick={startMetronome}>Start Metronome</button>;
};

export default Metronome;
