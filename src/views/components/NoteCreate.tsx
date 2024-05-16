import React, { createContext, useContext } from "react";
import { NoteContext } from "./App";

export default function NoteCreate() {
  const { title, setTitle, body, setBody } = useContext(NoteContext);

  return (
    <div className="note-create main">
      <input
        className="note-create__title"
        type="text"
        name="title"
        id="title"
        placeholder="Enter title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="note-create__body"
        name="body"
        id="body"
        placeholder="Remember, remember..."
        onChange={(e) => setBody(e.target.value)}
        value={body}
      ></textarea>
    </div>
  );
}
