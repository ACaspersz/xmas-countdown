import React from 'react'
import Thom from '../assets/thom.png';
import Chris from '../assets/chris-e.png';
import Annabelle from '../assets/annabelle.png';
import Elf from '../assets/elf.png';

const Elves = () => {
  const peopleArray = [
    Thom, Annabelle, Chris, Elf 
  ];
  const randomImage = peopleArray[Math.floor(Math.random() * peopleArray.length)];

  const randomElf = () => {
    <div style={{background: URL(randomImage)}}></div>
  }
  console.log(randomElf);
  return (
    {randomElf}
  )
}

export default Elves

