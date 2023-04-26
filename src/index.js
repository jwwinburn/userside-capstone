import { createRoot } from "react-dom/client"
import  App  from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)



// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Login } from "./Components/Login/Login";
// import { NavBar } from "./Components/NavBar/NavBar";
// import { NewPlayerForm } from "./Components/NewPlayerForm/NewPlayerForm";
// import { Teams } from "./Components/NewPlayerForm/Teams";

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <NavBar />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/addplayer",
//     element: <NewPlayerForm />,
//   },
//   {
//     path: "/teams",
//     element: <Teams />,
//   },
// ]);



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={route} />
//   </React.StrictMode>
// );
