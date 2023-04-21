import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/users';

import styled from "styled-components";
import Button from "../styles/Button"

const NavBar = () => {
  const { user } = useSelector((store) => store.usersReducer);
  
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" })
    dispatch(logoutUser());
  }

  const loggedInNav = () => {
    return (
      <>
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/my_pets">My Pets</Button>
        <Button as={Link} to="/veterinarians">Veterinarians</Button>
        <Button as={Link} to="/schedule_appt">Schedule</Button>
        <Button variant="outline" as={Link} to="/" onClick={handleLogoutClick}>
          Logout
        </Button>
      </>
    )
  }

  const loggedOut = () => {
    return (
      <>
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/login">Login</Button>
      </>
    )
  }

  return (
    <Wrapper>
      <Nav>
      { user ? loggedInNav() : loggedOut() }
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: left;
  padding: 8px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 10px;
`;

export default NavBar;