import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"

const NavBar = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo> Welcome {user.first}!</Logo>
      <Nav>
        {/* <Button as={Link} to="/">Library</Button>
        <Button as={Link} to="/new"> Conjure a Book</Button> */}
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

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #d3a625;
  margin-top: 10px;
  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;