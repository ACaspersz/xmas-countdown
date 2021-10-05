import React, { useState, useEffect } from 'react';


const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseLeave = () => {
    setHidden(true);
   };
    
  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClick(true);
  };

  const onMouseUp = () => {
    setClick(false);
  };
  
  const onMouseMove = (e) => {
    setPosition({x: e.clientX, y: e.clientY});
  };    
   


  return (
    <div
      className={
        'cursor ' +
        (hidden ? 'cursor--hidden ' : ' ') + 
        (click ? 'cursor--clicked' : ' ')
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;