import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [input, setInput] = useState('');


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Inserta el color..."
        value={input}
        onChange={handleInputChange}
      />
      <div className="container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} value={input} />
        ))}
      </div>
    </>
  );
}

export default MyForm;
