import styled from "styled-components";
import { useSelector } from 'react-redux';

const Error = ({ children }) => {
  const errors = useSelector(store => store.errorsReducer)
  const errorMessage = errors.map((error, idx) => <Message key={idx}>{ error }</Message>)
  return (
    <Wrapper>
      <Alert>!</Alert>
        { errorMessage }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: red;
  background-color: mistyrose;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const Alert = styled.span`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;