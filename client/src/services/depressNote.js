import { useNotesDispatch } from "../contexts/notesContext/notesContex";

export default function DepressNote(id) {
  const dispatch = useNotesDispatch();
  dispatch({
    type: "depressed",
    value: id,
  });
}
