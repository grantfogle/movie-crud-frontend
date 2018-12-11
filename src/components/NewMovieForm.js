import React from 'react';

const NewMovieForm = () => {
    return (
        <form>
            <div class="form-group">
                <label>Movie Title</label>
                <input type="text" placeholder="movie name" />
            </div>
            <div class="form-group">
                <label>Director</label>
                <input type="text" placeholder="director's name" />
            </div>
            <div class="form-group">
                <label>Year Released</label>
                <input type="text" placeholder="movie name" />
            </div>
            <div class="form-group">
                <label>Rating</label>
                <input type="text" placeholder="rating value out of 10" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewMovieForm