import React, { Component } from "react";
import { moviesData } from "../moviesData";
// import MovieList from "./MovieList";
// import MovieListWillWatch from "./MovieListWillWatch";


function MovieListWillWatch(props) {
  return (
      <div>
          Will watch <br />
      </div>
  );}

class MovieItem extends Component {
  state = {
    btnActive: false
  }
  activateBtn = () => {
    this.setState({
      btnActive: !this.state.btnActive
     });
     /// HOW TOM PASS NAMES TO APP STATE???
    }
  render() {
  const { vote_average, backdrop_path, title } = this.props.movieItem;
  return (
      <div>
        <div className="card" style={{width: '18rem'}}>
            <img 
            className="card-img-top" 
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
            alt={title}>
            </img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="row">
                    <div className="col-sm">
                        Rating:{vote_average} 
                    </div>
                    <div className="col-sm">
                        <button className={this.state.btnActive ? "btn btn-success" : "btn btn-secondary"} onClick={this.activateBtn}>Wiil watch</button>
                    </div>
                </div>  
            </div>
        </div>
      </div>
  );}}

function MovieList(props) {
  const passItem = props.moviesData.map((item) => {
      return <MovieItem movieItem={item} key={item.id}/>
  });
  return (
  <div>
      <div className="container-fluid">
          <div className="row">
              {passItem}  
          </div>
      </div>       
  </div>
  );}

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
            <MovieListWillWatch />
        </div>
      </div>
    </div>
    );}
}

export default App;
