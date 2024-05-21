import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMain from "./NoteMain";
import NoteCreate from "./NoteCreate";
import NotFound from "./NotFound";
import UtilityBar from "./UtilityBar";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { createContext } from "react";
import NoteView from "./NoteView";
import { utilityBarButtons } from "../../utils/utilityBarButtons";

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
