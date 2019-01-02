import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ShowMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: ''
        }
    }

    componentDidMount() {
        //works
        const id = Number(this.props.match.params.id);
        if (this.props.movies.map) {
            return this.props.movies.map(movie => {
                if (movie.id === id) {
                    return this.setState({ movie })
                };
            })
        }
    }

    handleInput = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="">
                <h2>{this.state.movie.title ? this.state.movie.title : 'cats'}</h2>
                <p><a href="this.state.movie.url">Visit imdb page</a></p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="form-group">
                        <label>Movie title</label>
                        <input
                            type="text"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.movie.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input
                            type="text"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.movie.year}
                        />
                    </div>
                    <div className="form-group">
                        <label>Director</label>
                        <input
                            type="text"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.movie.director}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input
                            type="text"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.movie.rating}
                        />
                    </div>
                    <Link to="/">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={() => this.props.editMovie(this.state.movie.id, this.state.movie)}>
                            Edit Movie
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default ShowMovie;