import React from 'react';
import logo from './rylie.jpg';
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Header = styled.h1`
  //Put some styles here
  color: white;
`;

const Page = styled.div`
  //Put some styles here
  background-color: black;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  //Put some styles here
`;

function App() {
  return (
    <Page className="App">
        <Content>
        <Header>Rylie Vey won the spelling bee in the 7th grade</Header>
        <Image src={logo} className="rylie-spelling" alt="logo" />
        </Content>
    </Page>
  );
}

export default App;
