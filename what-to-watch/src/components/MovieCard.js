import React from 'react'

function Movies(props) {
    return (
        <div className="movie">
            <h3>Title: {props.Title}</h3>
            <h4>Description: {props.Plot}</h4>
            <h4>Release Date: {props.Released}</h4>
            <h4>Rating: {props.imdbRating}</h4>
        </div>
    )
}

export default Movies