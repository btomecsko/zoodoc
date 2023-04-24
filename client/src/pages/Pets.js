import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../styles/Button"

import PetCard from "../components/PetCard";
import { useEffect } from "react";
import { loadUser } from "../actions/users";

const Pets = () => {
  const {pets} = useSelector(store => store.usersReducer)

  const dispatch = useDispatch();

  const petCards = pets.map(pet => <PetCard key={pet.id} pet={ pet }/>)
  
  useEffect(() => {
    // dispatch the loadUser action when the component mounts or updates
    dispatch(loadUser());
  }, [dispatch]);
  
  return (
    <Wrapper>
      <Logo>My Pet Family</Logo>
      <Button as={Link} to="/add_pet">Add New Pet</Button>
      <CardContainer>
        {petCards}
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 80%;
  margin: 40px auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #CD7F32;
  margin: 8px 0 16px;
  text-align: center;
`;

const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: auto;
`;

export default Pets;
