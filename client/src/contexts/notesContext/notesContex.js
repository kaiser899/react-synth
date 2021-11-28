import { createContext, useContext, useReducer } from "react";
import notes from "../../services/notesActions";

const initialNotes = notes;
const NotesContext = createContext(initialNotes);

const NotesDispatchContext = createContext(null);

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes(id = false) {
  let notesFromContext = useContext(NotesContext);
  if (!id) {
    return notesFromContext;
  } else {
    return notesFromContext[id];
  }
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}

function notesReducer(notes, action) {
  switch (action.type) {
    case "pressed": {
      return notes.map((note, index) => {
        if (index === action.value) {
          return {
            ...note,
            pressed: true,
          };
        } else return note;
      });
    }
    case "depressed": {
      return notes.map((note, index) => {
        if (index === action.value) {
          return {
            ...note,
            pressed: false,
          };
        } else return note;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
