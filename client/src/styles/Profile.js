import styled from "styled-components";

export const ProfileWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  border: solid black;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 50px 210px 80px;
  grid-template-areas: "text" "body" "update";
  text-align: center;
`;

export const ProfileTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const ProfileBodyWrapper = styled.div`
  grid-area: body;
  margin: 25px;
`;

export const ProfileBodyTitle = styled.h2`
  margin-top: 30px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  color: black;
`;

export const ProfileTextBody = styled.p`
  color: #372e29;
  font-size: 15px;
  font-weight: 300;
`;

export const ProfileUpdate = styled.div`
  grid-area: update;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
`;