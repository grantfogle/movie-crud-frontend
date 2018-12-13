import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/">
                <a className="navbar-brand">GFM: Grant's Favorite Movies</a>
            </Link>

            <form onSubmit={(e) => e.preventDefault()} className="form-inline">
                <button className="btn btn-primary" onClick={props.toggleNewMovieForm}>Add New Movie</button>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
}

export default Header;