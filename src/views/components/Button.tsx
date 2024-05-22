import React, { useContext } from "react";
import { Link, LinkProps } from "react-router-dom";
import { NoteContext } from "./NoteView";

export default function Button({
  props: { symbol, text, destination, handleClick },
}: {
  props: {
    symbol: String;
    text: String;
    destination: String;
    handleClick?: Function;
  };
}) {
  const { selectedNote } = useContext(NoteContext);
  console.log(selectedNote);

  return (
    <Link
      to={destination as LinkProps["to"]}
      className="utility-bar__button center"
      onClick={() => {
        handleClick?.({
          title: selectedNote.title,
          body: selectedNote.body,
          _id: selectedNote._id,
        });
      }}
    >
      {symbol} {text}
    </Link>
  );
}
