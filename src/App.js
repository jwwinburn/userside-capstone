import "./App.css";
import { Route, Routes } from "react-router-dom/";
import { Login } from "./Components/Login/Login";
import React from "react";
import { Authorized } from "./Components/Login/Authorized";
import { ApplicationViews } from "./ApplicationsViews";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
}

export default App;
