import React, { Component } from "react";


class MovieInfo extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>{this.props.match.params._id}</h1>
          <button
          onClick={() => {
            this.props.history.push("/movies");
          }}
        >
          Save
        </button>
      </>
    );
  }
}
// console.log()
export default MovieInfo;
