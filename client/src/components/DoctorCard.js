import {
  PhotoWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle
  } from "../styles/Card";
  import styled from "styled-components";
  
  const DoctorCard = ({ doctors }) => {

    return (
      <Separator>
        <PhotoWrapper>
        <CardImage background={doctors.image}/>
          <CardTextWrapper>
            <CardTextTitle>{ doctors.name }</CardTextTitle>
            <CardTextTitle>{ doctors.specialty }</CardTextTitle>
          </CardTextWrapper>
        </PhotoWrapper>
      </Separator>
    );
  }
  
  const Separator = styled.span`
    margin-left: 10px;
    margin-right: 10px;
  `;
  
  export default DoctorCard;