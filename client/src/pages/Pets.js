import styled from "styled-components";
//import PetCard from "../components/PetCard";

//import { useSelector } from "react-redux";

const Pets = () => {
  //const pets = useSelector((store) => store.petsReducer);

  return (
    <Wrapper>
      <Logo>Library</Logo>
      <CardContainer>
        {}
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
