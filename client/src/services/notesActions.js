export const initialNotes = [
  {
    value: "C",
    octaveMod: 0,
    keyCode: 81,
    pressed: "false",
    type: "white-key",
    x: 0,
    width: 80,
    height: 400,
  },
  {
    value: "D",
    octaveMod: 0,
    keyCode: 87,
    pressed: "false",
    type: "white-key",
    x: 80,
    width: 80,
    height: 400,
  },
  {
    value: "E",
    keyCode: 69,
    octaveMod: 0,
    pressed: "false",
    type: "white-key",
    x: 160,
    width: 80,
    height: 400,
  },
  {
    value: "F",
    keyCode: 82,
    octaveMod: 0,
    pressed: "false",
    type: "white-key",
    x: 240,
    width: 80,
    height: 240,
  },
  {
    value: "G",
    keyCode: 84,
    octaveMod: 0,
    pressed: "false",
    type: "white-key",
    x: 320,
    width: 80,
    height: 400,
  },
  {
    value: "A",
    keyCode: 89,
    octaveMod: 0,
    id: "5",
    pressed: "false",
    type: "white-key",
    x: 400,
    width: 80,
    height: 400,
  },
  {
    value: "B",
    keyCode: 85,
    octaveMod: 0,
    pressed: "false",
    type: "white-key",
    x: 480,
    width: 80,
    height: 400,
  },
  {
    value: "C",
    keyCode: 73,
    octaveMod: 1,
    pressed: "false",
    type: "white-key",
    x: 560,
    width: 80,
    height: 400,
  },
  {
    value: "C#",
    keyCode: 50,
    octaveMod: 0,
    pressed: "false",
    type: "black-key",
    x: 60,
    width: 40,
    height: 280,
  },
  {
    value: "D#",
    keyCode: 51,
    octaveMod: 0,
    pressed: "false",
    type: "black-key",
    x: 140,
    width: 40,
    height: 280,
  },
  {
    value: "F#",
    keyCode: 53,
    octaveMod: 0,
    pressed: "false",
    type: "black-key",
    x: 300,
    width: 40,
    height: 280,
  },
  {
    value: "G#",
    keyCode: 54,
    octaveMod: 0,
    id: "11",
    pressed: "false",
    type: "black-key",
    x: 380,
    width: 40,
    height: 280,
  },
  {
    value: "A#",
    keyCode: 55,
    octaveMod: 0,
    pressed: "false",
    type: "black-key",
    x: 460,
    width: 40,
    height: 280,
  },
];

const PRESS = "PRESS";
const DEPRESS = "DEPRESS";

export function notesReducer(notes, action) {
  switch (action.type) {
    case PRESS: {
      return notes.map((note, index) => {
        if (index === action.value) {
          return {
            ...note,
            pressed: true,
          };
        } else return note;
      });
    }
    case DEPRESS: {
      return notes.map((note, index) => {
        if (index === action.value) {
          return {
            ...note,
            pressed: false,
          };
        } else return note;
      });
    }
    default:
      return notes;
  }
}

export function pressKey(id) {
  return {
    type: PRESS,
    value: id,
  };
}

export function dePressKey(id) {
  return {
    type: DEPRESS,
    value: id,
  };
}
