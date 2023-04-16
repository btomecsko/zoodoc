import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Doctors from "../pages/Doctors";

import { loadUser } from '../actions/users';
import { loadDoctors } from "../actions/doctors";
import Pets from "../pages/Pets";



const App = () => {
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadUser(setLoad))
    dispatch(loadDoctors())
  }, [dispatch]);

  if (!load) return <Login setLoad={setLoad}/>

  return (
    <>
      <NavBar setLoad={setLoad}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/my_pets" element={<Pets/>}/>
      </Routes>
    </>
  );
}

export default App;
