import React from "react";
import { useRef } from "react";

function InputTests({ index, item, id, setChosenAnswer }) {
  const inputRef = useRef();
  const handleChoseVariant = () => {
    setChosenAnswer(inputRef.current.value);
  };
  return (
    <label key={index}>
      <input
        ref={inputRef}
        value={item}
        onChange={handleChoseVariant}
        name={id}
        type="radio"
      />
      {item}
    </label>
  );
}

export default InputTests;
