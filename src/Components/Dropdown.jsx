import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import propTypes from "prop-types";

const Dropdown1 = ({ label, listItems, onChange, value }) => {
  return (
    // <DropdownButton
    //   id="dropdown-basic-button"
    //   title={label}
    //   className="dropd m-3"
    // >
    //   {listItems.map((item, index) => (
    //     <Dropdown.Item
    //       key={index}
    //       onChange={onChange}
    //       value={value}
    //       // href={`#/action-${index}`}
    //     >
    //       {item}
    //     </Dropdown.Item>
    //   ))}
    // </DropdownButton>
    <div className="ui dropdown m-3">
      <label className="ui dropdown m-3" htmlFor={label}>
        {label}
      </label>
      <select onChange={onChange} name={label} value={value}>
        {listItems.map(item => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

Dropdown1.propTypes = {
  label: propTypes.string.isRequired,
  listItems: propTypes.array.isRequired
};

export default Dropdown1;
