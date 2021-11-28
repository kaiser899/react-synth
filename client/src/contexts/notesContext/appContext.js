import { createContext, useReducer } from "react";
import {
  initialNotes,
  notesReducer,
  pressKey,
  dePressKey,
} from "../../services/notesActions";

const NotesContext = createContext(null);

export function NotesProvider({ children }) {
  const [notesList, dispatch] = useReducer(notesReducer, initialNotes);
  const actions = {
    press(id) {
      dispatch(pressKey(id));
    },
    dePress(id) {
      dispatch(dePressKey(id));
    },
  };

  return (
    <NotesContext.Provider value={{ notesList, actions }}>
      {children}
    </NotesContext.Provider>
  );
}

export const NotesConsumer = NotesContext.Consumer;

export default NotesContext;
