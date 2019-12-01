import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    let navObject = {
      //path:label
      counters: "Counters",
      calc: "Calculator",
      movies: "Movies",
      login: "Login"
    };
    return (
      <>
        {/* <nav className="navbar navbar-light bg-light col-4 m-2">
          <div className="navbar-nav bd-navbar-nav flex-column"> */}
        <nav className="navbar-nav-scroll">
          <div className="navbar-nav bd-navbar-nav bg-light flex-row">
            {Object.keys(navObject).map(navItem => (
              <NavLink className="nav-item nav-link m-2" to={`/${navItem}`}>
                {navObject[navItem]}
              </NavLink>
            ))}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
