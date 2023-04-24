import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Doctors from "../pages/Doctors";

import { loadUser } from "../actions/users";
import Pets from "../pages/Pets";
import AddPet from "../pages/AddPet";
import AddAppt from "../pages/AddAppt";
import PetProfile from "../pages/PetProfile";
import EditPet from "../pages/EditPet";
import Error from "./Error";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(setLoading));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Error />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login loading={loading}/>} />
          <Route path="/veterinarians" element={<Doctors />} />
          <Route path="/my_pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetProfile/>}/>
          <Route path="/pets/:id/edit" element={<EditPet loading={loading}/>} />
          <Route path="/add_pet" element={<AddPet loading={loading}/>} />
          <Route path="/schedule_appt" element={<AddAppt loading={loading}/>} />
        </Routes>
      )}
    </>
  );
};

export default App;
