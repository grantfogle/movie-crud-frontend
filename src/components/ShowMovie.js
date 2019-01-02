import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ShowMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            director: '',
            year: '',
            rating: ''
        }
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.setState({ id })
        if (this.props.movies.map) {
            return this.props.movies.map(movie => {
                if (movie.id === id) {
                    return (
                        this.setState({ title: movie.title }),
                        this.setState({ director: movie.director }),
                        this.setState({ year: movie.year }),
                        this.setState({ rating: movie.rating })
                    )
                };
            })
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log(name, value)
        console.log(this.state)
    }

    render() {
        return (
            <div className="">
                <h2>{this.state.title ? this.state.title : 'cats'}</h2>
                <p><a href="this.state.movie.url">Visit imdb page</a></p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="form-group">
                        <label>Movie title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input
                            type="text"
                            name="year"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.year}
                        />
                    </div>
                    <div className="form-group">
                        <label>Director</label>
                        <input
                            type="text"
                            name="director"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.director}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input
                            type="text"
                            name="rating"
                            onChange={(e) => this.handleInput(e)}
                            defaultValue={this.state.rating}
                        />
                    </div>
                    <Link to="/">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={() => this.props.editMovie(this.state.id, this.state)}>
                            Edit Movie
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default ShowMovie;