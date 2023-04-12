import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Login"
import NavBar from "./NavBar";


const App = () => {
  const [user, setUser] = useState(null);
  const reduxState = useSelector( store => store);
  
  console.log(reduxState)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  
if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={setUser} setUser={user} />
      <main>
        <Routes>
          <Route></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
