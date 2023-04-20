//import { useDispatch } from 'react-redux';

import {
    CardWrapper,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
    CardBodyWrapper,
    CardLink,
    // CardOpenWrapper,
    // CardOpen,
    // LinkText
  } from "../styles/Card";
  import Button from "../styles/Button"
  import styled from "styled-components";
import { Link } from "react-router-dom";
//import { deletePet } from "../actions/pets";
  
const PetCard = ({ pet }) => {

  //const dispatch = useDispatch()
  
  // const handleDeletePet = () => {
  //   dispatch(deletePet(pet.id))
  // }


    return (
      <Separator>
        <CardWrapper>
          <CardTextWrapper>
            <CardTextTitle>{ pet.name }</CardTextTitle>
          </CardTextWrapper>
          <CardBodyWrapper>
            <CardTextBody>
              {pet.petType}
            </CardTextBody>
          </CardBodyWrapper>
          {/* <CardOpenWrapper>
            <CardOpen>
              <LinkText onClick={handleOpenBook}>Aberto</LinkText>
            </CardOpen>
          </CardOpenWrapper> */}
           <CardLink>
                <Button variant="outline" as={Link} to={`/pets/${ pet.name }`}>View Profile</Button>
            </CardLink>
        </CardWrapper>
      </Separator>
    );
  }
  
  const Separator = styled.span`
    margin-left: 10px;
    margin-right: 10px;
  `;
  
  export default PetCard;