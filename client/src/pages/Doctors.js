import styled from "styled-components";
import DoctorCard from "../components/DoctorCard";

import { useSelector } from "react-redux";

const Doctors = () => {
  const {doctors} = useSelector((store) => store.doctorsReducer);
  const {user} = useSelector((store) => store.usersReducer);

  console.log(doctors)

  
  const loggedInDocs = () => {
    const doctorCard = doctors?.map((doc, idx) => <DoctorCard key={idx} doctors={doc}/>)

    return (
      <>
      <Logo>Veterinarians</Logo>
      <CardContainer>
        { doctorCard }
      </CardContainer>
      </>
    )
  }

  const loggedOutDocs = () => {
    return (
      <>
      <Logo>Our Veterinarians</Logo>
      <CardContainer>
        <h1>GENERAL INFO</h1>
      </CardContainer>
      </>
    )
  }

  return (
    <Wrapper>
      {user ? loggedInDocs() : loggedOutDocs()}
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

export default Doctors;