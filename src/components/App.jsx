import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  addMovieToWillWatch = movie => {
    this.setState(prevState => ({
      moviesWillWatch: [...prevState.moviesWillWatch, movie]
    }));
  };

  removeMovieFromWillWatch = movie => {
    this.setState(prevState => ({
      moviesWillWatch: prevState.moviesWillWatch.filter(
        item => item.id !== movie.id
      )
    }));
  };

  render() {
    const { movies, moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <MovieList
              movies={movies}
              addMovieToWillWatch={this.addMovieToWillWatch}
              removeMovieFromWillWatch={this.removeMovieFromWillWatch}
            />
          </div>
          <div className="col-3">
            <MovieListWillWatch moviesWillWatch={moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
