import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import styled from "styled-components";
import { 
    ProfileBodyTitle,
    ProfileBodyWrapper,
    ProfileTextBody,
    ProfileTextWrapper, 
    ProfileUpdate, 
    ProfileWrapper 
} from "../styles/Profile";
import Button from "../styles/Button";

const PetProfile = () => {
    const id  = parseInt(useParams().id);
    const {pets} = useSelector(store => store.usersReducer)
    const navigate = useNavigate();

    const pet = pets.find(pet => pet.id === id)

    const petAppt = pet.appointments?.map(appt => <ProfileTextBody key={appt.id}>{appt.date_format} with {appt.doctor.name}</ProfileTextBody>)
    
    return(
        <Wrapper>
            <Logo>{pet.name}</Logo>
            <ProfileWrapper>
                <ProfileTextWrapper>{pet.petType} <br/> {pet.age} years old</ProfileTextWrapper>
                <ProfileBodyWrapper>
                    <ProfileBodyTitle>List of Appointments</ProfileBodyTitle>
                    { pet.appointments?.length > 0 ? petAppt : <ProfileTextBody>No Appointments Scheduled</ProfileTextBody> }
                </ProfileBodyWrapper>
                <ProfileUpdate>
                <Button variant="outline" onClick={() => navigate(`/pets/${ id }/edit`)}>Edit Profile</Button>
                </ProfileUpdate>
            </ProfileWrapper>
        </Wrapper>
    )

}

const Wrapper = styled.section`
  max-width: 700px;
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

export default PetProfile;