import React, { useContext } from "react";
import { Link, LinkProps } from "react-router-dom";
import { NoteContext } from "./App";

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
  const { title, body } = useContext(NoteContext);

  return (
    <Link
      to={destination as LinkProps["to"]}
      className="utility-bar__button center"
      onClick={() => handleClick?.({ title, body })}
    >
      {symbol} {text}
    </Link>
  );
}
