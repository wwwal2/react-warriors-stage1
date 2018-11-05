import React, { Component } from "react";
import MovieItem from "./MovieItem";
import MovieListWillWatch from "./MovieListWillWatch";


class MovieList extends Component {
    state = {
        listWatch: []
    }
    onWillWatch = (title) => {
        // FILTER IS NOT WORKING YET!!!
        if (this.state.listWatch.indexOf(title) === -1) {
                this.setState({listWatch: [...this.state.listWatch, title]})
            } else {
                // this.setState({listWatch: filter})
            }
            

        console.log(this.state.listWatch)
    }
    render() {
    const passItem = this.props.moviesData.map((item) => {
        return <MovieItem movieItem={item} key={item.id} onWillWatch={this.onWillWatch}/>
    });
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-lg-10">
                    <div className="row justify-content-md-center">
                    {passItem}  
                    </div> 
                </div>
                <div className="col col-lg-2">
                    <MovieListWillWatch list={this.state.listWatch} />
                </div>
            </div>
        </div>       
    </div>
    );}}
  

export default MovieList;
  