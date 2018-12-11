import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Movie = (props) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card" style={{ width: "12rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.director}</p>
                    <Link to={`/id/${props.id}`}>
                        <a href="#" className="btn btn-primary">Edit Movie</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;