import React from 'react';
import logo from './rylie.jpg';
import styled from "styled-components";
import confetti from "canvas-confetti";

interface PageProps {
    height: string;
}

const Image = styled.img`
  width: 100%;
`;

const Header = styled.h1`
  color: white;
  font-family: "Comic Sans MS";
  padding-bottom: .5em;
`;

const Page = styled.div<PageProps>`
  height: ${props => props.height};
  width: 100%;
  display: flex;
  align-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding-bottom: 10em;
`;

function App() {
  return (
    <Page className="App" height={`${window.outerHeight}px`} onClick={() => {
        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 }
        });
    }}>
        <Content>
            <Header>Rylie Vey won a spelling bee in the 7th grade</Header>
            <Image src={logo} className="rylie-spelling" alt="logo" />
        </Content>
    </Page>
  );
}

export default App;
