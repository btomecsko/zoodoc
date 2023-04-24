import styled from "styled-components";
import { 
  ProfileBodyWrapper, 
  ProfileTextBody, 
  ProfileWrapper 
} from "../styles/Profile";

const Home = () => {

    return (
        <Wrapper>
            <Logo>Welcome to ZooDoc</Logo>
            <ProfileWrapper>
              <ProfileBodyWrapper>
                <ProfileTextBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas. Tristique senectus et netus et malesuada fames ac turpis egestas. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum.
                </ProfileTextBody>
              </ProfileBodyWrapper>
            </ProfileWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 700px;
  margin: 40px auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #5D3FD3;
  border-color: #d3a625;
  margin: 8px 0 50px;
  text-align: center;
`;

export default Home;