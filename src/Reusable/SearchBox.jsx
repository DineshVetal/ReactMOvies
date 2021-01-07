import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3 col-4"
      placeholder="Search...  "
      value={value}
      // console.log()
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
