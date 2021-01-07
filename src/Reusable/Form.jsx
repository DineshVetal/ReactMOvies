import React, { Component } from "react";
import Input from "./InputComp";
import Joi from "joi-browser";
import Dropdown1 from "../Components/Dropdown";
import { getMovies } from "../services/fakeMovieService";

class Form extends Component {
  state = {
    data: [],
    errors: [],
    schema: []
  };

  validate = () => {
    // if there is error in data then button is disabled
    return this.state.errors
      .filter(err => err.value !== "")
      .map(err => err.value).length !== 0
      ? true
      : false ||
        //to disable btn when form loads first time
        this.state.data.filter(err => err.value === "").map(err => err.value)
          .length !== 0
      ? true
      : false;
  };
  validateProperty = currentTarget => {
    let schema = this.state.schema.filter(
      item => item.label === currentTarget.name
    );
    let changingField = this.state.data.filter(
      item => item.label === currentTarget.name
    );

    let result = Joi.validate(changingField[0].value, schema[0].value, {
      abortEarly: false
    });
    return result;
  };

  handleSubmit = e => {
    // e.preventDefault();
    // console.log("Submitted");
    // this.doSubmit();
  };

  // doSubmiit = () => {
  // }

  handleChange = ({ currentTarget }) => {
    const data = [...this.state.data];
    const errors = [...this.state.errors];
    data.filter(item => item.label === currentTarget.name)[0].value =
      currentTarget.value;

    let errorField = errors.filter(item => item.label === currentTarget.name);

    let result = this.validateProperty(currentTarget);

    errorField[0].value =
      result.error !== null ? result.error.details[0].message : "";

    this.setState({ data, errors });
  };

  renderInput(label, name, defaultValue, errors, type, Info_for_ip, warning) {
    return (
      <Input
        name={label}
        warning={warning}
        onChange={this.handleChange}
        type={type}
        value={defaultValue}
        errors={errors}
        Info_for_ip={Info_for_ip}
      ></Input>
    );
  }
  renderDropDown(label, listItems, value) {
    return (
      <Dropdown1
        label={label}
        listItems={listItems}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default Form;
