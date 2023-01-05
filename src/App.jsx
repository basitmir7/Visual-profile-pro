import { useState, useEffect } from "react";
import "./App.css";
import Users from "./views/Users";
import Profile from "./views/profile";
import { UserContextProvider } from "./usercontext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App box-border ">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/profile/*" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
