import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;