import React, { useContext, useEffect } from "react";
import { NoteContext } from "./App";
import UtilityBar from "./UtilityBar";

export default function NoteCreate({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
  const { title, setTitle, body, setBody } = useContext(NoteContext);

  useEffect(() => {
    setTitle("");
    setBody("");
  }, []);

  return (
    <>
      <UtilityBar children={utilityBarChildren} />
      <div className="note-create main front">
        <input
          className="note-create__title note-input shadow"
          type="text"
          name="title"
          id="title"
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="note-create__body note-input shadow"
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
