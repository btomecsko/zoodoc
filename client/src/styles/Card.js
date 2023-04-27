import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "text" "body" "open";
  border: 3px double #CD7F32;
  border-radius: 18px;
  background: #5D3FD3;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 100px 100px;
  grid-template-areas: "image" "text" "links";
  border-radius: 60px;
  background: #5D3FD3;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  background-size: 300px 210px;
  width: 300px;
  height: 210px;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardBodyWrapper = styled.div`
  grid-area: body;
  margin: 25px;
`;

export const CardTextTitle = styled.h2`
  font-size: 1.25rem;
  box-sizing: border-box;
  min-width: 0px;
  color: white;
`;

export const CardTextBody = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

export const CardLinkWrapper = styled.div`
  grid-area: links;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  background: #0e1a40;
`;

export const CardLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;