import React, { useRef } from "react";
import "../keys/Key.css";

const Key = ({
  type,
  value,
  octave,
  id,
  x,
  width,
  height,
  pressed,
  handleClick,
}) => {
  let classes = type;
  useRef(() => {}, [pressed]);
  if (pressed) {
    classes += " pressed";
  }
  return (
    <rect
      id={"key-" + value + octave}
      data-piano-key={value + octave}
      className={classes}
      x={x}
      y={0}
      width={width}
      height={height}
      onClick={() => {
        let outputNote = value + octave;
        handleClick(outputNote, id);
      }}
    />
  );
};
export default Key;
