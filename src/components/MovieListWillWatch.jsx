import React from "react";

function MovieListWillWatch(props) {
    const renderList = props.list.map((item) => {
        return <li className="list-group-item"> {item} </li>
    });
    return (
        <div>
            <br />
            <ul className="list-group">
                <li className="list-group-item active">Will watch</li>
                {renderList}
            </ul>
        </div>
    );}
  

export default MovieListWillWatch;