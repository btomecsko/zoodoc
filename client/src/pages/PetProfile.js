import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";
import Profile from "../styles/Profile";
import { useEffect } from "react";
import { deletePet, loadPet } from "../actions/pets";
import Button from "../styles/Button";

const PetProfile = () => {
    const id  = parseInt(useParams().id);
    const {pets} = useSelector(store => store.petsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPet(id))
      }, [dispatch, id]);

      const handleDeletePet = () => {
        dispatch(deletePet(id))
      }
    const petAppt = pets.appointments?.map(appt => <li key={appt.id}>{appt.date_format}</li>)
    
    return(
        <Wrapper>
            <Logo>{pets.name}</Logo>
            <Profile>
                <ul>
                    <li>{pets.petType}</li>
                    <li>{pets.age} years old</li>
                    {petAppt}
                </ul>
                <Button variant="outline" onClick={handleDeletePet}>Remove Pet</Button>
            </Profile>
        </Wrapper>
    )

}

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

export default PetProfile;