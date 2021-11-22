import React from "react";

const WhiteKeys = ({ allNotes, produceSound }) => {
  let xWhite = 0;
  let yWhite = 0;
  let widthWhite = 80;
  let heightWhite = 400;
  return allNotes.map((key, index) => {
    if (index !== 0) {
      xWhite += widthWhite;
    }

    return (
      <rect
        id={"key-" + key}
        className="piano-key white-key"
        data-piano-key={key}
        stroke="#555555"
        fill="#FFFFF7"
        x={xWhite}
        y={yWhite}
        width={widthWhite}
        height={heightWhite}
        onClick={() => produceSound(key)}
      ></rect>
    );
  });
};
export default WhiteKeys;
