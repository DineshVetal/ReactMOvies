import React from "react";
import propTypes from "prop-types";

const Input = ({
  name,
  value,
  type = "text",
  onChange,
  errors,
  warning,
  Info_for_ip
}) => {
  return (
    <div className="from-group col-3">
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id="asasas"
        type={type}
        placeholder={Info_for_ip}
        className="form-control"
      />
      <small id="text" className="form-text text-muted">
        {/*optional*/}
        {warning}
      </small>
      {errors && <div className="alert alert-warning">{errors}</div>}
    </div>
  );
};

Input.propTypes = {
  name: propTypes.string.isRequired
};

export default Input;
