import React, {useEffect, useState} from 'react';
import logo from './rylie.jpg';
import styled from "styled-components";
import {useSwipeable} from 'react-swipeable';
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

function tossConfetti() {
    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    });
}

function getLocalStorage() {
    return [localStorage.getItem("Visits"), localStorage.getItem("timeout")];
}

function setLocalStorage(visits: string, timeout: string) {
    localStorage.setItem("Visits", visits);
    localStorage.setItem("timeout", timeout);
}

function rylieVisitTimeout(setHeadline: any) {
    var storage = getLocalStorage();

    var today = new Date();
    var tomorrow = (today.getDate()+1).toString();
    if (Number(storage[0]) >= 3) {
        setHeadline(`Only a dumb slut like Rylie would visit this page ${storage[0]} 
        times today, maybe give it a break and stop thinking about yourself so much`);
        if(Number(storage[1]) <= Number(today)) {
            setLocalStorage("0", tomorrow);
        }
    }

    if (storage[0] === null) {
        setLocalStorage("1", tomorrow);
    } else {
        var temp = Number(storage[0]);
        setLocalStorage(String(++temp), tomorrow);
    }
}


function App() {
    const [headline, setHeadline] = useState("Rylie Vey won a spelling bee in the 7th grade");
    const [confettiClicks, setConfettiClicks] = useState(0);

    useEffect(() =>{
       tossConfetti();
       rylieVisitTimeout(setHeadline);
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('Testing swipe');
        }
    });

    return (
      <Page className="App" {...handlers} height={`${window.outerHeight}px`} onClick={() => {
          tossConfetti();
          setConfettiClicks(confettiClicks+1);
      }} >
          <Content>
             <Header>{headline}</Header>
             <Image src={logo} className="rylie-spelling" alt="logo" />
          </Content>
      </Page>
    );
}

export default App;
