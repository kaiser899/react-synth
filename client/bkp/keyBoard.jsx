import React, { useEffect, useState } from "react";
import * as Tone from "tone";

import * as notes from "../../services/notes";
import Screen from "../screen/screen";
import KeyDesign from '../keys/KeyDesign'
import WhiteKeys from "../keys/whiteKeys.jsx";
import BlackKeys from "../keys/BlackKeys";
import "../keyboard/keyboard.css";

const KeyBoard = () => {
  const [keyValue, setKeyValue] = useState("");
  const [allNotes] = useState(notes.default);
  const [octaveStepper, setoctaveStepper] = useState(4);

  useEffect(() => {
    document.addEventListener("keydown", keypressHandler);
    return () => document.removeEventListener("keydown", keypressHandler);
  }, []);

  const synth = new Tone.Synth().toDestination();

  const keypressHandler = (pressedKey) => {
    const result = allNotes.find((note) => {
      if (note.keyboardKey === pressedKey.key) return note;
    });
    if (result) {
      produceSound(result.noteName,result.octave);
    }
  };
  

  function buildWhiteKeysArray() {
    const regex = /([A-Z]#)/g;
    return allNotes.filter((element) => element.match(regex) === null);
  }

  function buildBlackKeysArray() {
    let allNotesKeys = Object.keys(allNotes);
    const regex = /([A-Z]#)/g;
    return allNotesKeys.filter((element) => element.match(regex));
  }

  const produceSound = (note, octave) => {
    setKeyValue(note);
    let finalOctave = octave + octaveStepper;
    synth.triggerAttackRelease(note + finalOctave, "32n");
    setTimeout(() => {
      setKeyValue("");
    }, 200);
  };

  return (
    <div>
      <Screen keyValue={keyValue} />
      <svg width="100%" viewBox="0 0 1120 400">
        
        <defs></defs>
        {buildWhiteKeysArray().map((key,index)=>{
          <KeyDesign keyClass = {"white-key"} keyIndex = {index} produceSound={produceSound} keyName = {key.noteName} pressed = {key.pressed} keyWidth = {80} />
          
        })}

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
