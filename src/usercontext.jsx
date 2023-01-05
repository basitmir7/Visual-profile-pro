import React, { createContext, useState, useEffect } from "react";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const changeUser = (value) => {
    setUser(value);
  };

  function fetchData() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setData(res.users))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{ user, setUser, data, setData, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };
