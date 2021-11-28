import React, { useRef } from "react";
import { NotesConsumer } from "../../contexts/notesContext/appContext";

import "../keys/Key.css";

const Key = ({ type, value, octave, id, x, width, height, handleClick }) => {
  let classes = type;

  // const pressed = useContext(NotesContext);
  useRef(() => {
    console.log("rendered" + value + octave);
  }, []);

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
