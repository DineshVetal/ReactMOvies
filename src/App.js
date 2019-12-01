import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import generate from "@babel/generator";
import { Route, Switch, Redirect } from "react-router-dom";
import Counters from "./Components/counters";
import Navbar from "./Components/navbar";
import NotFound from "./Components/NotFound";
import Calculator from "./Components/calculator";
import Movies from "./Components/Movies";
import MovieInfo from "./Components/MovieInfo";
import { login_Data } from "./data/LoginData";
import InputField from "./Components/InputField";
import "./css/vidly.css";
import { AddMovieData } from "./data/AddMovieData";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="navbar col-10">
            <Navbar></Navbar>
          </div>
          <div className="col-2">
            <a
              className="App-link"
              href="http://localhost:3000/not-found"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>
        </div>
        <Switch>
          <Route path="/counters" component={Counters}></Route>
          <Route path="/calc" component={Calculator}></Route>

          <Route
            exact
            path="/login"
            render={props => (
              <InputField {...props} buttonName="Login" data={login_Data} />
            )}
          ></Route>
          <Route
            exact
            path="/movies/new"
            render={props => (
              <InputField
                {...props}
                buttonName="Add Movie"
                data={AddMovieData}
              />
            )}
          ></Route>
          <Route
            exact
            path="/movies/:_id"
            render={props => (
              <InputField
                {...props}
                buttonName="Edit Movie"
                data={AddMovieData}
              />
            )}
          ></Route>
          {/* <Route path="/movies/:_id" component={MovieInfo}></Route> */}
          <Route path="/movies" component={Movies}></Route>
          <Route path="/not-found" component={NotFound} />
          {/* <Route
            path="/counters"
            render={props => (
              <Counters
                {...props}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counterArray={this.state.counterArray}
              />
            )}
          /> */}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export function oldApp() {
  return (
    <div className="oldApp">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.js
        </a>
      </header>
    </div>
  );
}
