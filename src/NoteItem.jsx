import React from "react";

function NoteItem({ note, deleteNote }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <small>{note.timestamp}</small>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
