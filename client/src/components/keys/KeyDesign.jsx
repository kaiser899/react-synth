import React from "react";

const KeyDesign = ({
  keyClass,
  keyIndex,
  produceSound,
  keyName,
  pressed,
  keyWidth,
}) => {
  let pressClass = pressed ? "pressedClass" : "";
  let classes = `pianoKey ${keyClass} ${pressClass}`;
  let x = 0;
  keyClass = "black-key" && x+=keyWidth;
   x+= keyWidth * keyIndex;
  return (
    <rect
      id={`key-${keyName}`}
      className={classes}
      data-piano-key={keyName}
      x={x}
      y={0}
      onClick={() => produceSound(keyName)}
    ></rect>
  );
};

export default KeyDesign;
