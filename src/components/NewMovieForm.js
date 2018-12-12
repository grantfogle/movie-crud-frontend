import React from 'react';

const NewMovieForm = (props) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submitMovie();
        }}>
            <div class="form-group">
                <label>Movie Title</label>
                <input type="text"
                    name="title"
                    placeholder="movie name"
                    onChange={(e) => props.handleInput(e)}
                />
            </div>
            <div class="form-group">
                <label>Director</label>
                <input type="text"
                    name="director"
                    placeholder="director's name"
                    onChange={(e) => props.handleInput(e)}
                />
            </div>
            <div class="form-group">
                <label>Year Released</label>
                <input type="text"
                    name="year"
                    placeholder="year released"
                    onChange={(e) => props.handleInput(e)}
                />
            </div>
            <div class="form-group">
                <label>Rating</label>
                <input type="text"
                    name="rating"
                    placeholder="rating value out of 10"
                    onChange={(e) => props.handleInput(e)}
                />
            </div>
            <div class="form-group">
                <label>IMDB Url</label>
                <input type="text"
                    name="url"
                    placeholder="https://IMDBURL.com/"
                    onChange={(e) => props.handleInput(e)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewMovieForm