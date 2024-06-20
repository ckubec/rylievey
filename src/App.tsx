import React, {useEffect, useState} from 'react';
import logo from './rylie.jpg';
import logo_small from './rylie-mobile.jpg';
import {useSwipeable} from 'react-swipeable';
import confetti from "canvas-confetti";

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
  const storage = getLocalStorage();

  const today = new Date();
  const tomorrow = (today.getDate() + 1).toString();
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
    const [headline, setHeadline] = useState("Rylie Vey won a spelling bee in the 7th grade... And maybe she lost in the 8th grade but at least she redeemed herself at her 30th birthday party after spelling mistral correctly instead of menstrual");
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
      <div className={'min-h-lvh w-full bg-background'}>
        <div className={'p-4 flex justify-center container mx-auto'}>
          <header className={'w-full tablet:w-2/3 text-shadow font-title h-fit text-center text-6xl p-5 bg-title rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] text-white'}>
            Rylie Slay's Site
          </header>
        </div>
        <div className="mx-auto grid max-mobile:p-3 tablet:place-items-center place-content-center gap-4 container" {...handlers}
          onClick={() => {
            tossConfetti();
            setConfettiClicks(confettiClicks + 1);
          }}>
          <div className={'flex flex-col gap-4 '}>
            <img srcSet={`${logo_small} 480w, ${logo} 1000w`} src={logo} sizes="(max-width: 480px) 480px, (max-width: 1000px) 1000px, 2000px" className="w-full rounded shadow-[8px_8px_0px_rgba(0,0,0,1)]" alt="logo">

            </img>
            <div className={'font-body p-4 w-full text-black text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-body rounded text-2xl'}>
              {headline}
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
