import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";


class App extends Component {
  constructor() {
    super();
    this.state = { moviesData, moviesWillWatch: []};
  }
  render() {
    return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <MovieList moviesData={this.state.moviesData}/>
        </div>
        <div className="col col-lg-2">
          <MovieListWillWatch propper="propper" />
        </div>
      </div>
    </div>
    );}
}

export default App;
