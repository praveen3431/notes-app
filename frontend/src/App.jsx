import { useEffect, useState } from "react";
import API from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/");
    setNotes(res.data);
  };

  const addNote = async (note) => {
    await API.post("/", note);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;