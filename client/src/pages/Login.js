import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Button from "../styles/Button";

const Login = ({loading}) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <Logo>ZooDoc</Logo>
      {showLogin ? (
        <>
          <LoginForm loading={loading}/> 
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm loading={loading}/>
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #5D3FD3;
  text-shadow: 2px 2px #CD7F32;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 400px;
  margin: 100px auto;
  padding: 16px;
  border: double #CD7F32;
  border-radius: 5px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #CD7F32;
  margin: 16px 0;
`;


export default Login;