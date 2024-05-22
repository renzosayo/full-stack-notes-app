import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMain from "./NoteMain";
import NoteCreate from "./NoteCreate";
import NotFound from "./NotFound";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { createContext } from "react";
import NoteView from "./NoteView";
import { utilityBarButtons } from "../../utils/utilityBarButtons";
import { Note } from "../../utils/types";

export const StateContext = createContext(
  {} as {
    note: Note;
    setNote: React.Dispatch<React.SetStateAction<Note>>;
  }
);

// hash router doesn't ruin routing on page refresh
const router = createHashRouter([
  {
    path: "/",
    element: <NoteMain utilityBarChildren={utilityBarButtons["mainPage"]} />,
    index: true,
  },
  {
    path: "/note/create",
    element: (
      <NoteCreate utilityBarChildren={utilityBarButtons["newNotePage"]} />
    ),
  },
  {
    path: "/note/view",
    element: (
      <NoteView utilityBarChildren={utilityBarButtons["viewNotePage"]} />
    ),
  },
  {
    path: "*",
    element: <NotFound utilityBarChildren={utilityBarButtons["errorPage"]} />,
  },
]);

function App() {
  // title and body initialized to prevent "uncontrolled input" error
  const [note, setNote] = useState<Note>({ title: "", body: "" } as Note);

  return (
    <div className="container">
      <Header />
      <StateContext.Provider value={{ note, setNote }}>
        <RouterProvider router={router} />
      </StateContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
