import React, { Component } from "react";
import Form from "../Reusable/Form";
import { getMovie } from "../services/fakeMovieService";
// import { login_Data } from "../data/LoginData";
import { dataArray, errorArray, schemaArray } from "../Reusable/data_Object";

class InputField extends Form {
  state = {
    data: dataArray(this.props.data),
    errors: errorArray(this.props.data),
    schema: schemaArray(this.props.data)
  };

  // This function will be called after render is finished in each of the re-render cycles.
  //  This means that you can be sure that the component and all its sub-components have properly rendered itself.
  // Due to the fact that this is the only function that is guaranteed to be called only once in each re-render cycle,
  //  it is recommended to use this function for any side-effect causing operations.
  //   Similarly to componentWillUpdateand componentWillReceiveProps
  //   this function is called with object-maps of previous props,
  //    state and context, even if no actual change happened to those values.
  //     Because of that developers are expected to manually check if given value
  //      changed and only then perform various update operations:
  // this.props.newProps has a different value
  // we can perform any operations that would
  // need the new value and/or cause side-effects
  // like AJAX calls with the new value - this.props.myProp
  // used this because in add movie page if i click on login, page did not update login data it was still showing add movie data
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: dataArray(this.props.data),
        errors: errorArray(this.props.data),
        schema: schemaArray(this.props.data)
      });
    }
  }
  componentDidMount() {
    const data = this.props.data;
    if (
      this.props.match.path.includes("new") ||
      this.props.match.path.includes("login")
    )
      return;
    //to map movie data in movie form
    const movieID = this.props.match.params._id;
    const movie = getMovie(movieID);
    data.map(each => {
      let index = Object.keys(movie).indexOf(each.dbString);
      let propertyarray = Object.keys(movie);
      let property = movie[propertyarray[index]];
      each.value = typeof property === "object" ? property.name : property;
    });
    this.setState({
      data: dataArray(data),
      errors: errorArray(data),
      schema: schemaArray(data)
    });
  }
  doSubmit = () => {};

  render() {
    const { data, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {data.map((field, index) => {
          if (field.fieldType.toLowerCase() == "input") {
            return this.renderInput(
              field.label,
              field.name,
              field.value || "",
              errors[index].value,
              field.type || "",
              field.placeHolder || "",
              field.warning || ""
            );
          }
          if (field.fieldType.toLowerCase() == "dropdown") {
            return this.renderDropDown(
              field.label,
              field.listItems,
              field.value
            );
          }
        })}
        <button className="btn btn-primary m-2" disabled={this.validate()}>
          {this.props.buttonName}
        </button>
      </form>
    );
  }
}
InputField.defaultProps = {
  buttonName: "Click me!!!"
};
export default InputField;
