import { useState, useEffect } from "react";
import "./App.css";
import Users from "./views/Users";
import Profile from "./views/profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  function fetchData() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setData(res.users));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App box-border ">
        <Routes>
          <Route path="/" element={<Users data={data} />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
