import React, { Component } from 'react';
import Movie from './Movie';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getMovies = () => {
        if (this.props.movies.length > 0) {
            return this.props.movies.map(movie => {
                return (
                    <Movie title={movie.title} director={movie.director} id={movie.id} />
                )
            })
        }
    }

    render() {
        return (
            <div className="row">
                {this.getMovies()}
            </div>
        )
    }
}



export default Home;