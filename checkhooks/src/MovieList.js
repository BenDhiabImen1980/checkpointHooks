import React from 'react'
import MovieCard from './MovieCard'

 function MovieList({films}) {
    return (
        <div className="listmovies">
            {films.map((film) => (
                <div>
                <MovieCard film={film}/>
                </div>
            ))}            
        </div>
    )
}
export default MovieList
