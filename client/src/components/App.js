import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
import Errors from "../styles/Error";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Doctors from "../pages/Doctors";

import { loadUser } from '../actions/users';
import { loadDoctors } from "../actions/doctors";
import Pets from "../pages/Pets";



const App = () => {  
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadDoctors())
  }, [dispatch]);



  return (
    <>
      <NavBar/>
      <Errors />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/my_pets" element={<Pets/>}/>
      </Routes>
    </>
  );
}

export default App;
