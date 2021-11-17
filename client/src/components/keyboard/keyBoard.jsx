import React, { useEffect, useState } from "react";
import * as notes from "../../services/notes";
import WhiteKeys from "../keys/whiteKeys";

const KeyBoard = () => {
  useEffect(() => {
    document.addEventListener("keypress", keypressHandler);
    return () => document.removeEventListener("keypress", keypressHandler);
  }, []);

  const keypressHandler = (key) => {
    console.log(key);
  };

  const [allNotes, setAllNotes] = useState(notes.default);
  const [octave, setOctave] = useState(1);

  function buildKeysArray() {
    return Object.keys(allNotes);
  }

  return (
    <div>
      {console.log("allnotes", allNotes)}
      <svg
        className={"piano"}
        height="100%"
        width="100%"
        viewBox={"0 0 100 100"}
      >
        <WhiteKeys allNotes={buildKeysArray()} />
      </svg>
    </div>
  );
};

export default KeyBoard;
