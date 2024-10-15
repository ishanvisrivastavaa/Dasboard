import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Message from "./pages/Message";
import Project from "./pages/Project";
import Clients from "./pages/Clients";
import Worksplan from "./pages/Worksplan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "members", element: <Members /> },
      { path: "messages", element: <Message /> },
      { path: "projects", element: <Project /> },
      { path: "clients", element: <Clients /> },
      { path: "works", element: <Worksplan /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
