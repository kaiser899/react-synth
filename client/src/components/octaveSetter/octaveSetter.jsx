import React from "react";

const OctaveSetter = ({
  octave,
  handleOctaveIncrement,
  handleOctaveDecrement,
}) => {
  return (
    <div>
      <p> Octave: {octave}</p>
      <button onClick={handleOctaveIncrement}>+</button>
      <button onClick={handleOctaveDecrement}>-</button>
    </div>
  );
};

export default OctaveSetter;
