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
                    <Movie deleteMovie={this.props.deleteMovie} movie={movie} />
                )
            })
        }
    }

    render() {
        return (
            <div className="showMovies">
                <div className="row">
                    {this.getMovies()}
                </div>
            </div>
        )
    }
}



export default Home;