import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}) { // functional 컴포넌트 = Dump 컴포넌트 (state가 없다.)
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;