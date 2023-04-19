import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../styles/Button"

import PetCard from "../components/PetCard";

const Pets = () => {
  const {user} = useSelector(store => store.usersReducer)
  console.log(user)

  const petCards = user.pets?.map(pet => <PetCard key={pet.id} pet={ pet }/>)

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
  max-width: 1000px;
  margin: 40px auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #740001;
  border-color: #d3a625;
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
