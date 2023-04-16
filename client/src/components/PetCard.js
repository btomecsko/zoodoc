import {
    CardWrapper,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
    CardBodyWrapper,
    // CardOpenWrapper,
    // CardOpen,
    // LinkText
  } from "../styles/Card";
  import styled from "styled-components";
  
  const PetCard = ({ pet }) => {

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
        </CardWrapper>
      </Separator>
    );
  }
  
  const Separator = styled.span`
    margin-left: 10px;
    margin-right: 10px;
  `;
  
  export default PetCard;