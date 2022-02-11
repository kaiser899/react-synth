import React from "react";
import toggleOn from "../../mediaComponents/images/toggle-on.png";
import toggleOff from "../../mediaComponents/images/toggle-off.png";

const MetronomeToggle = ({ handleToggleMetronome, isMetronomeOn }) => {
  const imgMetronomeSrc = isMetronomeOn ? toggleOn : toggleOff;
  return (
    <img
      src={imgMetronomeSrc}
      onClick={handleToggleMetronome}
      alt="Metronome Toggle"
      id="metronome-toggle-button"
    />
  );
};

export default MetronomeToggle;
