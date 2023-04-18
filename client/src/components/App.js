import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
//import Errors from "../styles/Error";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Doctors from "../pages/Doctors";

import { loadUser } from '../actions/users';
//import { loadDoctors } from "../actions/doctors";
import Pets from "../pages/Pets";
import AddPet from "../pages/AddPet";
import AddAppt from "../pages/AddAppt";



const App = () => {  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser())
    //dispatch(loadDoctors())
  }, [dispatch]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/veterinarians" element={<Doctors/>}/>
        <Route path="/my_pets" element={<Pets/>}/>
        <Route path="/add_pet" element={<AddPet/>}/>
        <Route path="/schedule_appt" element={<AddAppt/>}/>
      </Routes>
    </>
  );
}

export default App;
