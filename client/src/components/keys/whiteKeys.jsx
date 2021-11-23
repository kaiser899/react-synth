import React from "react";

const WhiteKeys = ({ allNotes, produceSound }) => {
  let xWhite = 0;
  let yWhite = 0;
  let widthWhite = 80;
  let heightWhite = 400;

  function _onClick(key, index){
    //salv index 
    produceSound(key)
  }

  return <div></div>allNotes.map((key, index) => {
    if (index !== 0) {
      xWhite += widthWhite;
    }

    return (
      <rect
        id={"key-" + key}
        className="piano-key white-key "
        data-piano-key={key}
        stroke="#555555"
        fill="#FFFFF7"
        x={xWhite}
        y={yWhite}
        width={widthWhite}
        height={heightWhite}
        onClick={() => _onClick(key, index)}
      ></rect>
    );
  });
};
export default WhiteKeys;
