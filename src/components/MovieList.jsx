import React from "react";
import MovieItem from "./MovieItem";

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
  

export default MovieList;
  