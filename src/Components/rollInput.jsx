import React, { Component } from "react";

const RollInput = ({ onChange, index, roll, rolls, that }) => {
  return (
    <input
      type="text"
      value={rolls[index]}
      //create ref for each roll in this object so that we can point to any ref
      ref={input => (that[`roll-${index}`] = input)}
      onChange={onChange}
      key={index}
      id={index}
    />
  );
};

export default RollInput;
