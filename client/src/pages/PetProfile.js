import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";
import Profile from "../styles/Profile";
import { useEffect } from "react";
import { loadPet } from "../actions/pets";

const PetProfile = () => {
    const id  = parseInt(useParams().id);
    const {pets} = useSelector(store => store.petsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPet(id))
      }, [dispatch, id]);

    const petAppt = pets.appointments?.map(appt => <li key={appt.id}>{appt.date_format}</li>)
    
    return(
        <Wrapper>
            <Logo>{pets.name}</Logo>
            <Profile>
                <ul>
                    {petAppt}
                </ul>
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