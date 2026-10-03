import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote({ id: Date.now(), text, timestamp: new Date().toLocaleString() });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
