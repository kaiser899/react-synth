import React, { useEffect, useReducer } from "react";
import Key from "../keys/Key";
import keyMaps from "../../services/keyMaps";
import notes from "../../services/notes";

const KeyBoard = ({ octave, startSound, stopSound }) => {
  const _INITIAL_PRESSED = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "pressed":
        return { ...state, [action.value]: true };
      case "depressed":
        return { ...state, [action.value]: false };
      default:
        throw new Error("Something went Wrong");
    }
  };

  useEffect(() => {
    console.log(keyMaps);
    document.addEventListener("keydown", keypressHandler);
    document.addEventListener("keyup", keyDepressHandler);
    console.log("render");
    return () => {
      document.removeEventListener("keydown", keypressHandler);
      document.removeEventListener("keyup", keyDepressHandler);
    };
  }, []);

  const keypressHandler = (pressedKey) => {
    if (pressedKey.repeat) return;
    let keyCode = pressedKey.keyCode;
    console.log(keyCode);
    if (keyMaps.includes(keyCode)) {
      console.log(notes[keyCode].value);
      let outputNote =
        notes[keyCode].value + (octave + notes[keyCode].octaveMod);
      startSound(outputNote);
      dispatch({ type: "pressed", value: notes[keyCode].id });
    }
  };
  const keyDepressHandler = (pressedKey) => {
    let keyCode = pressedKey.keyCode;
    console.log(keyCode);
    if (keyMaps.includes(keyCode)) {
      let outputNote =
        notes[keyCode].value + (octave + notes[keyCode].octaveMod);
      stopSound(outputNote);
      dispatch({ type: "depressed", value: notes[keyCode].id });
    }
  };

  const [pressedState, dispatch] = useReducer(reducer, _INITIAL_PRESSED);

  const handleClick = (note, id) => {
    console.log("clicked");
    startSound(note);
    dispatch({ type: "pressed", value: id });
    setTimeout(() => {
      dispatch({ type: "depressed", value: id });
      stopSound("final");
    }, 500);
  };

  return (
    <div>
      <svg width="100%" viewBox="0 0 1120 400">
        <title>Piano Keyboard</title>
        <Key
          type={"white-key"}
          value={"C"}
          octave={octave}
          id={0}
          x={0}
          width={80}
          height={400}
          pressed={pressedState[0]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"D"}
          octave={octave}
          id={1}
          x={80}
          width={80}
          height={400}
          pressed={pressedState[1]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"E"}
          octave={octave}
          id={2}
          x={160}
          width={80}
          height={400}
          pressed={pressedState[2]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"F"}
          octave={octave}
          id={3}
          x={240}
          width={80}
          height={400}
          pressed={pressedState[3]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"G"}
          octave={octave}
          id={4}
          x={320}
          width={80}
          height={400}
          pressed={pressedState[4]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"A"}
          octave={octave}
          id={5}
          x={400}
          width={80}
          height={400}
          pressed={pressedState[5]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"B"}
          octave={octave}
          id={6}
          x={480}
          width={80}
          height={400}
          pressed={pressedState[6]}
          handleClick={handleClick}
        />
        <Key
          type={"white-key"}
          value={"C"}
          octave={octave + 1}
          id={7}
          x={560}
          width={80}
          height={400}
          pressed={pressedState[7]}
          handleClick={handleClick}
        />
        <Key
          type={"black-key"}
          value={"C#"}
          octave={octave}
          id={8}
          x={60}
          width={40}
          height={280}
          pressed={pressedState[8]}
          handleClick={handleClick}
        />
        <Key
          type={"black-key"}
          value={"D#"}
          octave={octave}
          id={9}
          x={140}
          width={40}
          height={280}
          pressed={pressedState[9]}
          handleClick={handleClick}
        />
        <Key
          type={"black-key"}
          value={"F#"}
          octave={octave}
          id={10}
          x={300}
          width={40}
          height={280}
          pressed={pressedState[10]}
          handleClick={handleClick}
        />
        <Key
          type={"black-key"}
          value={"G#"}
          octave={octave}
          id={11}
          x={380}
          width={40}
          height={280}
          pressed={pressedState[11]}
          handleClick={handleClick}
        />
        <Key
          type={"black-key"}
          value={"A#"}
          octave={octave}
          id={12}
          x={460}
          width={40}
          height={280}
          pressed={pressedState[12]}
          handleClick={handleClick}
        />
      </svg>
    </div>
  );
};

export default KeyBoard;
