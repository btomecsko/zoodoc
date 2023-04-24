import { useDispatch } from 'react-redux';

import {
    PhotoWrapper,
    CardImage,
    CardTextWrapper,
    CardTextTitle,
    CardLink,
    CardLinkWrapper
  } from "../styles/Card";
  import Button from "../styles/Button"
  import styled from "styled-components";
import { Link } from "react-router-dom";
import { deletePet } from "../actions/pets";
  
const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  
  const handleDeletePet = () => {
    dispatch(deletePet(pet.id));
  }

    return (
      <Separator>
        <PhotoWrapper>
          <CardImage background={pet.image}/>
          <CardTextWrapper>
            <CardTextTitle>{ pet.name }</CardTextTitle>
          </CardTextWrapper>
           <CardLinkWrapper>
                <CardLink>
                <Button variant="outline" as={Link} to={`/pets/${ pet.id }`}>View Profile</Button>
                </CardLink>
                <CardLink>
                <Button variant="outline" onClick={handleDeletePet}>Remove Pet</Button>
                </CardLink>
            </CardLinkWrapper>
        </PhotoWrapper>
      </Separator>
    );
  }
  
  const Separator = styled.span`
    margin-left: 10px;
    margin-right: 10px;
  `;
  
  export default PetCard;