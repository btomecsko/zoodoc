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
  
  const DoctorCard = ({ doctors }) => {

    return (
      <Separator>
        <CardWrapper>
          <CardTextWrapper>
            <CardTextTitle>{ doctors.name }</CardTextTitle>
          </CardTextWrapper>
          <CardBodyWrapper>
            <CardTextBody>
              {doctors.specialty}
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
  
  export default DoctorCard;