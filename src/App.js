import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppBody = styled.div`
background:  linear-gradient(to right, rgb(7, 7, 7), rgba(7, 7, 7, 0.932), rgba(7, 7, 7, 0.541),rgba(7, 7, 7, 0.322)),
  url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg")fixed;
  background-size: cover;
  padding: 11.8em;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppBody>
    <AppContainer>
      <AccountBox />
    </AppContainer>
    </AppBody>
  );
}

export default App;