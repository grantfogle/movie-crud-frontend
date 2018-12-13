import React, { Component } from 'react';

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

    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.movies);
        console.log(this.state.movie);
        return (
            <div className="">
                <h2>{this.state.movie.title ? this.state.movie.title : 'cats'}</h2>
                <p><a href="this.state.movie.url">Visit imdb page</a></p>
                <form>
                    <div className="form-group">
                        <label>Movie title</label>
                        <input type="text" value={this.state.movie.title} />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" value={this.state.movie.year} />
                    </div>
                    <div className="form-group">
                        <label>Director</label>
                        <input type="text" value={this.state.movie.director} />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input type="text" value={this.state.movie.rating} />
                    </div>
                    <button className="btn btn-primary" type="submit">Edit Movie</button>
                </form>
            </div>
        )
    }
}

export default ShowMovie;