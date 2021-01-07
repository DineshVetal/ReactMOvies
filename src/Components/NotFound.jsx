import React, { Component } from "react";
import CW from "../Reusable/ColorTheWord";

class NotFound extends Component {
  state = {};

  render() {
    return (
      <h1
        style={{
          fontWeight: "bolder",
          fontFamily: "sans serif",
          color: "blue"
        }}
      >
        {/* This is my fiirst <CW word="React" color="red"></CW> Project, not only I
        learned about Front End but also about writing clean code and many
        programming techniques. check out my work in navigation bar{" "} */}
        <CW word="HELLO WORLD" color="red"></CW>
      </h1>
    );
  }
}

export default NotFound;
