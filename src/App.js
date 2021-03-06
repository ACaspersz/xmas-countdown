import './App.scss';
import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import Mariah from './assets/mariah.mp3'
import Snowball from './components/Snowball/Snowball';
import Clock from './components/Clock';
import Game from './components/Game';
import SnowStorm from 'react-snowstorm';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './fonts/regular.otf';

function App() {
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
const [timerMinutes, setTimerMinutes] = useState();
const [timerSeconds, setTimerSeconds] = useState();
const [finishTimer, setFinishTimer] = useState(false);
// const { cursorChangeHandler } = useContext(MouseContext);
const width = window.innerWidth;
const height = window.innerHeight;

let interval;




const startTimer = () => {
  const countDownDate = new Date("2021-12-02 14:00:00").getTime();

  interval=setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days= Math.floor(distance/(24 * 60 * 60 * 1000));
    const hours= Math.floor(
      (distance % (24 * 60 * 60 * 1000))/(1000 * 60 * 60)
    );
    const minutes= Math.floor(
      (distance % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds= Math.floor((distance % (60 * 1000)) / 1000
    );

    if (distance<0) {
      // Stop timer
      clearInterval(interval.current);
      setFinishTimer(true);
    } else {
      // Update timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  });
};

useEffect(() => {
  startTimer();
})

  return (
    <div className="App">
    <Snowball />
    {finishTimer ? 
   <Confetti width={width} height={height} 
   />  : 
     <SnowStorm followMouse={false} flakesMax={160} excludeMobile={false}/>}
    {finishTimer ? <Sound 
      url={Mariah}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300}
      loop={true}
      volume={30}
    /> : ''}
    <Game />
    <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
    </div>
  );
}

export default App;
