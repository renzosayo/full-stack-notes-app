import React from "react";
import Button from "../views/components/Button";
import {
  handleClickDeleteNote,
  handleClickUpdateNote,
  handleSaveNewNote,
} from "./handleEvent";

export const utilityBarButtons = {
  mainPage: (
    <Button
      props={{
        symbol: "📝",
        text: "New note",
        destination: "/note/create",
      }}
    />
  ),
  newNotePage: (
    <>
      <Button
        props={{
          symbol: "❌",
          text: "Discard note and go back",
          destination: "/",
        }}
      />
      <Button
        props={{
          symbol: "💾",
          text: "Save note",
          destination: "/",
          handleClick: handleSaveNewNote,
        }}
      />
    </>
  ),
  viewNotePage: (
    <>
      <Button
        props={{
          symbol: "❌",
          text: "Discard changes and go back",
          destination: "/",
        }}
      />
      <Button
        props={{
          symbol: "🗑️",
          text: "Delete Note",
          destination: "/",
          handleClick: handleClickDeleteNote,
        }}
      />
      <Button
        props={{
          symbol: "💾",
          text: "Save changes",
          destination: "/",
          handleClick: handleClickUpdateNote,
        }}
      />
    </>
  ),
  errorPage: (
    <Button
      props={{
        symbol: "⬅️",
        text: "Go back",
        destination: "/",
      }}
    />
  ),
};
