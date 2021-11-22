import React from "react";

const BlackKeys = ({ allNotes, produceSound }) => {
  let xBlack = 60;
  let yBlack = 0;
  let widthBlack = 40;
  let whiteOffset = 80;
  let heightBlack = 280;
  const skipSharps = [2];
  return allNotes.map((key, index) => {
    if (index !== 0) {
      xBlack += whiteOffset;
    }
    if (index === 2) {
      xBlack += whiteOffset;
    }
    return (
      <rect
        id={"key-" + key}
        className="piano-key black-key"
        data-piano-key={key}
        stroke="#979797"
        fill="#4B4B4B"
        x={xBlack}
        y={yBlack}
        width={widthBlack}
        height={heightBlack}
        onClick={() => produceSound(key)}
      ></rect>
    );
  });
};
export default BlackKeys;
