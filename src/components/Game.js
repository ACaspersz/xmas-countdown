import React from 'react'
import useSound from 'use-sound';
import uh from '../assets/uh.wav';

const Game = () => {
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const elfs = document.querySelectorAll('.elf');
  let lastHole;
  let timeUp = false;
  let score = 0;

  const [play] = useSound(uh, {volume: 0.3});

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(300, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.innerHTML = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }

  function bonk(e) {
    // if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.innerHTML = score;
  }

  elfs.forEach(elf => elf.addEventListener('click', bonk));
  return (
    <div class="game-container">
      <div class="score-start">
        <h3>Score: <span class="score">0</span></h3>
    <button onClick={startGame}>Start!</button>
      </div>
      <div class="game">
        <div class="hole hole1">
          <div class="elf" onClick={play}></div>
        </div>
        <div class="hole hole2">
          <div class="elf" onClick={play}></div>
        </div>
    <div class="hole hole3">
      <div class="elf" onClick={play}></div>
    </div>
    <div class="hole hole4">
      <div class="elf" onClick={play}></div>
    </div>
    <div class="hole hole5">
      <div class="elf" onClick={play}></div>
    </div>
    <div class="hole hole6">
      <div class="elf" onClick={play}></div>
    </div>
  </div>
    </div>
  )
}

export default Game
