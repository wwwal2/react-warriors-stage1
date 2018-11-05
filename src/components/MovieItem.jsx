import React, { Component } from "react";

class MovieItem extends Component {
  state = {
    btnActive: false
  }
  activateBtn = () => {
    this.setState({
      btnActive: !this.state.btnActive
     });
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

  export default MovieItem;
