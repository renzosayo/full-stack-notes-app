import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMain from "./NoteMain";
import NoteCreate from "./NoteCreate";
import NotFound from "./NotFound";
import { RouterProvider, createHashRouter } from "react-router-dom";
// hash router doesn't ruin routing on page refresh
const router = createHashRouter([
  {
    path: "/",
    element: <NoteMain />,
    index: true,
  },
  {
    path: "/note/create",
    element: <NoteCreate />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="container">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
