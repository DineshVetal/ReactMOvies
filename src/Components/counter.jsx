import React from "react";

const Counter = ({ counterObj, handleAdd, handleSub, onDelete }) => {
  const styles = { fontSize: 30 };
  return (
    <div className="col-4">
      <span className=" badge m-2 badge-primary" style={styles}>
        {counterObj.value}
      </span>
      <button
        className="btn btn-secondary m-2"
        style={styles}
        onClick={() => handleAdd(counterObj)}
      >
        +
      </button>
      <button
        className="btn btn-secondary m-2"
        style={styles}
        disabled={counterObj.value <= 0}
        onClick={() => handleSub(counterObj)}
      >
        -
      </button>
      <button
        className="btn btn-danger m-2"
        style={styles}
        // console.log()
        onClick={() => onDelete(counterObj)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
