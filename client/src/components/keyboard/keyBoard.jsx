import React, { useEffect, useContext, NotesContext } from "react";
import Key from "../keys/Key";
import Screen from "../screen/screen";
import keyMaps from "../../services/keyMaps";
import { NotesConsumer } from "../../contexts/notesContext/appContext";

const KeyBoard = ({ notes, octave, startSound, stopSound }) => {
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

  const keypressHandler = () => {};
  const keyDepressHandler = () => {};

  return (
    <NotesConsumer>
      {({ notesList, actions: { press, dePress } }) => {
        const handleClick = (note, id) => {
          startSound(note);
          press(id);
          setTimeout(() => {
            stopSound(note);
            dePress(id);
          }, 500);
        };
        <div>
          <svg width="100%" viewBox="0 0 1120 400">
            <title>Piano Keyboard</title>
            {console.log(notesList)}
            {notesList.map((note, index) => {
              console.log(note.value);
              return (
                <Key
                  key={index}
                  type={note.type}
                  value={note.value}
                  octave={octave}
                  id={index}
                  x={note.x}
                  width={note.width}
                  height={note.height}
                  handleClick={handleClick}
                />
              );
            })}

            <Screen />
            <Key />
          </svg>
        </div>;
      }}
    </NotesConsumer>
  );
};

export default KeyBoard;
