import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";

class App extends Component {
  constructor() {
    super();
    this.state = { moviesData, moviesWillWatch: []};
  }
  render() {
    return (
    <div>
      <MovieList moviesData={this.state.moviesData}/>
    </div>
    );}
}

export default App;
