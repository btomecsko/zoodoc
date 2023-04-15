import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
import Pets from "../pages/Pets";
//import NavBar from "./NavBar";

import { loadUser } from '../actions/users';


const App = () => {
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadUser(setLoad))
  }, [dispatch]);

  if (!load) return <Login setLoad={setLoad}/>

  return (
    <>
        <Routes>
          <Route path="/" element={<Pets />}/>
        </Routes>
    </>
  );
}

export default App;
