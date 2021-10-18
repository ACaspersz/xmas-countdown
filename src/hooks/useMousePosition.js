import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    
  const mDown = () => {
    setClick(true);
  };

  const mUp = () => {
    setClick(false);
  };
  const mLeave = () => {
    setHidden(true);
  };

  const mEnter = () => {
    setHidden(false);
  };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener('mousedown', mDown);
    document.addEventListener('mouseup', mUp);
    document.addEventListener('mouseenter', mEnter);
    document.addEventListener('mouseleave', mLeave);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.addEventListener('mousedown', mDown);
      document.addEventListener('mouseup', mUp);
      document.addEventListener('mouseenter', mEnter);
      document.addEventListener('mouseleave', mLeave);
    };
  }, []);

  return mousePosition;
}