import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Movie = (props) => {
    const { title, director, rating, id } = props.movie;

    return (
        <div className="col-md-4 col-sm-6">
            <div className="card" style={{ height: "18rem", width: "12rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{director}</p>
                    <p className="card-text">{rating}/10</p>
                </div>
                <Link to={`/id/${id}`}>
                    <a href="#" className="btn btn-primary">Edit Movie</a>
                </Link>
                <button onClick={() => props.deleteMovie(id)} className="btn btn-primary">Delete</button>
            </div>
        </div>

    )
}

export default Movie;