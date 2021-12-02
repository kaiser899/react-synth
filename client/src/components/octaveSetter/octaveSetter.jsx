import React from "react";
import PlusButton from "../../mediaComponents/plusButton";
import MinusButton from "../../mediaComponents/minusButton";

const OctaveSetter = ({
  octave,
  handleOctaveIncrement,
  handleOctaveDecrement,
}) => {
  return (
    <div>
      <p> Octave: {octave}</p>
      <PlusButton
        handleOnClick={handleOctaveIncrement}
        className={"modify-buttons"}
        id={"bpm-increase-button"}
      />
      <MinusButton
        className={"modify-buttons"}
        id={"bpm-decrease-button"}
        handleOnClick={handleOctaveDecrement}
      />
    </div>
  );
};

export default OctaveSetter;
