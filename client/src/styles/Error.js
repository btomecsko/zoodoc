import styled from "styled-components";
import { useSelector } from 'react-redux';

const Error = () => {
  const errors = useSelector(store => store.errorsReducer)
  const errorMessage = errors.map((error, idx) => <Message key={idx}>{ error }</Message>)
  return (
    <Wrapper>
        { errorMessage }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: red;
  // background-color: mistyrose;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;