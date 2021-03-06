import React, { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const SnowBall = () => {
    // 1.
  const { cursorType } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"snowball " + cursorType}
      ></div>
    </>
  );
};

export default SnowBall;