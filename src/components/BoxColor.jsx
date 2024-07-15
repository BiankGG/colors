import React, { useEffect, useRef } from 'react';

function BoxColor({ color, value }) {
  const squareRef = useRef(null);

  useEffect(() => {
    if (squareRef.current) {
      squareRef.current.style.borderColor = color;
      if (color === value) {
        squareRef.current.style.backgroundColor = color;
      } else {
        squareRef.current.style.backgroundColor = 'transparent' 
      }
    }
  }, [color, value]);

  return (
    <div className="box" ref={squareRef}>
      <p>{color === value ? `Soy el color ${color}` : `No soy el color ${value}`}</p>
    </div>
  );
}

export default BoxColor;
