import React from "react";

function MovieListWillWatch(props) {
    const renderList = props.list.map((item) => {
        return <li className="list-group-item" key={item}> {item} </li>
    });
    return (
        <div>
            <br />
            <ul className="list-group">
                <li className="list-group-item active">WILL WATCH {props.list.length}</li>
                {renderList}
            </ul>
        </div>
    );}
  

export default MovieListWillWatch;