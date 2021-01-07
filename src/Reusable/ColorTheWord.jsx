import React from "react";

//colorizeWordd
const CW = ({ word = "Lorem", color = "red" }) => {
  return <span style={{ color: color }}>{word}</span>;
};

export default CW;
