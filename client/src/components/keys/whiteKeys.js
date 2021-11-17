import React, { useEffect, useState } from "react";

const WhiteKeys = ({ allNotes }) => {
  useEffect(()=>{

  },[]);
  const [xWhite, setxWhite] = useState(2);
  const [yWhite] = useState(0);
  const [widthWhite] = useState(8);
  const [heightWhite] = useState(100);

  allNotes.forEach((key) => {
    setxWhite(xWhite + widthWhite);
    return (
      <rect
        x={xWhite}
        y={yWhite}
        width={widthWhite}
        height={heightWhite}
        className={"white-key key"}
      >
        <text className="white-key-text">{key}</text>
      </rect>
    );
  });
};
export default WhiteKeys;
