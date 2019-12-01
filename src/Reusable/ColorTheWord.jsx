import React from "react";

//colorizeWord
const CW = ({ word = "Lorem", color = "red" }) => {
  return <span style={{ color: color }}>{word}</span>;
};

export default CW;
