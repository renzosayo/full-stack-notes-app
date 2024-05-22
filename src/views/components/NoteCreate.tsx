import React, { useContext, useEffect } from "react";
import { StateContext } from "./App";
import UtilityBar from "./UtilityBar";
import { NoteContext } from "./NoteView";

export default function NoteCreate({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
  const { note, setNote } = useContext(StateContext);

  useEffect(() => {
    setNote({
      _id: null,
      title: "",
      body: "",
      dateWritten: new Date(),
    });
  }, []);

  return (
    <>
      <NoteContext.Provider value={{ selectedNote: note }}>
        <UtilityBar children={utilityBarChildren} />
      </NoteContext.Provider>

      <div className="note-create main front">
        <input
          className="note-create__title note-input shadow"
          type="text"
          name="title"
          id="title"
          placeholder="Enter title..."
          onChange={(e) => {
            setNote({ ...note, title: e.target.value });
          }}
          value={note.title}
        />
        <textarea
          className="note-create__body note-input shadow"
          name="body"
          id="body"
          placeholder="Remember, remember..."
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          value={note.body}
        ></textarea>
      </div>
    </>
  );
}
