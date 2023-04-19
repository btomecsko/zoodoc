import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadDoctors } from "../actions/doctors";

import styled from "styled-components";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  //const {user} = useSelector((store) => store.usersReducer);
  const {doctors} = useSelector((store) => store.doctorsReducer);
  const dispatch = useDispatch();
  
  console.log(doctors)

  useEffect(() => {
    dispatch(loadDoctors())
  }, [dispatch]);

  const doctorCard = doctors?.map((doc, idx) => <DoctorCard key={idx} doctors={doc}/>)
  
  // const loggedInDocs = () => {
  //   const doctorCard = doctors?.map((doc, idx) => <DoctorCard key={idx} doctors={doc}/>)

  //   return (
  //     <>
  //     <Logo>Veterinarians</Logo>
  //     <CardContainer>
  //       { doctorCard }
  //     </CardContainer>
  //     </>
  //   )
  // }

  // const loggedOutDocs = () => {
  //   return (
  //     <>
  //     <Logo>Our Veterinarians</Logo>
  //     <CardContainer>
  //       <h1>GENERAL INFO</h1>
  //     </CardContainer>
  //     </>
  //   )
  // }

  return (
    <Wrapper>
      <Logo>Veterinarians</Logo>
      <CardContainer>
        { doctorCard }
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
  color: #5D3FD3;
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