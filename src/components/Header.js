import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/">
                <a className="navbar-brand">Navbar</a>
            </Link>
            <button className="btn btn-primary" onClick={props.toggleNewMovieForm}>Add New Movie</button>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <Link to="/id">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </Link>
            </form>
        </nav>
    )
}

export default Header;