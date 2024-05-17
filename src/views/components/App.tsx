import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMain from "./NoteMain";
import NoteCreate from "./NoteCreate";
import NotFound from "./NotFound";
import UtilityBar from "./UtilityBar";
import Button from "./Button";
import { handleSaveNewNote } from "../../utils/handleEvent";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { createContext } from "react";
import NoteView from "./NoteView";

export const NoteContext = createContext(
  {} as {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    body: string;
    setBody: React.Dispatch<React.SetStateAction<string>>;
  }
);

// hash router doesn't ruin routing on page refresh
const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <UtilityBar
          children={
            <Button
              props={{
                symbol: "📝",
                text: "New note",
                destination: "/note/create",
              }}
            />
          }
        />
        <NoteMain />
      </>
    ),
    index: true,
  },
  {
    path: "/note/create",
    element: (
      <>
        <UtilityBar
          children={
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
          }
        />
        <NoteCreate />
      </>
    ),
  },
  {
    path: "/note/view",
    element: (
      <>
        <UtilityBar
          children={
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
                  symbol: "💾",
                  text: "Save changes",
                  destination: "/",
                  handleClick: handleSaveNewNote,
                }}
              />
            </>
          }
        />
        <NoteView />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <UtilityBar
          children={
            <Button
              props={{
                symbol: "⬅️",
                text: "Go back",
                destination: "/",
              }}
            />
          }
        />
        <NotFound />
      </>
    ),
  },
]);

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="container">
      <Header />
      <NoteContext.Provider value={{ title, setTitle, body, setBody }}>
        <RouterProvider router={router} />
      </NoteContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
