import { useNotesDispatch } from "../contexts/notesContext/notesContex";

export default function PressNote(id) {
  const dispatch = useNotesDispatch();
  dispatch({
    type: "pressed",
    value: id,
  });
}
