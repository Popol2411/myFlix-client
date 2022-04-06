import React from 'react'
import { Link } from 'react-router-dom';

export function FavoriteMovies({ favoriteMovieList }) {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovieList.map((movie) => {
        return (
          <div key={movie._id}>
            <img src={movie.ImagePath} />
            <Link to={`/movies/${movie._id}`}>
              <h4>{movie.Title}</h4>
            </Link>
            <button variant="secondary" onClick={() => removeFav(movie._id)}>Remove from Favorites</button>
          </div>
        )
      })
      }
    </div >
  )
}