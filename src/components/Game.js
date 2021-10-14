import React, { useState } from "react";
import GameTimer from "./GameTimer";
import useSound from "use-sound";
import uh from "../assets/uh.wav";

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const Game = () => {
  const holes = document.querySelectorAll(".hole");
  let lastHole;
  let timeUp = false;
  const [score, setScore] = useState(0);
  const [showPopUp, setShowPopUp] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showEndGame, setShowEndGame] = useState(false)
  const [play] = useSound(uh, { volume: 0.3 });
  const timeOfGame = 10; 

  const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  };

  const peep = () => {
    const time = randomTime(300, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up");
      if (!timeUp) peep();
    }, time);
  };

  const Pop = () => <div id="showMe" className="popUp animated bounce">Click here to throw some snowballs!</div>

  const EndGame = () => 
  <div class="end">
    <div className="text animated bounce">
      <span >Game Over!</span>
      <p>You got a score of {score}.</p>
    </div>
  </div>


  const startGame = () => {
    timeUp = false;
    setScore(0);
    peep();
    setShowPopUp(false);
    setShowCountdown(true);
    setShowEndGame(false);
    // eslint-disable-next-line no-sequences
    setTimeout(() => (timeUp = true, setShowPopUp(true), setShowCountdown(false), setShowEndGame(true)), (timeOfGame * 1000));
  };

  const bonk = (e) => {
    setScore(score + 1);
    play();
    // need to work out how to drop the elf down on bonk!
    // hole.classList.remove("up");
  };

  return (
    <div className="game-container">
    {showEndGame ? <EndGame /> : null}
      <div className="score-start">
        <h3>
          Score: <span className="score">{score}</span>
        </h3>
        <button onClick={startGame}>
        <span className="front">Start!</span></button>
        {showPopUp && showEndGame === false ? <Pop/> : null}
        {showCountdown ? <GameTimer seconds={timeOfGame}/> : null }
      </div>
      <div className="game">
        <div className="hole hole1">
          <div className="elf" onClick={bonk}></div>
        </div>
        <div className="hole hole2">
          <div className="elf" onClick={bonk}></div>
        </div>
        <div className="hole hole3">
          <div className="elf" onClick={bonk}></div>
        </div>
        <div className="hole hole4">
          <div className="elf" onClick={bonk}></div>
        </div>
        <div className="hole hole5">
          <div className="elf" onClick={bonk}></div>
        </div>
        <div className="hole hole6">
          <div className="elf" onClick={bonk}></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
