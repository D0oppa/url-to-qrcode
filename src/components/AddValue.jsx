// components/AddValue.js
import React, { useState } from "react";

export const AddValue = ({ newValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    newValue(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Ingresa una URL..."
      />
      <button onClick={handleClick}>Generar QR</button>
    </div>
  );
};
