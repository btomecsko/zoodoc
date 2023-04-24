import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
//import Errors from "../styles/Error";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Doctors from "../pages/Doctors";

import { loadUser } from '../actions/users';
import Pets from "../pages/Pets";
import AddPet from "../pages/AddPet";
import AddAppt from "../pages/AddAppt";
import PetProfile from "../pages/PetProfile";
import EditPet from "../pages/EditPet";



const App = () => {  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/veterinarians" element={<Doctors/>}/>
        <Route path="/my_pets" element={<Pets/>}/>
        <Route path="/pets/:id" element={ <PetProfile /> } />
        <Route path="/pets/:id/edit" element={ <EditPet /> } />
        <Route path="/add_pet" element={<AddPet/>}/>
        <Route path="/schedule_appt" element={<AddAppt/>}/>
      </Routes>
    </>
  );
}

export default App;
