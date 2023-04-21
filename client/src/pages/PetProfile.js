import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";
import { 
    ProfileBodyTitle,
    ProfileBodyWrapper,
    ProfileTextBody,
    ProfileTextWrapper, 
    ProfileUpdate, 
    ProfileWrapper 
} from "../styles/Profile";
import { useEffect } from "react";
import { updatePet, loadPet } from "../actions/pets";
import Button from "../styles/Button";

const PetProfile = () => {
    const id  = parseInt(useParams().id);
    const {pets} = useSelector(store => store.petsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPet(id))
      }, [dispatch, id]);

      const handleUpdatePet = () => {
        dispatch(updatePet(id))
      }
    const petAppt = pets.appointments?.map(appt => <ProfileTextBody key={appt.id}>{appt.date_format}</ProfileTextBody>)

    console.log(petAppt)
    
    return(
        <Wrapper>
            <Logo>{pets.name}</Logo>
            <ProfileWrapper>
                <ProfileTextWrapper>{pets.petType} <br/> {pets.age} years old</ProfileTextWrapper>
                <ProfileBodyWrapper>
                    <ProfileBodyTitle>List of Appointments</ProfileBodyTitle>
                    { pets.appointments?.length > 0 ? petAppt : <ProfileTextBody>No Appointments Scheduled</ProfileTextBody> }
                </ProfileBodyWrapper>
                <ProfileUpdate>
                <Button variant="outline" onClick={handleUpdatePet}>Update Profile</Button>
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