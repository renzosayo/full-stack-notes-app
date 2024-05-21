import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Note } from "../../utils/types";
import { NoteContext } from "./App";
import UtilityBar from "./UtilityBar";

export default function NoteView({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
  const { title, setTitle, body, setBody } = useContext(NoteContext);

  const { note }: { note: Note } = useLocation().state;
  useEffect(() => {
    if (note) {
      setTitle(String(note.title));
      setBody(String(note.body));
    }
  }, []);
  return (
    <>
      <UtilityBar children={utilityBarChildren} />
      <div className="note-view main front">
        <input
          className="note-view__title note-input shadow"
          type="text"
          name="title"
          id="title"
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="note-view__body note-input shadow"
          name="body"
          id="body"
          placeholder="Remember, remember..."
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
      </div>
    </>
  );
}
