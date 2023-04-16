import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/users';

import styled from "styled-components";
import Button from "../styles/Button"

const NavBar = ({setLoad}) => {

  //const { user } = useSelector(store => store.usersReducer);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" })
    dispatch(logoutUser());
    setLoad(false)
  }

  return (
    <Wrapper>
      {/* <Logo> Welcome {user.firstName}!</Logo> */}
      <Nav>
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/doctors">Doctors</Button>
        <Button as={Link} to="/my_pets">Pets</Button>
        <Button variant="outline" onClick={handleLogoutClick}>
        Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

// const Logo = styled.h1`
//   font-family: "Permanent Marker";
//   font-size: 3rem;
//   color: #d3a625;
//   margin-top: 10px;
//   line-height: 1;
//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;