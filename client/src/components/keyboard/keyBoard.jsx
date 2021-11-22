import React, { useEffect, useState } from "react";
import * as notes from "../../services/notes";
import keyboardMaps from "../../services/keyMaps";
import Screen from "../screen/screen";
import WhiteKeys from "../keys/whiteKeys.jsx";
import BlackKeys from "../keys/BlackKeys";
import "../keyboard/keyboard.css";

const KeyBoard = () => {
  const [keyValue, setKeyValue] = useState("");

  useEffect(() => {
    document.addEventListener("keypress", keypressHandler);
    return () => document.removeEventListener("keypress", keypressHandler);
  }, []);

  const [allNotes] = useState(notes.default);
  const keypressHandler = (pressedKey) => {
    const result = Object.entries(allNotes).find((key) => {
      if (allNotes[key[0]].keyboardKey === pressedKey.key) return key[0];
    });
    if (result) {
      setKeyValue(result[0]);
    }

    // if (Object.keys) console.log(keyboardMaps[pressedKey.key]);
    // setKeyValue(allNotes[pressedKey.key]);
    // setKeyValue(key);
  };
  const [octaveMultiplier, setOctaveMultiplier] = useState(1);

  function buildWhiteKeysArray() {
    let allNotesKeys = Object.keys(allNotes);
    const regex = /([A-Z]#)/g;
    return allNotesKeys.filter((element) => element.match(regex) === null);
  }
  function buildBlackKeysArray() {
    let allNotesKeys = Object.keys(allNotes);
    const regex = /([A-Z]#)/g;
    return allNotesKeys.filter((element) => element.match(regex));
  }

  const produceSound = (key) => {
    setKeyValue(key);
  };

  return (
    <div>
      <Screen keyValue={keyValue} />
      <svg width="100%" viewBox="0 0 1120 400">
        <title>Piano Keyboard</title>
        <defs></defs>
        <g id="piano-keyboard">
          <WhiteKeys
            allNotes={buildWhiteKeysArray()}
            produceSound={produceSound}
          />
          <BlackKeys
            allNotes={buildBlackKeysArray()}
            produceSound={produceSound}
          />
        </g>
      </svg>
    </div>
  );
};

export default KeyBoard;
