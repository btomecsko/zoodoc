import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../pages/Login"
//import NavBar from "./NavBar";

import { loadUser } from '../actions/users';


const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //const [user, setUser] = useState(null);
  //const reduxState = useSelector( store => store);
  


  useEffect(() => {
    dispatch(loadUser(setLoading))
  }, [dispatch])


  
//if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        <Routes>
          <Route path="/" element={ <Login loading={ loading}/>}/>
        </Routes>
      }
    </>
  );
}

export default App;
