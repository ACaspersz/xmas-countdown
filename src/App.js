import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Game from './components/Game';
import Cursor from './components/Cursor';

function App() {
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
const [timerMinutes, setTimerMinutes] = useState();
const [timerSeconds, setTimerSeconds] = useState();

let interval;

const startTimer = () => {
  const countDownDate = new Date("2021-12-02 16:00:00").getTime();

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
    <Cursor />
    <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
    <Game />
    </div>
  );
}

export default App;
